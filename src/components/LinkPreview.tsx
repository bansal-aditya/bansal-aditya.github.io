"use client";

import { useState } from "react";

interface PreviewData {
  title: string;
  domain: string;
  description: string;
  favicon: string;
}

interface LinkWithPreview {
  href: string;
  text: string;
  preview: PreviewData;
}

export default function LinkPreviewGroup({
  children,
  links,
}: {
  children: (renderLink: (id: string) => React.ReactNode) => React.ReactNode;
  links: Record<string, LinkWithPreview>;
}) {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  const renderLink = (id: string) => {
    const link = links[id];
    if (!link) return null;
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link hover:underline"
        onMouseEnter={() => setActivePreview(id)}
        onMouseLeave={() => setActivePreview(null)}
      >
        {link.text}
      </a>
    );
  };

  const active = activePreview ? links[activePreview] : null;

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">{children(renderLink)}</div>
      <div className="hidden md:block w-[180px] flex-shrink-0 relative">
        {Object.entries(links).map(([id, link]) => (
          <div
            key={id}
            className={`absolute top-0 transition-all duration-200 ${
              activePreview === id
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2 pointer-events-none"
            }`}
          >
            <div className="bg-white border border-divider rounded-xl p-3.5 shadow-sm">
              <img
                src={link.preview.favicon}
                alt=""
                className="w-6 h-6 rounded mb-2"
              />
              <div className="text-[12px] font-semibold text-foreground">
                {link.preview.title}
              </div>
              <div className="text-[10px] text-secondary mt-0.5">
                {link.preview.domain}
              </div>
              <div className="text-[10px] text-muted mt-1.5 leading-[1.4]">
                {link.preview.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
