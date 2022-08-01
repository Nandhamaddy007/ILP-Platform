import { InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"

export default function EditStudent(props){
  const [obj,setObj]= useState({pTask:"",sTask:""})
  const [errors,setErrors] = useState({pTask:"",sTask:""})
  const checkCareer=(e)=>{
    let ret=true
    if(e.target.value=="NA"){      
      ret=false
    }
    if(e.target.id="pTask"){
      if(e.target.value==obj.sTask){
        setErrors({...errors,pTask:"Primary and Secondary careers cannot be the same."})
        ret=false
      }      
    }
    if(obj.pTask==""){
      setErrors({...errors,pTask:"Please select a primary career first."})
      ret=false
    }
    else if(obj.pTask==e.target.value){
      setErrors({...errors,sTask:"Primary and Secondary careers cannot be the same."})
      ret=false
    }
    return ret
  }
  let onDDchange=(e)=>{    
    console.log(e.target)
      if(checkCareer(e)){
      setObj({
        ...obj,
        [e.target.id]:e.target.value
      })
      setErrors({...errors,[e.target.id]:""})
    }}
  
    useEffect(()=>{
setObj({...props.data})
    },[props])
    return(
        <>
        {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}
<div class="modal fade"
data-bs-backdrop="static" data-bs-keyboard="false"
 id="staticstudentData" tabindex="200" aria-labelledby="studentDataModal" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="studentDataModal">Edit student</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="row">
            <div className="col"><label>Name:</label></div>
            <div className="col"><label>{props.data.name}</label></div>
            
        </div>
        <div className="row mt-3">
            <div className="col"><label>Class:</label></div>
            <div className="col"><label>{props.data.class}</label></div>
            
        </div>
        <div className="row mt-3">
            <div className="col"><label>Primary Career:</label></div>
            <div className="col">  
            <select 
            className="form-control" 
            name="pTask" 
            id="pTask" 
            onChange={onDDchange}
            value={obj.pTask}>
                
                <option >NA</option>
                <option>Doctor</option>
                    <option>Engineer</option>
                    <option>Lawyer</option>
                    <option>Scientist</option>
                    <option>Police</option>
                    <option>Chef</option>
                    <option>Farmer</option>
                    <option>Pilot</option>
                    <option>Politician</option>
                    <option>Business</option>
                </select>
            {/* <div className="col"><label>{props.data.pTask}</label></div> */}
            <span className="text-danger">{errors.pTask}</span>
            </div>  
             
        </div>
        <div className="row mt-3">
         
          
          
    
            <div className="col"><label>Secondary Career:</label></div>
            <div className="col" id="sec"> 
            <select className="form-control" 
            name="sTask"  
            id="sTask" 
            onChange={(e)=>{
              console.log(e.target)
              if(checkCareer(e)){
              setObj({
                ...obj,
                sTask:e.target.value
              })
              setErrors({...errors,sTask:""})
            }}
          
            }
            value={obj.sTask}>
                <option >NA</option>
                    <option>Doctor</option>
                    <option>Engineer</option>
                    <option>Lawyer</option>
                    <option>Scientist</option>
                    <option>Police</option>
                    <option>Chef</option>
                    <option>Farmer</option>
                    <option>Pilot</option>
                    <option>Politician</option>
                    <option>Business</option>
                </select>            
                <span className="text-danger">{errors.sTask}</span> 
            </div> 
             {/* <div className="col"><label>{props.data.sTask}</label></div> */}
        </div>
        {props.data.pTask!="NA" && <div className="row mt-3">
            <div className="col"><label htmlFor="">Comments: </label></div>
            <div className="col"><textarea id="comments"></textarea></div>
            
            
        </div>}
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success"
        disabled={obj.pTask==""}
        data-bs-dismiss="modal"
        onClick={(e)=>{        
          alert("Changes saved successfully")}}
        >Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}