import { ArrowRight, Bot, CalendarCheck, Sparkles } from "lucide-react";
import Card from "../components/common/Card";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import QuickStats from "../components/dashboard/QuickStats";

function Dashboard({ onOpenAI }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#EAF2FF_0%,_#F7F9FF_60%,_#EDF7FF_100%)] p-4 lg:p-6">
      <div className="flex min-h-screen gap-6">
        <Sidebar />

        <main className="flex-1">
          <Navbar />

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <Card className="border-[#E5E7EB] p-6 shadow-[0_20px_60px_-12px_rgba(37,99,235,0.16)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                    Today at a glance
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-[#111827]">
                    Your campus is running smoothly.
                  </h2>
                  <p className="mt-3 max-w-2xl text-[#6B7280]">
                    AI recommendations, attendance trends, and study milestones
                    are ready for you.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#2563EB]/10 p-3 text-[#2563EB]">
                  <Sparkles size={24} />
                </div>
              </div>
            </Card>

            <Card className="border-[#E5E7EB] p-6 shadow-[0_20px_60px_-12px_rgba(37,99,235,0.16)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#2563EB]/10 p-3 text-[#2563EB]">
                  <Bot size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">AI Assistant</p>
                  <p className="text-sm text-[#6B7280]">Ask anything</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F4F7FF] p-4 text-sm text-[#6B7280]">
                “Your next best step is to review the placement shortlist and
                study plan before lunch.”
              </div>

              <button
            onClick={onOpenAI}
              className="rounded-2xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              🤖 Open AI Assistant
          </button>
            </Card>
          </div>

          

          <QuickStats />

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <Card className="border-[#E5E7EB] p-6 shadow-[0_20px_60px_-12px_rgba(37,99,235,0.16)]">
              <div className="flex items-center gap-3">
                <CalendarCheck className="text-[#2563EB]" size={22} />
                <p className="font-semibold text-[#111827]">Attendance</p>
              </div>
              <p className="mt-4 text-sm text-[#6B7280]">
                You are on track for 92% attendance this month.
              </p>
            </Card>

            <Card className="border-[#E5E7EB] p-6 shadow-[0_20px_60px_-12px_rgba(37,99,235,0.16)]">
              <div className="flex items-center gap-3">
                <Bot className="text-[#2563EB]" size={22} />
                <p className="font-semibold text-[#111827]">Reminders</p>
              </div>
              <p className="mt-4 text-sm text-[#6B7280]">
                3 deadlines are due soon. AI has grouped them for you.
              </p>
            </Card>

            <Card className="border-[#E5E7EB] p-6 shadow-[0_20px_60px_-12px_rgba(37,99,235,0.16)]">
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#2563EB]" size={22} />
                <p className="font-semibold text-[#111827]">Focus</p>
              </div>
              <p className="mt-4 text-sm text-[#6B7280]">
                Deep work mode is enabled for your next study block.
              </p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;