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

function App() {
  const [page, setPage] = useState("landing");

  // Logged-in Users
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

      {/* ========================= */}
      {/* AI ASSISTANT */}
      {/* ========================= */}

      {page === "ai" && (
        <AIAssistant
          onBack={() => setPage("dashboard")}
        />
      )}
    </>
  );
}

export default App;