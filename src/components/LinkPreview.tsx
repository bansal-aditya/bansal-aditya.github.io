"use client";

import { useState, useRef, useEffect, useCallback } from "react";

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
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);

  const updatePos = useCallback(() => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    setPos({
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    });
  }, []);

  useEffect(() => {
    if (!show) return;
    updatePos();
    window.addEventListener("scroll", updatePos, true);
    return () => window.removeEventListener("scroll", updatePos, true);
  }, [show, updatePos]);

  return (
    <>
      <a
        ref={linkRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-link hover:underline ${className}`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {text}
      </a>
      {show && (
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
        </span>
      )}
    </>
  );
}
