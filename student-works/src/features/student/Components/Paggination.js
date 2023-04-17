import React from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import "../style/paggination.css";
import { useDispatch } from "react-redux";
import { changePage, studentsSetNum } from "../studentSlice";
import { useSelector } from "react-redux";
import { selectAllStudents } from "../studentSlice";

function Paggination() {
  let students = useSelector(selectAllStudents);
  let dispatch = useDispatch();

  const handleRowNumberChange = ({ target: { value } }) => {
    dispatch(studentsSetNum(value));
  };

  const handleClick = (isDirectionNext) => {
    dispatch(changePage({ isDirectionNext, maxPage: students.allpages }));
  };

  return (
    <div className="paggination">
      <div className="paggination-label-select">
        <label htmlFor="rowNumber" className="paggination-label">
          Number of rows:
        </label>
        <select
          className="paggination-select"
          id="rowNumber"
          name="rowNumber"
          onChange={handleRowNumberChange}
        >
          <option value="">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="paggination-buttons">
        <div className="paggination-pages">
          <span>{`${students.page} / ${students.allpages}`}</span>
        </div>
        <button
          type="button"
          className="paggination-button"
          onClick={() => handleClick(false)}
        >
          <ArrowLeft className="paggination-icon" />
        </button>
        <button
          type="button"
          className="paggination-button"
          onClick={handleClick.bind(this, true)}
        >
          <ArrowRight className="paggination-icon" />
        </button>
      </div>
    </div>
  );
}

export default Paggination;
