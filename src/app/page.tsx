import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Section from "@/components/Section";
import WorkIndex from "@/components/WorkIndex";
import ExperienceSection from "@/components/ExperienceSection";
import RecognitionSection from "@/components/RecognitionSection";
import StackSection from "@/components/StackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <CursorDot />
      <Nav />
      <Hero />
      <Marquee />
      <Section id="work" title="Selected work">
        <WorkIndex />
      </Section>
      <Section id="experience" title="Experience">
        <ExperienceSection />
      </Section>
      <Section id="recognition" title="Recognition">
        <RecognitionSection />
      </Section>
      <Section id="stack" title="Stack & study">
        <StackSection />
      </Section>
      <Section id="contact" title="Contact">
        <ContactSection />
      </Section>
      <Footer />
    </main>
  );
}
