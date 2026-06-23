import React from "react";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();

  const openPayroll = () => {
    navigate("/admin/payroll");
  };

  const openEmployees = () => {
    navigate("/admin/employees");
  };

  const goDashboard = () => {
    navigate("/admin");
  };

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold">
          Reports
        </h1>

        <p className="mt-2 text-slate-500">
          Navigate using useNavigate()
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-3">

        <button
          onClick={openEmployees}
          className="rounded-3xl bg-white p-6 shadow hover:shadow-md"
        >
          👥 Employee Report
        </button>

        <button
          onClick={openPayroll}
          className="rounded-3xl bg-white p-6 shadow hover:shadow-md"
        >
          💰 Payroll Report
        </button>

        <button
          onClick={goDashboard}
          className="rounded-3xl bg-white p-6 shadow hover:shadow-md"
        >
          📊 Dashboard
        </button>

      </div>

    </div>
  );
};

export default Reports;