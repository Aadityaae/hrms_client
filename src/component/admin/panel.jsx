import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Panel() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">

      {/* Header */}
      <header className="flex flex-col gap-4 bg-white px-6 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

          <div className="rounded-2xl bg-sky-600 px-4 py-3 text-white">
            <span className="text-lg font-semibold">
              HRMS Admin
            </span>
          </div>

          <nav className="flex flex-wrap gap-2">

            <Link
              to="/admin"
              className="rounded-full px-4 py-2 hover:bg-slate-100"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/employees"
              className="rounded-full px-4 py-2 hover:bg-slate-100"
            >
              Employees
            </Link>

            <Link
              to="/admin/attendance"
              className="rounded-full px-4 py-2 hover:bg-slate-100"
            >
              Attendance
            </Link>

            <Link
              to="/admin/payroll"
              className="rounded-full px-4 py-2 hover:bg-slate-100"
            >
              Payroll
            </Link>

          </nav>

        </div>

        <div className="flex items-center gap-3">

          <input
            type="text"
            placeholder="Search..."
            className="rounded-xl border px-4 py-2"
          />

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white">
            A
          </div>

        </div>

      </header>

      {/* Body */}
      <div className="grid min-h-[calc(100vh-88px)] grid-cols-[260px_1fr] gap-6 p-6">

        {/* Sidebar */}
        <aside className="rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="mb-6 font-bold">
            HRMS Menu
          </h2>

          <div className="flex flex-col gap-3">

            <Link
              to="/admin"
              className="rounded-xl p-3 hover:bg-slate-100"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/employees"
              className="rounded-xl p-3 hover:bg-slate-100"
            >
              Employee Directory
            </Link>

            <Link
              to="/admin/attendance"
              className="rounded-xl p-3 hover:bg-slate-100"
            >
              Attendance
            </Link>

            <Link
              to="/admin/payroll"
              className="rounded-xl p-3 hover:bg-slate-100"
            >
              Payroll
            </Link>

            <Link
              to="/admin/reports"
              className="rounded-xl p-3 hover:bg-slate-100"
            >
              Reports
            </Link>

          </div>

        </aside>

        {/* Dynamic Page Content */}
        <main>

          <Outlet />

        </main>

      </div>

    </div>
  );
}