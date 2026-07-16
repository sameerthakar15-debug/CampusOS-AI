import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import AdminLogin from "./pages/AdminLogin";

import Dashboard from "./pages/Dashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import AIAssistant from "./pages/AIAssistant";

import Attendance from "./pages/faculty/Attendance";
import Assignments from "./pages/faculty/Assignments";
import Notices from "./pages/faculty/Notices";
import Marks from "./pages/faculty/Marks";
import Students from "./pages/faculty/Students";
import Timetable from "./pages/faculty/Timetable";
import Placements from "./pages/faculty/Placements";
import Profile from "./pages/faculty/Profile";
import Settings from "./pages/faculty/Settings";

function App() {
  const [page, setPage] = useState("landing");

  const [student, setStudent] = useState(null);
  const [faculty, setFaculty] = useState(null);
  const [admin, setAdmin] = useState(null);

  return (
    <>
      {/* Landing Page */}
      {page === "landing" && (
        <LandingPage onGetStarted={() => setPage("roles")} />
      )}

      {/* Role Selection */}
      {page === "roles" && (
        <LoginPage onSelectRole={(role) => setPage(role)} />
      )}

      {/* ========================= */}
      {/* STUDENT LOGIN */}
      {/* ========================= */}

      {page === "student" && (
        <StudentLogin
          onBack={() => setPage("roles")}
          onLogin={(studentData) => {
            setStudent(studentData);
            setPage("dashboard");
          }}
        />
      )}

      {/* ========================= */}
      {/* FACULTY LOGIN */}
      {/* ========================= */}

      {page === "faculty" && (
        <FacultyLogin
          onBack={() => setPage("roles")}
          onLogin={(facultyData) => {
            setFaculty(facultyData);
            setPage("faculty-dashboard");
          }}
        />
      )}

      {/* ========================= */}
      {/* ADMIN LOGIN */}
      {/* ========================= */}

      {page === "admin" && (
        <AdminLogin
          onBack={() => setPage("roles")}
          onLogin={(adminData) => {
            setAdmin(adminData);
            setPage("admin-dashboard");
          }}
        />
      )}

      {/* ========================= */}
      {/* STUDENT DASHBOARD */}
      {/* ========================= */}

      {page === "dashboard" && (
        <Dashboard
          student={student}
          onOpenAI={() => setPage("ai")}
        />
      )}

      {/* ========================= */}
      {/* FACULTY DASHBOARD */}
      {/* ========================= */}

      {page === "faculty-dashboard" && (
        <FacultyDashboard
          faculty={faculty}
          setPage={setPage}
        />
      )}

      {/* ========================= */}
      {/* FACULTY PAGES */}
      {/* ========================= */}

      {page === "attendance" && (
        <Attendance
          onBack={() => setPage("faculty-dashboard")}
        />
      )}

      {page === "assignments" && (
        <Assignments
          onBack={() => setPage("faculty-dashboard")}
        />
      )}

      {page === "marks" && (
        <Marks
          onBack={() => setPage("faculty-dashboard")}
        />
      )}

      {page === "students" && (
  <Students
    onBack={() => setPage("faculty-dashboard")}
  />
)}

      {page === "notices" && (
        <Notices
          onBack={() => setPage("faculty-dashboard")}
        />
      )}

      {page === "timetable" && (
        <Timetable
          onBack={() => setPage("faculty-dashboard")}
        />
      )}

      {page === "placements" && (
        <Placements
          onBack={() => setPage("faculty-dashboard")}
        />
      )}

      {page === "profile" && (
  <Profile
    onBack={() => setPage("faculty-dashboard")}
  />
)}

{page === "settings" && (
  <Settings
    onBack={() => setPage("faculty-dashboard")}
  />
)}


      {/* ========================= */}
      {/* AI ASSISTANT */}
      {/* ========================= */}

      {page === "ai" && (
        <AIAssistant
          onBack={() => setPage("faculty-dashboard")}
        />
      )}

      {/* ========================= */}
      {/* ADMIN DASHBOARD */}
      {/* ========================= */}

      {page === "admin-dashboard" && (
        <AdminDashboard
          admin={admin}
        />
      )}
    </>
  );
}

export default App;
