"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Companies } from "@/components/sections/companies";

export function Hero() {
  return (
    <BackgroundGradientAnimation id="home">
      <BlurFade delay={0.1} duration={0.4} direction="up" inView={true} className="pt-24 md:pt-6">
        <div className="w-full flex-1 pt-24 sm:pt-48 pb-12">

          {/* Hero Text */}
          <div className="max-w-sm sm:max-w-4xl mx-auto text-center flex flex-col gap-10">
            <h1 className="relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
              The ONLY Society for Acing Coding Interviews
            </h1>

            <p className="text-md relative z-40 max-w-3xl mx-auto font-medium text-slate-600 sm:text-xl">
              Learn how to crack coding interviews and get your dream job
            </p>

            {/* Actions */}
            <div className="relative z-10 flex justify-center gap-4">
              <Button variant="default" size="lg" asChild className="rounded-2xl py-6 px-10 bg-indigo-600 text-white hover:bg-indigo-700">
                <Link href="#discord" className="flex items-center gap-2">
                  Join Us
                </Link>
              </Button>

              <Button variant="ghost" size="lg" asChild className="rounded-2xl py-6 px-8">
                <Link href="#about" className="flex items-center gap-2 hover:bg-transparent hover:text-foreground">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Companies Section */}
            <div className="relative z-10 flex flex-col items-center gap-5 mt-20">
              <h3 className="text-md md:text-xl lg:text-2xl font-semibold text-slate-600">
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
