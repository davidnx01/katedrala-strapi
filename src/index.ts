import type { Core } from '@strapi/strapi';
import { labelFor, buildLayoutRows } from './admin-ui-labels';

interface SchemaLike {
  attributes: Record<string, { type?: string; description?: string } | undefined>;
  [key: string]: unknown;
}

interface ConfigurationField {
  edit?: { label?: string; description?: string; placeholder?: string; visible?: boolean; editable?: boolean };
  list?: { label?: string; mainField?: string; searchable?: boolean; sortable?: boolean };
}

interface Configuration {
  settings: unknown;
  metadatas: Record<string, ConfigurationField>;
  layouts: { list: string[]; edit: { name: string; size: number }[][] };
}

interface ConfigurationService {
  findConfiguration(schema: SchemaLike): Promise<Configuration>;
  updateConfiguration(schema: SchemaLike, config: Configuration): Promise<unknown>;
}

/**
 * Overwrites the Content Manager "edit view" for one content type/component
 * with Slovak field labels + a denser 2-column grid, built on top of
 * Strapi's own computed defaults (visibility, sortability, field order).
 *
 * Purely cosmetic: attribute names (the API contract in web/types) are
 * untouched. Runs on every boot, so admin-side "Configure the view" tweaks
 * made by hand in the UI get reset — this file is the source of truth.
 */
async function slovakizeConfiguration(uid: string, schema: SchemaLike, service: ConfigurationService) {
  const current = await service.findConfiguration(schema);

  const metadatas: Record<string, ConfigurationField> = {};
  for (const [name, existing] of Object.entries(current.metadatas)) {
    const attr = schema.attributes[name];
    const label = labelFor(uid, name);
    metadatas[name] = {
      edit: {
        ...existing.edit,
        label,
        description: attr?.description ?? existing.edit?.description ?? '',
      },
      list: {
        ...existing.list,
        label,
      },
    };
  }

  await service.updateConfiguration(schema, {
    settings: current.settings,
    metadatas,
    layouts: {
      ...current.layouts,
      edit: buildLayoutRows(schema.attributes, current.layouts.edit),
    },
  });
}

/**
 * Content types that must be publicly readable per cms/CLAUDE.md's documented
 * Public-role policy. Strapi only registers new actions on boot — it never
 * grants them — so a freshly added content type (or one where the manual
 * admin checkbox was missed) silently 403s until someone remembers to flip
 * it in Settings → Users & Permissions → Roles → Public. This makes that
 * step idempotent instead of a one-time manual click that's easy to forget.
 * Deliberately find/findOne only — never create/update/delete here.
 */
const PUBLIC_READABLE_UIDS = [
  'api::church.church',
  'api::announcement.announcement',
  'api::concert.concert',
  'api::event.event',
  'api::page.page',
  'api::homepage.homepage',
  'api::parish-page.parish-page',
  'api::visit-page.visit-page',
  'api::contact-page.contact-page',
  'api::global.global',
  'api::history-page.history-page',
  'api::music-page.music-page',
  'api::navigation.navigation',
];

async function ensurePublicReadPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
    populate: ['permissions'],
  });
  if (!publicRole) return;

  const existingActions = new Set(
    (publicRole.permissions as { action: string }[]).map((p) => p.action),
  );

  const singleTypeActions = new Set([
    'api::homepage.homepage',
    'api::parish-page.parish-page',
    'api::visit-page.visit-page',
    'api::contact-page.contact-page',
    'api::global.global',
    'api::history-page.history-page',
    'api::music-page.music-page',
    'api::navigation.navigation',
  ]);

  const toCreate: string[] = [];
  for (const uid of PUBLIC_READABLE_UIDS) {
    const actions = singleTypeActions.has(uid) ? [`${uid}.find`] : [`${uid}.find`, `${uid}.findOne`];
    for (const action of actions) {
      if (!existingActions.has(action)) toCreate.push(action);
    }
  }

  if (toCreate.length === 0) return;

  await Promise.all(
    toCreate.map((action) =>
      strapi.db.query('plugin::users-permissions.permission').create({
        data: { action, role: publicRole.id },
      }),
    ),
  );
  strapi.log.info(`Public rola: doplnené chýbajúce read oprávnenia: ${toCreate.join(', ')}`);
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensurePublicReadPermissions(strapi);

    const contentTypesService = strapi
      .plugin('content-manager')
      .service<ConfigurationService>('content-types');
    const componentsService = strapi.plugin('content-manager').service<ConfigurationService>('components');

    const contentTypes = strapi.contentTypes as unknown as Record<string, SchemaLike>;
    const contentTypeUids = Object.keys(contentTypes).filter((uid) => uid.startsWith('api::'));
    for (const uid of contentTypeUids) {
      await slovakizeConfiguration(uid, contentTypes[uid], contentTypesService);
    }

    const components = strapi.components as unknown as Record<string, SchemaLike>;
    const componentUids = Object.keys(components).filter(
      (uid) => uid.startsWith('shared.') || uid.startsWith('layout.') || uid.startsWith('sections.'),
    );
    for (const uid of componentUids) {
      await slovakizeConfiguration(uid, components[uid], componentsService);
    }

    strapi.log.info(
      `Admin UI: nastavené slovenské popisky pre ${contentTypeUids.length} content types a ${componentUids.length} komponentov`,
    );
  },
};
