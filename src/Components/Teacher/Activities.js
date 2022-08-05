import React from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "../../assets/styles/teacher.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { InputLabel } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const Activities = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate(formValues);
    if (!valid.comments) {
      handleClose();
    }
  };
  return (
    <>
      <div>
        <div>
          {" "}
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Confirm to submit"}</DialogTitle>
            <DialogContent>
              <div className="col">
                <label htmlFor="">Comments: </label>
              </div>
              <div className="col">
                <textarea
                  id="comments"
                  name="comments"
                  value={formValues.comments}
                  onChange={handleChange}
                ></textarea>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSubmit}>Confirm</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
        {props.activities.map((step, index) => (
          <Box sx={{ maxWidth: 400 }}>
            <Step key={index}>
              <StepLabel>{step.grade}</StepLabel>
              <StepLabel>{step.name}</StepLabel>

              <StepContent>
                <Typography>{step.description}</Typography>
                <Typography>Last Date:{step.lastDate}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleClickOpen}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Complete
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          </Box>
        ))}
      </div>
    </>
  );
};

export default Activities;
