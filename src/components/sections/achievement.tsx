"use client";

import React from "react";
import { motion } from "motion/react";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

interface BentoCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  colors: string[];
  delay: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-8 text-foreground backdrop-blur-sm"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3
          className="text-sm sm:text-base md:text-lg text-foreground"
          variants={item}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4 text-foreground"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p
            className="text-sm text-foreground/80"
            variants={item}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};



const achievements = [
  {
    title: "Problems Solved",
    value: "2500+",
    subtitle: "LeetCode problems solved by our members",
    colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
    delay: 0.2,
  },
  {
    title: "LeetCode Knights",
    value: "2",
    subtitle: "Top 5% performers on LeetCode",
    colors: ["#F59E0B", "#FCD34D", "#FDE68A"],
    delay: 0.4,
  },
  {
    title: "LeetCode Guardian",
    value: "1",
    subtitle: "Top 1% performer on LeetCode",
    colors: ["#EF4444", "#F87171", "#FCA5A5"],
    delay: 0.6,
  },
  {
    title: "ICPC Champions",
    value: "2x",
    subtitle: "Atlantic ICPC Regional Champions",
    colors: ["#8B5CF6", "#A78BFA", "#C4B5FD"],
    delay: 0.8,
  },
];

export function Achievement() {
  return (
    <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 max-w-sm md:max-w-6xl mx-auto" id="achievements">
      <div className="mx-auto max-w-none px-6 lg:px-8">
        {/* Achievements Section */}
        <div className="mx-auto max-w-4xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Achievements</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Excellence in Competitive Programming
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our community has achieved remarkable milestones in competitive programming and software development.
          </p>
        </div>

        <div className="w-full h-full mb-24 max-w-sm md:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            <div className="md:col-span-2">
              <BentoCard
                title={achievements[0].title}
                value={achievements[0].value}
                subtitle={achievements[0].subtitle}
                colors={achievements[0].colors}
                delay={achievements[0].delay}
              />
            </div>
            <BentoCard
              title={achievements[1].title}
              value={achievements[1].value}
              subtitle={achievements[1].subtitle}
              colors={achievements[1].colors}
              delay={achievements[1].delay}
            />
            <BentoCard
              title={achievements[2].title}
              value={achievements[2].value}
              subtitle={achievements[2].subtitle}
              colors={achievements[2].colors}
              delay={achievements[2].delay}
            />
            <div className="md:col-span-2">
              <BentoCard
                title={achievements[3].title}
                value={achievements[3].value}
                subtitle={achievements[3].subtitle}
                colors={achievements[3].colors}
                delay={achievements[3].delay}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 