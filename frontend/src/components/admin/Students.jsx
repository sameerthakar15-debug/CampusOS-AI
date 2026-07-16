import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase";

import {
  Plus,
  Trash2,
  Search,
  Users,
} from "lucide-react";

function Students() {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    rollNo: "",
    department: "",
    semester: "",
  });

  // Load Students
  const fetchStudents = async () => {
    const snapshot = await getDocs(collection(db, "students"));

    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setStudents(list);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add Student

  const addStudent = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.rollNo
    ) {
      alert("Fill all fields");
      return;
    }

    await addDoc(collection(db, "students"), form);

    setForm({
      name: "",
      email: "",
      rollNo: "",
      department: "",
      semester: "",
    });

    fetchStudents();
  };

  // Delete

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete Student?"))
      return;

    await deleteDoc(doc(db, "students", id));

    fetchStudents();
  };

  const filtered = students.filter((s) =>
    s.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Top */}

      <div className="rounded-3xl bg-white p-6 shadow">

        <div className="flex items-center gap-3">

          <Users className="text-blue-600" />

          <h1 className="text-3xl font-bold">

            Student Management

          </h1>

        </div>

      </div>

      {/* Add Student */}

      <div className="rounded-3xl bg-white p-6 shadow">

        <h2 className="mb-6 text-2xl font-bold">

          Add Student

        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            placeholder="Full Name"
            className="rounded-xl border p-3"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="College Email"
            className="rounded-xl border p-3"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            placeholder="Roll Number"
            className="rounded-xl border p-3"
            value={form.rollNo}
            onChange={(e) =>
              setForm({
                ...form,
                rollNo: e.target.value,
              })
            }
          />

          <input
            placeholder="Department"
            className="rounded-xl border p-3"
            value={form.department}
            onChange={(e) =>
              setForm({
                ...form,
                department: e.target.value,
              })
            }
          />

          <input
            placeholder="Semester"
            className="rounded-xl border p-3"
            value={form.semester}
            onChange={(e) =>
              setForm({
                ...form,
                semester: e.target.value,
              })
            }
          />

        </div>

        <button
          onClick={addStudent}
          className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />

          Add Student

        </button>

      </div>

      {/* Search */}

      <div className="rounded-3xl bg-white p-6 shadow">

        <div className="flex items-center rounded-xl border px-4">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            placeholder="Search Student..."
            className="w-full p-3 outline-none"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      {/* Table */}

      <div className="rounded-3xl bg-white p-6 shadow overflow-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                Name
              </th>

              <th>Email</th>

              <th>Roll No</th>

              <th>Department</th>

              <th>Semester</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((student) => (

              <tr
                key={student.id}
                className="border-b"
              >

                <td className="p-3">
                  {student.name}
                </td>

                <td>{student.email}</td>

                <td>{student.rollNo}</td>

                <td>{student.department}</td>

                <td>{student.semester}</td>

                <td>

                  <button
                    onClick={() =>
                      deleteStudent(student.id)
                    }
                    className="rounded-lg bg-red-100 p-2 text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Students;
import { useState } from "react";

import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

function Students() {
  const [refresh, setRefresh] = useState(false);

  const refreshStudents = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="space-y-8">

      <StudentForm
        refreshStudents={refreshStudents}
      />

      <StudentTable
        refresh={refresh}
      />

    </div>
  );
}

export default Students;