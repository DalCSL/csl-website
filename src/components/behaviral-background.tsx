import { MessageSquare, Users, User, Heart, BrainCircuit, Lightbulb } from "lucide-react";
import { OrbitingCircles } from "./ui/orbiting-circles";

// Create icons for behavioral interview orbiting circles
const BehavioralIcons = {
  messageSquare: () => (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
      <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
    </div>
  ),
  users: () => (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
      <Users className="h-4 w-4 text-red-600 dark:text-red-400" />
    </div>
  ),
  user: () => (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
      <User className="h-4 w-4 text-sky-600 dark:text-sky-400" />
    </div>
  ),
  heart: () => (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
      <Heart className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
    </div>
  ),
  brain: () => (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
      <BrainCircuit className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
    </div>
  ),
  lightbulb: () => (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
      <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" />
    </div>
  ),
};

// Behavioral Interview Orbiting Background
export const BehavioralOrbitingBackground = () => (
  <div className="absolute right-2 top-4 h-[300px] w-full scale-75 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={56} radius={120} duration={20}>
        <BehavioralIcons.messageSquare />
        <BehavioralIcons.users />
        <BehavioralIcons.heart />
        <BehavioralIcons.brain />
      </OrbitingCircles>
      <OrbitingCircles iconSize={36} radius={60} duration={15} reverse>
        <BehavioralIcons.user />
        <BehavioralIcons.lightbulb />
      </OrbitingCircles>
    </div>
  </div>
);