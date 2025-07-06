"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Companies from "../companies";

export default function Hero() {
  return (
    <BackgroundGradientAnimation id="home">
      <BlurFade delay={0.1} duration={0.3} direction="up" inView={true} className="pt-12">
        <div className="w-full flex-1 pt-24 sm:pt-48 pb-12">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h1 className="relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
              The ONLY Society for Acing Coding Interviews
            </h1>

            <p className="text-md relative z-40 max-w-3xl mx-auto mt-10 font-medium text-slate-600 sm:text-xl">
              Learn how to crack coding interviews and get your dream job
            </p>

            {/* Actions */}
            <div className="relative z-10 flex justify-center gap-4">
              <div className="relative z-10 flex justify-center gap-4">
                <Button variant="default" size="lg" asChild className="mt-10 rounded-2xl py-6 px-10">
                  <Link href="#contact" className="flex items-center gap-2">
                    Get Started
                  </Link>
                </Button>

                <Button variant="ghost" size="lg" asChild className="mt-10 rounded-2xl py-6 px-8">
                  <Link href="#about" className="flex items-center gap-2 hover:bg-transparent hover:text-foreground">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Companies */}
            <div className="relative z-10 flex flex-col items-center gap-5 mt-32">
              <h3 className="text-2xl font-semibold text-slate-700">
                Our members have gotten offers and interviews from these companies
              </h3>
              <Companies />
            </div>
          </div>
        </div>
      </BlurFade>
    </BackgroundGradientAnimation>
  );
}
