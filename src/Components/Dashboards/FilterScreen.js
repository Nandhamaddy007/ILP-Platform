import LeftDash from "./Leftdash";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function FilterScreen(props){
  let data=useParams()
  const [filters,setFilters] =useState({class:"",type:""})
    useEffect(()=>{
        console.log(data)
        setFilters({...data})
    },[])
    let onChangeDD=(e)=>{
        setFilters({
            [e.target.name]:e.target.value
        })
    }
    return (
      <>
        <div>
          {" "}
          <LeftDash />
        </div>
        <h1>Filter Screen</h1>

        <div className="container">
          <div className="row">
            <div className="col">
              <label htmlFor="class">Class :</label>
              <select
                className="form-control"
                name="class"
                onChange={onChangeDD}
                id="class"
                value={filters.class}
              >
                <option>Class9</option>
                <option>Class10</option>
                <option>Class11</option>
                <option>Class12</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="type">Ambition :</label>
              <select
                className="form-control"
                name="type"
                onChange={onChangeDD}
                id="type"
                value={filters.type}
              >
                <option>Doctors</option>
                <option>Engineers</option>
                <option>Lawyers</option>
              </select>
            </div>
          </div>
        </div>
      </>
    );
}