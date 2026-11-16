import type { Core } from '@strapi/strapi';

const allowedMediaTypes = [
  'image/*',
  'video/*',
  'audio/*',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.*',
  'text/plain',
  'text/csv',
];

const deniedExecutableTypes = [
  'application/vnd.microsoft.portable-executable',
  'application/x-msdownload',
  'application/x-msdos-program',
  'application/x-executable',
  'application/x-dosexec',
  'application/x-sh',
  'text/x-shellscript',
  'application/x-mach-binary',
];

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'users-permissions': {
    config: {
      jwtManagement: 'refresh',
      sessions: {
        httpOnly: true,
      },
    },
  },
  upload: {
    config: {
      // Default `true` runs every upload (including the original file, not
      // just the responsive thumbnails) through sharp before storing it,
      // which strips all EXIF/IPTC/XMP metadata (author, copyright, keywords).
      // Off, so the original file Strapi stores keeps the metadata exactly
      // as uploaded; responsive `formats.*` derivatives are still generated
      // normally and remain metadata-free (expected, they're thumbnails).
      sizeOptimization: false,
      // Uploaded files get a content hash in their name (`foo_8bf7529f45.mp4`),
      // so a given URL never changes content — browsers may cache it for a
      // year instead of revalidating on every visit (default is max-age=0).
      // Matters most for the homepage hero videos.
      providerOptions: {
        localServer: {
          maxage: 365 * 24 * 60 * 60 * 1000,
          immutable: true,
        },
      },
      security: {
        allowedTypes: allowedMediaTypes,
        deniedTypes: deniedExecutableTypes,
      },
    },
  },
});

export default config;
