import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { studentsFromLocalStorage } from "../studentSlice";
import { useDispatch } from "react-redux";
import { ArrowUp } from "react-bootstrap-icons";

function LoadButton() {
  const dispatch = useDispatch();

  const loadFromStorage = () => {
    dispatch(studentsFromLocalStorage());
  };

  return (
    <Button outline onClick={loadFromStorage}>
      <ArrowUp />
    </Button>
  );
}

export default LoadButton;
