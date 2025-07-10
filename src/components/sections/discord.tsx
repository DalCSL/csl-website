"use client";

import { MessageCircle, Users, Zap, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

const DiscordIcon = `https://cdn.simpleicons.org/discord/discord.svg`

const features = [
  {
    name: "Real-time Discussions",
    description: "Connect with fellow members and get instant help with coding problems.",
    icon: MessageCircle,
    delay: 0.1,
  },
  {
    name: "Study Groups",
    description: "Join topic-specific channels and study together with like-minded peers.",
    icon: Users,
    delay: 0.2,
  },
  {
    name: "Quick Tips",
    description: "Get daily coding tips, interview strategies, and industry insights.",
    icon: Zap,
    delay: 0.3,
  },
  {
    name: "Competition Prep",
    description: "Dedicated channels for ICPC, Codeforces and any other competitive programming.",
    icon: Trophy,
    delay: 0.4,
  },
];

export function Discord() {
  return (
    <FlickeringGrid
      className="relative min-h-screen flex items-center py-24 sm:py-32 overflow-hidden"
      id="discord"
      squareSize={4}
      gridGap={6}
      color="#6B7280"
      maxOpacity={0.2}
      flickerChance={0.1}
    >


      <div className="relative mx-auto max-w-sm md:max-w-6xl px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="mx-auto max-w-4xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Join Our Community</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Connect with our members and start your journey
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Features Section */}
          <div className="space-y-8 transition-all duration-1000 delay-500 transform">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer transform"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gray-200 transition-transform duration-300 group-hover:scale-110">
                        <feature.icon className="h-5 w-5 text-gray-900" />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gray-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gray-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Discord CTA Card */}
          <div className="flex justify-center xl:justify-end transition-all duration-1000 delay-700 transfor">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gray-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md w-full border border-gray-600/30 group-hover:bg-white/15 transition-all duration-300">
                {/* Discord Icon with Animation */}
                <div className="text-center mb-6">
                  <div className="relative mx-auto h-20 w-20 rounded-2xl flex items-center justify-center mb-4">
                    <Image src={DiscordIcon} alt="Discord" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Discord</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Connect with our members and start your journey to success.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  {["24/7 Community Support", "Career Guidance", "Interview Prep", "Coding Help"].map((benefit, index) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-700" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="https://discord.gg/aAHD6f4zFp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RainbowButton
                    className="group/button relative inline-flex items-center justify-center w-full rounded-2xl text-white h-full"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-white">
                      Join Discord Server
                      <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                    </span>
                  </RainbowButton>
                </Link>

                <p className="text-xs text-gray-600 mt-4 text-center">
                  Free to join • No registration required
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gray-600 rounded-full opacity-5 blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-500 rounded-full opacity-5 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FlickeringGrid>
  );
} 