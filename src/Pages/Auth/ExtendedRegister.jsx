import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GetProgram,
  GetSemester,
  ReadDepartment,
  GetCourse,
} from "../../Api/Department";
import { GetSession } from "../../Api/Department";
import smiu from "../../Assets/smiu2.jpg";
import { ReadCourse } from "../../Api/Course";

export default function ExtendedForm() {
  const [fullscreen, setFullscreen] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [program, setProgram] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [deptId, setDeptId] = useState("");
  const [depart, setDepart] = useState(false);
  const [session, setSession] = useState(false);
  const [programId, setProgramId] = useState("");
  const [Semester, setSemester] = useState(false);
  const [course, setCourse] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [semesterId, setSemesterId] = useState("");
  const [departApi, setDepartApi] = useState([]);
  const [sessionApi, setSessionApi] = useState([]);
  const [programApi, setProgramApi] = useState([]);
  const [semesterApi, setSemesterApi] = useState([]);
  const [courseApi, setCourseApi] = useState([]);
  const [studentId, setStudentId] = useState(localStorage.getItem("user"));
  const [teacherId, setTeacherId] = useState(localStorage.getItem("isTeacher"));
  const [res, setResCourse] = useState([]);
  const filterData = localStorage.getItem("isTeacher")
    ? courseApi.filter((data) => data.name.includes(searchData))
    : courseApi;
  function handleNext(data) {
    setDeptId(data);
    setDepart(false);
    setSession(true);
    getData1({ data });
  }
  function handleNextSession(data) {
    setSessionId(data);
    setSession(false);
    setProgram(true);
    getData2({ data });
  }
  function handleNextProgram(data) {
    setProgramId(data);
    setProgram(false);
    if (localStorage.getItem("isTeacher")) {
      setCourse(true);
      getData5();
    } else {
      setSemester(true);
      getData3({ data });
    }
  }
  function handleNextSemester(data) {
    setSemesterId(data);
    setSemester(false);
    setCourse(true);
    getData4({ data });
  }
  const extendedRegisterUser = async (e) => {
    const res = await fetch("http://localhost:5000/extendedRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        deptId,
        sessionId,
        programId,
        semesterId,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error(data.error);
    } else {
      toast.success("register Successfully");
      localStorage.removeItem("verify")
      navigate("/");
    }
  };
  console.log(studentId, teacherId);
  const registerCourse = async (courseId) => {
    var answer = window.confirm("Save data?");
    if (answer) {
      const res = await fetch("http://localhost:5000/add-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        courseId,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error(data.error  );
    } else {
      setResCourse((old) => [...old, data.courseId]);
      localStorage.setItem("courseId", data.courseId);
      toast.success("Course registered Successfully");
      setFullscreen(true);
    }
    } else {
      toast.info("Course not registered");
    }
   
  };
  
  const getData5 = () => {
    ReadCourse().then(function (result) {
      setCourseApi(result);
    });
  };
  const getData4 = ({ data }) => {
    GetCourse({ data: data }).then(function (result) {
      setCourseApi(result);
    });
  };
  const getData3 = ({ data }) => {
    GetSemester({ data: data }).then(function (result) {
      setSemesterApi(result);
    });
  };
  const getData1 = ({ data }) => {
    GetSession({ data: data }).then(function (result) {
      setSessionApi(result);
    });
  };
  const getData2 = ({ data }) => {
    GetProgram({ data: data }).then(function (result) {
      setProgramApi(result);
    });
  };
  useEffect(() => {
    const getData = () => {
      ReadDepartment().then(function (result) {
        setDepartApi(result);
      });
    };
    if (localStorage.getItem("isTeacher") || localStorage.getItem("user")) {
      setShow(true);
    }
    getData();  
  }, []);
  return (
    <>
    <section class="hero6" style={{paddingBottom:"2000px"}}  id="section_1">
    <div class="container mt-4" style={{padding:"100px"}}>
    <div class="col-lg-12">
                              <div class="services-thumb">
                                  <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                      <h3 class="mb-0">Add Your Services</h3>

                                      <div class="services-price-wrap ms-auto">
                                          <p class="services-price-text mb-0"></p>
                                          <div class="services-price-overlay"></div>
                                      </div>
                                  </div>

                                  <div className="form-content contact-form-action">
                      <div className="col-lg-12 responsive-column">
                        <div className="input-box">
                          <label className="label-text">1) Select Department</label>
                          <div className="form-group">
                            <span className="la la-briefcase form-icon"></span>
                            <select
                              className="select-wrap-form form-control"
                              tabindex="-98"
                              onChange={(e) => handleNext(e.target.value)}
                            >
                              <option>Select One</option>
                              {departApi.map((data) => {
                                return (
                                  <>
                                    <option value={data._id}>{data.name}</option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 responsive-column">
                        <div className="input-box">
                          <label className="label-text">2) Select Session</label>
                          <div className="form-group">
                            <span className="la la-briefcase form-icon"></span>
                            <select
                              className="select-wrap-form form-control"
                              tabindex="-98"
                              onChange={(e) => handleNextSession(e.target.value)}
                            >
                              {sessionApi.map((data) => {
                                return (
                                  <>
                                    {data == false ? null : (
                                      <>
                                        <option>Select One</option>
                                        {data.sessionId.map((index) => {
                                          return (
                                            <>
                                              <option value={index._id}>
                                                {index.name}
                                              </option>
                                            </>
                                          );
                                        })}
                                      </>
                                    )}
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 responsive-column">
                        <div className="input-box">
                          <label className="label-text">3) Select Program</label>
                          <div className="form-group">
                            <span className="la la-briefcase form-icon"></span>
                            <select
                              className="select-wrap-form form-control"
                              tabindex="-98"
                              onChange={(e) => handleNextProgram(e.target.value)}
                            >
                              {programApi.map((data) => {
                                return (
                                  <>
                                    {data == false ? null : (
                                      <>
                                        <option>Select One</option>
                                        {data.programId.map((index) => {
                                          return (
                                            <>
                                              <option value={index._id}>
                                                {index.name}
                                              </option>
                                            </>
                                          );
                                        })}
                                      </>
                                    )}
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      {localStorage.getItem("isTeacher") ? null : (
                        <div className="col-lg-12 responsive-column">
                          <div className="input-box">
                            <label className="label-text">4) Select Semester</label>
                            <div className="form-group">  
                              <select
                                className="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => handleNextSemester(e.target.value)}
                              >
                                {semesterApi.map((data) => {
                                  return (
                                    <>
                                      {data == false ? null : (
                                        <>
                                          <option>Select One</option>
                                          {data.semesterId.map((index) => {
                                            return (
                                              <>
                                                <option value={index._id}>
                                                  semester-{index.name}
                                                </option>
                                              </>
                                            );
                                          })}
                                        </>
                                      )}
                                    </>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="col-lg-12">
                        <div className="input-box">
                          <label className="label-text">
                            5) Select Your Course (Click On The Course)
                          </label>
                          {course && (
                            <>
                              {localStorage.getItem("isTeacher") ? (
                                <>
                                  <div className="container p-4">
                                    <h4 className="text-dark">Search Course</h4>
                                    <div>
                                      <input
                                        type="text"
                                        placeholder="Search Courses By Name"
                                        onChange={(e) => setSearchData(e.target.value)}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </>
                              ) : null}

                              {filterData.map((data, i) => {
                                return (
                                  <>
                                    {localStorage.getItem("isTeacher") ? (
                                      <>
                                        <li>
                                          <button
                                            className="bg-transparent border-0"
                                            onClick={() => registerCourse(data._id)}
                                          >
                                            {i + 1}) {data.name}{" "}
                                            {res.map(
                                              (item) =>
                                                item == data._id && (
                                                  <i className="la la-check-circle mr-1"></i>
                                                )
                                            )}
                                          </button>
                                        </li>
                                      </>
                                    ) : (
                                      <>
                                        {data == false ? null : (
                                          <>
                                            <div className="col-lg-12 responsive-column--m">
                                              <ul>
                                                {data.courseId.map((index, i) => {
                                                  return (
                                                    <>
                                                      <li>
                                                        <button
                                                          className="bg-transparent border-0 text-dark"
                                                          onClick={() =>
                                                            registerCourse(index._id)
                                                          }
                                                        >
                                                          {i + 1}) {index.name}
                                                        </button>
                                                        {res.map(
                                                          (item) =>
                                                            item == index._id && (
                                                              <i className="la la-check-circle mr-1"></i>
                                                            )
                                                        )}
                                                      </li>
                                                    </>
                                                  );
                                                })}
                                              </ul>
                                            </div>
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                );
                              })}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        {fullscreen && (
                          <button
                            className="custom-btn col-lg-12"
                            onClick={() => extendedRegisterUser()}
                          >
                            Done!
                          </button>
                        )}
                      </div>
                    </div>
                                    </div>
          </div> </div>
              
                 
 </section>
    </>
  );
}
