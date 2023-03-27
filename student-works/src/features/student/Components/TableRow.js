import React from "react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { Pencil } from 'react-bootstrap-icons';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

function TableRow (props) {

  const navigate = useNavigate();
  const [cheked, setChecked] = useState(false)

  function handleCheck(e) {
    setChecked(e.target.checked);
  }

  return(
    <tr key={props.id} data-testid="table-row">
        <th scope="row"><input type="checkbox" onChange={handleCheck}/></th>
        <td onClick={() => navigate(`/element/${props.id}`)}>{props.FirstName}</td>
        <td onClick={() => navigate(`/element/${props.id}`)}>{props.LastName}</td>
        <td onClick={() => navigate(`/element/${props.id}`)}>{props.group}</td>
        <td onClick={() => navigate(`/element/${props.id}`)}>{props.topic}</td>
        <td onClick={props.editClick} data-testid="edit-button"><Pencil /></td>
    </tr>
        
  );
}

TableRow.propTypes = {
  id: PropTypes.string,
  FirstName: PropTypes.string,
  LastName: PropTypes.string,
  group: PropTypes.string,
  topic: PropTypes.string,
  editClick: PropTypes.func,
  deleteClick: PropTypes.func,
  checkClick: PropTypes.func
};

export default TableRow;