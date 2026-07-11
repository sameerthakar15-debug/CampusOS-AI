import { useState } from "react";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";
import Students from "../components/admin/Students";


import DashboardHome from "../components/admin/DashboardHome";

// Upcoming Pages
// import Students from "../components/admin/Students";
// import Faculty from "../components/admin/Faculty";
// import Departments from "../components/admin/Departments";
// import Subjects from "../components/admin/Subjects";
// import Attendance from "../components/admin/Attendance";
// import Assignments from "../components/admin/Assignments";
// import Marks from "../components/admin/Marks";
// import Placements from "../components/admin/Placements";
// import Notices from "../components/admin/Notices";
// import Settings from "../components/admin/Settings";

function AdminDashboard({ admin }) {
  const [currentPage, setCurrentPage] =
    useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardHome />;

      case "students":
  return <Students />;

      case "faculty":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              👨‍🏫 Faculty Management
            </h1>

            <p className="mt-4 text-gray-500">
              Faculty CRUD module coming next...
            </p>
          </div>
        );

      case "departments":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              🏢 Departments
            </h1>
          </div>
        );

      case "subjects":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              📚 Subjects
            </h1>
          </div>
        );

      case "attendance":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              ✅ Attendance
            </h1>
          </div>
        );

      case "assignments":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              📝 Assignments
            </h1>
          </div>
        );

      case "marks":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              📊 Marks
            </h1>
          </div>
        );

      case "placements":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              💼 Placements
            </h1>
          </div>
        );

      case "notices":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              📢 Notices
            </h1>
          </div>
        );

      case "ai":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              🤖 AI Analytics
            </h1>
          </div>
        );

      case "settings":
        return (
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h1 className="text-3xl font-bold">
              ⚙ Settings
            </h1>
          </div>
        );

      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-5">

      <div className="flex gap-6">

        <AdminSidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onLogout={() => window.location.reload()}
        />

        <main className="flex-1">

          <AdminNavbar
            admin={admin}
            onLogout={() => window.location.reload()}
          />

          <div className="mt-6">
            {renderPage()}
          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminDashboard;