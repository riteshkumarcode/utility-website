import { homeContent } from "@/content/home";

export function Ticker() {
  const { ticker } = homeContent;

  return (
    <div
      aria-hidden="true"
      className="bg-ink text-on-dark overflow-hidden py-4 border-y border-line-dark select-none"
    >
      <div className="flex w-max animate-ticker font-mono text-sm md:text-base uppercase tracking-[0.14em]">
        {/* Track 1 */}
        <div className="flex items-center gap-8 pr-8 shrink-0">
          {ticker.map((item) => (
            <span key={item} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-signal font-bold">/</span>
            </span>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless continuous loop) */}
        <div className="flex items-center gap-8 pr-8 shrink-0">
          {ticker.map((item) => (
            <span key={`dup-${item}`} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-signal font-bold">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
