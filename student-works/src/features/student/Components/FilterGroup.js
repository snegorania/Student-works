import React from "react";
import { studentsFilterGroup } from "../studentSlice";
import { useDispatch } from "react-redux";
import "../style/buttons.css";

function FilterGroup() {
  const dispatch = useDispatch();

  const handleGroupChange = ({ target: { value } }) => {
    dispatch(studentsFilterGroup(value));
  };

  return (
    <select
      className="select-filter-group"
      id="group"
      type="select"
      name="group"
      onChange={handleGroupChange}
    >
      <option value="">No group filter</option>
      <option value="1020">1020</option>
      <option value="1025">1025</option>
    </select>
  );
}

export default FilterGroup;
