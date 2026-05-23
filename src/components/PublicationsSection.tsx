"use client";

import { publications } from "@/data/publications";
import { PreviewProvider, PreviewLink } from "./LinkPreview";

function highlightAuthor(authors: string): React.ReactNode {
  const parts = authors.split(/(A Bansal)/);
  return parts.map((part, i) =>
    part === "A Bansal" ? (
      <strong key={i}>A Bansal</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function PublicationsSection() {
  return (
    <section id="publications" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">Publications</h2>
      <PreviewProvider>
      <div>
        {publications.map((pub, i) => (
          <div
            key={i}
            className={`py-2.5 ${i < publications.length - 1 ? "border-b border-divider/50" : ""}`}
          >
            <div className="text-[13.5px] font-semibold text-foreground leading-snug">
              {pub.links.paper && pub.preview ? (
                <span className="inline-flex items-baseline gap-1.5">
                  <PreviewLink
                    href={pub.links.paper}
                    text={pub.title}
                    preview={pub.preview}
                    className="text-foreground hover:text-link transition-colors font-semibold"
                  />
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="inline-block flex-shrink-0 opacity-40 translate-y-[1px]">
                    <path d="M9 2H4.5A1.5 1.5 0 003 3.5v9A1.5 1.5 0 004.5 14h7a1.5 1.5 0 001.5-1.5V8" />
                    <path d="M5 11l8-8M10 2h4v4" />
                  </svg>
                </span>
              ) : pub.links.paper ? (
                <a
                  href={pub.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-link transition-colors inline-flex items-baseline gap-1.5"
                >
                  {pub.title}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="inline-block flex-shrink-0 opacity-40 translate-y-[1px]">
                    <path d="M9 2H4.5A1.5 1.5 0 003 3.5v9A1.5 1.5 0 004.5 14h7a1.5 1.5 0 001.5-1.5V8" />
                    <path d="M5 11l8-8M10 2h4v4" />
                  </svg>
                </a>
              ) : (
                pub.title
              )}
            </div>
            <div className="text-[12px] text-[#666] mt-0.5">
              {highlightAuthor(pub.authors)}
              <span className="text-secondary"> · {pub.venue}</span>
              {pub.citations && pub.citations > 0 && (
                <span className="text-secondary"> · Cited by {pub.citations}</span>
              )}
              {pub.links.video && (
                <>
                  {" · "}
                  <a
                    href={pub.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:underline"
                  >
                    Video ↗
                  </a>
                </>
              )}
              {pub.links.code && (
                <>
                  {" · "}
                  <a
                    href={pub.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:underline"
                  >
                    Code ↗
                  </a>
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
