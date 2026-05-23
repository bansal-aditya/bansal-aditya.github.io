import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TeachingSection from "@/components/TeachingSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-content px-8">
        <Hero />
        <NewsSection />
        <PublicationsSection />
        <ExperienceSection />
        <TeachingSection />
        <CommunitySection />
        <Footer />
      </main>
    </>
  );
}
