import { useState } from "react";
import { saveAttendance } from "../../services/attendanceService";


const initialStudents = [
  { id: 1, name: "Rahul Patil", present: true },
  { id: 2, name: "Sneha Sharma", present: true },
  { id: 3, name: "Amit Singh", present: false },
  { id: 4, name: "Priya Deshmukh", present: true },
  { id: 5, name: "Rohan Joshi", present: false },
];

function Attendance({ onBack }) {
 const [students, setStudents] = useState(initialStudents);

const [subject, setSubject] = useState("Java Programming");

const [date, setDate] = useState(
  new Date().toISOString().split("T")[0]
);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const handleSaveAttendance = async () => {
  const attendanceData = {
    facultyId: "faculty001",
    subject,
    date,
    students,
    createdAt: new Date().toISOString(),
  };

  const result = await saveAttendance(attendanceData);

 if (result.success) {
  console.log("Saved Document ID:", result.id);
  alert("✅ Attendance Saved Successfully!");
} else {
  console.error("Firestore Error:", result.error);
  alert("❌ Failed to Save Attendance");
}
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <button
        onClick={onBack}
        className="mb-6 rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        ← Back
      </button>

      <div className="rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold">
          Attendance Management
        </h1>

        <p className="mt-2 text-gray-500">
          Mark today's attendance.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

  <div>

    <label className="block font-semibold mb-2">
      Subject
    </label>

    <select
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="w-full rounded-lg border p-3"
    >
      <option>Java Programming</option>
      <option>DBMS</option>
      <option>Operating System</option>
      <option>Artificial Intelligence</option>
      <option>Computer Networks</option>
    </select>

  </div>

  <div>

    <label className="block font-semibold mb-2">
      Date
    </label>

    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="w-full rounded-lg border p-3"
    />

  </div>

</div>

        <table className="mt-8 w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Student Name
              </th>

              <th className="py-3 text-center">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-b"
              >

                <td className="py-4">
                  {student.name}
                </td>

                <td className="text-center">

                  <button
                    onClick={() =>
                      toggleAttendance(student.id)
                    }
                    className={`rounded-lg px-5 py-2 text-white ${
                      student.present
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {student.present
                      ? "Present"
                      : "Absent"}
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

{/* Attendance Summary */}

<div className="mt-8 grid grid-cols-3 gap-6">

  <div className="rounded-xl bg-blue-100 p-5 text-center">

    <h2 className="text-3xl font-bold">
      {students.length}
    </h2>

    <p>Total Students</p>

  </div>

  <div className="rounded-xl bg-green-100 p-5 text-center">

    <h2 className="text-3xl font-bold">
      {students.filter((s) => s.present).length}
    </h2>

    <p>Present</p>

  </div>

  <div className="rounded-xl bg-red-100 p-5 text-center">

    <h2 className="text-3xl font-bold">
      {students.filter((s) => !s.present).length}
    </h2>

    <p>Absent</p>

  </div>

</div>

<button
  onClick={handleSaveAttendance}
  className="mt-8 rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
>
  Save Attendance
</button>

        

      </div>

    </div>
  );
}

export default Attendance;