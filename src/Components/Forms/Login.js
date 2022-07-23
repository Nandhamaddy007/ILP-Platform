import { useState } from "react";
import './forms.css';
export default function Login(props) {
 const [creds, setCreds]=useState({user:"",pass:""})
 const [errors, setErrors]=useState({user:{},pass:{}})
 var onValueChange = (e) => {
    setCreds({
        ...creds,
        [e.target.name]:e.target.value
    })
  };
  var errorsCheck=()=>{
    var name,pass=true
    var err=false
    if(creds.name.length<1){
        name="Please enter name"
        err=true
    }else if(creds.pass.length<3){
        pass="Password must contain atleast 3 characters"
        err=true
    }
    setErrors({
        user:{length:name},
        pass:{length:pass}
    })
    return err
  }

  var login = (e) => {
    e.preventDefault();   
    if(errorsCheck){
        window.location.replace("/"+creds.user.toLocaleLowerCase());
    }
    
  };
  return (
    <>
    <div>
      <div
      className="container"
      >
        <div className="d-flex justify-content-center align-items-center" >
          <div className="login" >
        <h1>Login</h1>
        <form >
          <div className="formGroup col-sm-11 col-md-11 ">
            <label>Username:</label>
            <input
              type="text"
              value={creds.user}
              onChange={onValueChange}
              name="user"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">Please enter a name</span>
            )}
          </div>
          <div className="formGroup col-sm-11 col-md-11 ">
            <label>Password:</label>
            <input type="text" onChange={onValueChange} name="pass" value={creds.pass} className="form-control" />
          </div>
          <div className="formGroup">
            <div className="row">
              <div className="col">
                <button className="btn btn-success" onClick={login}>
                  Login
                </button>
              </div>
              <div className="col">
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </form>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
