import React from "react";
import "./Modal.css";

const Modal = ({ modalState, employee, updateEmployee, toggleModal, setEmployee, name1, setName1, lastname1, setLastname1, email1, setEmail1 }) => {
    

    const update = () => {
        updateEmployee(employee.id, {name:name1, lastname:lastname1, email:email1});
        toggleModal();
    }

    

    

    

    return (
        <div className="modal-container" style={{display: modalState}}>
            <div className="modal">
                <h1>Update Employee Record</h1>
                <div className="modal-div">
                    <label htmlFor="nameM">Name:</label>
                    <input type="text" placeholder="Name.." id="nameM" onChange={e => setName1(e.target.value)} value={name1} />
                </div>
                <div className="modal-div">
                    <label htmlFor="lastnameM">Lastname:</label>
                    <input type="text" placeholder="Lastname.." id="lastnameM" onChange={e => setLastname1(e.target.value)} value={lastname1} />
                </div>

                <div className="modal-div">
                    <label htmlFor="emailM">Email:</label>
                    <input type="email" placeholder="Email.." id="emailM" onChange={e => setEmail1(e.target.value)} value={email1}  />
                </div>

                <div className="btn-group-modal">
                    <button onClick={update}>Update</button>
                    <button onClick={toggleModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;