import React from "react";
import logo1 from "../../../Assets/logo.png";
import Logout from "../../../Components/Logout";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div className="sidebar-nav sidebar--nav hidden-print bg-dark">
        <div className="sidebar-nav-body">
          <div className="side-menu-close">
            <i className="la la-times"></i>
          </div>
          <div className="author-content">
            <div className="d-flex align-items-center">
              <div className="author-img avatar-sm">
                <img src={logo1} alt="testimonial image" />
              </div>
              <div className="author-bio">
                <h4 className="author__title">ADMIN</h4>
                <span className="author__meta text-light">Welcome to Admin Panel</span>
              </div>
            </div>
          </div>
          <div className="sidebar-menu-wrap">
            <ul className="sidebar-menu toggle-menu list-items">
              <li >
                <Link to="dashboard">
                  <i className="la la-dashboard mr-2"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link to="departments">
                  <i className="la la-shopping-cart mr-2 text-color"></i>Departments
                </Link>
              </li>
              <li>
                <Link to="programs">
                  <i className="la la-list mr-2 text-color-2"></i>Programs
                </Link>
              </li>
              <li>
                <Link to="teachers">
                  <i className="la la-users mr-2 text-color-3"></i>Teachers
                </Link>
              </li>
              <li>
                <Link to="students">
                  <i className="la la-users mr-2 text-color-3"></i>Students
                </Link>
              </li>
              <li>
                <Link to="sessions">
                  <i className="la la-star mr-2 text-color-3"></i>Sessions
                </Link>
              </li>
              <li>
                <Link to="semesters">
                  <i className="la la-heart mr-2 text-color-3"></i>Semesters
                </Link>
              </li>
              <li>
                <Link to="Courses">
                  <i className="la la-text-width mr-2 text-color-3"></i>Courses
                </Link>
              </li>
              <li>
                <Link to="complains">
                  <i className="la la-area-chart mr-2 text-color-3"></i>Complians
                </Link>
              </li>
              <li>
                <Link to="comments">
                  <i className="la la-area-chart mr-2 text-color-3"></i>Comments
                </Link>
              </li>
              <li>
              <Link to="tec-qec">
                  <i className="la la-area-chart mr-2 text-color-3"></i>QEC Results Of Teachers
                </Link>
              </li>
              <li>
              <Link to="qec">
                  <i className="la la-area-chart mr-2 text-color-3"></i>QEC Results Of Students
                </Link>
              </li>
              <li>
              <Link to="setting">
              <i className="la la-cog mr-2 text-color-10"></i>Settings
                </Link>
              </li>
              <li className="custom-btn">
                
                <Logout/>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
