import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      // Comma-separated list in FRONTEND_URLS, e.g. "http://localhost:3000,https://katedralasvmartina.sk"
      // Never leave this as '*' in production — it would let any origin read the API with the response's CORS headers.
      origin: env.array('FRONTEND_URLS', ['http://localhost:3000']),
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
