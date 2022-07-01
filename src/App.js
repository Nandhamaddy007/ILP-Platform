import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardLayout from './Compnents/DashboardLayout';
import BlockHeadDashboard from './Compnents/Dashboards/BlockHeadDB';
import DistricteadDashboard from './Compnents/Dashboards/DistrictHeadDB';
import PublicDashboard from './Compnents/Dashboards/PublicDashboard';
import StateHeadDashboard from './Compnents/Dashboards/StateHeadDB';
import StudentsdDashboard from './Compnents/Dashboards/StudentsDB';
import TeacherDashboard from './Compnents/Dashboards/TeacherDB';
import Login from './Compnents/Forms/Login';
import Navbar from './Compnents/Navbar';


function App() {
  
 
  return (
   <>
   <BrowserRouter>
   <Navbar  />
   <Routes>
    <Route path="/" element={<DashboardLayout />} >
      <Route index element={<PublicDashboard />} />
    <Route path="student" element={<StudentsdDashboard />} />
    <Route path="teacher" element={<TeacherDashboard />} />
    <Route path="block" element={<BlockHeadDashboard />} />
    <Route path="district" element={<DistricteadDashboard />} />
    <Route path="state" element={<StateHeadDashboard />} />
    <Route path="login" element={<Login />} />
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
