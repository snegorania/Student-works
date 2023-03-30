import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { studentsLoadToLocalStorage } from "../studentSlice";
import { useDispatch } from "react-redux";

function SaveButton() {
  const dispatch = useDispatch();

  const loadToStorage = () => {
    dispatch(studentsLoadToLocalStorage());
  };

  return (
    <Button outline onClick={loadToStorage}>
      Save
    </Button>
  );
}

export default SaveButton;
