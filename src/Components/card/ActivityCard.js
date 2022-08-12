import React, { useState, useEffect } from "react";
import "./card.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import image from "../../assets/logo/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ConfirmBox from "./ConfirmBox";
import Tooltip from "@mui/material/Tooltip";
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
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    let dt = new Date().toLocaleDateString();
    setCurrentDate(dt);
  }, []);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard
          param={props}
          setExpanded={() => setExpanded(true)}
          handleClickOpen={handleClickOpen}
          completed={completed}
          currentDate={currentDate}
        />
      )}
      <ConfirmBox
        open={open}
        handleClose={handleClose}
        setOpen={() => setOpen(false)}
        setCompleted={() => setCompleted(true)}
      />
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({
  param,
  setExpanded,
  handleClickOpen,
  completed,
  currentDate,
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(handleTooltipClose, 3000);
  });
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
        color: "black",
      }}
      layoutId="expandableCard"
      // onClick={setExpanded}
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
          <div className="card-bottom row mb-xl-5 mb-lg-5 mb-md-5 mb-sm-5  ">
            <div className="card-bottom-text col-7 col-xl-8 col-lg-7 text-start ">
              <pre className="mb-0">End Date: {param.color.lastDate}</pre>
            </div>
            <Tooltip
              // PopperProps={{
              //   disablePortal: true,
              // }}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="this option will be enabled on mentioned date"
            >
              <button
                type="submit"
                className={
                  currentDate === param.color.lastDate
                    ? "completedIndication col-3 col-xl-4 col-lg-2 cc"
                    : "completedIndication col-3 col-xl-4 col-lg-2 "
                }
                onClick={() => {
                  if (currentDate === param.color.lastDate) {
                    handleClickOpen();
                  } else {
                    handleTooltipOpen();
                  }
                }}
              >
                <TaskAltIcon
                  sx={{
                    color: "white",
                    fontSize: ".8rem",
                    marginRight: ".2rem",
                  }}
                  className="complete icon"
                />
                Completed
              </button>
            </Tooltip>
          </div>

          <Link to={"/filter/" + param.color.grade + "/All Career"}>
            {" "}
            <button
              className="Career-Choice-btn "
              style={{ background: param.bg }}
            >
              <b> Career Choice {param.color.grade}</b>
              <FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded, complete, grade }) {
  // const initialValues = { comments: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [sucess, setSucess] = useState(false);
  // const color = () => {
  //   setSucess(true);
  // };
  // const color2 = () => {
  //   setSucess(false);
  // };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(initialValues.comments.length);
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues.comments.length);
  //   color();
  // };
  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.comments) {
  //     errors.comments = "comments is required!";
  //     color2();
  //   }

  //   return errors;
  // };
  // const handleClose = () => {
  //   setExpanded(false);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const valid = validate(formValues);
  //   if (!valid.comments) {
  //     complete();
  //     handleClose();

  //     console.log(formValues);
  //   }
  // };
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

      {/* <div className="chartContainer">
        <div>
          <div>{"Confirm to submit"}</div>
          <div>
      
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
            {" "}
            <button
              onClick={handleSubmit}
              className={
                sucess === true
                  ? "confirm-act-button-sucess"
                  : "confirm-act-button"
              }
            >
              Confirm
            </button>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
}

export default ActivityCard;
