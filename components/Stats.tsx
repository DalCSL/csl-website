import { Trophy, Code, Star, Flame } from "lucide-react";

const achievements = [
  {
    id: 1,
    name: "Problems Solved",
    value: "2500+",
    description: "LeetCode problems solved by our members",
    icon: Code,
    color: "text-blue-400",
  },
  {
    id: 2,
    name: "LeetCode Knights",
    value: "2",
    description: "Top 5% performers on LeetCode",
    icon: Star,
    color: "text-yellow-400",
  },
  {
    id: 3,
    name: "LeetCode Guardian",
    value: "1",
    description: "Top 1% performer on LeetCode",
    icon: Flame,
    color: "text-red-400",
  },
  {
    id: 4,
    name: "ICPC Champions",
    value: "2x",
    description: "Atlantic ICPC Regional Champions",
    icon: Trophy,
    color: "text-purple-400",
  },
];

export default function Stats() {
  return (
    <div className="bg-white/10 rounded-lg p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Our Achievements</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex items-center gap-x-3 sm:gap-x-4 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/15 transition-all duration-300">
            <achievement.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${achievement.color} shrink-0`} aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <div className="text-base sm:text-lg font-bold text-white truncate">{achievement.value}</div>
              <div className="text-xs sm:text-sm text-indigo-200 font-medium truncate">{achievement.name}</div>
              <div className="text-xs text-indigo-300 mt-1 line-clamp-2">{achievement.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
