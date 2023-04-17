import React from "react";
import { studentsReset } from "../studentSlice";
import { useDispatch } from "react-redux";
import "../style/buttons.css";

function ResetButton() {
  const dispatch = useDispatch();

  const resetTable = () => {
    dispatch(studentsReset());
  };

  return (
    <button type="button" className="reset-button" onClick={resetTable}>
      Reset
    </button>
  );
}

export default ResetButton;
