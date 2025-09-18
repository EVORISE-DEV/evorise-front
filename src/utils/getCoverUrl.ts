// src/utils/getCoverUrl.ts
export function getCoverUrl(coverPath?: string | null) {
  if (!coverPath) return '/assets/placeholder.webp';

  const clean = coverPath.replace(/\\/g, '/').replace(/^\/+/, '');

  
  const isProd = process.env.NODE_ENV === 'production';
  const CDN = process.env.REACT_APP_CDN_EVENTS_BASE;         // https://cdn.evoriseapi.com/events
  const DEV = process.env.REACT_APP_APP_URL_EVENTS || 'http://localhost:3333/uploads/events';

  const base = isProd && CDN ? CDN : DEV;
  return `${base}/${clean}`;
}
