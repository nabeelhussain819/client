import React, { useState,useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ReadSetting } from "../../Api/Qec";
import { AuthStudentTeacher} from "../../Api/SpecificData/AuthUser";
import { toast } from "react-toastify";
import { GetSpecificCourse } from "../../Api/Department";
import "react-toastify/dist/ReactToastify.css";

const CourseEvaluate = () => {

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();
  const [termV, setTermV] = useState("");
  const [term, setTerm] = useState("");
  const [course, setCourse] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const [step, setStep] = useState(false);
  const [courseId, setCourseId] = useState([]);

  const handleClose = () => setShow(false);
console.log(term)
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const getChange1 = (data) => {
    setTeacherId(data);
    setShow(true);
  };
  const Check= async()=>{
    const res = await fetch("http://localhost:5000/CheckEvaluatedCourse",{
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      courseId,
      term
    }),
  });
  const data = await res.json();  
    if (res.status === 400 || !data) {
      toast.warning(data.error);
    } else if (res.status === 401) {
      toast.warning(data.error);
    } else {
      setTeacher(data) 
      toast.success("Course Has Been Selected");
      setStep(true)
    }
  }
  useEffect(() => {
    const getData = () => {
      AuthStudentTeacher().then(function (result) {
        setCourse(result);
      });
      ReadSetting().then(function (result) {
        const sms= result.map((data)=>JSON.stringify(data.Evaluate))        
        if(sms.includes('false')){
         toast.info("You Cannot Evaluate Now!");
         navigate('/qec')
        }
        if(result.map((data)=>data.Term) == "Mid"){
          setTerm("Mid")
        }else{
          setTerm("Final")
        }
        setTermV(result.map((data)=>data.Term))
       }); 
    };
    getData()
  }, []);
  return (<>
   <Button
        variant="primary"
        onClick={handleShow}
        className="border-0 text-light bg-transparent"
      >
       Evaluate Now!
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} centered className="bg-trarnsparent">
   
      <div class="services-thumb services-thumb-up">
      <button
                     type="button"
                     className="la la-close border-0 bg-transparent float-right"
                     data-dismiss="modal"
                     aria-label="Close"
                     onClick={() => setShow(false)}
                   ></button>
      {step ? <>
        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
               
               <h3 class="mb-0">Select Teacher </h3>
           </div> 
           <select
                    className="select-contain-select form-control"
                    tabindex="-98"
                    onChange={(e) => getChange1(e.target.value)}
                  >
                    {teacher.map((data) => {
                      return (
                        <>
                          <option>Select One</option>
                              {data.teacherId.map((index) => {
                                return (
                                  <>
                                    <option value={index._id}>
                                      {index.name}
                                    </option>
                                  </>
                                );
                              })}
                        </>
                      );
                    })}
                  </select>
                  {show && (
            <div className="btn-box pt-3">
              <Link
                to={"/qec-evaluate"}
                className="custom-btn custom-btn-small"
                state={{
                  courseId: courseId,
                  teacherId: teacherId,
                  term: term,
                }}
              >
                Evaluate Now!
              </Link>
            </div>
          )}
      
      </> : <>             <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
               
               <h3 class="mb-0">Select Course for {termV} Term</h3>
           </div> 
             <select
                 className="select-contain-select form-control"
                 tabindex="-98"
                  onChange={(e) => setCourseId(e.target.value)}
               >
                 <option >Select One</option>

                 {course.map((data) => {
                   return (
                     <>
                       <option value={data._id} name={data.name}>
                         {data.name} 
                       </option>
                     </>
                   );
                 })}
               </select>
                                     <button onClick={Check} class="custom-btn  mt-3">Next</button></>}
 

                                    </div>
      </Modal>
  </>

  );
};

export default CourseEvaluate;
