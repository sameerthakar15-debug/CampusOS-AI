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
<<<<<<< HEAD
  { name: "Dashboard", icon: LayoutDashboard },
=======
  { name: "Dashboard", icon: LayoutDashboard, active: true },
>>>>>>> ddb2c2e (Redesign campus UI flow with shared light-blue theme)
  { name: "AI Assistant", icon: Bot },
  { name: "Study Planner", icon: BookOpen },
  { name: "Attendance", icon: CalendarCheck },
  { name: "Placements", icon: Briefcase },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];

function Sidebar() {
  return (
<<<<<<< HEAD
    <aside className="w-72 bg-white border-r border-slate-200 shadow-sm flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-slate-200">

        <h1 className="text-3xl font-bold text-blue-600">
          CampusOS.AI
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Smart Campus Platform
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 p-4">

=======
    <aside className="hidden w-72 flex-col rounded-[1.75rem] border border-[#E5E7EB] bg-white/80 p-4 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] backdrop-blur xl:flex">
      <div className="border-b border-[#E5E7EB] p-4">
        <h1 className="text-3xl font-bold text-[#2563EB]">CampusOS.AI</h1>
        <p className="mt-1 text-sm text-[#6B7280]">Smart campus platform</p>
      </div>

      <nav className="mt-4 flex-1 space-y-2">
>>>>>>> ddb2c2e (Redesign campus UI flow with shared light-blue theme)
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
<<<<<<< HEAD
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>

            </button>
          );
        })}

      </nav>

      {/* Logout */}

      <div className="p-4 border-t border-slate-200">

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition">

          <LogOut size={22} />

          Logout

        </button>

      </div>

=======
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
>>>>>>> ddb2c2e (Redesign campus UI flow with shared light-blue theme)
    </aside>
  );
}

export default Sidebar;