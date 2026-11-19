"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";
import { PreviewProvider, PreviewLink } from "./LinkPreview";

const cmuPreview = {
  title: "School of Computer Science",
  domain: "cs.cmu.edu",
  description: "Carnegie Mellon University — School of Computer Science",
  favicon: "https://www.google.com/s2/favicons?domain=cs.cmu.edu&sz=64",
};

const ntuPreview = {
  title: "NTU Computing",
  domain: "ntu.edu.sg/computing",
  description: "School of Computer Science & Engineering, Singapore",
  favicon: "https://www.google.com/s2/favicons?domain=ntu.edu.sg&sz=64",
};

const geminiPreview = {
  title: "Gemini Agent Platform",
  domain: "cloud.google.com",
  description: "Gemini at Work 2026: Introducing the Gemini agent",
  favicon: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=64",
};

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-7 pt-12 pb-9 md:flex-row md:items-center">
      <div className="flex-shrink-0 w-[160px] h-[160px] rounded-full overflow-hidden">
        <Image
          src={profile.image}
          alt={profile.name}
          width={160}
          height={160}
          className="object-cover w-full h-full scale-125 object-[center_30%]"
          priority
        />
      </div>
      <div className="flex-1 min-w-0">
        <h1 className="text-[26px] font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <div className="mt-3">
          <PreviewProvider>
            <p className="text-[13.5px] leading-[1.75] text-muted">
              Hello! I am an ML Engineer at Google where I am working on the{" "}
              <PreviewLink
                href="https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026"
                text="Gemini Agent Platform"
                preview={geminiPreview}
              />
              . I graduated from{" "}
              <PreviewLink
                href="https://www.cs.cmu.edu/"
                text="Carnegie Mellon University's"
                preview={cmuPreview}
              />
              {" "}School of Computer Science with a Master&apos;s and with a B.Eng. in Computer Science with a specialization in AI from{" "}
              <PreviewLink
                href="https://www.ntu.edu.sg/computing"
                text="Nanyang Technological University"
                preview={ntuPreview}
              />
              , Singapore. My interests include Explainable AI, Neural Network Compression, and Applied Machine Learning.
            </p>
            <SocialLinks />
          </PreviewProvider>
        </div>
      </div>
    </section>
  );
}
