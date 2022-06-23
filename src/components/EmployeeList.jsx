import React from "react";
import "./EmpList.css";
import editIcon from "../Images/edit-pngrepo-com.png";
import trashIcon from "../Images/trashcan.png";

const EmployeeList = ({ users, deleteEmp, captureEmployee, name, lastname, email }) => {

    
    return (
        <div className="EmpList">
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Lastname</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                {
                    users.map( user => (
                        (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td className="btn-group">
                                    <button onClick={()=> captureEmployee(user.id, user.name, user.lastname, user.email)}><img src={editIcon} alt="edit icon" /></button>
                                    <button onClick={()=> deleteEmp(user.id)}><img src={trashIcon} alt="Delete Icon" /></button>
                                </td>
                            </tr>
                        )
                    ))
                }
                </tbody>
                
                
            </table>
        </div>
    )
}

export default EmployeeList;