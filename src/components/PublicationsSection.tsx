import { publications } from "@/data/publications";

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
      <div>
        {publications.map((pub, i) => (
          <div
            key={i}
            className={`py-2.5 ${i < publications.length - 1 ? "border-b border-divider/50" : ""}`}
          >
            <div className="text-[13.5px] font-semibold text-foreground leading-snug">
              {pub.links.paper ? (
                <a
                  href={pub.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-link transition-colors inline-flex items-baseline gap-1.5"
                >
                  {pub.title}
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block flex-shrink-0 opacity-40 translate-y-[1px]">
                    <path d="M6 3h7v7M13 3L6 10" />
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
    </section>
  );
}
