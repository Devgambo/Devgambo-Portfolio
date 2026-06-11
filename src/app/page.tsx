import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import WorkIndex from "@/components/WorkIndex";
import ExperienceSection from "@/components/ExperienceSection";
import GitaQuote from "@/components/GitaQuote";
import RecognitionSection from "@/components/RecognitionSection";
import StackSection from "@/components/StackSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Mascot from "@/components/Mascot";
import LilyChat from "@/components/LilyChat";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Mascot />
      <LilyChat />
      <Hero />
      <Section id="work" title="Selected work">
        <WorkIndex />
      </Section>
      <Section id="experience" title="Experience">
        <ExperienceSection />
      </Section>
      <GitaQuote />
      <Section id="recognition" title="Recognition">
        <RecognitionSection />
      </Section>
      <Section id="stack" title="Stack & study">
        <StackSection />
      </Section>
      <ResumeSection />
      <Section id="contact" title="Contact">
        <ContactSection />
      </Section>
      <Footer />
    </main>
  );
}
