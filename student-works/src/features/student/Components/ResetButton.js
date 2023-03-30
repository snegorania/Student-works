import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { studentsReset } from "../studentSlice";
import { useDispatch } from "react-redux";
import "../../../App.css";

function ResetButton() {
  const dispatch = useDispatch();

  const resetTable = () => {
    dispatch(studentsReset());
  };

  return (
    <Button outline onClick={resetTable}>
      Reset
    </Button>
  );
}

export default ResetButton;
