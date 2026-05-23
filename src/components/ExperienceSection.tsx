"use client";

import { experience } from "@/data/experience";
import { useState } from "react";

export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">Experience</h2>
      <div className="relative ml-[110px]">
        {/* Continuous vertical line */}
        <div className="absolute left-[4px] top-[18px] bottom-[24px] w-px bg-divider" />

        {experience.map((item, i) => (
          <div
            key={i}
            className="relative flex items-start text-[13.5px] cursor-default"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Date — positioned to the left */}
            <span className="absolute right-full pr-4 text-secondary whitespace-nowrap pt-2.5">
              {item.dateRange}
            </span>

            {/* Timeline dot */}
            <div className={`w-[9px] h-[9px] rounded-full mt-[14px] flex-shrink-0 transition-colors duration-200 border-[1.5px] z-10 ${
              hoveredIndex === i ? "border-link bg-link/20" : "border-secondary/50 bg-background"
            }`} />

            {/* Content */}
            <div
              className={`flex-1 min-w-0 ml-4 pb-5 rounded-lg px-3 py-2 transition-colors duration-200 ${
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
