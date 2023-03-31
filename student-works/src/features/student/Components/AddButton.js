import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import { studentAdded } from "../studentSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import AddModal from "./AddModal";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { PersonPlus } from "react-bootstrap-icons";
import "../../../App.css";

function AddButton() {
  const [bufferStudent, setBufferStudent] = useState({});
  const [addModal, setAddModal] = useState(false);

  const dispatch = useDispatch();

  const toggleAdd = () => setAddModal(!addModal);

  const addClick = () => {
    setBufferStudent({
      ...bufferStudent,
      id: nanoid(),
      firstName: "",
      lastName: "",
      group: "",
      topic: "",
      answer: "",
    });
    toggleAdd();
  };

  const addStudent = (student) => {
    dispatch(studentAdded(student));
  };

  return (
    <div>
      <Button outline onClick={addClick}>
        <PersonPlus />
      </Button>
      <AddModal
        toggleAdd={toggleAdd}
        addModal={addModal}
        student={bufferStudent}
        addStudent={addStudent}
      />
    </div>
  );
}

export default AddButton;
