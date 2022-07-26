import { useState } from "react";
import "../Forms/forms.css";
import { Link } from "react-router-dom";
import image from "../../assets/logo/new_log.png";
import axios from "axios";
 function Login() {
 const [number,setNumber]=useState('')
 const [password,setPassword]=useState('')


   console.log({number,password})

 const handleNumber =(e)=>{
  setNumber(e.target.value)
 }
 const handlePassword =(e)=>{
  setPassword(e.target.value)
 }
 
 const handleApi=()=>{
  console.log({number,password})
  axios.post('',{
    number:number,
    password:password
  }).then(result=>{
console.log(result.data)
alert ('success')
  })

  .catch(error=>{
    alert('Enter correct mobile number and password ')
    console.log(error)
  })
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

     
          <div className="divider"></div>
       
        <form >
          <div className="formGroup col-sm-11 col-md-11">
            
            <input 
             className="form-control"
             placeholder="Enter your Mobile Number"
              type='tel'
              value={number}
             onChange={handleNumber}/>
            </div>
           
    
          <div className="formGroup col-sm-11 col-md-11 ">
            <input className="form-control"
             placeholder='Enter your password'
             type='password'
             value={password}
             onChange={handlePassword}/>
          </div>
         
         
          <div className="formGroup">
            <div className="row">
              <div className="col">
              <button type='submit'  className="submit__button" onClick={handleApi}>
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
          <p className="new-account">Don't have an Account?<Link to="register"  className="new-registration" > Register</Link></p>
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