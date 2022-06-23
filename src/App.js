import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

import AddEmployee from './components/addEmployee';
import EmployeeList from './components/EmployeeList';
import Modal from "./components/Modal";
import Employee from './scripts/script';

function App() {
  const [users, setUsers] = useState([]);
  const employeesRef = collection(db, "employees");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  //lot of hooks
  const [name1, setName1] = useState("");
  const [lastname1, setLastname1] = useState("");
  const [email1, setEmail1] = useState("");

  //hooks for modal
  const [modalState, setModalState] = useState("none");

  //employee hook
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let data = await getDocs(employeesRef);
    setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  }

  const addEmployee = async (name, lastname, email) => {
      await addDoc(employeesRef, {name: name, lastname: lastname, email: email});
      getUsers();
  }

  const deleleEmployee = async (id) => {
    let employee = await doc(employeesRef, id);
    await deleteDoc(employee).then(getUsers());
    
  }

  const updateEmployee = async (id, empData) => {
    let employee = await doc(employeesRef, id);
    await updateDoc(employee, empData).then(getUsers());
  }

  //functions for modal
  const toggleModal = () => {
    if(modalState === "none") {
      setModalState("grid");
    } else {
      setModalState("none");
    }
  }

  //function to set employee
  const captureEmployee = (id, name, lastname, email) => {
    let emp = new Employee(id, name, lastname, email);
    setEmployee(emp);
    setName1(name);
    setLastname1(lastname);
    setEmail1(email)
    toggleModal();
  }

  



  return (
    <div className="App">
      <div className='container'>
        <AddEmployee addUser={addEmployee} name={name} setName={setName} lastname={lastname} setLastname={setLastname} email={email} setEmail={setEmail} />
        <EmployeeList users ={users} deleteEmp = {deleleEmployee} captureEmployee ={captureEmployee} name={name} lastname={lastname} email={email} />
      </div>
      <Modal modalState={modalState} employee={employee} setEmployee={setEmployee} updateEmployee={updateEmployee} toggleModal={toggleModal}
        name1={name1} setName1={setName1} lastname1={lastname1} setLastname1={setLastname1} email1={email1} setEmail1={setEmail1}
      />
    </div>
  );
}

export default App;
