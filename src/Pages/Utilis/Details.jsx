import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Commend from "./Commend";
import Complain from "./Complain";
import myData from "../Qec/question.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemCarousel from "./ItemCarousel";
const Details = () => {
  const location = useLocation();
  const params = useParams();

  const { from, api } = location.state;
  console.log(api);

  function print() {
    window.print();
  }
  return (
    <div>
      <section class="hero6 d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">
                    {[from].map((data) => {
              return (
                <>
                        <div class="col-lg-7 col-12">
                            <div class="hero-text">
                                <div class="hero-title-wrap d-flex align-items-center">
                                    <h2 class="hero-title mb-0">{data.name}</h2>
                                </div>
                                {api == "teachers" && localStorage.getItem("id") && (
                            <Commend data={data} />
                          )}
                            </div>
                          
                        </div>
</>)})}
                    </div>
                </div> </section>
    <section class="featured section-padding">
                <div class="container">
                {[from].map((data) => {
              return (
                <>
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <div class="profile-thumb">
                                <div class="profile-title">
                                    <h4 class="mb-0">Information</h4>
                                </div>

                                <div class="profile-body">
                                    <p>
                                        <span class="profile-small-title">Name</span> 
                                        <span>{data.name}</span>
                                    </p>

                                    <p>
                                        <span class="profile-small-title">Joined At</span> 
                                        <span>
                            {new Date(data.createdAt).toLocaleDateString(
                              "en-US"
                            )}</span>
                                    </p>

                                    <p>
                                        
                                        {data.studentId && (
                                          <><span class="profile-small-title">Students</span>
                                           <span>     
                              <a href="#" className="text-gray">
                                {data.studentId.length} 
                              </a>
                              </span>
                                           </>
                                  
                            )}
                                    </p>

                                    <p>
                                    {data.teacherId && (
                                          <><span class="profile-small-title">Students</span>
                                           <span>     
                              <a href="#" className="text-gray">
                                {data.teacherId.length} 
                              </a>
                              </span>
                                           </>
                                  
                            )}
                                    </p>
                                    <p>
                                    {data.email && (
                                          <><span class="profile-small-title">email</span>
                                           <span>     
                              <a href="#" className="text-gray">
                                {data.email} 
                              </a>
                              </span>
                                           </>
                                  
                            )}
                                    </p>
                                    <p>
                                    {data.phone && (
                                          <><span class="profile-small-title">phone</span>
                                           <span>     
                              <a href="#" className="text-gray">
                                {data.phone} 
                              </a>
                              </span>
                                           </>
                                  
                            )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div class="about-thumb">
                                <div class="row">
                                  <h1>Description</h1>
                                {data.description ? (
                          <p className="card-text py-3">{data.description}</p>
                        ) : (
                          <p className="card-text py-3">
                            Simple point-and-shoot digital cameras can give
                            surprising quality when they have the right lenses
                            and sensors. Because they are totally automatic in
                            focus and exposure, they just have to be pointed at
                            a subject and clicked. They have limited
                            capabilities for controlling the image
                          </p>
                        )}
                                </div>
                            </div>
                        </div>

                    </div>
                    {localStorage.getItem("isTeacher") ? (
                    ""
                  ) : (
                    <section class="contact mt-4" id="section_5">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-6 col-md-8 col-12">
                            <Complain data={data} api={api} />
                            </div>
                        </div>
                    </div>
                   </section>
                  )}
                  {localStorage.getItem('token') &&  <ItemCarousel data={data} api={api}/>}
                 
                    </>
              )})}
                </div>
            </section>
    </div>
  );
};

export default Details;
