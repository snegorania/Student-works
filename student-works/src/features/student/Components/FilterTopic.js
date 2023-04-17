import React from "react";
import { useDispatch } from "react-redux";
import { studentsFilterTopic } from "../studentSlice";
import "../style/buttons.css";

function FilterTopic() {
  const dispatch = useDispatch();

  const handleTopicChange = ({ target: { value } }) => {
    dispatch(studentsFilterTopic(value));
  };

  return (
    <select
      className="select-filter-topic"
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
  );
}

export default FilterTopic;
