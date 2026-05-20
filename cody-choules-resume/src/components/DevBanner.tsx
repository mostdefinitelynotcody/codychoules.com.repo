import {Link} from 'react-router-dom';

export default function DevBanner() {
  return (
    <div className="w-full max-w-6xl rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-[12px] sm:text-[13px] text-amber-100/90 leading-snug">
        <span className="font-bold uppercase tracking-wide text-amber-300">Development preview</span>
        {' — '}
        Work in progress. Not the public resume.
      </p>
      <Link
        to="/"
        className="text-[11px] font-bold uppercase tracking-widest text-amber-200 hover:text-amber-50 transition-colors shrink-0"
      >
        Back to resume
      </Link>
    </div>
  );
}
