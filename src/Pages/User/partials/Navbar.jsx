import React, { useState } from "react";
import logo1 from "../../../Assets/logo-3.png";
import { Link } from "react-router-dom";
import Logout from "../../../Components/Logout";
import Dropdown from 'react-bootstrap/Dropdown';
import Profile from "../../Utilis/Profile";
import logo2 from "../../../Assets/logo-4.png";
import CourseEvaluate from "../../Qec/CourseEvaluate";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <div id="sticky-wrapper" class="sticky-wrapper " >
      <nav class="navbar navbar-expand-lg " >
            <div class="container shadow black">

                <button class="navbar-toggler  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Link to="/"  class="navbar-brand mx-auto mx-lg-0">
                <img
                          className="img-responsive go"
                          src={logo1}
                          alt="logo.jpg"
                          style={{ width: "150px" }}
                        />
                        <img
                          className="img-responsive go1"
                          src={logo2}
                          alt="logo.jpg"
                          style={{ width: "150px" }}
                        />
                      </Link>

                <div class="d-flex align-items-center d-lg-none">
                <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0 navColor" style={{backgroundColor:"transparent"}}>
                          Profile
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item > <Profile/></Dropdown.Item>
              <Dropdown.Item href="recover"> Change Password?</Dropdown.Item>
              <Dropdown.Item > <Logout /></Dropdown.Item>
              <Dropdown.Item > <Link to="dashboard">
                  <span>Dashboard</span>
                </Link></Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                   
                </div>

                <div class="navbar-collapse collapse" id="navbarNav" >
                    <ul class="navbar-nav  ms-lg-5">
                        <li class="nav-item">
             
              <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0 navColor" style={{backgroundColor:"transparent"}}>
                         Evaluation
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item >   <Link to="qec" className="pl-3">
                          About Evaluation
              </Link></Dropdown.Item>
              <Dropdown.Item className="bg-success"> <CourseEvaluate/> </Dropdown.Item>
                          </Dropdown.Menu>
              </Dropdown>
            </li>
            <li class="nav-item">
            <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0 navColor" style={{backgroundColor:"transparent"}}>
                         Pages
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item >   <Link to="Courses">
               Courses
              </Link></Dropdown.Item>
              <Dropdown.Item >  <Link to="teachers">
               Teachers
              </Link></Dropdown.Item>
                          </Dropdown.Menu>
              </Dropdown>
            </li>
            
            <li class="nav-item">
             
              <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0 navColor" style={{backgroundColor:"transparent"}}>
                         Report
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
              <Dropdown.Item ><Link to="complains">
              Complians
              </Link></Dropdown.Item>
                          </Dropdown.Menu>
              </Dropdown>
            </li>
            
            <li class="nav-item mt-2">
             <Link to="Enrolled" className="mt-3 border-0 navColor" >Enrolled</Link>
            </li>
            {localStorage.getItem("isTeacher") && (
              <li class="nav-item">
                <Link to="students">
                  Students
                </Link>
              </li>
            )}
            
                    </ul>
                  
                    <div class="d-lg-flex align-items-center d-none ms-auto">
                   
                        <div >
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0 navColor" style={{backgroundColor:"transparent"}}>
                          {localStorage.getItem("data")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item ><Profile/></Dropdown.Item>
              <Dropdown.Item href="../recover"> Change Password?</Dropdown.Item>
              <Dropdown.Item > <Logout /></Dropdown.Item>
              <Dropdown.Item > <Link to="dashboard">
                  <i className="la la-area-chart mr-2 text-color-3"></i>
                  <span>Dashboard</span>
                </Link></Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </div>
                </div>

            </div>
        </nav></div>
     
    </>
  );
};

export default Navbar;
