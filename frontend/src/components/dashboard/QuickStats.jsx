import {
  Activity,
  BookOpen,
  GraduationCap,
  Clock,
} from "lucide-react";

function QuickStats({ student }) {
  const stats = [
    {
      label: "Attendance",
      value: `${student?.attendance || 92}%`,
      icon: Activity,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      label: "Pending Assignments",
      value: student?.assignments || "4",
      icon: BookOpen,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      label: "CGPA",
      value: student?.cgpa || "8.72",
      icon: GraduationCap,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      label: "Study Hours",
      value: student?.studyHours || "18 hrs",
      icon: Clock,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {item.label}
                </p>

                <h2 className={`mt-3 text-3xl font-bold ${item.color}`}>
                  {item.value}
                </h2>
              </div>

              <div className={`rounded-2xl p-4 ${item.bg}`}>
                <Icon className={item.color} size={26} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuickStats;