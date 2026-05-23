"use client";

import { createContext, useContext, useState } from "react";

interface PreviewData {
  title: string;
  domain: string;
  description: string;
  favicon: string;
}

export interface LinkWithPreview {
  href: string;
  text: string;
  preview: PreviewData;
}

// Context for sharing hover state within a preview group
const PreviewContext = createContext<{
  active: PreviewData | null;
  setActive: (p: PreviewData | null) => void;
}>({ active: null, setActive: () => {} });

// Wrap a section with this to get a shared preview panel on the right
export function PreviewProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<PreviewData | null>(null);

  return (
    <PreviewContext.Provider value={{ active, setActive }}>
      <div className="flex gap-6 items-start">
        <div className="flex-1 min-w-0">{children}</div>
        <div className="hidden md:block w-[180px] flex-shrink-0">
          <div className="sticky top-20">
            <div
              className={`transition-all duration-200 ${
                active
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 pointer-events-none"
              }`}
            >
              {active && (
                <div className="bg-white border border-divider rounded-xl p-3.5 shadow-sm">
                  <img
                    src={active.favicon}
                    alt=""
                    className="w-6 h-6 rounded mb-2"
                  />
                  <div className="text-[12px] font-semibold text-foreground">
                    {active.title}
                  </div>
                  <div className="text-[10px] text-secondary mt-0.5">
                    {active.domain}
                  </div>
                  <div className="text-[10px] text-muted mt-1.5 leading-[1.4]">
                    {active.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PreviewContext.Provider>
  );
}

// Individual link with preview hover
export function PreviewLink({
  href,
  text,
  preview,
  className = "",
}: {
  href: string;
  text: string;
  preview: PreviewData;
  className?: string;
}) {
  const { setActive } = useContext(PreviewContext);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-link hover:underline ${className}`}
      onMouseEnter={() => setActive(preview)}
      onMouseLeave={() => setActive(null)}
    >
      {text}
    </a>
  );
}
