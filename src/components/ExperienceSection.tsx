"use client";

import { experience } from "@/data/experience";
import { useState } from "react";

export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">Experience</h2>
      <div className="relative">
        {experience.map((item, i) => (
          <div
            key={i}
            className="flex gap-3.5 text-[13.5px] cursor-default group"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Date column */}
            <span className="text-secondary min-w-[110px] flex-shrink-0 text-right pr-3 pt-3">
              {item.dateRange}
            </span>

            {/* Timeline visual */}
            <div className="flex flex-col items-center flex-shrink-0 pt-1">
              <div className={`w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-200 ${
                hoveredIndex === i ? "bg-link" : "bg-secondary/40"
              }`} />
              {i < experience.length - 1 && (
                <div className="w-px flex-1 bg-divider" />
              )}
            </div>

            {/* Content */}
            <div
              className={`flex-1 min-w-0 pb-6 pl-2 rounded-lg px-3 py-2.5 -mx-1 transition-colors duration-200 ${
                hoveredIndex === i ? "bg-[#f5f4ee]" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-5 h-5 object-contain rounded-sm flex-shrink-0"
                  />
                )}
                <div>
                  <strong className="text-foreground">{item.company}</strong>{" "}
                  <span className="text-[#666]">· {item.role}</span>
                </div>
              </div>
              {item.description && (
                <div
                  className={`text-[12px] text-muted leading-[1.5] overflow-hidden transition-all duration-300 ease-in-out ${
                    hoveredIndex === i ? "max-h-[60px] opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
