import { CodeComparison } from "@/components/ui/code-comparison";
import { SystemDesignIconCloud } from "@/components/system-design-cloud"
import { beforeCode, afterCode } from "@/data/code-data";
import { BehavioralOrbitingBackground } from "@/components/behaviral-background";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Trophy, Code, MessageSquare, Target } from "lucide-react";

export const services = [
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
    background: (
      <div className="absolute inset-0 h-full w-full scale-90 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
        <CodeComparison
          beforeCode={beforeCode}
          afterCode={afterCode}
          language="python"
          filename="two_sum.py"
          lightTheme="github-light"
          darkTheme="github-dark"
          highlightColor="rgba(59, 130, 246, 0.16)"
        />
      </div>
    ),
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
    background: <BehavioralOrbitingBackground />,
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
    background: <SystemDesignIconCloud />,
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
    background: (
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <div className="flex items-baseline gap-1">
          <NumberTicker
            value={2}
            startValue={0}
            delay={0.5}
            className="text-6xl font-bold tracking-tighter text-orange-500/80 dark:text-orange-400/80"
          />
          <span className="text-3xl font-bold tracking-tight text-orange-500/80 dark:text-orange-400/80">x</span>
        </div>
        <div className="text-center mt-2">
          <p className="text-lg font-semibold text-orange-500/70 dark:text-orange-400/70">
            Atlantic Canada
          </p>
          <p className="text-xl font-bold text-orange-500/80 dark:text-orange-400/80">
            ICPC Champion
          </p>
        </div>
      </div>
    ),
  },
];
