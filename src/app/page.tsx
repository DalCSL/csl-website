import CTA from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/layouts/footer";
import { Services } from "@/components/sections/services";
import Team from "@/components/sections/team-info";
import { Achievement } from "@/components/sections/achievement";
import Testimonials from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Discord } from "@/components/sections/discord";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Achievement />
      <Discord />
      <CTA />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
} 