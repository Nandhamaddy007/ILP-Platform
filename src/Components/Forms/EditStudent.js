import { useEffect, useState } from "react"

export default function EditStudent(props){
  const [obj,setObj]= useState({pTask:""})
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
            <div className="col">  <select className="form-control" name="type" id="type" value={obj.pTask}>
                <option></option>
                    <option>doctor</option>
                    <option>engineer</option>
                    <option>lawyer</option>
                    <option>scientist</option>
                    <option>police</option>
                    <option>chef</option>
                    <option>farmer</option>
                </select>
            {/* <div className="col"><label>{props.data.pTask}</label></div> */}
            </div>     
        </div>
        <div className="row mt-3">
            <div className="col"><label>Secondary Task:</label></div>
            {/* <div className="col"> <select className="form-control" name="type"  id="type" value={props.data.sTask}>
                <option></option>
                    <option>Doctor</option>
                    <option>Engineer</option>
                    <option>Lawyer</option>
                    <option>Scientist</option>
                    <option>Police</option>
                    <option>Chef</option>
                    <option>Farmer</option>
                </select>            
            </div> */}
            <div className="col"><label>{props.data.sTask}</label></div>
        </div>
        {props.data.pTask?.length>1 && <div className="row mt-3">
            <div className="col"><label htmlFor="">Comments: </label></div>
            <div className="col"><textarea id="comments"></textarea></div>
            
            
        </div>}
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}