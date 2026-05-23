import { teaching } from "@/data/teaching";

export default function TeachingSection() {
  return (
    <section id="teaching" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">Teaching & Mentorship</h2>
      <div>
        {teaching.map((item, i) => (
          <div
            key={i}
            className={`py-3 ${i < teaching.length - 1 ? "border-b border-divider/50" : ""}`}
          >
            <div className="flex gap-3.5 text-[13.5px]">
              <span className="text-secondary min-w-[110px] flex-shrink-0">
                {item.dateRange}
              </span>
              <div>
                <strong className="text-foreground">{item.role}</strong>
                <span className="text-[#666]"> · {item.organization}</span>
              </div>
            </div>
            <div className="ml-[124px] mt-1 text-[12.5px] text-muted leading-[1.6]">
              {item.description}
              {item.link && item.linkText && (
                <>
                  {" "}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:underline"
                  >
                    [{item.linkText}]
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
