import React, { useState } from "react";
import "./card.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import image from "../../assets/logo/logo1.png";
// parent Card

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
          completed={completed}
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
          <div className="actity-discription">
            <h6>{param.color.description}</h6>
          </div>
          <div className="card-bottom">
            <span className="card-bottom-text">
              End Date : {param.color.lastDate}
            </span>
            <span
              className={
                completed === true
                  ? "completedIndication"
                  : "incompletedIndication"
              }
            >
              <TaskAltIcon
                sx={{ color: "white", fontSize: "1rem" }}
                className="complete icon"
              />
              completed
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded, complete }) {
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
    setExpanded(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate(formValues);
    if (!valid.comments) {
      complete();
      handleClose();
    }
  };
  return (
    <motion.div
      className={param.color.expandClass}
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
