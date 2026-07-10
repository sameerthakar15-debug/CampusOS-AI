import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-[#E5E7EB] bg-white/85 p-5 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] backdrop-blur">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Good Morning 👋</h2>
        <p className="text-[#6B7280]">Welcome back to CampusOS.AI</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-2xl border border-[#E5E7EB] bg-[#F4F7FF] px-4 py-2">
          <Search size={18} className="text-[#6B7280]" />
          <input
            placeholder="Search..."
            className="ml-2 bg-transparent text-sm outline-none"
          />
        </div>

        <button className="rounded-2xl border border-[#E5E7EB] bg-white p-3 text-[#111827] transition hover:bg-[#F4F7FF]">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F4F7FF] px-3 py-2">
          <img
            src="https://ui-avatars.com/api/?name=Sameer"
            alt="Sameer"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-[#111827]">Sameer</h3>
            <p className="text-sm text-[#6B7280]">CSE AIML</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;