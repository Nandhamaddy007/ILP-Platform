import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/register.css";
import { useState } from "react";
import image from "../../assets/logo/new_log.png";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Navbar from "../Navbar";
import Swal from "sweetalert2";
const Register = () => {
  const [show, setShow] = useState(false);
  const ShowHide = (ev) => {
    // ev.preventDefault();
    setShow(!show);
  };

  return (
    <>
      <Navbar />
      <main className="main-container">
        <div className="register-body">
          <div className="register-wrapper">
            <div className="container">
              <div className="register-box">
                <div className="register-left">
                  <img src={image} alt="logo" className="logo" />
                </div>
                <div className="register-right">
                  <div className="register-right-wrap">
                    <h1 className="form__title">Register</h1>

                    <div class="divider"></div>
                    <p className="account-subtitle">Way to success</p>

                    {!show && <HiddenFirst show={ShowHide} />}
                    {show && <HiddenSecond />}
                    <div className="register-or">
                      <span className="or-line"></span>
                      <span className="span-or">or</span>
                    </div>

                    <div className="form-text">
                      Already have an account?
                      <Link to="/login" className="link">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const HiddenFirst = ({ show }) => {
  const initialValues = { userName: "", mobileNumber: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate(formValues);
    if (!valid.mobileNumber && !valid.userName) {
      postData();
      show();
      console.log(formValues);
    } else {
      setFormErrors(valid);
    }
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     show();
  //   }
  // }, [formErrors]);
  const postData = (ev) => {
    const inputData = formValues;
    console.log("post data" + inputData);
    axios.post("", inputData).then((response) => {
      console.log(response);
    });
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^\+?[1-9][0-9]{9}$/;
    if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile Number is required!";
    } else if (!regex.test(values.mobileNumber)) {
      errors.mobileNumber = "This is not a valid mobile number!";
    }
    if (!values.userName) {
      errors.userName = "User Name is required!";
    }
    return errors;
  };

  return (
    <>
      <form id="register" className="register__form" onSubmit={handleSubmit}>
        <div className="form__input--group">
          <input
            type="text"
            name="userName"
            id="signup__form__input--userName"
            className="form__input"
            placeholder="Enter your Teacher Id"
            value={formValues.userName}
            onChange={handleChange}
          />
          <p className="error">{formErrors.userName}</p>
        </div>
        <div className="form__input--group">
          <input
            type="tel"
            name="mobileNumber"
            id="signup__form__input--mobile"
            className="form__input"
            placeholder="Enter your mobile number"
            maxLength={10}
            value={formValues.mobileNumber}
            onChange={handleChange}
          />{" "}
          <p className="error">{formErrors.mobileNumber}</p>
        </div>

        <div className="form__input--group">
          <button className="form__button _btn" id="register_btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};
export const HiddenSecond = () => {
  let navigate = useNavigate();
  const initialValues = { otp: "", password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate(formValues);
    if (!valid.confirmPassword && !valid.password && !valid.otp) {
      postData();
      Swal.fire({
        toast: true,
        icon: "success",
        title: "You have successfully registered",
        animation: false,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      console.log("final......" + JSON.stringify(formValues));
      navigate("/login");
    } else {
      setFormErrors(valid);
    }
  };
  const postData = () => {
    const inputData = formValues;
    console.log("post data" + JSON.stringify(inputData));
    axios.post("", inputData).then((response) => {
      console.log(response);
    });
  };
  const validate = (values) => {
    const errors = {};
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!regex.test(values.password)) {
      errors.password = "This is not a valid password format!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password  is required!";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords doesn't match";
    }
    if (!values.otp) {
      errors.otp = "OTP is required!";
    } else if (values.otp.length !== 6) {
      errors.otp = "OTP must contain 6 characters";
    }
    return errors;
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <form id="register" className="register__form" onSubmit={handleSubmit}>
        <div className="form__input--group">
          <input
            type="tel"
            name="otp"
            id="signup__form__input--OTP"
            className="form__input"
            placeholder="Enter  OTP"
            maxLength={6}
            value={formValues.otp}
            onChange={handleChange}
          />{" "}
          <p className="error">{formErrors.otp}</p>
        </div>
        <div className="form__input--group">
          <input
            type="password"
            name="password"
            id="signup__form__input--password"
            className="form__input"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          />{" "}
          <p className="error">{formErrors.password}</p>
        </div>

        <div className="form__input--group">
          <input
            type="password"
            name="confirmPassword"
            id="signup__form__input--confirm--password"
            className="form__input"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />{" "}
          <p className="error">{formErrors.confirmPassword}</p>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 0.5 }}>
              <ul>
                <li>password must contain minimum 8 characters.</li>
                <li>At least one uppercase.</li>
                <li>At least one lowercase. </li>
                <li>At least one digit.</li>
                <li>At least one special character.</li>
              </ul>
            </Typography>
          </Popover>
        </div>

        <div className="form__input--group">
          <button className="form__button _btn" id="register_btn" type="submit">
            Create password
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
