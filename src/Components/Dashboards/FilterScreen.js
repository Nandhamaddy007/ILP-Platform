import LeftDash from "./Leftdash";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import EditStudent from "../Forms/EditStudent";
import './dashboard.css'
import { Button } from "@mui/material";
import NavigationBar from "../NavigationBar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
export default function FilterScreen(props) {
  let data = useParams();
  const [filters, setFilters] = useState({ class: "", type: "" });
  const [editData, setEditData] = useState({ show: false });
  let temp = [
    {
      name: "johm",
      class: "9th Grade",
      pTask: "doctor",
      sTask: "engineer",
      status: "inProgress",
    },
    {
      name: "jack",
      class: "9th Grade",
      pTask: "lawyer",
      sTask: "pilot",
      status: "inProgress",
    },
    {
      name: "jill",
      class: "9th Grade",
      pTask: "",
      sTask: "",
      status: "yet to assign",
    },

    {
      name: "johm",
      class: "10th Grade",
      pTask: "doctor",
      sTask: "engineer",
      status: "inProgress",
    },
    {
      name: "jack",
      class: "10th Grade",
      pTask: "lawyer",
      sTask: "pilot",
      status: "inProgress",
    },
    {
      name: "jill",
      class: "10th Grade",
      pTask: "scientist",
      sTask: "politician",
      status: "inProgress",
    },

    {
      name: "nancy",
      class: "11th Grade",
      pTask: "police",
      sTask: "pilot",
      status: "inProgress",
    },
    {
      name: "mani",
      class: "11th Grade",
      pTask: "engineer",
      sTask: "pilot",
      status: "inProgress",
    },
    {
      name: "arun",
      class: "11th Grade",
      pTask: "chef",
      sTask: "business",
      status: "inProgress",
    },

    {
      name: "jude",
      class: "12th Grade",
      pTask: "engineer",
      sTask: "Pilot",
      status: "completed",
    },
    {
      name: "peter",
      class: "12th Grade",
      pTask: "farmer",
      sTask: "Pilot",
      status: "inProgress",
    },
    {
      name: "hari",
      class: "12th Grade",
      pTask: "lawyer",
      sTask: "Pilot",
      status: "inProgress",
    },
  ];
  const [studentData, setStudentData] = useState(temp);
  useEffect(() => {
    console.log(Object.keys(data).length == 0, data);
    setFilters({ ...data });
    if (Object.keys(data).length > 0) setTable(data);
  }, []);
  const setTable = (val) => {
    if (val["class"] == "" && val["type"] == "") {
      setStudentData([...temp]);
    } else
      setStudentData(
        temp.filter((data, ind) => {
          if (val["class"] == "") {
            if (data["pTask"] === val["type"]) {
              return data;
            }
          } else if (val["type"] == "") {
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
        })
      );
  };
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
    });
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
                  <option></option>
                  <option>9th Grade</option>
                  <option>10th Grade</option>
                  <option>11th Grade</option>
                  <option>12th Grade</option>
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
              <table className="table table-hover">
                <thead style={{ background: "#42a5f5", color: "white" }}>
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
                            {/* <Button
                              variant="contained"
                              style={{ background: "#42a5f5" }}
                              className="form__button _btn"
                              onClick={() => setEdit(data)}
                              data-bs-toggle="modal"
                              data-bs-target="#staticstudentData"
                            >
                              Edit <i class="bi bi-pencil-square"></i>
                            </Button> */}
                            {/* <div className="btn btn-dark" 
                           onClick={()=>setEdit(data)}
                           data-bs-toggle="modal" 
                           data-bs-target="#staticstudentData"> 
                           </div> */}
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