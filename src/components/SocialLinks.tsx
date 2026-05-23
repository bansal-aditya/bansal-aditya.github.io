import { socialLinks } from "@/data/social";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12.5px] text-link hover:underline"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
