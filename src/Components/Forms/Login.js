import { useState } from "react";
import "../Forms/forms.css";
import { Link } from "react-router-dom";
import image from "../../assets/logo/new_log.png";
 function Login() {
 const [number,setNumber]=useState("");
 const [password,setPassword]=useState("");
   
 const [numberErr,setNumberErr]=useState({});
 const [passwordErr,setPasswordErr]=useState({});
 
 const onSubmit=(e)=>{
  e.preventDefault();
  const isValid=formValidation();
  if( isValid){
    setNumber("");
    setPassword("");
  }
 }
 const formValidation=()=>{
  const numberErr={};
  const passwordErr={};
  let isValid=true;
  if(number.trim().length<10){
    numberErr.numberLong="Enter the valid number!";
    isValid=false;
  }
  if(password.trim().length<6){
    passwordErr.passwordLong="Enter the password!";
    isValid=false;
  }
  
  setNumberErr(numberErr);
  setPasswordErr(passwordErr);
  return isValid;

 }
  return (
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
                   
    <h1 className="form__title">Login</h1>

     
          <div class="divider"></div>
       
        <form  onSubmit={onSubmit}>
          <div className="formGroup col-sm-11 col-md-11">
            
            <input 
             className="form-control"
             placeholder="Enter your Mobile Number"
              type="number"
              value={number}
             onChange={(e) => {setNumber(e.target.value)}}/>
            </div>
            {Object.keys(numberErr).map((key)=>{
           return <div style={{color:"red"}}>{numberErr[key]}</div>
            })}
    
          <div className="formGroup col-sm-11 col-md-11 ">
            <input className="form-control"
             placeholder='Enter your password'
             type='password'
             value={password}
             onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          {Object.keys(passwordErr).map((key)=>{
           return <div style={{color:"red"}}>{passwordErr[key]}</div>
            })}
         
          <div className="formGroup">
            <div className="row">
              <div className="col">
              <button type='submit' id='submit-button' className="submit__button">
            Login
          </button>
              </div>
               </div>
          </div>
          <p  class="paragraph">
       <Link to="/forgot" className="new-password">Forgot Password?</Link>
    </p>
          <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>
          <div className="reg">
          <p className="new-account">Don't have an Account?<Link to="/Register"  className="new-registration" > Register</Link></p>
          </div>
        </form>
        </div>
        </div>
        </div>
       </div>
       </div>
        </div>
        </main>
  );
}
export default Login;