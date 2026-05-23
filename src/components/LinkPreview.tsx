"use client";

import { useState, useRef } from "react";
import { createPortal } from "react-dom";

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
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleEnter = () => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    setPos({
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    });
  };

  const handleLeave = () => {
    setPos(null);
  };

  return (
    <>
      <a
        ref={linkRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-link hover:underline ${className}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {text}
      </a>
      {pos &&
        typeof document !== "undefined" &&
        createPortal(
          <span
            className="fixed z-[100] pointer-events-none"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -100%)",
            }}
          >
            <span className="block bg-white border border-divider rounded-xl p-3 shadow-lg w-[240px] animate-fade-in">
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
          </span>,
          document.body
        )}
    </>
  );
}
