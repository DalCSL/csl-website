import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Hero from "@/components/sections/hero";
import JoinUs from "@/components/JoinUs";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Discord from "@/components/Discord";
import Testimonials from "@/components/sections/testimonials";
import Content from "@/components/Content";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <Services />
      <Discord />
      <CTA />
      <Team />
      <Testimonials />
      <JoinUs />
    </div>
  );
} 