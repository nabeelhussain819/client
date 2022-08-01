import React, { useState, useEffect } from "react";
import { AuthTeacher } from "../../../Api/Teacher";
import { AuthTeacherQec } from "../../../Api/SpecificData/AuthUser";
import BarChart from "../partials/BarChart";
import LineChart from "../partials/Charts";
import LineChart1 from "../partials/LineChart";
import LineChart2 from "../partials/LineChart_1";

function Dashboard() {
  const [rating, setRating] = useState([]);
  const [name, setName] = useState([]);
  const [depart, setDepart] = useState(false);
  const [session, setSession] = useState(false);
  const [Semester, setSemester] = useState(false);
  const [course, setCourse] = useState(false);
  const [program, setProgram] = useState(false);
  function handleButton(props) {
    if (props == "depart") {
      setDepart(true);
    } else {
      setDepart(false);
    }
    if (props == "session") {
      setSession(true);
    } else {
      setSession(false);
    }
    if (props == "program") {
      setProgram(true);
    } else {
      setProgram(false);
    }
    if (props == "semester") {
      setSemester(true);
    } else {
      setSemester(false);
    }
    if (props == "course") {
      setCourse(true);
    } else {
      setCourse(false);
    }
  }
  useEffect(() => {
    const getData = () => {
      AuthTeacher().then(function (result) {
        result.map((data) => (data == false ? null : setName([data])));
      });
      AuthTeacherQec().then(function (result) {
        console.log(result);
      });
    };

    getData();
  }, []);
  return (
    <>
     <div className="top">
        </div>
        <div className="container-fluid"></div>
        <div className="container-fluid mb-4">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title font-size-30 text-dark">
                      Hi, {localStorage.getItem("data")} Welcome Back!
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>Home</li>
                    <li>User Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-4 ">
              <div className="col-lg-3 responsive-column-m ">
                <div className="icon-box  icon-layout-2 dashboard-icon-box">
                  <div className="d-flex">
                    <div className="info-icon icon-element flex-shrink-0">
                      <i className="la la-shopping-cart"></i>
                    </div>
                    <div className="info-content">
                      <p className="info__desc">Total Courses</p>
                      <h4 className="info__title">
                        {name.map((data) => {
                          return (
                            <>
                              {data == false ? null : (
                                <>{data.courseId.length}</>
                              )}
                            </>
                          );
                        })}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column-m">
                <div className="icon-box icon-layout-2 dashboard-icon-box">
                  <div className="d-flex">
                    <div className="info-icon icon-element bg-2 flex-shrink-0">
                      <i className="la la-bookmark"></i>
                    </div>
                    <div className="info-content">
                      <p className="info__desc">You Loged In </p>
                      <h4 className="info__title">
                        {name.map((data) => {
                          return (
                            <>
                              {data == false ? null : <>{data.tokens.length}</>}
                            </>
                          );
                        })}{" "}
                        times
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column-m">
                <div className="icon-box icon-layout-2 dashboard-icon-box">
                  <div className="d-flex">
                    <div className="info-icon icon-element bg-3 flex-shrink-0">
                      <i className="la la-plane"></i>
                    </div>
                    <div className="info-content">
                      <p className="info__desc">Comment</p>
                      <h4 className="info__title">
                        {name.map((data) => {
                          return (
                            <>
                              {data == false ? null : (
                                <>{data.comment.length}</>
                              )}
                            </>
                          );
                        })}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column-m">
                <div className="icon-box icon-layout-2 dashboard-icon-box">
                  <div className="d-flex">
                    <div className="info-icon icon-element bg-4 flex-shrink-0">
                      <i className="la la-star"></i>
                    </div>
                    <div className="info-content">
                      <p className="info__desc">Rating</p>
                      <h4 className="info__title">
                        {name.map((data) => {
                          return (
                            <>{data == false ? null : <>{data.rating}</>}</>
                          );
                        })}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <section className="dashboard-content-wrap " style={{marginTop:"50px"}}>
       
        <div className="dashboard-main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 responsive-column--m">
                <div className="form-box shadow-lg">
                  <div className="form-title-wrap">
                    <h3 className="title">Statics Results</h3>
                  </div>
                </div>
                <LineChart data={name} />
              </div>
              <div className="col-lg-6 responsive-column--m">
                <div className="form-box dashboard-card shadow-lg">
                  <div className="form-title-wrap">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="title">Notifications</h3>
                    </div>
                  </div>
                  <div className="form-content p-0">
                    <div className="list-group drop-reveal-list">
                      {name.slice(0, 5).map((data) => {
                        return (
                          <>
                            {data == false ? null : (
                              <>
                                {" "}
                                <div className="list-group-item list-group-item-action border-top-0">
                                  <div className="msg-body d-flex align-items-center">
                                    <div className="icon-element flex-shrink-0 mr-3 ml-0">
                                      <i className="la la-bell"></i>
                                    </div>
                                    <div className="msg-content w-100">
                                      <h3 className="title pb-1">{data.comment}</h3>
                                    </div>
                                    <span
                                      className="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                                      data-toggle="tooltip"
                                      data-placement="left"
                                      title=""
                                      data-original-title="Mark as read"
                                    >
                                      <i className="la la-check-square"></i>
                                    </span>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 responsive-column--m">
                <div className="form-box shadow-lg">
                  <div className="form-title-wrap">
                    <h3 className="title">Statics Results</h3>
                  </div>
                </div>
                <LineChart1 />
              </div>
              <div className="col-lg-6 responsive-column--m">
                <div className="form-box shadow-lg">
                  <div className="form-title-wrap">
                    <h3 className="title">Statics Results</h3>
                  </div>
                </div>
                <LineChart2 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
