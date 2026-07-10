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
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "AI Assistant", icon: Bot },
  { name: "Study Planner", icon: BookOpen },
  { name: "Attendance", icon: CalendarCheck },
  { name: "Placements", icon: Briefcase },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];

function Sidebar() {
  return (
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

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
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

    </aside>
  );
}

export default Sidebar;