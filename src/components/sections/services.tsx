"use client";

import { motion } from "motion/react";
import { Trophy, Code, MessageSquare, Target } from "lucide-react";
import GridBackground from "@/components/backgrounds/gird-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AuroraText } from "@/components/ui/aurora-text";

const services = [
  {
    name: "Technical Interviews",
    description: "Practice with real technical interview questions and get personalized feedback from experienced developers.",
    icon: Code,
    // calendlyLink: "https://calendly.com/your-link/technical-interview",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    href: "#discord",
    cta: "Start practicing",
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "Behavioral Interviews",
    description: "Master the art of behavioral interviews with our structured approach and expert guidance.",
    icon: MessageSquare,
    // calendlyLink: "https://calendly.com/your-link/behavioral-interview",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    href: "#discord",
    cta: "Join session",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "System Design Interviews",
    description: "Learn to design scalable systems and ace your system design interviews with hands-on practice.",
    icon: Target,
    // calendlyLink: "https://calendly.com/your-link/system-design",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    href: "#discord",
    cta: "Learn design",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "ICPC Training",
    description: "Prepare for competitive programming contests with our specialized ICPC training program.",
    icon: Trophy,
    // calendlyLink: "https://calendly.com/your-link/icpc-training",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    href: "#discord",
    cta: "Train now",
    className: "col-span-3 lg:col-span-2",
  },
];

// Create background components for each service
const ServiceBackground = ({ color, className }: { color: string; className?: string }) => (
  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
  </div>
);

export default function Services() {
  return (
    <GridBackground className="bg-linear-to-br from-gray-50 via-white to-indigo-50 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <BlurFade
          className="mx-auto max-w-2xl lg:text-center"
          inView={true}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to <AuroraText>ACE</AuroraText> your interviews
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
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
                key={service.name}
                name={service.name}
                className={service.className}
                background={<ServiceBackground color={service.color} />}
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
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xs rounded-full px-6 py-3 shadow-lg border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium text-gray-700">Ready to get started?</span>
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
