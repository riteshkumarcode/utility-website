import React from "react";
import { homeContent } from "@/content/home";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function MeterPanel() {
  const { meterPanel } = homeContent.hero;

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Dark Meter Panel */}
      <div className="bg-ink text-on-dark rounded-[6px] p-6 sm:p-7 shadow-lg">
        {/* Top Header */}
        <div className="flex justify-between items-center font-mono text-[11px] uppercase tracking-[0.12em] text-[#8B8F86]">
          <span>{meterPanel.siteName}</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-blink" />
            <span>{meterPanel.readingStatus}</span>
          </span>
        </div>

        {/* Rolling Odometer Digits */}
        <div
          aria-hidden="true"
          className="font-mono font-medium text-4xl sm:text-5xl md:text-[54px] mt-4 flex gap-1 items-baseline select-none"
        >
          <span className="bg-[#1E221E] px-2 py-1 rounded-[3px]">0</span>
          <span className="bg-[#1E221E] px-2 py-1 rounded-[3px]">4</span>
          <span className="bg-[#1E221E] px-2 py-1 rounded-[3px]">8</span>

          {/* Slow column 3 (220s) */}
          <span className="bg-[#1E221E] px-2 py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top">
            <span className="flex flex-col [animation:roll_220s_steps(10)_infinite]">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </span>
          </span>

          {/* Medium column 2 (22s) */}
          <span className="bg-[#1E221E] px-2 py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top">
            <span className="flex flex-col [animation:roll_22s_steps(10)_infinite]">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </span>
          </span>

          {/* Fast column 1 (2.2s) in Signal Orange */}
          <span className="bg-signal text-ink px-2 py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top font-bold">
            <span className="flex flex-col [animation:roll_2.2s_steps(10)_infinite]">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </span>
          </span>

          <span className="text-base text-[#8B8F86] ml-2 font-mono">kWh</span>
        </div>

        {/* 4 Utility Progress Bars */}
        <div className="border-t border-line-dark mt-5 pt-4 space-y-3 text-sm">
          {meterPanel.bars.map((bar, idx) => (
            <div key={bar.name} className="flex items-center gap-3">
              <span className="w-20 text-[#C9CBC4] text-xs sm:text-sm shrink-0">
                {bar.name}
              </span>
              <div className="flex-1 h-1 bg-line-dark overflow-hidden">
                <div
                  className={`h-full animate-fillbar ${
                    bar.color === "signal" ? "bg-signal" : "bg-[#C9CBC4]"
                  }`}
                  style={
                    {
                      "--w": `${bar.percent}%`,
                      animationDelay: `${idx * 0.4}s`,
                    } as React.CSSProperties
                  }
                />
              </div>
              <span
                className={`font-mono text-xs w-16 text-right shrink-0 ${
                  bar.color === "signal" ? "text-on-dark" : "text-[#8B8F86]"
                }`}
              >
                {bar.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Commercial Meter Photo */}
      <PhotoSlot
        src={meterPanel.photoSrc}
        alt="Commercial electricity meter in UK plant room"
        brief={meterPanel.photoBrief}
        className="h-48 w-full border border-line shadow-sm"
      />
    </div>
  );
}
