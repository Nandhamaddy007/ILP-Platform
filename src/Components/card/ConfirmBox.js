import { motion } from "framer-motion";
import { useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ConfirmBox(props) {
  const initialValues = { comments: "" };
  const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues.comments);
  };
  const validate = (values) => {
    const errors = {};

    if (!values.comments) {
      errors.comments = "comments is required!";
    }

    return errors;
  };
  const clear = () => {
    formValues.comments = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate(formValues);
    if (!valid.comments) {
      console.log(formValues);
      props.setCompleted();
      props.setOpen();

      clear();
    }
  };
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
        >
          Confirmation
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div>
            <div className="col">
              <textarea
                id="comments"
                name="comments"
                value={formValues.comments}
                onChange={handleChange}
                placeholder="Add comments to submit"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Confirm
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </motion.div>
  );
}
