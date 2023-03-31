import React from "react";
import { FormGroup } from "reactstrap";
import { useDispatch } from "react-redux";
import { studentsFilterTopic } from "../studentSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";

function FilterTopic() {
  const dispatch = useDispatch();

  const handleTopicChange = ({ target: { value } }) => {
    dispatch(studentsFilterTopic(value));
  };

  return (
    <FormGroup>
      <select
        className="form-select"
        id="group"
        type="select"
        name="group"
        onChange={handleTopicChange}
      >
        <option value="">No topic filter</option>
        <option value="Belarusian culture">Belarusian culture</option>
        <option value="Ecological problems">Ecological problems</option>
        <option value="Live on other planets">Live on other planets</option>
      </select>
    </FormGroup>
  );
}

export default FilterTopic;
