import React from "react";
import { studentsFromLocalStorage } from "../studentSlice";
import { useDispatch } from "react-redux";
import { ArrowUp } from "react-bootstrap-icons";
import "../style/buttons.css";

function LoadButton() {
  const dispatch = useDispatch();

  const loadFromStorage = () => {
    dispatch(studentsFromLocalStorage());
  };

  return (
    <button type="button" className="load-button" onClick={loadFromStorage}>
      <ArrowUp className="load-icon" />
    </button>
  );
}

export default LoadButton;
