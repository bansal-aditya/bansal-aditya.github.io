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

const PreviewContext = createContext<{
  active: PreviewData | null;
  setActive: (p: PreviewData | null) => void;
  isMobile: boolean;
}>({ active: null, setActive: () => {}, isMobile: false });

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<PreviewData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check on mount
  if (typeof window !== "undefined" && !isMobile && window.innerWidth < 768) {
    // Will be set properly via PreviewLink
  }

  return (
    <PreviewContext.Provider value={{ active, setActive, isMobile }}>
      <div className="flex gap-5 items-start">
        <div className="flex-1 min-w-0">{children}</div>
        <div className="hidden md:block w-[150px] flex-shrink-0">
          <div className="sticky top-20">
            <div
              className={`transition-all duration-200 ${
                active
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 pointer-events-none"
              }`}
            >
              {active && (
                <div className="bg-white border border-divider rounded-xl p-3 shadow-sm">
                  <img
                    src={active.favicon}
                    alt=""
                    className="w-5 h-5 rounded mb-1.5"
                  />
                  <div className="text-[11px] font-semibold text-foreground leading-tight">
                    {active.title}
                  </div>
                  <div className="text-[9px] text-secondary mt-0.5">
                    {active.domain}
                  </div>
                  <div className="text-[9px] text-muted mt-1 leading-[1.4]">
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

export function PreviewLink({
  href,
  text,
  preview,
  className = "",
  icon,
}: {
  href: string;
  text: string;
  preview: PreviewData;
  className?: string;
  icon?: React.ReactNode;
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
      {text}{icon}
    </a>
  );
}
