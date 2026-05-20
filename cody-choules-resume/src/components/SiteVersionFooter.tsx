import {formatPushedAt, formatSiteVersion, siteVersion} from '../siteVersion';

type SiteVersionFooterProps = {
  /** Dev preview (/dev) shows 1.{revision}; production (/) shows 0.{revision}. */
  isDev?: boolean;
};

export default function SiteVersionFooter({isDev = false}: SiteVersionFooterProps) {
  const version = formatSiteVersion(siteVersion.revision, isDev ? 'dev' : 'production');
  const pushedAt = formatPushedAt(siteVersion.pushedAt);

  return (
    <footer
      className="w-full max-w-6xl mt-6 pb-2 text-center text-[11px] text-[#52525b] tabular-nums"
      aria-label={isDev ? 'Dev site version' : 'Site version'}
    >
      v{version} · pushed {pushedAt}
    </footer>
  );
}
