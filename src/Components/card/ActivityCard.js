import React, { useState } from "react";
import "./card.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import image from "../../assets/logo/logo1.png";
import TaskAltIcon from "@mui/icons-material/Task";
export const Class9 = [
  {
    grade: "9th Grade",
    name: "Motivation",
    description:
      "Don’t expect that you’ll be able to take in everything you need to study quickly and without difficulty. Give yourself the time to take small steps and divide big topics into smaller chunks. You’ll learn something new every day, which means you’re making progress every day.",
    lastDate: "1/1/2023",
  },
];
const ActivityCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(false);
  const complete = () => {
    setCompleted(true);
  };
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard
          param={props}
          setExpanded={() => setExpanded(false)}
          complete={complete}
        />
      ) : (
        <CompactCard
          param={props}
          setExpanded={() => setExpanded(true)}
          Completed={completed}
        />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded, completed }) {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
        color: "black",
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="activity-Card-Content">
        <div className="activity-header">
          <div>
            <img src={image} alt="logo" className="act_logo" />
          </div>
          <div className="activity-heading">
            <b>
              {" "}
              {param.color.grade} - {param.color.name}
            </b>
          </div>
        </div>
        <div className="activity-body">
          <div>
            <h6>{param.color.description}</h6>
          </div>
          <div>
            <span>End Date : {param.color.lastDate}</span>
            <span
              className={
                completed === true
                  ? "completedIndication"
                  : "incompletedIndication"
              }
            >
              <TaskAltIcon sx={{ color: "white", fontSize: "1rem" }} />
              completed
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded, setCompleted }) {
  const initialValues = { comments: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const validate = (values) => {
    const errors = {};

    if (!values.comments) {
      errors.comments = "comments is required!";
    }
    return errors;
  };
  const handleClose = () => {
    setCompleted(true);
    setExpanded(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate(formValues);
    if (!valid.comments) {
      handleClose();
    }
  };
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div className="Act-closebutton" style={{ alignSelf: "flex-end" }}>
        <UilTimes onClick={setExpanded} />
      </div>

      <div className="chartContainer">
        <div>
          <div>{"Confirm to submit"}</div>
          <div>
            {/* <div className="col">
              <label htmlFor="">Comments: </label>
            </div> */}
            <div className="col">
              <textarea
                id="comments"
                name="comments"
                value={formValues.comments}
                onChange={handleChange}
                placeholder="Add Comment To Submit"
              />
            </div>
          </div>
          <div>
            <button onClick={handleSubmit}>Confirm</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ActivityCard;
