import React from "react";
import TableRow from "./TableRow";
import { selectAllStudents, studentsSorted } from "../studentSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import "../style/table.css";

function TableData() {
  let students = useSelector(selectAllStudents);

  const dispatch = useDispatch();

  const sort = (type) => {
    dispatch(studentsSorted(type));
  };

  const renderStudents = students.students.map((student) => (
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
      <table className="form-table">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => sort("firstName")} className="sort-head">
              <div className="sort">
                <div className="table-heading">First Name</div>
                <div>
                  <CaretUpFill className="arrow" />
                  <CaretDownFill className="arrow" />
                </div>
              </div>
            </th>
            <th onClick={() => sort("lastName")} className="sort-head">
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
          </tr>
        </thead>
        <tbody>{renderStudents}</tbody>
      </table>
    </form>
  );
}

export default TableData;
