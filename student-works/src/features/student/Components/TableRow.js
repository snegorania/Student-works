import React from "react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { Pencil } from 'react-bootstrap-icons';
import { TrashFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

function TableRow (props) {

  const navigate = useNavigate();

  return(
    <tr key={props.id} data-testid="table-row">
        <th onClick={() => navigate(`/element/${props.id}`)} scope="row">{props.id}</th>
        <td onClick={() => navigate(`/element/${props.id}`)}>{props.FirstName}</td>
        <td onClick={() => navigate(`/element/${props.id}`)}>{props.LastName}</td>
        <td onClick={() => navigate(`/element/${props.id}`)}>{props.group}</td>
        <td onClick={() => navigate(`/element/${props.id}`)}>{props.topic}</td>
        <td onClick={props.editClick} data-testid="edit-button"><Pencil /></td>
        <td onClick={props.deleteClick} data-testid="delete-button"><TrashFill /></td>
    </tr>
        
  );
}

TableRow.propTypes = {
  id: PropTypes.string,
  FirstName: PropTypes.string,
  LastName: PropTypes.string,
  group: PropTypes.string,
  topic: PropTypes.string
};

export default TableRow;