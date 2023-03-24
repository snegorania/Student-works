import React from "react";
import { useState } from 'react';
import { Table } from 'reactstrap';
import TableRow from "./TableRow";
import { Button } from 'reactstrap';
import DeleteModal from "./DeleteModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectAllStudents, studentEdited, studentDeleted, studentAdded, studentsReset, studentsFromLocalStorage, studentsLoadToLocalStorage, studentsSorted} from "../studentSlice";
import { useSelector } from 'react-redux';
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function TableData() {  

  const [sortType, setSortType] = useState("id");
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [addModal,setAddModal] = useState(false);
  const [operatedId, setOperatedId] = useState(-1);
  const [student, setStudent] = useState({});
  const [bufferStudent, setBufferStudent] = useState({});

  const students = useSelector(selectAllStudents);

  const dispatch = useDispatch();

  const toggleDelete = () => setDeleteModal(!deleteModal);
  const toggleEdit = () => setEditModal(!editModal);
  const toggleAdd = () => setAddModal(!addModal);

  const deleteClick = id => {
    setOperatedId(id);
    toggleDelete();
  }

  const deleteStudent = () => {
    dispatch(studentDeleted(operatedId));
  }


  const editClick = id => {
    setStudent(students.find(el => el.id === id));
    toggleEdit();
  }

  const editStudent = student => {
    dispatch(studentEdited(student, sortType));
  }

  const addClick = () => {
    setBufferStudent({...bufferStudent, id: nanoid(), FirstName: "", LastName: "", group: "", topic: "", answer: ""});
    toggleAdd();
  }

  const addStudent = student => {
    dispatch(studentAdded(student, sortType));
  }

  const resetTable = () => {
    dispatch(studentsReset());
  }
  const loadFromStorage = () => {
    dispatch(studentsFromLocalStorage(sortType));
  }

  const loadToStorage = () => {
    dispatch(studentsLoadToLocalStorage(sortType));
  }

  const sort = type => {
    setSortType(type);
    dispatch(studentsSorted(type));
  }

  const renderStudents = students.map(student => (
    <TableRow key={student.id} id={student.id} FirstName={student.FirstName} 
      LastName={student.LastName} group={student.group} topic={student.topic} 
      deleteClick={() => deleteClick(student.id)} editClick={() => editClick(student.id)}/>
  ))

  return(
    <div data-testid="table">
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Group</th>
            <th>Topic</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          { renderStudents }
          <tr>
            <th>Functions</th>
            <td>
              <Button outline onClick={addClick}>Add student work</Button>
            </td>
            <td>
              <Button outline onClick={resetTable}>Reset table</Button>
            </td>
            <td>
              <Button outline onClick={loadFromStorage}>Load data</Button>
            </td>
            <td>
              <Button outline onClick={loadToStorage}>Load data to storage</Button>
            </td>
            <td>
              <Button outline onClick={() => sort("name")}>Sort by first name</Button>
            </td>
            <td>
              <Button outline onClick={() => sort("id")}>Sort by id</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <DeleteModal id={operatedId} toggleDelete={toggleDelete} 
      deleteModal={deleteModal} deleteStudent={deleteStudent}/>
      <EditModal toggleEdit={toggleEdit} editModal={editModal} 
      student={student} editStudent={editStudent} />
      <AddModal toggleAdd={toggleAdd} addModal={addModal} 
      student={bufferStudent} addStudent={addStudent}/>
    </div>
    
  );
} 

export default TableData;