import React from "react";
import { FormGroup } from "reactstrap";
import { studentsFilterGroup } from "../studentSlice";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";

function FilterGroup() {
  const dispatch = useDispatch();

  const handleGroupChange = ({ target: { value } }) => {
    dispatch(studentsFilterGroup(value));
  };

  return (
    <FormGroup>
      <select
        className="form-select"
        id="group"
        type="select"
        name="group"
        onChange={handleGroupChange}
      >
        <option value="">No group filter</option>
        <option value="1020">1020</option>
        <option value="1025">1025</option>
      </select>
    </FormGroup>
  );
}

export default FilterGroup;
