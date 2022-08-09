
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Teacher/Layout";
// import BlockHeadDashboard from "./Components/Dashboards/BlockHeadDB";
// import DistricteadDashboard from "./Components/Dashboards/DistrictHeadDB";
import FilterScreen from "./dumps/Components/Dashboards/FilterScreen";
// import StateHeadDashboard from "./Components/Dashboards/StateHeadDB";
// import StudentsdDashboard from "./Components/Dashboards/StudentsDB";
// import TeacherDashboard from "./Components/Dashboards/TeacherDB";
// import Navbar from "./Components/Navbar";
// import WelcomePage from "./Components/Dashboards/welcomepage";
import Login from "./Components/Forms/Login";
import Register from "./Components/Forms/Register";
import ResetPassword from "./Components/Forms/ResetPassword";
import PublicDashboard from "./Components/PublicDashboard";
import Activities from "./Components/Teacher/Activities";
import FirstView from "./Components/main/FirstView";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<PublicDashboard />} />
          {/* <Route path="/teacher" element={<Layout />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/activities" element={<Activities />} />{" "}
          <Route path="filter" element={<FilterScreen />} />
          <Route path="filter/:class/:type" element={<FilterScreen />} />
          <Route path="/teacher" element={<FirstView />} />
        </Routes>
      </BrowserRouter>
      {/* 
            <Route path="student" element={<StudentsdDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="block" element={<BlockHeadDashboard />} />
            <Route path="district" element={<DistricteadDashboard />} />
            <Route path="state" element={<StateHeadDashboard />} />
            <Route path="/welcomepage" element={<WelcomePage />} /> */}
    </>
  );
}

export default App;
