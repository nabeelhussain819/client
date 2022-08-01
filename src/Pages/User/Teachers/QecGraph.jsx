import React, { useState } from "react";
import logo1 from "../../../Assets/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import { FaListOl,FaQuestion } from "react-icons/fa";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { useEffect } from "react";
import {AuthStudentRating} from '../../../Api/SpecificData/AuthUser'

const QecGraph = () => {
  const [show, setShow] = useState([]);
  const [name ,setName] =useState([])
  const location = useLocation();
  const { rating, star, value,category,description,good,bad } = location.state;
  console.log(rating)
  var number = 10;
  var percent = Math.round((rating / number) * 100);
  var xValues = ['Good Rating',"Bad Rating", "Over All Rating"];
  var yValues = [good.length, bad.length, value.length];
  var barColors = ["green", "red","blue"];
  const state = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    ],
    datasets: [{ 
      label: "Bad Rating",
      data: bad,
      fill: false,
      lineTension: 1,
      backgroundColor: "rgba(75,192,192,1)",
      borderWidth: 2,
      borderColor: "red",

    }, { 
      label: "Good Rating",
      data: good,
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderWidth: 2,
      borderColor: "green",

    }, { 
      label: "Over All",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderWidth: 2,
      data: value,
      borderColor: "blue",

    }]
  };
  const state1 = {
    labels:xValues,
  
      datasets: [{
        label: "Good",
        backgroundColor: barColors,
        data: yValues
      }]
  };
  useEffect(()=>{
    const getData = () => {
      AuthStudentRating().then(function (result) {
            setName([result]);
        });
      };
      getData();
},[])
  return (
    <>
    <div className="top"></div>
    <div className="dashboard-bread gradient-bg-gray ">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 ">
                    EVALUATION FORM Result
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-right">
                <ul className="list-items">
                  <img src={logo1} alt="logo" style={{ width: "200px" }} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 responsive-column-m">
            <div className="icon-box icon-layout-2 dashboard-icon-box">
              <div className="d-flex">
                <div className="info-icon icon-element flex-shrink-0">
                  <i className="la la-percent"></i>
                </div>
                <div className="info-content">
                  <p className="info__desc">Average Result</p>
                  <h4 className="info__title">{percent > 100 ? "100" : percent}%</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 responsive-column-m">
            <div className="icon-box icon-layout-2 dashboard-icon-box">
              <div className="d-flex">
                <div className="info-icon icon-element bg-2 flex-shrink-0">
                  <FaListOl size={37} color="white"/>
                </div>
                <div className="info-content">
                  <p className="info__desc">Total Marks</p>
                  <h4 className="info__title">{rating}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 responsive-column-m">
            <div className="icon-box icon-layout-2 dashboard-icon-box">
              <div className="d-flex">
                <div className="info-icon icon-element bg-3 flex-shrink-0">
                  <i className="la la-question"></i>
                </div>
                <div className="info-content">
                  <p className="info__desc">Status</p>
                  <h4 className="info__title">
                    {rating == 12
                      ? "BEST"
                      : rating >= 10
                      ? "EXCELLENT"
                      : rating >= 7
                      ? "GOOD"
                      : rating <= 6
                      ? "AVERAGE"
                      : "NOT BAD"}{" "}
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
                    {star == 5 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 4 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 3 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 2 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                  </span>
                    )}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main-content">
        <div className="container-fluid ">
          <div className="row">
          <div className="col-lg-6 responsive-column--m mt-4">
              <div className="form-box">
                <div className="form-content">
                  <Line
                    data={state}
                    options={{
                      title: {
                        display: true,
                        text: "Average rating per month",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 responsive-column--m mt-4">
              <div className="form-box">
                <div className="form-content">
                  <Bar
                    data={state1}
                    options={{
                      title: {
                        display: true,
                        text: "Average rating per month",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 responsive-column--m mt-4">
              <div className="form-box dashboard-card">
                <div className="form-content pb-0">
                  <div className="dashboard-progressbar pb-4">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: `${percent}%` }}
                        aria-valuenow="1"
                        aria-valuemin="0"
                        aria-valuemax="1"
                      ></div>
                    </div>
                    <p className="font-size-14 pt-1">Rating : {percent}% </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 responsive-column--m mt-4">
            <div class="testimonial-card">
                        <div class="testi-desc-box">
                            <p class="testi__desc">{description}</p>
                        </div>
                        <div class="author-content d-flex align-items-center">
                            <div class="author-img">
                            </div>
                            <div class="author-bio">
                                <h4 class="author__title">You Have Described Your Teacher In Your Own Word</h4>
                                {star == 5 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 4 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 3 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 2 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                  </span>
                    )}
                            </div>
                        </div>
                    </div> 
            </div>
          
          
          
            <div className="col-lg-6 responsive-column--m">
              <div className="form-box dashboard-card">
                <div className="form-title-wrap">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="title">Rating Procedure</h3>
                  </div>
                </div>
                <div className="form-content p-0">
                  <div className="list-group drop-reveal-list">
                    <div className="list-group-item list-group-item-action border-top-0">
                      <div className="msg-body d-flex align-items-center">
                      {category == "A+" ?
 <svg id="animated" viewbox="0 0 100 100">
 <circle cx="50" cy="50" r="45" fill="#FDB900"/>
 <path id="progress" stroke-linecap="round" stroke-width="5" stroke="#fff" fill="none"
       d="M50 10
          a 40 40 0 0 1 0 80
          a 40 40 0 0 1 0 -80">
 </path>
 <text id="count" x="50" y="50" text-anchor="middle" dy="7" font-size="20">100%</text>
</svg>
  : category == "A" ?
  <svg id="animated" viewbox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#FDB900"/>
  <path id="progress" stroke-linecap="round" stroke-width="5" stroke="#fff" fill="none"
        d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80">
  </path>
  <text id="count" x="50" y="50" text-anchor="middle" dy="7" font-size="20">100%</text>
</svg>
: category== "B"?
<svg id="animated" viewbox="0 0 100 100">
 <circle cx="50" cy="50" r="45" fill="#FDB900"/>
 <path id="progress" stroke-linecap="round" stroke-width="5" stroke="#fff" fill="none"
       d="M50 10
          a 40 40 0 0 1 0 80
          a 40 40 0 0 1 0 -80">
 </path>
 <text id="count" x="50" y="50" text-anchor="middle" dy="7" font-size="20">100%</text>
</svg>
:
<svg id="animated" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="45" fill="#FDB900"/>
<path id="progress" stroke-linecap="round" stroke-width="5" stroke="#fff" fill="none"
      d="M50 10
         a 40 40 0 0 1 0 80
         a 40 40 0 0 1 0 -80">
</path>
<text id="count" x="50" y="50" text-anchor="middle" dy="7" font-size="20">100%</text>
</svg>
}
                        <div className="msg-content w-100">
                          
                          <h3 className="title pb-1">You Have Given Your Instructor {category} Grade</h3>
                          <p>Ranking And Grading Is Different Here Both Have There Own Importance There Grading Is Actually Category Of Teacher And You Categories Your Teacher In {category}.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 responsive-column--m">
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">Statics Results</h3>
                </div>
                <div className="col-lg-12 responsive-column--m">
                  <div>
                    <div className="form-content pb-0">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Given Rating </span>
                            <h3 className="title font-size-16">
                            {star == 5 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 4 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 3 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : star == 2 ? (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                  </span>
                    ) : (
                      <span class="ratings d-flex align-items-center">
                      <i class="la la-star"></i>
                  </span>
                    )}
                            </h3>
                            <div className="visits-chart mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Given Status </span>
                            <h3 className="title font-size-16">
                              {rating > 12
                                ? "BEST"
                                : rating > 10
                                ? "EXCELLENT"
                                : rating < 10
                                ? "GOOD"
                                : rating > 7
                                ? "AVERAGE"
                                : "NOT BAD"}{" "}
                            </h3>
                            <div className="visits-chart mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Marks Achieved </span>
                            <h3 className="title font-size-16">{rating}</h3>
                            <div className="previews-chart mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Average Of Marks</span>
                            <h3 className="title font-size-16">{percent > 100 ? "100" : percent}%</h3>
                            <div className="visits-chart-2 mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Evaluated At</span>
                            <h3 className="title font-size-16">
                              {new Date(Date.now()).toLocaleDateString("en-US")}
                            </h3>
                            <div className="previews-chart mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="sparkline-chart-item">
                            <div className="previews-chart mt-2 ">
                              <button className="theme-btn btn-lg col-lg-12">
                                <Link to="/dashboard" className="text-white">
                                  Finish!
                                </Link>
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default QecGraph;
