"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Hero() {
  return (
    <BackgroundGradientAnimation id="home">
      <BlurFade delay={0.1} duration={0.3} direction="up" inView={true} className="pt-20">
        <div className="w-full flex-1 pt-24 sm:pt-48 pb-12">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h1 className="z-50 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The ONLY society that teaches you to crack coding interviews
            </h1>
          </div>
        </div>
      </BlurFade>
    </BackgroundGradientAnimation>
  );
}
