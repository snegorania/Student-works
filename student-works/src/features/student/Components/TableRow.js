import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { studentCheck } from "../studentSlice";
import EditButton from "./EditButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";

function TableRow(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(studentCheck(id));
  };

  return (
    <tr key={props.id} data-testid="table-row" className="navigation">
      <th scope="row">
        <input type="checkbox" onChange={() => handleClick(props.id)} />
      </th>
      <td onClick={() => navigate(`/element/${props.id}`)}>
        {props.firstName}
      </td>
      <td onClick={() => navigate(`/element/${props.id}`)}>{props.lastName}</td>
      <td onClick={() => navigate(`/element/${props.id}`)}>{props.group}</td>
      <td onClick={() => navigate(`/element/${props.id}`)}>{props.topic}</td>
      <EditButton id={props.id} />
    </tr>
  );
}

TableRow.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  group: PropTypes.string,
  topic: PropTypes.string,
  handleCheck: PropTypes.func,
  handleUnCheck: PropTypes.func,
};

export default TableRow;
