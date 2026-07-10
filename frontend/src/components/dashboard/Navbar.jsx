import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
<<<<<<< HEAD
    <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

      {/* Left */}

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Good Morning 👋
        </h2>

        <p className="text-slate-500">
          Welcome back to CampusOS.AI
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-slate-100 px-4 py-2 rounded-xl">

          <Search size={18} className="text-slate-500"/>

          <input
            placeholder="Search..."
            className="bg-transparent outline-none ml-2"
          />

        </div>

        <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200">

          <Bell size={20}/>

        </button>

        <div className="flex items-center gap-3">

          <img
            src="https://ui-avatars.com/api/?name=Sameer"
            className="w-11 h-11 rounded-full"
          />

          <div>

            <h3 className="font-semibold">
              Sameer
            </h3>

            <p className="text-sm text-slate-500">
              CSE AIML
            </p>

          </div>

        </div>

      </div>

=======
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
>>>>>>> ddb2c2e (Redesign campus UI flow with shared light-blue theme)
    </div>
  );
}

export default Navbar;