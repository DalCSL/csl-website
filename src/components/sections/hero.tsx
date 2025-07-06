"use client";

import dynamic from "next/dynamic";
import Companies from "@/components/companies";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import GradientBackground from "@/components/backgrounds/gradient-background";

const TextGenerateEffect = dynamic(() => import("@/components/ui/text-generate-effect").then(mod => ({ default: mod.TextGenerateEffect })), {
  ssr: false,
  loading: () => (
    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-6xl">
      The ONLY society that teaches you to crack coding interviews
    </h1>
  )
});

export default function Hero() {
  return (
    <GradientBackground id="home">
      <div className="w-full flex-1 pt-24 sm:pt-48 pb-12">
        <div className="max-w-2xl mx-auto text-center mb-24">
          <TextGenerateEffect 
            words="The ONLY society that teaches you to crack coding interviews"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            duration={0.8}
          />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learn how to crack coding interviews and get your dream job
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#services"
              className="rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <motion.a
              href="#about"
              className="text-sm font-semibold leading-6 text-gray-900 group flex flex-row items-center gap-1 align-middle"
            >
              Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
      {/* Offers section pinned to bottom */}
      <div className="w-full max-w-7xl mx-auto">
        <Companies />
      </div>
    </GradientBackground>
  );
}
