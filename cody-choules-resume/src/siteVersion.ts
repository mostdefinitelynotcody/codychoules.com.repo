import siteVersionData from '../site-version.json';

export type SiteVersionData = {
  revision: number;
  pushedAt: string;
};

/** Display form: revision 1 → "0.1", 10 → "0.10", 11 → "0.11". */
export function formatSiteVersion(revision: number): string {
  return `0.${revision}`;
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
