import React from "react";
import { useState } from "react";
import { studentAdded } from "../studentSlice";
import AddModal from "./AddModal";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { PersonPlus } from "react-bootstrap-icons";

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
      <button type="button" className="add-button" onClick={addClick}>
        <PersonPlus className="add-icon" />
      </button>
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
