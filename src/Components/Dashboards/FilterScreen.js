import LeftDash from "./Leftdash";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import EditStudent from "../Forms/EditStudent";
import './dashboard.css'
import { Button } from "@mui/material";

export default function FilterScreen(props){
  let data=useParams()
  const [filters,setFilters] =useState({class:"",type:""})
  const [editData,setEditData] = useState({show:false})
  let temp=[
    {name:"johm",class:"Class10",pTask:"Doctor",sTask:"Engineer",status:"inProgress"},
    {name:"jack",class:"Class10",pTask:"Lawyer",sTask:"Pilot",status:"yet to start"},
    {name:"jill",class:"Class10",pTask:"Scientist",sTask:"Politician",status:"active"},
    
    {name:"nancy",class:"Class11",pTask:"Police",sTask:"Pilot",status:"inProgress"},
    {name:"mani",class:"Class11",pTask:"Engineer",sTask:"Pilot",status:"active"},
    {name:"arun",class:"Class11",pTask:"Chef",sTask:"Business",status:"inProgress"},

    {name:"jude",class:"Class12",pTask:"Engineer",sTask:"Pilot",status:"completed"},
    {name:"peter",class:"Class12",pTask:"Farmer",sTask:"Pilot",status:"inProgress"},
    {name:"hari",class:"Class12",pTask:"Lawyer",sTask:"Pilot",status:"inProgress"},
  ]
  const [studentData,setStudentData]=useState(temp)
    useEffect(()=>{
        console.log(Object.keys(data).length==0)
        setFilters({...data})
        if(Object.keys(data).length>0)           
            setTable(data)
    },[])
    const setTable=(val)=>{    
        if(val["class"]=="" &&
            val["type"]==""){
                setStudentData([...temp])
            }else      
        setStudentData(temp.filter((data,ind)=>{
            
            if(val["class"]==""){
               
              if(data["pTask"] ===val["type"]){
                return data
              }
            }else if(val["type"]==""){
                
                if(data["class"]===val["class"]){
                    return data
                }
            }
            else{ 
                       
            if(data["class"]===val["class"] &&
            data["pTask"] ===val["type"]
            ){
                return data
            }
        } 
        }))
    }
    const setEdit=(obj)=>{
setEditData({
    ...editData,
    ...obj,
    show:true
})
    }
    let onChangeDD=(e)=>{
        setFilters({
            ...filters,
            [e.target.name]:e.target.value
        })
       
        setTable({            
            class:"",
            type:"",
            ...filters,
            [e.target.name]:e.target.value
        })
        
    }
    return(
        <>
         
        
      
       {editData && <EditStudent data={editData} />}
        <div className="container">
        <div  > <h1>Filter Screen</h1><LeftDash /></div>
        <br/>
        <div className="row">
            <div className="col">
                <label htmlFor="class">Class :</label>
                <select className="form-control" name="class" onChange={onChangeDD} id="class" value={filters.class}>
                    <option></option>
                    <option>Class10</option>
                    <option>Class11</option>
                    <option>Class12</option>
                </select>
                </div>
                <div className="col">
                <label htmlFor="type">Ambition :</label>
                <select className="form-control" name="type" onChange={onChangeDD} id="type" value={filters.type}>
                <option></option>
                    <option>Doctor</option>
                    <option>Engineer</option>
                    <option>Lawyer</option>
                    <option>Scientist</option>
                    <option>Police</option>
                    <option>Chef</option>
                    <option>Farmer</option>
                </select>
            </div>
            </div>
            <div className="mt-5 scroller">
                <table className="table table-hover" >
                    <thead style={{background:"#42a5f5", color:"white"}}>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Primary Task</th>
                        <th scope="col">Secondary Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        
                    {studentData.map((data,index)=>{
                        
                           return(<>
                           <tr>
                           <td>{data["name"]}</td>
                           <td>{data["class"]}</td>
                           <td>{data["pTask"]}</td>
                           <td>{data["sTask"]}</td>
                           <td>{data["status"]}</td>
                           <td>
                           <Button variant="contained" style={{background:"#42a5f5"}}
                           className="form__button _btn"
                            onClick={()=>setEdit(data)}
                            data-bs-toggle="modal" 
                            data-bs-target="#staticstudentData"
                           >Edit <i class="bi bi-pencil-square"></i></Button>
                            {/* <div className="btn btn-dark" 
                           onClick={()=>setEdit(data)}
                           data-bs-toggle="modal" 
                           data-bs-target="#staticstudentData"> 
                           </div> */}
                           </td>
                           </tr> </>)
                    })}
                    </tbody>
                </table>
                
                {studentData.length<1 && <h5
                style={{position:"absolute",left:"35%",marginTop:"5%"}}
                >No results found</h5>}

            </div>
        </div>
        </>
    )
}