import React from "react";
import { Label, FormGroup, Input } from "reactstrap";
import { studentsFilterGroup } from "../studentSlice";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";

function FilterGroup() {
  const dispatch = useDispatch();

  const handleGroupChange = (e) => {
    dispatch(studentsFilterGroup(e.target.value));
  };

  return (
    <FormGroup>
      <Input id="group" type="select" name="group" onChange={handleGroupChange}>
        <option value="">No group filter</option>
        <option value="1020">1020</option>
        <option value="1025">1025</option>
      </Input>
    </FormGroup>
  );
}

export default FilterGroup;
