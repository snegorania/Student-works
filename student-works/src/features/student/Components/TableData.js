import React from "react";
import { Table } from "reactstrap";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { selectAllStudents, studentsSorted } from "../studentSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

function TableData() {
  let students = useSelector(selectAllStudents);

  const dispatch = useDispatch();

  const sort = (type) => {
    dispatch(studentsSorted(type));
  };

  const renderStudents = students.map((student) => (
    <TableRow
      key={student.id}
      id={student.id}
      firstName={student.firstName}
      lastName={student.lastName}
      group={student.group}
      topic={student.topic}
    />
  ));

  return (
    <form data-testid="table">
      <Table hover size="sm" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => sort("firstName")}>
              <div className="sort">
                <div className="table-heading">First Name</div>
                <div>
                  <CaretUpFill className="arrow" />
                  <CaretDownFill className="arrow" />
                </div>
              </div>
            </th>
            <th onClick={() => sort("lastName")}>
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
