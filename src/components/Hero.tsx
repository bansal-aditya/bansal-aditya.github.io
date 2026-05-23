import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-7 pt-12 pb-9 md:flex-row md:items-center">
      <div className="flex-shrink-0 w-[160px] h-[160px] rounded-[40px] overflow-hidden">
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
        <p className="mt-1 text-[15px] text-[#444]">
          {profile.title}
        </p>
        <p className="mt-3.5 text-[13.5px] leading-[1.75] text-muted max-w-[520px]">
          {profile.bio}
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}
