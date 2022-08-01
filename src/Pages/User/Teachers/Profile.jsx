import React, { useState, useEffect } from "react";
import { AuthTeacher } from "../../../Api/SpecificData/AuthUser";
import { Modal } from "react-bootstrap";

export default function Profile(){
    const [name ,setName] =useState([])
    const user =localStorage.getItem('user')
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    console.log(name)
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }
    useEffect(()=>{
        const getData = () => {
            AuthTeacher().then(function (result) {
                setName([result]);
            });
          };
          getData();
    },[])
return(<>
 {values.map((v, idx) => (
       <button
          key={idx}
          className=" bg-transparent border-0 text-dark"
          style={{
            textDecoration: "none",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onClick={() => handleShow(v)}
        > 
        {typeof v === "string" && `below ${v.split("-")[0]}`}
                                   Profile
        </button>
      ))}
  <Modal
        show={show}
        className="bg-transparent "
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
         {name.map((data)=>{return(
           <div class="services-thumb services-thumb-up">
          
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0"> Profile</h3>

                                            <div class="services-price-wrap ms-auto">
                                            <p class="services-price-text mb-0">   <button
              type="button"
              className="la la-close border-0 bg-transparent"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button></p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>
                                            <div className="text-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" class="avatar-image img-fluid" alt=""/>
                                            <h1>{data.name}</h1>
                                            <p>{data.email}</p>
                                            <p>{data.phone}</p>
                                            <p>{data.u_id}</p>
                                            <hr />
                                            <p> Department :{data.deptId.map((data)=>data.name)}</p>
                                            <p>Program: {data.programId.map((data)=>data.name)}</p>
                                            <hr />
                                            <p> <b><u>Courses: </u> </b> {data.courseId.map((data)=>{return( <ul><li>{data.name}</li></ul>)} )}</p>
                                            <hr />
                                           
                                            <p>{data.tokens.length} Logged In</p>
                                            </div>
                                        <div className="text-center">
                                        <ul class="social-icon"><li class="social-icon-item"><a href="https://twitter.com/" class="social-icon-link bi-twitter"></a></li><li class="social-icon-item"><a href="#" class="social-icon-link bi-instagram"></a></li><li class="social-icon-item"><a href="#" class="social-icon-link bi-pinterest"></a></li><li class="social-icon-item"><a href="https://www.youtube.com/" class="social-icon-link bi-youtube"></a></li></ul>
                                    <p  class="custom-btn custom-border-btn btn mt-3">{new Date(
                                    data.createdAt
                                  ).toLocaleDateString("en-US")}</p>
                                        </div>
                                    </div>
                                      )})}
      </Modal>
        </>)
}