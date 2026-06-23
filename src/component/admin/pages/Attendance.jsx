import React from "react";

const Attendance = () => {
  const attendance = [
    {
      name: "Rahul Sharma",
      status: "Present",
      time: "09:04 AM",
    },
    {
      name: "Priya Verma",
      status: "Present",
      time: "08:55 AM",
    },
    {
      name: "Arjun Mehta",
      status: "Absent",
      time: "--",
    },
    {
      name: "Ananya Gupta",
      status: "Present",
      time: "09:11 AM",
    },
  ];

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold">
          Attendance
        </h1>

        <p className="mt-2 text-slate-500">
          Today's employee attendance
        </p>

      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-4 text-left">
                Employee
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Check In
              </th>

            </tr>

          </thead>

          <tbody>

            {attendance.map((emp, index) => (
              <tr
                key={index}
                className="border-b"
              >

                <td className="p-4">
                  {emp.name}
                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 ${
                      emp.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {emp.status}
                  </span>

                </td>

                <td className="p-4">
                  {emp.time}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Attendance;