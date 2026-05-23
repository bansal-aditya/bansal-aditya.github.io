"use client";

import { teaching } from "@/data/teaching";
import { PreviewProvider, PreviewLink } from "./LinkPreview";

export default function TeachingSection() {
  return (
    <section id="teaching" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">Teaching & Mentorship</h2>
      <PreviewProvider>
        <div>
          {teaching.map((item, i) => (
            <div key={i} className="flex gap-3.5 py-2 text-[13.5px]">
              <span className="text-secondary min-w-[110px] flex-shrink-0">
                {item.dateRange}
              </span>
              <div>
                <strong className="text-foreground">{item.role}</strong>{" "}
                <span className="text-[#666]">· {item.organization}</span>
                {item.link && item.linkText && (
                  <>
                    {" "}
                    {item.preview ? (
                      <PreviewLink
                        href={item.link}
                        text={`${item.linkText} ↗`}
                        preview={item.preview}
                        className="text-[12px]"
                      />
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:underline text-[12px]"
                      >
                        {item.linkText} ↗
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </PreviewProvider>
    </section>
  );
}
