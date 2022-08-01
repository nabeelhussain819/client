import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReadCourse } from "../../../Api/Course";
import { AuthTeacherStudents } from "../../../Api/SpecificData/AuthUser";

const Students = () => {
  const [show, setShow] = useState(false);
  const [dept, setDept] = useState([]);
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState([]);
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  useEffect(() => {
    const getData = () => {
      AuthTeacherStudents().then(function (result) {
        setDept(result);
      });
    };
    getData();
  }, []);

  return (
    <>
     <div className="top"></div>
         <section class="services section-padding" id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">

                                <h2 class="text-white ms-4 mb-0">Enrolled Students</h2>
                                
                            </div>
                            <div class="row pt-lg-5">
                            {dept.map((data) =>
                        data.studentId.map((index, i) => {
                          return (
                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">{index.name}</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">{i + 1}</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>{index.email}</p>
                                        <p>{index.phone}</p>
                                        <Link
                                    to={"/details/" + index._id}
                                    class="custom-btn custom-border-btn btn mt-3"
                                    state={{ from: index, api: "students" }}
                                  >
                                  Discover More
                                  </Link>
                                    </div>
                                </div>
                          )}))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  
  );
};

export default Students;
