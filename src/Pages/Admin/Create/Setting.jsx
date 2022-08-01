import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ReadSetting} from '../../../Api/Qec'
const Setting = () => {
  const [semester, setSeme] = useState("");
  const [evaluate, setEvaluatee] = useState("");
  const [course, setCourse] = useState("");
  const [term, setTerm] = useState("");
  const [setting, setSetting] = useState([]);
  const getData = async (e)=> {  
    alert("Do You Really Want To Change Settings!")
        e.preventDefault();
        const res = await fetch("http://localhost:5000/setting", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            semester,
            evaluate,
            course,
            term
          }),
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
          toast.warning("Already On");
        } else if (res.status === 401) {
          toast.warning("Invalid entry!");
        } else {
            window.location.reload()
          toast.success("Setting Updated Successfully");
        }
      }
      const getChange=()=>{ ReadSetting().then(function (result) {
      setSetting(result);
    });
      }
    useEffect(()=>{
        getChange()
    },[])
  return (
    <>
      <div className="dashboard-bread dashboard--bread dashboard-bread-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">Settings</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-right">
                <ul className="list-items">
                  <li>Dashboard</li>
                  <li>Settings</li>
                </ul>
              </div>
            </div>
           
          </div> {setting.map((data)=>{return(
   <div class="row mt-4">
   <div class="col-lg-4 responsive-column-m">
       <div class="icon-box icon-layout-2 dashboard-icon-box">
           <div class="d-flex">
               <div class="info-icon icon-element flex-shrink-0">
                  <i class="la la-shopping-cart"></i>
               </div>
               <div class="info-content">
                   <p class="info__desc">Evaluation </p>
                   <h4 class="info__title">{data.Evaluate ? "On" : "Off"}</h4>
               </div>
           </div>
       </div>
   </div>
   <div class="col-lg-4 responsive-column-m">
       <div class="icon-box icon-layout-2 dashboard-icon-box">
           <div class="d-flex">
               <div class="info-icon icon-element bg-2 flex-shrink-0">
                  <i class="la la-bookmark"></i>
               </div>
               <div class="info-content">
                   <p class="info__desc">Course Enrollment</p>
                   <h4 class="info__title">{data.Course ? "On" : "Off"}</h4>
               </div>
           </div>
       </div>
   </div>
   <div class="col-lg-4 responsive-column-m">
       <div class="icon-box icon-layout-2 dashboard-icon-box">
           <div class="d-flex">
               <div class="info-icon icon-element bg-3 flex-shrink-0">
                  <i class="la la-plane"></i>
               </div>
               <div class="info-content">
                   <p class="info__desc">Semester Enrollment</p>
                   <h4 class="info__title">{data.Semester ? "On" : "Off"}</h4>
               </div>
           </div>
       </div>
   </div>
</div>
          )})}
       
        </div>
      </div>
      <div className="dashboard-main-content">
        <div className="container-fluid">
            <div className="row">
            <div class="col-lg-6">
                        <div class="form-box">
                        <div class="form-title-wrap">
                                <h3 class="title pb-2">Change Semester Setting</h3>
                                <p class="font-size-15 line-height-24">This Setting is for change of semester if you agree with that student will get access to enroll in new semester 
                                </p>
                            </div>
                            <div class="form-content">
                                <div class="contact-form-action">
                                    <form action="#" class="MultiFile-intercepted">
                                        <div class="row">
                                        <div className="col-lg-12 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Select Semester</label>
                          <div className="form-group">
                            <select
                              className="form-control p-3"
                              onChange={(e)=>setSeme(e.target.value)}
                            >
                              <option>----select-one----</option>
                              <option value="true">Yes!</option>
                              <option value="false">No!</option>
                            </select>
                          </div>
                        </div>
                      </div>
                                             <div class="col-lg-12">
                                                 <div class="btn-box">
                                                     <button class="theme-btn" type="button" onClick={getData}>Change Setting</button>
                                                 </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-box">
                            <div class="form-title-wrap">
                                <h3 class="title pb-2">Change Evaluation Setting</h3>
                                <p class="font-size-15 line-height-24">This Setting is for change of Evaluation Form if you agree with that student will get access to Evaluate in Course With respect to Term 
                                </p>
                            </div>
                            <div class="form-content">
                                <div class="contact-form-action">
                                    <form action="#" class="MultiFile-intercepted">
                                        <div class="input-box">
                                            <label class="label-text">Select Setting</label>
                                            <div class="form-group">
                                                <select
                              className="form-control p-3"
                              onChange={(e)=>setEvaluatee(e.target.value)}
                            >
                              <option>----select-one----</option>
                              <option value="true">Yes</option>
                              <option value="false">No!</option>
                            </select>
                                            </div>
                                        </div>
                                            <div class="input-box">
                                            <label class="label-text">Select Term</label>
                                            <div class="form-group">
                                                <select
                              className="form-control p-3"
                              onChange={(e)=>setTerm(e.target.value)}
                            >
                              <option>----select-one----</option>
                              <option value="Mid">Mid!</option>
                              <option value="Final">Final!</option>
                            </select>
                                            </div>
                                        </div>
                                        <div class="btn-box">
                                            <button class="theme-btn" type="button" onClick={getData}>Change Setting</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="form-box">
                            <div class="form-title-wrap">
                                <h3 class="title pb-2">Change Course Setting</h3>
                                <p class="font-size-15 line-height-24">This Setting is for change of Course if you agree with that student will get access to enroll in new Course 
                                </p>
                            </div>
                            <div class="form-content">
                                <div class="contact-form-action">
                                    <form action="#" class="MultiFile-intercepted">
                                        <div class="input-box">
                                            <label class="label-text">Change Setting</label>
                                            <div class="form-group">
                                                <select
                              className="form-control p-3"
                              onChange={(e)=>setCourse(e.target.value)}
                            >
                              <option>----select-one----</option>
                              <option value="true">Yes</option>
                              <option value="false">No!</option>
                            </select>
                                            </div>
                                        </div>
                                        <div class="btn-box">
                                            <button class="theme-btn" type="button" onClick={getData}>Change Setting</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </div>
   
    </>
  );
};

export default Setting;
