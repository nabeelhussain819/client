import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthUser,AuthStudentTeacher } from "../../Api/SpecificData/AuthUser";

 export default function ItemCarousel({data, api}){
    let navigate = useNavigate();
    const [course, setCourse] = useState([]);
    const [teacher, setTeacher] = useState([]);
    console.log(course)
    useEffect(() => {
      const getData = () => {
        AuthUser().then(function (result) {
          setCourse([result]);
        });
        AuthStudentTeacher().then(function (result) {
            setTeacher(result);
          });
      };
      getData();
    }, []);
    return(
    <section class="projects mt-4" id="section_4">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-12 ms-auto">
                <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                {api === "students"  ? null : <h2 class="text-white ms-4 mb-0">More {api}</h2>}
                </div>
            </div>

            <div class="clearfix"></div>
           
            {api === 'courses' && course.map((data) =>
                        data.courseId.map((index, i) => {
                          return (
                        
            <div class="col-lg-4 col-md-6 col-12">
                <div class="projects-thumb">
                    <div class="projects-info">
                        <small class="projects-tag">{index.code}</small>
                        <Link    to={"/details/" + index._id}
                            state={{ from: index, api: "courses" }}>
                        <h3 class="projects-title">{index.name}</h3></Link>
                    </div>
                </div>
            </div>
                          )}))}
            {api === 'teachers' && teacher.map((data) =>
                        data.teacherId.map((index, i) => {
                          return (
                        
            <div class="col-lg-4 col-md-6 col-12">
                <div class="projects-thumb">
                    <div class="projects-info">
                        <small class="projects-tag">{index.code}</small>
                        <Link    to={"/details/" + index._id}
                            state={{ from: index, api: "courses" }}>
                        <h3 class="projects-title">{index.name}</h3></Link>
                    </div>
                </div>
            </div>
                          )}))}
       

        </div>
    </div>
</section>)
 }