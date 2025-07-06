import Navbar from "@/components/layouts/navbar";
import CTA from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import JoinUs from "@/components/join-us";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team-info";
import Discord from "@/components/discord";
import Testimonials from "@/components/sections/testimonials";
import Content from "@/components/contents";

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