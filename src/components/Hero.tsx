"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";
import { PreviewProvider, PreviewLink } from "./LinkPreview";

const ltiPreview = {
  title: "Language Technologies Institute",
  domain: "lti.cs.cmu.edu",
  description: "School of Computer Science, Carnegie Mellon University",
  favicon: "https://www.google.com/s2/favicons?domain=lti.cs.cmu.edu&sz=64",
};

const ntuPreview = {
  title: "NTU Computing",
  domain: "ntu.edu.sg/computing",
  description: "School of Computer Science & Engineering, Singapore",
  favicon: "https://www.google.com/s2/favicons?domain=ntu.edu.sg&sz=64",
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
        <h1 className="text-[26px] tracking-tight text-foreground">
          <span className="font-bold">Aditya</span>{" "}
          <span className="font-light">Bansal</span>
        </h1>
        <div className="mt-3">
          <PreviewProvider>
            <p className="text-[13.5px] leading-[1.75] text-muted">
              Hello! I am a Machine Learning Engineer at Adobe where I am building Enterprise AI Agents. I graduated from Carnegie Mellon University&apos;s{" "}
              <PreviewLink
                href="https://www.lti.cs.cmu.edu/"
                text="Language Technologies Institute"
                preview={ltiPreview}
              />
              {" "}with a Master&apos;s and a B.Eng. in Computer Science with a specialization in AI from{" "}
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
