import siteVersionData from '../site-version.json';

export type SiteVersionData = {
  revision: number;
  pushedAt: string;
};

export type SiteVersionChannel = 'production' | 'dev';

/**
 * Display form: revision 11 → production "0.11", dev "1.11".
 * Dev is always one major step ahead of production (0.x → 1.x), same revision suffix.
 */
export function formatSiteVersion(
  revision: number,
  channel: SiteVersionChannel = 'production',
): string {
  const major = channel === 'dev' ? 1 : 0;
  return `${major}.${revision}`;
}

/** Human-readable local date/time for the push timestamp. */
export function formatPushedAt(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export const siteVersion = siteVersionData as SiteVersionData;
