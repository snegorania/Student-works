import React from "react";
import { Label, FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { studentsFilterTopic } from "../studentSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";

function FilterTopic() {
  const dispatch = useDispatch();

  const handleTopicChange = (e) => {
    dispatch(studentsFilterTopic(e.target.value));
  };
  return (
    <FormGroup>
      <Input id="group" type="select" name="group" onChange={handleTopicChange}>
        <option value="">No topic filter</option>
        <option value="Belarusian culture">Belarusian culture</option>
        <option value="Ecological problems">Ecological problems</option>
        <option value="Live on other planets">Live on other planets</option>
      </Input>
    </FormGroup>
  );
}

export default FilterTopic;
