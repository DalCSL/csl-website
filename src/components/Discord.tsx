import { MessageCircle, Users, Zap, Trophy } from "lucide-react";
import Stats from "@/components/sections/stats";

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

export default function Discord() {
  return (
    <div className="bg-indigo-600 py-24 sm:py-32" id="discord">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-200">Join Our Community</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Connect with fellow developers
          </p>
          <p className="mt-6 text-lg leading-8 text-indigo-200">
            Join our Discord server to connect with other members, get help with coding problems, and stay updated with the latest opportunities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
              <Stats />
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
                    className="inline-flex items-center justify-center w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
  );
} 