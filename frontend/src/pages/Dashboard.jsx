import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-indigo-100 to-cyan-50">

      <Sidebar />

      <main className="flex-1 p-8">

        <Navbar />

      </main>

    </div>
  );
}

export default Dashboard;