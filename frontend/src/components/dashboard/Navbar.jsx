import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
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

    </div>
  );
}

export default Navbar;