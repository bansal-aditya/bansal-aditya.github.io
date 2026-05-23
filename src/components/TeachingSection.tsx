"use client";

import { teaching } from "@/data/teaching";
import { PreviewProvider, PreviewLink } from "./LinkPreview";

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-0.5 -mt-0.5">
    <path d="M5 11L11 5M11 5H6M11 5V10" />
  </svg>
);

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
                        text={item.linkText}
                        preview={item.preview}
                        className="text-[12px]"
                        icon={<ArrowIcon />}
                      />
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:underline text-[12px]"
                      >
                        {item.linkText}
                        <ArrowIcon />
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
