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
      <h2 className="text-lg font-bold mb-4.5 text-center">Publications</h2>
      <div>
        {publications.map((pub, i) => (
          <div
            key={i}
            className={`py-3.5 ${i < publications.length - 1 ? "border-b border-divider/50" : ""}`}
          >
            <div className="text-[14.5px] font-semibold text-foreground">
              {pub.title}
            </div>
            <div className="text-[12.5px] text-[#666] mt-1.5">
              {highlightAuthor(pub.authors)}
            </div>
            <div className="text-[12.5px] text-secondary mt-0.5">
              {pub.venue}
              {pub.citations && pub.citations > 0 && (
                <span className="text-muted"> · Cited by {pub.citations}</span>
              )}
            </div>
            <div className="flex gap-2.5 mt-1.5">
              {pub.links.paper && (
                <a
                  href={pub.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] text-link hover:underline"
                >
                  [paper]
                </a>
              )}
              {pub.links.code && (
                <a
                  href={pub.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] text-link hover:underline"
                >
                  [code]
                </a>
              )}
              {pub.links.video && (
                <a
                  href={pub.links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] text-link hover:underline"
                >
                  [video]
                </a>
              )}
              {pub.links.slides && (
                <a
                  href={pub.links.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] text-link hover:underline"
                >
                  [slides]
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
