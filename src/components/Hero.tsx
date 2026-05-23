import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-12 pb-9">
      <Image
        src={profile.image}
        alt={profile.name}
        width={140}
        height={140}
        className="rounded-full object-cover"
        priority
      />
      <h1 className="mt-5 text-[26px] font-bold tracking-tight text-foreground">
        {profile.name}
      </h1>
      <p className="mt-1 text-[15px] text-[#444]">
        {profile.title}
      </p>
      <p className="mt-3.5 text-[13.5px] leading-[1.75] text-muted max-w-[520px]">
        {profile.bio}
      </p>
      <SocialLinks />
    </section>
  );
}
