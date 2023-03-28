import React from "react";
import { useState } from 'react';
import { Table } from 'reactstrap';
import TableRow from "./TableRow";
import { Button } from 'reactstrap';
import DeleteModal from "./DeleteModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import {selectAllStudents, studentEdited, studentDeleted, studentAdded, studentsReset, studentsFromLocalStorage, studentsLoadToLocalStorage, studentsSorted} from "../studentSlice";
import { useSelector } from 'react-redux';
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import { Label, FormGroup, Input} from 'reactstrap';
import NavigationBar from "./NavigationBar";

let checked = [];

function TableData() { 
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [addModal,setAddModal] = useState(false);
  const [amount, setAmount] = useState(-1);
  const [student, setStudent] = useState({});
  const [bufferStudent, setBufferStudent] = useState({});
  const [groupFilter, setGroupFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");

  let students = useSelector((state) => selectAllStudents(state, {
    group: groupFilter,
    topic: topicFilter
  }));

  let checkboxHolder = [];
  for(let i = 0; i < students.length; i++){
    checkboxHolder.push({id: students[i].id, checked: false})
  }
  console.log(checkboxHolder);

  const handleCheck = id => {
    let index = checkboxHolder.indexOf(checkboxHolder.find(el => el.id === id));
    checkboxHolder[index].checked = true;
    console.log(checkboxHolder);
  }
  
  const handleUnCheck = id => {
    let index = checkboxHolder.indexOf(checkboxHolder.find(el => el.id === id));
    checkboxHolder[index].checked = false;
    console.log(checkboxHolder);
  }

  const dispatch = useDispatch();

  const toggleDelete = () => setDeleteModal(!deleteModal);
  const toggleEdit = () => setEditModal(!editModal);
  const toggleAdd = () => setAddModal(!addModal);

  const deleteClick = () => {
    checked = Array.from(checkboxHolder.filter(el => el.checked), x => x.id);
    console.log(checked);
    console.log(checkboxHolder);
    setAmount(checked.length);
    toggleDelete();
  }

  const deleteStudent = () => {
    console.log(checked);
    dispatch(studentDeleted(checked));
    checked.length = 0;
  }


  const editClick = id => {
    setStudent(students.find(el => el.id === id));
    toggleEdit();
  }

  const editStudent = student => {
    dispatch(studentEdited(student));
  }

  const addClick = () => {
    setBufferStudent({...bufferStudent, id: nanoid(), FirstName: "", LastName: "", group: "", topic: "", answer: ""});
    toggleAdd();
  }

  const addStudent = student => {
    dispatch(studentAdded(student));
  }

  const resetTable = () => {
    dispatch(studentsReset());
  }
  const loadFromStorage = () => {
    dispatch(studentsFromLocalStorage());
  }

  const loadToStorage = () => {
    dispatch(studentsLoadToLocalStorage());
  }

  const sort = type => {
    dispatch(studentsSorted(type));
  }

  const renderStudents = students.map(student => (
    <TableRow key={student.id} id={student.id} FirstName={student.FirstName} 
      LastName={student.LastName} group={student.group} topic={student.topic} 
     editClick={() => editClick(student.id)} handleCheck={() => handleCheck(student.id)} handleUnCheck={() => handleUnCheck(student.id)} />
  ))

  return(
    <form data-testid="table">
      <NavigationBar/>
      <FormGroup>
        <Label for="group">Group</Label>
          <Input id="group" type="select" name="group" onChange={e => setGroupFilter(e.target.value)}>
            <option value="">No filter</option>
            <option value="1020">1020</option>
            <option value="1025">1025</option>
          </Input>
      </FormGroup>
      <FormGroup>
        <Label for="group">Topic</Label>
          <Input id="group" type="select" name="group" onChange={e => setTopicFilter(e.target.value)}>
            <option value="">No filter</option>
            <option value="Belarusian culture">Belarusian culture</option>
            <option value="Ecological problems">Ecological problems</option>
            <option value="Live on other planets">Live on other planets</option>
          </Input>
      </FormGroup>
      <Table hover>
        <thead>
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
              <Button outline onClick={loadToStorage}>Save data</Button>
            </td>
            <td>
              <Button outline onClick={deleteClick}>Delete</Button>
            </td>
          </tr>
          <tr>
            <th>#</th>
            <th onClick={() =>sort("FirstName")}>
            <div className="sort">
              <div className="table-heading">
                First Name
              </div>
              <div>
                <CaretUpFill className="arrow"/>
                <CaretDownFill className="arrow"/>
              </div>
              </div>
              </th>
            <th onClick={() => sort("LastName")}>
            <div className="sort">
              <div className="table-heading">
                Last Name
              </div>
              <div>
                <CaretUpFill className="arrow"/>
                <CaretDownFill className="arrow"/>
              </div>
              </div>
            </th>
            <th>Group</th>
            <th>Topic</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          { renderStudents }
        </tbody>
      </Table>
      <DeleteModal amount={amount} toggleDelete={toggleDelete} 
      deleteModal={deleteModal} deleteStudent={deleteStudent}/>
      <EditModal toggleEdit={toggleEdit} editModal={editModal} 
      student={student} editStudent={editStudent} />
      <AddModal toggleAdd={toggleAdd} addModal={addModal} 
      student={bufferStudent} addStudent={addStudent}/>
    </form>
    
  );
} 

export default TableData;