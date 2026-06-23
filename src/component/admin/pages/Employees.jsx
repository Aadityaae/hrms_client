import React, { useState } from "react";

const Employees = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] =
    useState(false);

  const [employees, setEmployees] =
    useState([
      {
        id: "EMP001",
        name: "Rahul Sharma",
        role: "Frontend Developer",
        status: "Active",
      },
      {
        id: "EMP002",
        name: "Priya Verma",
        role: "HR Manager",
        status: "Active",
      },
    ]);

  const [form, setForm] =
    useState({
      id: "",
      name: "",
      role: "",
      status: "Active",
    });

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addEmployee = (e) => {
    e.preventDefault();

    if (
      !form.id ||
      !form.name ||
      !form.role
    ) {
      alert("Fill all fields");
      return;
    }

    if (isEditing) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === form.id
            ? form
            : emp
        )
      );

      setIsEditing(false);

    } else {
      setEmployees((prev) => [
        ...prev,
        form,
      ]);
    }

    setForm({
      id: "",
      name: "",
      role: "",
      status: "Active",
    });

    setShowForm(false);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(
        (emp) =>
          emp.id !== id
      )
    );
  };

  const viewEmployee = (
    employee
  ) => {
    alert(`
ID: ${employee.id}
Name: ${employee.name}
Role: ${employee.role}
Status: ${employee.status}
`);
  };

  const editEmployee = (
    employee
  ) => {
    setForm(employee);
    setShowForm(true);
    setIsEditing(true);
  };

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Employee Directory
          </h1>

          <p className="mt-2 text-slate-500">
            Total Employees:
            {" "}
            {employees.length}
          </p>

        </div>

        <button
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);

            setForm({
              id: "",
              name: "",
              role: "",
              status: "Active",
            });
          }}
          className="rounded-2xl bg-sky-600 px-6 py-3 text-white"
        >
          + Add Employee
        </button>

      </div>

      {showForm && (

        <div className="rounded-3xl bg-white p-6 shadow">

          <h2 className="mb-5 text-2xl font-bold">

            {isEditing
              ? "Edit Employee"
              : "Add Employee"}

          </h2>

          <form
            onSubmit={
              addEmployee
            }
            className="grid gap-4"
          >

            <input
              name="id"
              value={form.id}
              onChange={
                handleChange
              }
              disabled={
                isEditing
              }
              placeholder="Employee ID"
              className="rounded-xl border p-3"
            />

            <input
              name="name"
              value={form.name}
              onChange={
                handleChange
              }
              placeholder="Employee Name"
              className="rounded-xl border p-3"
            />

            <input
              name="role"
              value={form.role}
              onChange={
                handleChange
              }
              placeholder="Position"
              className="rounded-xl border p-3"
            />

            <select
              name="status"
              value={
                form.status
              }
              onChange={
                handleChange
              }
              className="rounded-xl border p-3"
            >
              <option>
                Active
              </option>

              <option>
                On Leave
              </option>

            </select>

            <div className="flex gap-3">

              <button
                className="rounded-xl bg-green-600 px-5 py-3 text-white"
              >
                {isEditing
                  ? "Update"
                  : "Save"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowForm(
                    false
                  );

                  setIsEditing(
                    false
                  );

                  setForm({
                    id: "",
                    name: "",
                    role: "",
                    status:
                      "Active",
                  });
                }}
                className="rounded-xl bg-red-500 px-5 py-3 text-white"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      )}

      <div className="rounded-3xl bg-white shadow">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Employees
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-50">

                <th className="p-5 text-left">
                  ID
                </th>

                <th className="p-5 text-left">
                  Employee
                </th>

                <th className="p-5 text-left">
                  Role
                </th>

                <th className="p-5 text-left">
                  Status
                </th>

                <th className="p-5 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {employees.map(
                (emp) => (

                  <tr
                    key={emp.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-5">
                      {emp.id}
                    </td>

                    <td className="p-5">
                      {emp.name}
                    </td>

                    <td className="p-5">
                      {emp.role}
                    </td>

                    <td className="p-5">

                      <span
                        className={`rounded-full px-3 py-1 ${
                          emp.status ===
                          "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {
                          emp.status
                        }
                      </span>

                    </td>

                    <td className="p-5">

                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() =>
                            viewEmployee(
                              emp
                            )
                          }
                          className="rounded-lg bg-blue-500 px-3 py-2 text-white"
                        >
                          View
                        </button>

                        <button
                          onClick={() =>
                            editEmployee(
                              emp
                            )
                          }
                          className="rounded-lg bg-yellow-500 px-3 py-2 text-white"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            deleteEmployee(
                              emp.id
                            )
                          }
                          className="rounded-lg bg-red-500 px-3 py-2 text-white"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Employees;