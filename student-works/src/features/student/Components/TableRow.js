import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import EditButton from "./EditButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";

function TableRow(props) {
  const navigate = useNavigate();

  function handleClick(e) {
    if (e.target.checked) {
      props.handleCheck();
    } else {
      props.handleUnCheck();
    }
  }

  return (
    <tr key={props.id} data-testid="table-row" className="navigation">
      <th scope="row">
        <input type="checkbox" onChange={handleClick} />
      </th>
      <td onClick={() => navigate(`/element/${props.id}`)}>
        {props.FirstName}
      </td>
      <td onClick={() => navigate(`/element/${props.id}`)}>{props.LastName}</td>
      <td onClick={() => navigate(`/element/${props.id}`)}>{props.group}</td>
      <td onClick={() => navigate(`/element/${props.id}`)}>{props.topic}</td>
      <EditButton id={props.id} />
    </tr>
  );
}

TableRow.propTypes = {
  id: PropTypes.string,
  FirstName: PropTypes.string,
  LastName: PropTypes.string,
  group: PropTypes.string,
  topic: PropTypes.string,
  handleCheck: PropTypes.func,
  handleUnCheck: PropTypes.func,
};

export default TableRow;
