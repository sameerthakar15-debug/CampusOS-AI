import {
  LayoutDashboard,
  Bot,
  BookOpen,
  CalendarCheck,
  Briefcase,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "AI Assistant", icon: Bot },
  { name: "Study Planner", icon: BookOpen },
  { name: "Attendance", icon: CalendarCheck },
  { name: "Placements", icon: Briefcase },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="hidden w-72 flex-col rounded-[1.75rem] border border-[#E5E7EB] bg-white/80 p-4 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] backdrop-blur xl:flex">
      <div className="border-b border-[#E5E7EB] p-4">
        <h1 className="text-3xl font-bold text-[#2563EB]">CampusOS.AI</h1>
        <p className="mt-1 text-sm text-[#6B7280]">Smart campus platform</p>
      </div>

      <nav className="mt-4 flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition ${
                item.active
                  ? "bg-[#2563EB] text-white shadow-lg shadow-blue-600/20"
                  : "text-[#111827] hover:bg-[#F4F7FF] hover:text-[#2563EB]"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-[#E5E7EB] p-4">
        <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-red-500 transition hover:bg-red-50">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;