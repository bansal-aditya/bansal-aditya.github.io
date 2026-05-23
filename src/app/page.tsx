import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TeachingSection from "@/components/TeachingSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-content px-8">
        <AnimateOnScroll delay={100}>
          <Hero />
        </AnimateOnScroll>
        <AnimateOnScroll delay={250}>
          <NewsSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <PublicationsSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0}>
          <ExperienceSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0}>
          <TeachingSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0}>
          <CommunitySection />
        </AnimateOnScroll>
        <Footer />
      </main>
    </>
  );
}
