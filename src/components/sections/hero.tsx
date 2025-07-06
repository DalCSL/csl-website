"use client";

import dynamic from "next/dynamic";
import Companies from "@/components/companies";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import GradientBackground from "@/components/backgrounds/gradient-background";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

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
    <BackgroundGradientAnimation id="home">
      
    </BackgroundGradientAnimation>
  );
}
