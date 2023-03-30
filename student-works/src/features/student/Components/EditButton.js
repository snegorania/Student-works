import React from "react";
import { useState } from "react";
import { Pencil } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { selectStudentById, studentEdited } from "../studentSlice";
import EditModal from "./EditModal";

function EditButton({ id }) {
  const [editModal, setEditModal] = useState(false);
  const dispatch = useDispatch();
  const student = useSelector((state) => selectStudentById(state, id));

  const toggleEdit = () => setEditModal(!editModal);

  const editStudent = (student) => {
    dispatch(studentEdited(student));
  };

  return (
    <>
      <td onClick={toggleEdit} data-testid="edit-button">
        <Pencil />
      </td>
      <EditModal
        toggleEdit={toggleEdit}
        editModal={editModal}
        student={student}
        editStudent={editStudent}
      />
    </>
  );
}

export default EditButton;
