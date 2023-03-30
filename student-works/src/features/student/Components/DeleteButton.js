import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import DeleteModal from "./DeleteModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { studentDeleted, selectCheckedLength } from "../studentSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TrashFill } from "react-bootstrap-icons";

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
      <Button outline onClick={toggleDelete}>
        <TrashFill />
      </Button>
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
