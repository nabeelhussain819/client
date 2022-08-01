import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Setting from "../Pages/Admin/Create/Setting";

import Dashboard from "../Pages/Admin/Dashboard";
import Comments from "../Pages/Admin/Index/Comment";
import Complains from "../Pages/Admin/Index/Complain";
import Courses from "../Pages/Admin/Index/Courses";
import Departments from "../Pages/Admin/Index/Departments";
import Programs from "../Pages/Admin/Index/Programs";
import QEC from "../Pages/Admin/Index/Qec";
import Semesters from "../Pages/Admin/Index/Semester";
import Sessions from "../Pages/Admin/Index/Sessions";
import Students from "../Pages/Admin/Index/Students";
import Teachers from "../Pages/Admin/Index/Teachers";
import TecQEC from "../Pages/Admin/Index/TecQec";
import Details from "../Pages/Admin/Partials/Details";
import Header from "../Pages/Admin/Partials/Header";
import Sidebar from "../Pages/Admin/Partials/Sidebar";
import { Home } from "../Pages/Home";



function Admin() {
  return (
    <>
      <section className="dashboard-area">
  
        <Sidebar />
        <Header />
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/students" element={<Students />} />
            <Route path="/semesters" element={<Semesters />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/complains" element={<Complains />} />
            <Route path="/qec" element={<QEC />} />
            <Route path="/tec-qec" element={<TecQEC />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/setting" element={<Setting />} />
           
          </Routes>
        </Fragment>
      </section>
    </>
  );
}

export default Admin;
