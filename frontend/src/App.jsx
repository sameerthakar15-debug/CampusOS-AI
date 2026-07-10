<<<<<<< HEAD
import Login from "./pages/Login";

function App() {
  return <Login />;
=======
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import StudentLogin from "./pages/StudentLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("landing");

  return (
    <>
      {page === "landing" && (
        <LandingPage onGetStarted={() => setPage("roles")} />
      )}

      {page === "roles" && (
        <LoginPage onSelectRole={(role) => setPage(role)} />
      )}

      {page === "student" && (
        <StudentLogin
          onBack={() => setPage("roles")}
          onLogin={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && <Dashboard />}
    </>
  );
>>>>>>> ddb2c2e (Redesign campus UI flow with shared light-blue theme)
}

export default App;