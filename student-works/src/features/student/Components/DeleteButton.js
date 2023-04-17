import React from "react";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { studentDeleted, selectCheckedLength } from "../studentSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TrashFill } from "react-bootstrap-icons";
import "../style/buttons.css";

function DeleteButton() {
  const [deleteModal, setDeleteModal] = useState(false);
  let checkedLength = useSelector(selectCheckedLength);
  const dispatch = useDispatch();
  const toggleDelete = () => setDeleteModal(!deleteModal);

  const deleteStudent = () => {
    dispatch(studentDeleted());
  };

  return (
    <>
      <button type="button" className="delete-button" onClick={toggleDelete}>
        <TrashFill className="delete-icon" />
      </button>
      <DeleteModal
        amount={checkedLength}
        toggleDelete={toggleDelete}
        deleteModal={deleteModal}
        deleteStudent={deleteStudent}
      />
    </>
  );
}

export default DeleteButton;
