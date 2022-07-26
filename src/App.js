
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./Components/DashboardLayout";
import BlockHeadDashboard from "./Components/Dashboards/BlockHeadDB";
import DistricteadDashboard from "./Components/Dashboards/DistrictHeadDB";
import FilterScreen from "./Components/Dashboards/FilterScreen";
import PublicDashboard from "./Components/Dashboards/PublicDashboard";
import StateHeadDashboard from "./Components/Dashboards/StateHeadDB";
import StudentsdDashboard from "./Components/Dashboards/StudentsDB";
import TeacherDashboard from "./Components/Dashboards/TeacherDB";
import Login from "./Components/Forms/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Forms/Register";
import ResetPassword from "./Components/Forms/ResetPassword";

function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<PublicDashboard />} />
            <Route path="student" element={<StudentsdDashboard />} />
            <Route path="teacher" element={<TeacherDashboard />} />
            <Route path="block" element={<BlockHeadDashboard />} />
            <Route path="district" element={<DistricteadDashboard />} />
            <Route path="state" element={<StateHeadDashboard />} />
            <Route path="filter" element={<FilterScreen />} />
            <Route path="filter/:class/:type" element={<FilterScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="resetPassword" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
