import { useEffect, useState } from "react"

export default function EditStudent(props){
  const [obj,setObj]= useState({pTask:"",sTask:""})
    useEffect(()=>{
setObj({...props.data})
    },[props])
    return(
        <>
        {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}
<div class="modal fade"
data-bs-backdrop="static" data-bs-keyboard="false"
 id="staticstudentData" tabindex="-1" aria-labelledby="studentDataModal" aria-hidden="true">
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
            <div className="col"><label>Primary Task:</label></div>
            <div className="col">  <select 
            className="form-control" 
            name="type" 
            id="type" 
            onChange={(e)=>{
              setObj({
                ...obj,
                pTask:e.target.value
              })
            }}
            value={obj.pTask}>
                <option></option>
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
            </div>     
        </div>
        <div className="row mt-3">
            <div className="col"><label>Secondary Task:</label></div>
            <div className="col"> <select className="form-control" 
            name="type"  
            id="type" 
            onChange={(e)=>{
              setObj({
                ...obj,
                sTask:e.target.value
              })
            }}
            value={obj.sTask}>
                <option></option>
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
            </div>
            {/* <div className="col"><label>{props.data.sTask}</label></div> */}
        </div>
        {props.data.pTask?.length>1 && <div className="row mt-3">
            <div className="col"><label htmlFor="">Comments: </label></div>
            <div className="col"><textarea id="comments"></textarea></div>
            
            
        </div>}
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success"data-bs-dismiss="modal"
        onClick={()=>{alert("Changes saved successfully")}}
        >Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}