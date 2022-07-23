import axios from "axios";
import { useEffect, useState } from "react";
import { schools, blocks } from "./data";
export default function AddStudentsForm(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json"
      )
      .then((data) => {
        console.log(data);
        setState(
          data.data.states.filter((one, index) => {
            if (one.state === "Karnataka") {
              return one;
            }
          })[0]
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <form className="shadow p-3 mb-5 bg-body rounded">
        <h2 style={{ padding: "3%" }}>Add Student</h2>
        <div className="formGroup">
          <label>Name:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="formGroup">
          <label>Roll No:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="formGroup">
          <label>Ambition:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="formGroup">
          <div className="row">
            <div className="col">
              <label>Class:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col">
              <label>Section:</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>

        <div className="formGroup">
          <label>Districts</label>

          <select id="updateDD" className="form-select">
            <option disabled></option>
            {state?.districts?.map((data, index) => {
              return <option>{data}</option>;
            })}
          </select>
        </div>

        <div className="formGroup">
          <label>Block</label>

          <select id="updateDD" className="form-select">
            <option disabled></option>
            {blocks.map((data, index) => {
              return <option>{data}</option>;
            })}
          </select>
        </div>

        <div className="formGroup">
          <label>School</label>

          <select id="updateDD" className="form-select">
            <option disabled></option>
            {schools.map((data, index) => {
              return <option>{data}</option>;
            })}
          </select>
        </div>

        <div className="formGroup">
          <label>Comments:</label>
          <textarea className="form-control"></textarea>
        </div>
        <div className="formGroup">
          <div className="row">
            <div className="col">
              <button className="btn btn-success">Submit</button>
            </div>
            <div className="col">
              <button className="btn btn-danger float-end">Clear</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
