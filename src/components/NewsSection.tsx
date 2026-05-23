import { news } from "@/data/news";

export default function NewsSection() {
  return (
    <section id="news" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">News & Media</h2>
      <div className="text-[13.5px] leading-[1.8] max-h-[320px] overflow-y-auto pr-2">
        {news.map((item, i) => (
          <div key={i} className="flex gap-3.5 py-[5px]">
            <span className="text-secondary flex-shrink-0 min-w-[90px]">
              {item.date}
            </span>
            <div className="flex-1">
              <span>
                {item.link && item.linkText ? (
                  <>
                    {item.description.split(item.linkText)[0]}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:underline"
                    >
                      {item.linkText}
                    </a>
                    {item.description.split(item.linkText)[1]}
                  </>
                ) : (
                  item.description
                )}
              </span>
              {item.thumbnail && item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1.5 mb-1"
                >
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-[200px] h-auto rounded-md opacity-90 hover:opacity-100 transition-opacity"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
