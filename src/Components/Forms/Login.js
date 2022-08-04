import { useState } from "react";
import "../Forms/forms.css";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/logo/new_log.png";
import Navbar from "../Navbar";
import Swal from "sweetalert2";
const Login = () => {
  let navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [numberErr, setNumberErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  var toastMixin = Swal.mixin({
    toast: true,
    icon: "success",
    title: "General Title",
    animation: false,
    target: "#custom-target",
    customClass: {
      container: "position-absolute",
    },
    position: "bottom-right",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const alert = () => {
    toastMixin.fire({
      animation: true,
      title: "Logged in successfully ",
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      alert();
      navigate("/welcomepage");
      setNumber("");
      setPassword("");
    }
  };
  const formValidation = () => {
    var numberErr = {};
    var passwordErr = {};
    let isValid = true;

    if (number.trim().length > 10) {
      numberErr.numberShort = "Invalid Number !";
      isValid = false;
    }
    if (number.trim().length < 10) {
      numberErr.numberShort = "Invalid Number !";

      isValid = false;
    }
    if (password.trim().length > 10) {
      passwordErr.passwordShort = "Enter correct password !";
      isValid = false;
    }

    if (password.trim().length < 6) {
      passwordErr.passwordShort = "should be 6 character !";
      isValid = false;
    }

    setNumberErr(numberErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  return (
    <>
      {" "}
      <Navbar />
      <main className="class-container">
        <div className="login-body">
          <div className="login-wrapper">
            <div className="login-container">
              <div className="login-box">
                <div className="login-left">
                  <img src={image} alt="logo" className="logo" />
                </div>
                <div className="login-right">
                  <div className="login-right-wrap">
                    <h1 className="login__title">Login</h1>

                    <div className="divider"></div>

                    <form onSubmit={onSubmit}>
                      <div className="formGroup col-sm-11 col-md-11">
                        <input
                          className="form-control f-m"
                          placeholder="Enter your Mobile Number"
                          type="tel"
                          value={number}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                        />
                      </div>
                      {Object.keys(numberErr).map((key) => {
                        return (
                          <div style={{ color: "red", marginLeft: "10%" }}>
                            {numberErr[key]}
                          </div>
                        );
                      })}

                      <div className="formGroup col-sm-11 col-md-11 ">
                        <input
                          className="form-control f-m"
                          placeholder="Enter your password"
                          type="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      {Object.keys(passwordErr).map((key) => {
                        return (
                          <div style={{ color: "red", marginLeft: "10%" }}>
                            {passwordErr[key]}
                          </div>
                        );
                      })}

                      <div className="formGroup">
                        <div className="row">
                          <div className="col">
                            <button type="submit" className="submit__button">
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                      <p class="paragraph">
                        <Link to="/resetPassword" className="new-password">
                          Forgot Password?
                        </Link>
                      </p>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="reg">
                        <p className="new-account">
                          Don't have an Account?
                          <Link to="/register" className="new-registration">
                            {" "}
                            Register
                          </Link>
                        </p>
                      </div>
                    </form>
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
export default Login;
