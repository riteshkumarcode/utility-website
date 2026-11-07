import { homeContent } from "@/content/home";

export function Ticker() {
  const { ticker } = homeContent;

  return (
    <div
      aria-hidden="true"
      className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden py-4 border-y border-emerald-500/40 select-none shadow-sm"
    >
      <div className="flex w-max animate-ticker font-mono text-sm md:text-base font-bold uppercase tracking-[0.14em]">
        {/* Track 1 */}
        <div className="flex items-center gap-8 pr-8 shrink-0">
          {ticker.map((item) => (
            <span key={item} className="flex items-center gap-8">
              <span className="drop-shadow-xs">{item}</span>
              <span className="text-cyan-200 font-extrabold text-base">/</span>
            </span>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless continuous loop) */}
        <div className="flex items-center gap-8 pr-8 shrink-0">
          {ticker.map((item) => (
            <span key={`dup-${item}`} className="flex items-center gap-8">
              <span className="drop-shadow-xs">{item}</span>
              <span className="text-cyan-200 font-extrabold text-base">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
