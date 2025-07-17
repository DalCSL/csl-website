"use client";

import GridBackground from "@/components/backgrounds/gird-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AuroraText } from "@/components/ui/aurora-text";
import { services } from "@/data/services-data";

export function Services() {
  return (
    <GridBackground className="bg-linear-to-br from-slate-100 via-gray-50 to-zinc-100 min-h-screen flex items-center justify-center py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-sm md:max-w-7xl px-6 lg:px-8 relative">
        <BlurFade
          className="mx-auto max-w-2xl lg:text-center"
          inView={true}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything you need to <AuroraText>ACE</AuroraText> your interviews
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From technical interviews to competitive programming, we provide comprehensive training to help you succeed in your career.
          </p>
        </BlurFade>

        <BlurFade
          className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24"
          inView={true}
        >
          <BentoGrid>
            {services.map((service, index) => (
              <BentoCard
                key={index}
                name={service.name}
                className={service.className}
                background={service.background}
                Icon={service.icon}
                description={service.description}
                href={service.href}
                cta={service.cta}
              />
            ))}
          </BentoGrid>
        </BlurFade>

        <BlurFade
          className="mt-16 text-center"
          inView={true}
        >
          <BlurFade
            className="inline-flex items-center gap-2 bg-slate-100/60 backdrop-blur-xs rounded-full px-6 py-3 shadow-lg border border-slate-200/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium text-slate-700">Ready to get started?</span>
            <a
              href="#discord"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Join our community →
            </a>
          </BlurFade>
        </BlurFade>
      </div>
    </GridBackground>
  );
}
