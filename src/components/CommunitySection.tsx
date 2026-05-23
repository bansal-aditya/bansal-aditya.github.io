import { community } from "@/data/community";

export default function CommunitySection() {
  return (
    <section id="community" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5">Leadership & Community</h2>
      <div className="max-h-[280px] overflow-y-auto pr-2">
        {community.map((item, i) => (
          <div key={i} className="flex gap-3.5 py-2 text-[13.5px]">
            <span className="text-secondary min-w-[110px] flex-shrink-0">
              {item.dateRange}
            </span>
            <div>
              <strong className="text-foreground">{item.role}</strong>{" "}
              <span className="text-[#666]">· {item.organization}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
