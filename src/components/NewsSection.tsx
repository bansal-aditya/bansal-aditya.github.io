"use client";

import { news } from "@/data/news";
import { PreviewProvider, PreviewLink } from "./LinkPreview";

export default function NewsSection() {
  return (
    <section id="news" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">News</h2>
      <PreviewProvider>
        <div className="text-[13.5px] leading-[1.8] max-h-[280px] overflow-y-auto pr-2">
          {news.map((item, i) => (
            <div key={i} className="flex gap-3.5 py-[5px]">
              <span className="text-secondary flex-shrink-0 min-w-[90px]">
                {item.date}
              </span>
              <span>
                {item.link && item.linkText ? (
                  <>
                    {item.description.split(item.linkText)[0]}
                    {item.preview ? (
                      <PreviewLink
                        href={item.link}
                        text={item.linkText}
                        preview={item.preview}
                      />
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:underline"
                      >
                        {item.linkText}
                      </a>
                    )}
                    {item.description.split(item.linkText)[1]}
                  </>
                ) : (
                  item.description
                )}
              </span>
            </div>
          ))}
        </div>
      </PreviewProvider>
    </section>
  );
}
