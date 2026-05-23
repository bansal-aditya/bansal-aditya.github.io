"use client";

import { experience } from "@/data/experience";
import { useState } from "react";

export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">Experience</h2>
      <div>
        {experience.map((item, i) => (
          <div
            key={i}
            className="flex gap-3.5 py-2.5 text-[13.5px] rounded-lg px-2 -mx-2 transition-colors duration-200 hover:bg-[#f5f4ee] cursor-default"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="text-secondary min-w-[110px] flex-shrink-0 pt-0.5">
              {item.dateRange}
            </span>
            {item.logo && (
              <img
                src={item.logo}
                alt={item.company}
                className="w-5 h-5 object-contain flex-shrink-0 mt-0.5 rounded-sm"
              />
            )}
            <div className="flex-1 min-w-0">
              <div>
                <strong className="text-foreground">{item.company}</strong>{" "}
                <span className="text-[#666]">· {item.role}</span>
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
