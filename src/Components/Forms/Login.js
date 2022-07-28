import { useState } from "react";
import "../Forms/forms.css";
import { Link } from "react-router-dom";
import image from "../../assets/logo/new_log.png";
import axios from "axios";
import Navbar from "../Navbar";

const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleNumber = (e) => {
    console.log(e.target.value);
    setNumber(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted form====>");
    axios
      .post("", {
        number: number,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        alert("successfully");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert("Enter the correct password");
      });
  };

  return (
    <>
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

                    <form onSubmit={handleSubmit}>
                      <div className="formGroup col-sm-11 col-md-11">
                        <input
                          className="form-control"
                          placeholder="Enter your Mobile Number"
                          type="tel"
                          value={number}
                          onChange={handleNumber}
                          required
                          name="number"
                        />
                      </div>

                      <div className="formGroup col-sm-11 col-md-11 ">
                        <input
                          className="form-control"
                          placeholder="Enter your password"
                          type="password"
                          value={password}
                          onChange={handlePassword}
                          required
                          name="password"
                        />
                      </div>

                      <div className="formGroup">
                        <div className="row">
                          <div className="col">
                            <button
                              type="submit"
                              value="login"
                              className="submit__button"
                            >
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