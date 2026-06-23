import React from "react";

const Payroll = () => {
  const payroll = [
    {
      name: "Rahul Sharma",
      salary: "₹95,000",
      status: "Paid",
    },
    {
      name: "Priya Verma",
      salary: "₹82,000",
      status: "Paid",
    },
    {
      name: "Arjun Mehta",
      salary: "₹78,000",
      status: "Pending",
    },
    {
      name: "Ananya Gupta",
      salary: "₹88,000",
      status: "Paid",
    },
  ];

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold">
          Payroll
        </h1>

        <p className="mt-2 text-slate-500">
          Employee salary management
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
                Salary
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {payroll.map((emp, index) => (
              <tr
                key={index}
                className="border-b"
              >

                <td className="p-4">
                  {emp.name}
                </td>

                <td className="p-4">
                  {emp.salary}
                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 ${
                      emp.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {emp.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Payroll;