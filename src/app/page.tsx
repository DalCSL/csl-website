import CTA from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import JoinUs from "@/components/layouts/footer";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team-info";
import Discord from "@/components/discord";
import Testimonials from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Discord />
      <CTA />
      <Team />
      {/* <Testimonials /> */}
      <JoinUs />
    </div>
  );
} 