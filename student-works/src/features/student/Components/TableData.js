import React from "react";
import { Table } from "reactstrap";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  selectAllStudents,
  studentsSorted,
  studentMarkChecked,
  studentMarkUnChecked,
} from "../studentSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

function TableData() {
  let students = useSelector(selectAllStudents);

  const dispatch = useDispatch();

  const handleCheck = (id) => {
    dispatch(studentMarkChecked(id));
  };

  const handleUnCheck = (id) => {
    dispatch(studentMarkUnChecked(id));
  };

  const sort = (type) => {
    dispatch(studentsSorted(type));
  };

  const renderStudents = students.map((student) => (
    <TableRow
      key={student.id}
      id={student.id}
      FirstName={student.FirstName}
      LastName={student.LastName}
      group={student.group}
      topic={student.topic}
      handleCheck={() => handleCheck(student.id)}
      handleUnCheck={() => handleUnCheck(student.id)}
    />
  ));

  return (
    <form data-testid="table">
      <Table hover size="sm" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => sort("FirstName")}>
              <div className="sort">
                <div className="table-heading">First Name</div>
                <div>
                  <CaretUpFill className="arrow" />
                  <CaretDownFill className="arrow" />
                </div>
              </div>
            </th>
            <th onClick={() => sort("LastName")}>
              <div className="sort">
                <div className="table-heading">Last Name</div>
                <div>
                  <CaretUpFill className="arrow" />
                  <CaretDownFill className="arrow" />
                </div>
              </div>
            </th>
            <th>Group</th>
            <th>Topic</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{renderStudents}</tbody>
      </Table>
    </form>
  );
}

export default TableData;
