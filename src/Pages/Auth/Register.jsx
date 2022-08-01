import React, { useState,useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../Components/UI/Forms/Input";
import { doRegister } from "../../setup/service/Auth";

import emailjs from '@emailjs/browser';
import Login from "./Login";

const schema = yup
  .object({
    name: yup.string().required(),
    u_id: yup.string().required("Your university id is required"),
    phone: yup.string().max(11).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

const Register = () => {
  const navigate = useNavigate()
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false);
  const [all, setAll] = useState(true);


  const registerUser = async (e) => {
    const res = await doRegister(e);
    const data = await res.json();
    if (res.status === 400 || !data) {
   
      toast.error(data.error);
      return;
    }
    emailjs.sendForm('gmail', 'template_kywzee5', form.current, '5oXuwAxMmEQAP5LSx')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    localStorage.setItem("verify", data.isVerified);
    data.isTeacher === true
      ? localStorage.setItem("isTeacher", data._id)
      : localStorage.setItem("user", data._id);
    setAll(false);
    setShow(true);
    if (localStorage.getItem("isTeacher", data._id)) {
      setShow(true);
    }
    setNext(true)
    toast.success("register Successfully");
    toast.warning("Email Has Been Sent");
  
  };
  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setShow(true);
  }
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="bg-transparent border-0 navColor"
      >
        SIGN UP
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} centered className="bg-trarnsparent">
     
      <div class="col-lg-12">
        <div class="services-thumb">
       {!next && 
         <button
         type="button"
         className="la la-close border-0 bg-transparent float-right"
         data-dismiss="modal"
         aria-label="Close"
         onClick={() => setShow(false)}
       ></button>
       }
                 
            <div className="container ">          
                        <div class="col-lg-12 ">
                       
                        <form
                        method="post"
                        onSubmit={handleSubmit(registerUser)}
                        ref={form}
                        className="row MultiFile-intercepted"
                      > {next ? 
                        <>
                         <div class="main-container">
                        <div class="check-container">
                          <div class="check-background">
                            <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <div class="check-shadow"></div>
                        </div>
                      </div>
                      <div className="text-center">
                        
                      <h1>Email Has Been Sent!</h1>
                        <p>Verify Your Email To Continue.</p>
                        <input onClick={() => setShow(false)} class="custom-btn btn-md" value="Close"/>
                      </div>
                        </>
                       
                        :
                        <> 
                          <div className="text-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" class="avatar-image img-fluid" alt=""/>
                        <h3 class="mb-3 mt-2">Sign Up Here</h3>
                        </div>
                                      <div class="row">
                                          <div class="col-lg-12">
                                          <Input
                        title="Email"
                        type="email"
                        name="email"
                        hook={register("email")}
                        errors={errors.email?.message}
                        icon="la la-user form-icon"
                        placeholder="Email Address"
                        hasIcon
                      />
                                          </div>
                                          
                                         
                                          <div class="col-lg-12 ">
                                          <Input
                              title="Your Password"
                              type="password"
                              name="password"
                              hook={register("password")}
                              errors={errors.password?.message}
                              icon="la la-lock form-icon"
                              placeholder="Your password"
                              hasIcon
                            />
                                          </div>
                                          <div class="col-lg-12 col-md-12 col-12 ">
                                          <Input
                              title="Your Full Name"
                              type="text"
                              name="name"
                              hook={register("name")}
                              errors={errors.name?.message}
                              icon="la la-envelope-o form-icon"
                              placeholder="Your Full Name"
                              hasIcon
                            />
                                          </div>
                                            <div class="col-lg-12 col-md-12 col-12"> 
                                          <Input
                              title="Your Phone Number"
                              type="number"
                              name="phone"
                              hook={register("phone")}
                              errors={errors.phone?.message}
                              icon="la la-envelope-o form-icon"
                              placeholder="Type your Phone"
                              hasIcon
                            />
                                          </div>
  
                                          <div class="col-lg-12 col-md-12 col-12">
                                          <Input
                              title="Your Universty ID"
                              type="text"
                              name="name"
                              hook={register("u_id")}
                              errors={errors.u_id?.message}
                              icon="la la-envelope-o form-icon"
                              placeholder="Type your University ID"
                              hasIcon
                            />
                                          </div>
                                         <div className="mt-4 mb-4 col-lg-12">
                                              <button type="submit" class="custom-btn col-lg-12">Sign Up</button>
                                          </div>
                                      <hr />
                                      <div className="text-center ">
                                      <span onClick={() => setShow(false)} className="pt-4">Already Have An Account? </span></div>                                  
                                          
                                        
                                          
  
                                      </div>
                                 
                          </>
                      }
                    </form>  
                          </div>
                          </div>
            
           
                        
           
            </div></div>
       
      </Modal>
      
    </>
  );
}

export default Register;
