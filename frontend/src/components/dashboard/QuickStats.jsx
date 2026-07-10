import { Activity, BookOpen, Trophy } from "lucide-react";

const stats = [
  {
    label: "Study streak",
    value: "12 days",
    icon: Activity,
  },
  {
    label: "Assignments",
    value: "4 pending",
    icon: BookOpen,
  },
  {
    label: "Achievements",
    value: "3 unlocked",
    icon: Trophy,
  },
];

function QuickStats() {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-[1.5rem] border border-[#E5E7EB] bg-white/85 p-5 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#2563EB]/10 p-2 text-[#2563EB]">
                <Icon size={20} />
              </div>
              <p className="text-sm font-semibold text-[#111827]">{item.label}</p>
            </div>
            <p className="mt-4 text-2xl font-bold text-[#111827]">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default QuickStats;
