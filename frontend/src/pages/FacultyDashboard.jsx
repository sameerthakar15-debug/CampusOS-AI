import FacultyNavbar from "../components/faculty/FacultyNavbar";
import {
  Users,
  ClipboardCheck,
  BookOpen,
  CalendarDays,
  Bell,
  GraduationCap,
  Bot,
} from "lucide-react";

import FacultySidebar from "../components/faculty/FacultySidebar";
import Card from "../components/common/Card";

function FacultyDashboard({ faculty }) {
  const cards = [
    {
      title: "Students",
      value: "126",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Attendance",
      value: "92%",
      icon: ClipboardCheck,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Assignments",
      value: "8",
      icon: BookOpen,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Subjects",
      value: "5",
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#EAF2FF_0%,_#F7F9FF_60%,_#EDF7FF_100%)] p-5">

      <div className="flex gap-6">

        {/* Sidebar */}

        <FacultySidebar />

        {/* Main */}

        <main className="flex-1">

          {/* Header */}

          <div className="rounded-3xl bg-white p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <h1 className="text-3xl font-bold text-gray-800">

                  Welcome,

                  {" "}

                  {faculty?.displayName || "Professor"} 👋

                </h1>

                <p className="mt-2 text-gray-500">

                  Faculty Dashboard • CampusOS.AI

                </p>

              </div>

              <div className="rounded-full bg-blue-100 px-5 py-3">

                <p className="font-semibold text-blue-700">

                  {faculty?.email}

                </p>

              </div>

            </div>

          </div>

          {/* Cards */}

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {cards.map((card) => {

              const Icon = card.icon;

              return (

                <Card
                  key={card.title}
                  className="p-6 shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-gray-500">

                        {card.title}

                      </p>

                      <h2 className="mt-3 text-3xl font-bold">

                        {card.value}

                      </h2>

                    </div>

                    <div
                      className={`rounded-2xl p-4 ${card.color}`}
                    >

                      <Icon size={28} />

                    </div>

                  </div>

                </Card>

              );
            })}

          </div>

          {/* Quick Actions */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <Card className="p-6">

              <h2 className="text-xl font-bold">

                Quick Actions

              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4">

                <button className="rounded-xl bg-blue-600 p-4 text-white hover:bg-blue-700">
                  Upload Attendance
                </button>

                <button className="rounded-xl bg-green-600 p-4 text-white hover:bg-green-700">
                  New Assignment
                </button>

                <button className="rounded-xl bg-purple-600 p-4 text-white hover:bg-purple-700">
                  Publish Notice
                </button>

                <button className="rounded-xl bg-orange-500 p-4 text-white hover:bg-orange-600">
                  Upload Marks
                </button>

              </div>

            </Card>

            {/* AI */}

            <Card className="p-6">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-100 p-3">

                  <Bot
                    className="text-blue-600"
                    size={28}
                  />

                </div>

                <div>

                  <h2 className="text-xl font-bold">

                    AI Assistant

                  </h2>

                  <p className="text-gray-500">

                    Faculty Productivity

                  </p>

                </div>

              </div>

              <div className="mt-6 rounded-2xl bg-blue-50 p-5">

                <p className="text-gray-700">

                  🤖 AI can generate assignments,

                  quizzes, notices and question

                  papers automatically.

                </p>

              </div>

              <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">

                Open AI Assistant

              </button>

            </Card>

          </div>

          {/* Recent Activity */}

          <Card className="mt-8 p-6">

            <h2 className="text-xl font-bold">

              Recent Activities

            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">

                <ClipboardCheck className="text-green-600" />

                Attendance uploaded successfully.

              </div>

              <div className="flex items-center gap-3">

                <BookOpen className="text-blue-600" />

                Assignment published for AIML.

              </div>

              <div className="flex items-center gap-3">

                <Bell className="text-orange-600" />

                New notice published.

              </div>

              <div className="flex items-center gap-3">

                <CalendarDays className="text-purple-600" />

                Timetable updated.

              </div>

            </div>

          </Card>

        </main>

      </div>

    </div>
  );
}

export default FacultyDashboard;