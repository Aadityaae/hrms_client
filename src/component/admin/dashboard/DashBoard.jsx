import React from "react";

const DashBoard = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "248",
      icon: "👥",
      color: "bg-sky-500",
    },
    {
      title: "Present Today",
      value: "219",
      icon: "✅",
      color: "bg-green-500",
    },
    {
      title: "Absent",
      value: "29",
      icon: "❌",
      color: "bg-red-500",
    },
    {
      title: "Monthly Payroll",
      value: "₹18.2L",
      icon: "💰",
      color: "bg-purple-500",
    },
  ];

  const activities = [
    "New employee joined — Priya Sharma",
    "Payroll processed for June",
    "Attendance updated",
    "Employee ID generated",
    "Leave request approved",
  ];

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white p-6 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white ${item.color}`}
              >
                {item.icon}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Middle Section */}
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">

        {/* Attendance */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <div className="flex justify-between">

            <h2 className="text-xl font-bold">
              Attendance Overview
            </h2>

            <span className="font-semibold text-green-600">
              88%
            </span>

          </div>

          <div className="mt-5 h-5 overflow-hidden rounded-full bg-slate-200">

            <div className="h-full w-[88%] rounded-full bg-green-500" />

          </div>

          <div className="mt-4 flex justify-between text-sm text-slate-500">
            <span>219 Present</span>
            <span>29 Absent</span>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-bold">
            Quick Actions
          </h2>

          <div className="flex flex-col gap-3">

            <button className="rounded-xl bg-sky-600 p-3 text-white hover:bg-sky-700">
              Add Employee
            </button>

            <button className="rounded-xl border p-3 hover:bg-slate-100">
              Generate Payroll
            </button>

            <button className="rounded-xl border p-3 hover:bg-slate-100">
              Export Report
            </button>

          </div>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-xl font-bold">
          Recent Activity
        </h2>

        <div className="space-y-3">

          {activities.map((activity, index) => (
            <div
              key={index}
              className="rounded-xl border p-4 hover:bg-slate-50"
            >
              {activity}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default DashBoard;