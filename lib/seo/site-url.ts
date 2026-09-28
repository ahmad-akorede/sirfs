/** Public origin. Set NEXT_PUBLIC_SITE_URL before a production deploy. */
export function siteOrigin() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const origin = configured && configured.length > 0 ? configured : "http://localhost:3000";
  return origin.replace(/\/$/, "");
}

/** Absolute URL with the trailing slash this site exports. */
export function absoluteUrl(path: string) {
  const origin = siteOrigin();
  if (path === "" || path === "/") return `${origin}/`;
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  const withSlash = withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
  return `${origin}${withSlash}`;
}
