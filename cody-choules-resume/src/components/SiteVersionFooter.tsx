import {formatPushedAt, formatSiteVersion, siteVersion} from '../siteVersion';

export default function SiteVersionFooter() {
  const version = formatSiteVersion(siteVersion.revision);
  const pushedAt = formatPushedAt(siteVersion.pushedAt);

  return (
    <footer
      className="w-full max-w-6xl mt-6 pb-2 text-center text-[11px] text-[#52525b] tabular-nums"
      aria-label="Site version"
    >
      v{version} · pushed {pushedAt}
    </footer>
  );
}
