import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-divider py-7">
      <h2 className="text-lg font-bold mb-4.5 text-center">Experience</h2>
      <div>
        {experience.map((item, i) => (
          <div key={i} className="flex gap-3.5 py-2 text-[13.5px]">
            <span className="text-secondary min-w-[110px] flex-shrink-0">
              {item.dateRange}
            </span>
            <div>
              <strong className="text-foreground">{item.company}</strong>{" "}
              <span className="text-[#666]">· {item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
