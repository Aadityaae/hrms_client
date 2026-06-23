import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./component/loginpage/Login";
import SignUp from "./component/signuppage/signup";

import Panel from "./component/admin/panel";

import DashBoard from "./component/admin/dashboard/DashBoard";

import Employees from "./component/admin/pages/Employees";
import Attendance from "./component/admin/pages/Attendance";
import Payroll from "./component/admin/pages/Payroll";
import Reports from "./component/admin/pages/Reports";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<SignUp />}
        />

        {/* Admin Panel */}
        <Route
          path="/admin"
          element={<Panel />}
        >

          {/* Dashboard */}
          <Route
            index
            element={<DashBoard />}
          />

          {/* Employees */}
          <Route
            path="employees"
            element={<Employees />}
          />

          {/* Attendance */}
          <Route
            path="attendance"
            element={<Attendance />}
          />

          {/* Payroll */}
          <Route
            path="payroll"
            element={<Payroll />}
          />

          {/* Reports */}
          <Route
            path="reports"
            element={<Reports />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;