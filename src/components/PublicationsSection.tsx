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
    <section id="publications" className="border-t border-divider py-7 scroll-mt-8">
      <h2 className="text-lg font-bold mb-4.5">Publications</h2>
      <PreviewProvider>
        <div>
          {publications.map((pub, i) => (
            <div
              key={i}
              className={`flex gap-3.5 sm:gap-4.5 items-start py-3.5 ${
                i < publications.length - 1 ? "border-b border-divider/50" : ""
              }`}
            >
              {/* Thumbnail */}
              {pub.image ? (
                <div className="flex-shrink-0 w-[95px] sm:w-[135px] h-[68px] sm:h-[86px] rounded-md overflow-hidden bg-white border border-divider/70 flex items-center justify-center p-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  {pub.links.paper ? (
                    <a
                      href={pub.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-85 transition-opacity"
                      title={pub.title}
                    >
                      <img
                        src={pub.image}
                        alt={pub.title}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  ) : (
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              ) : (
                <div className="hidden sm:flex flex-shrink-0 w-[135px] h-[86px] rounded-md bg-[#f6f5ee] border border-divider/60 items-center justify-center text-secondary/50">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </div>
              )}

              {/* Publication Details */}
              <div className="flex-1 min-w-0">
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
                <div className="text-[12px] text-[#666] mt-1">
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
                        Video
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-0.5 -mt-0.5"><path d="M5 11L11 5M11 5H6M11 5V10" /></svg>
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
                        Code
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-0.5 -mt-0.5"><path d="M5 11L11 5M11 5H6M11 5V10" /></svg>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </PreviewProvider>
    </section>
  );
}
