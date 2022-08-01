import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { doLogin, updateDataInStore } from "../../setup/service/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Error from "../../Components/Utils/Messages/Error";
import Input from "../../Components/UI/Forms/Input";
import Register from "./Register";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().max(32).required(),
  })
  .required();

function Login() {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const loginUser = async (e) => {
   
    const res = await doLogin(e);
    const data = await res.json();

    if (res.status === 400 || !data || res.status === 401) {
      toast.warning(data.message);
      return;
    }

    updateDataInStore(data);
    toast.success("Logged In Successfully");

    if (localStorage.getItem("isAdmin")) {
      navigate("/");
      window.location.reload();
    }
    if (localStorage.getItem("isTeacher")) {
      navigate("/");
      window.location.reload();
    }
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="bg-transparent border-0 navColor"
      >
        LOG IN
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} centered className="bg-trarnsparent">
      <div class="col-lg-12 col-12"><div class="services-thumb"><button
              type="button"
              className="la la-close border-0 bg-transparent float-right"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button>
        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
          <h3 class="mb-0">Login</h3> 
            </div><form
                method="post"
                className="MultiFile-intercepted"
                onSubmit={handleSubmit(loginUser)}
              >
                <Input
                  title="Email"
                  type="email"
                  name="email"
                  hook={register("email")}
                  errors={errors.email?.message}
                  icon="la la-user form-icon"
                  placeholder="Type your email"
                  hasIcon
                />
                <Input
                  title="Password"
                  type="password"
                  name="password"
                  hook={register("password")}
                  errors={errors.password?.message}
                  icon="la la-lock form-icon"
                  placeholder="Type password"
                  hasIcon
                />

                <div className="d-flex align-items-center justify-content-between">
                  <div className="custom-checkbox mb-0"></div>
                  <p className="forgot-password pt-3 ">
                    <a href="recover">Forgot Password?</a>
                  </p>
                </div>

                <div className="btn-box pb-4">
                  <button type="submit" className="custom-btn w-100">
                    Login Account
                  </button>
                </div>
                <div className="action-box text-center">
                 
                </div>
              </form>
                <hr />
                                      <div className="text-center ">
                                      <span onClick={() => setShow(false)} className="pt-4">Don't Have Any Account? </span> </div> 
            </div></div>
        
      </Modal>
    </>
  );
}

export default Login;
