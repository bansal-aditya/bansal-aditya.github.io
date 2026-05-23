import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

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
      <div>
        <h1 className="text-[26px] font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-3 text-[13.5px] leading-[1.75] text-muted max-w-[520px]">
          Hello! I am a Machine Learning Engineer at Adobe where I am building Enterprise AI Agents. I graduated from Carnegie Mellon University&apos;s{" "}
          <a href="https://www.lti.cs.cmu.edu/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Language Technologies Institute</a>
          {" "}with a Master&apos;s and a B.Eng. in Computer Science (AI specialization) from{" "}
          <a href="https://www.ntu.edu.sg/computing" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Nanyang Technological University</a>
          , Singapore. My interests include Explainable AI, Neural Network Compression, and Applied Machine Learning.
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}
