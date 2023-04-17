import React from "react";
import { studentsLoadToLocalStorage } from "../studentSlice";
import { useDispatch } from "react-redux";
import "../style/buttons.css";

function SaveButton() {
  const dispatch = useDispatch();

  const loadToStorage = () => {
    dispatch(studentsLoadToLocalStorage());
  };

  return (
    <button type="button" class="save-button" onClick={loadToStorage}>
      Save
    </button>
  );
}

export default SaveButton;
