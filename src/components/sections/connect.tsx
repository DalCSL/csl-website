"use client";

import React from "react";
import { MessageCircle, Users, Zap, Trophy, Code, Star, Flame } from "lucide-react";
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
      className="relative overflow-hidden h-full bg-background dark:bg-background/50"
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

const features = [
  {
    name: "Real-time Discussions",
    description: "Connect with fellow members and get instant help with coding problems.",
    icon: MessageCircle,
  },
  {
    name: "Study Groups",
    description: "Join topic-specific channels and study together with like-minded peers.",
    icon: Users,
  },
  {
    name: "Quick Tips",
    description: "Get daily coding tips, interview strategies, and industry insights.",
    icon: Zap,
  },
  {
    name: "Competition Prep",
    description: "Dedicated channels for ICPC, Codeforces and any other competitive programming.",
    icon: Trophy,
  },
];

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

export function Connect() {
  return (
    <div className="bg-background py-24 sm:py-32 max-w-sm md:max-w-7xl mx-auto" id="connect">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Achievements Section */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Achievements</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Excellence in Competitive Programming
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our community has achieved remarkable milestones in competitive programming and software development.
          </p>
        </div>
        
        <div className="w-full bg-background h-full mb-24">
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

        {/* Discord Section */}
        <div className="bg-indigo-600 rounded-3xl py-16 sm:py-20">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-200">Join Our Community</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Connect with fellow developers
            </p>
            <p className="mt-6 text-lg leading-8 text-indigo-200">
              Join our Discord server to connect with other members, get help with coding problems, and stay updated with the latest opportunities.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <div className="flex items-center gap-x-3">
                        <feature.icon className="h-5 w-5 text-indigo-200" aria-hidden="true" />
                        <h3 className="text-sm font-semibold leading-6 text-white">{feature.name}</h3>
                      </div>
                      <p className="mt-2 text-sm text-indigo-200">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-xl max-w-sm w-full">
                  <div className="text-center">
                    <div className="mx-auto h-16 w-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Our Discord</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Connect with 500+ members and start your journey to success.
                    </p>
                    <a
                      href="https://discord.gg/aAHD6f4zFp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                    >
                      Join Discord Server
                    </a>
                    <p className="text-xs text-gray-500 mt-3">
                      Free to join • No registration required
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 