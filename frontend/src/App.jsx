import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Attendance from "./pages/Attendance";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import AdminLogin from "./pages/AdminLogin";
import Assignments from "./pages/Assignments";
import StudyPlanner from "./pages/StudyPlanner";
import Placements from "./pages/Placements";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import FacultyDashboard from "./pages/FacultyDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import AIAssistant from "./pages/AIAssistant";

function App() {
  const [page, setPage] = useState("landing");

  const [student, setStudent] = useState(null);
  const [faculty, setFaculty] = useState(null);
  const [admin, setAdmin] = useState(null);

  return (
    <>
      {/* Landing */}
      {page === "landing" && (
        <LandingPage onGetStarted={() => setPage("roles")} />
      )}

      {/* Role Selection */}
      {page === "roles" && (
        <LoginPage onSelectRole={(role) => setPage(role)} />
      )}

      {/* Student Login */}
      {page === "student" && (
        <StudentLogin
          onBack={() => setPage("roles")}
          onLogin={(studentData) => {
            setStudent(studentData);
            setPage("dashboard");
          }}
        />
      )}

      {/* Dashboard */}
      {page === "dashboard" && (
  <Dashboard
  student={student}
  onOpenAI={() => setPage("ai")}
  onOpenProfile={() => setPage("profile")}
  onAttendance={() => setPage("attendance")}
  onAssignments={() => setPage("assignments")}
  onStudyPlanner={() => setPage("study-planner")}
  onPlacements={() => setPage("placements")}
/>
)}

      {/* Profile */}
      {page === "profile" && (
        <Profile
          student={student}
          onDashboard={() => setPage("dashboard")}
          onOpenAI={() => setPage("ai")}
          onOpenProfile={() => setPage("profile")}
          onAttendance={() => setPage("attendance")}
          onAssignments={() => setPage("assignments")}
          onStudyPlanner={() => setPage("study-planner")}
          onPlacements={() => setPage("placements")}
        />
      )}

      {/* Attendance */}

{page === "attendance" && (
  <Attendance
    onDashboard={() => setPage("dashboard")}
    onOpenProfile={() => setPage("profile")}
    onAttendance={() => setPage("attendance")}
    onAssignments={() => setPage("assignments")}
    onStudyPlanner={() => setPage("study-planner")}
    onPlacements={() => setPage("placements")}
    onOpenAI={() => setPage("ai")}
  />
)}

{/* Assignments */}

{page === "assignments" && (
  <Assignments
    onDashboard={() => setPage("dashboard")}
    onOpenProfile={() => setPage("profile")}
    onAttendance={() => setPage("attendance")}
    onAssignments={() => setPage("assignments")}
    onStudyPlanner={() => setPage("study-planner")}
    onPlacements={() => setPage("placements")}
    onOpenAI={() => setPage("ai")}
  />
)}

{/* Study Planner */}

{page === "study-planner" && (
  <StudyPlanner
    onDashboard={() => setPage("dashboard")}
    onOpenProfile={() => setPage("profile")}
    onAttendance={() => setPage("attendance")}
    onAssignments={() => setPage("assignments")}
    onStudyPlanner={() => setPage("study-planner")}
    onPlacements={() => setPage("placements")}
    onOpenAI={() => setPage("ai")}
  />
)}

{/* Placements */}

{page === "placements" && (
  <Placements
    onDashboard={() => setPage("dashboard")}
    onOpenProfile={() => setPage("profile")}
    onAttendance={() => setPage("attendance")}
    onAssignments={() => setPage("assignments")}
    onStudyPlanner={() => setPage("study-planner")}
    onPlacements={() => setPage("placements")}
    onOpenAI={() => setPage("ai")}
  />
)}
      {/* AI Assistant */}
      {page === "ai" && (
        <AIAssistant
          onBack={() => setPage("dashboard")}
        />
      )}

      {/* Faculty */}
      {page === "faculty" && (
        <FacultyLogin
          onBack={() => setPage("roles")}
          onLogin={(facultyData) => {
            setFaculty(facultyData);
            setPage("faculty-dashboard");
          }}
        />
      )}

      {page === "faculty-dashboard" && (
        <FacultyDashboard faculty={faculty} />
      )}

      {/* Admin */}
      {page === "admin" && (
        <AdminLogin
          onBack={() => setPage("roles")}
          onLogin={(adminData) => {
            setAdmin(adminData);
            setPage("admin-dashboard");
          }}
        />
      )}

      {page === "admin-dashboard" && (
        <AdminDashboard admin={admin} />
      )}
    </>
  );
}

export default App;