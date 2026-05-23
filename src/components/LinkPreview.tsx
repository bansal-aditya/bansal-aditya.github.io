"use client";

import { useState } from "react";

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

// No-op provider for backwards compat — just renders children
export function PreviewProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

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
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-link hover:underline ${className}`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {text}
      </a>
      <span
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none transition-all duration-200 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        <span className="block bg-white border border-divider rounded-xl p-3 shadow-lg w-[240px]">
          <span className="flex gap-2.5 items-start">
            <img
              src={preview.favicon}
              alt=""
              className="w-5 h-5 rounded flex-shrink-0 mt-0.5"
            />
            <span className="block min-w-0">
              <span className="block text-[11.5px] font-semibold text-foreground leading-tight">
                {preview.title}
              </span>
              <span className="block text-[10px] text-secondary mt-0.5">
                {preview.domain}
              </span>
              <span className="block text-[10px] text-muted mt-1 leading-[1.4]">
                {preview.description}
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  );
}
