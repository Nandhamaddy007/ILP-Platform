import LeftDash from "./Leftdash";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import EditStudent from "../Forms/EditStudent";
import './dashboard.css'
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import NavigationBar from "../NavigationBar";
import EditIcon from "@mui/icons-material/Edit";
export default function FilterScreen(props) {
  let data = useParams();
  const [filters, setFilters] = useState({ class: "", type: "" });
  const [editData, setEditData] = useState({ show: false });
  let temp = [
    {
      name: "johm",
      class: "9th Grade",
      pTask: "Doctor",
      sTask: "Engineer",
      status: "inProgress",
    },
    {
      name: "jack",
      class: "9th Grade",
      pTask: "Lawyer",
      sTask: "Pilot",
      status: "inProgress",
    },
    {
      name: "jill",
      class: "9th Grade",
      pTask: "NA",
      sTask: "NA",
      status: "yet to assign",
    },

    {
      name: "johm",
      class: "10th Grade",
      pTask: "Doctor",
      sTask: "Engineer",
      status: "inProgress",
    },
    {
      name: "jack",
      class: "10th Grade",
      pTask: "Lawyer",
      sTask: "Pilot",
      status: "inProgress",
    },
    {
      name: "jill",
      class: "10th Grade",
      pTask: "Scientist",
      sTask: "Politician",
      status: "inProgress",
    },

    {
      name: "nancy",
      class: "11th Grade",
      pTask: "Police",
      sTask: "Pilot",
      status: "inProgress",
    },
    {
      name: "mani",
      class: "11th Grade",
      pTask: "Engineer",
      sTask: "Pilot",
      status: "inProgress",
    },
    {
      name: "arun",
      class: "11th Grade",
      pTask: "Chef",
      sTask: "Business",
      status: "inProgress",
    },

    {
      name: "jude",
      class: "12th Grade",
      pTask: "Engineer",
      sTask: "Pilot",
      status: "completed",
    },
    {
      name: "peter",
      class: "12th Grade",
      pTask: "Farmer",
      sTask: "Pilot",
      status: "inProgress",
    },
    {
      name: "hari",
      class: "12th Grade",
      pTask: "Lawyer",
      sTask: "Pilot",
      status: "inProgress",
    },
  ];
  const [studentData, setStudentData] = useState(temp);
  const [csvHolder, setCsvHolder] = useState()
  useEffect(() => {
    console.log(Object.keys(data).length == 0, data);
    setFilters({ ...data });
    if (Object.keys(data).length > 0) setTable(data);
  }, []);
  const jsonToCsv=(json)=>{
    console.log(json)
    if(json.length>1){
      const heading = Object.keys(json[0]).join(",");
      const body = json.map((j) => Object.values(j).join(",")).join("n");
      setCsvHolder(`${heading}${body}`)
    }
    
  }
  const setTable = (val) => {
    var n
    if (val["class"] == "All Classes" && val["type"] == "All Career") {
      n=[...temp];
    } else      
        n=temp.filter((data, ind) => {
          if (val["class"] == "All Classes") {
            if (data["pTask"] === val["type"]) {
              return data;
            }
          } else if (val["type"] == "All Career") {
            if (data["class"] === val["class"]) {
              return data;
            }
          } else {
            console.log(val, data);
            if (
              data["class"] === val["class"] &&
              data["pTask"] === val["type"]
            ) {
              return data;
            }
          }
        }

      );
      setStudentData(n)
      jsonToCsv(n)
  }
  const setEdit = (obj) => {
    setEditData({
      ...editData,
      ...obj,
      show: true,
    });
  };
  let onChangeDD = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });

    setTable({
      class: "",
      type: "",
      ...filters,
      [e.target.name]: e.target.value,
    })
  };
  return (
    <>
      <NavigationBar />
      <section className="section-wrap">
        <div className="Filter-container">
          {editData && <EditStudent data={editData} />}
          <div className="mt-4">
            <div>
              {" "}
              <h1>Filter Screen</h1>
            </div>
            <br />
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
                  <option>All Classes</option>
                  <option>9th Grade</option>
                  <option>10th Grade</option>
                  <option>11th Grade</option>
                  <option>12th Grade</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="type">Primary Career :</label>
                <select
                  className="form-control"
                  name="type"
                  onChange={onChangeDD}
                  id="type"
                  value={filters.type}
                >
                  <option>All Career</option>
                  <option>NA</option>
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
            </div>
            <div className="mt-5 scroller">
            <IconButton aria-label="download" onClick={()=>{                
                  const element = document.createElement("a");
                  const file = new Blob([csvHolder], {type: 'text/plain'});
                  element.href = URL.createObjectURL(file);
                  element.download = "students.csv";
                  document.body.appendChild(element); 
                  element.click();
                
              }}>
  <DownloadIcon />.csv
</IconButton>
              {/* <div className="btn"
              onClick={()=>{                
                  const element = document.createElement("a");
                  const file = new Blob([csvHolder], {type: 'text/plain'});
                  element.href = URL.createObjectURL(file);
                  element.download = "students.csv";
                  document.body.appendChild(element); 
                  element.click();
                
              }}
              >Download as CSV</div> */}
              <table className="table table-hover">
                <thead style={{ background: "#42a5f5", color: "white" }}>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    <th scope="col">Primary Career</th>
                    <th scope="col">Secondary Career</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((data, index) => {
                    return (
                      <>
                        <tr>
                          <td>{data["name"]}</td>
                          <td>{data["class"]}</td>
                          <td>{data["pTask"]}</td>
                          <td>{data["sTask"]}</td>
                          <td>{data["status"]}</td>
                          <td>
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                              onClick={() => setEdit(data)}
                              data-bs-toggle="modal"
                              data-bs-target="#staticstudentData"
                            >
                              <EditIcon />
                            </IconButton>
                           
                          </td>
                        </tr>{" "}
                      </>
                    );
                  })}
                </tbody>
              </table>

              {studentData.length < 1 && (
                <h5
                  style={{
                    position: "absolute",
                    left: "35%",
                    marginTop: "5%",
                  }}
                >
                  No results found
                </h5>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}