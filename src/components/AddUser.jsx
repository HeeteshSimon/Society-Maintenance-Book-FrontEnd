import React, { useState } from 'react'
import { Modal, Form, Button, Toast } from 'react-bootstrap'
import axios from 'axios';
// import IdleTimerContainer from './IdealTimer'

export default function AddUser(props) {
    const handleClose = () => props.setAddShow(false);
    const handleShow = () => props.setAddShow(true);
    const [show, setShow] = useState(false);
    const [userName, setUserName] = useState()
    const [firstName, setFirstName] = useState()
    const [flatNumber, setFlatNumber] = useState()
    const [lastName, setLastName] = useState()
    const [emailId, setEmailId] = useState()
    const [userPassword, setUserPassword] = useState()
    const [userRole, setUserRole] = useState()
    const [memberCount, setMemberCount] = useState()
    const [membershipJoin, setMembershipJoin] = useState()
    const [membershipEnd, setMembershipEnd] = useState()
    const handleOnChangeUserName = (e) =>{
        e.preventDefault();
        setUserName(e.target.value)
    }
    const handleOnChangeFirstName = (e) =>{
        e.preventDefault();
        setFirstName(e.target.value)
    }
    const handleOnChangeLastName = (e) =>{
        e.preventDefault();
        setLastName(e.target.value)
    }
    const handleOnChangeFlatNumber= (e) =>{
        e.preventDefault();
        setFlatNumber(e.target.value)
    }
    const handleOnChangeEmailId = (e) =>{
        e.preventDefault();
        setEmailId(e.target.value)
    }
    const handleOnChangeUserPassword = (e) =>{
        e.preventDefault();
        setUserPassword(e.target.value)
    }
    const handleOnChangeUserRole = (e) =>{
        e.preventDefault();
        setUserRole(e.target.value)
    }
    const handleOnChangeMembershipEnd = (e) =>{
        e.preventDefault();
        setMembershipEnd(e.target.value)
    }
    const handleOnChangeMemberCount = (e) =>{
        e.preventDefault();
        setMemberCount(e.target.value)
    }
    const handleOnChangeMembershipJoin = (e) =>{
        e.preventDefault();
        setMembershipJoin(e.target.value)
    }

    const addUser = (e) => {
        e.preventDefault();
        axios.get(`http://20.204.87.58:8080/sqlartifact/add?userName=${encodeURIComponent(userName)}&firstName=${firstName}&lastName=${lastName}&flatNumber=${flatNumber}&userPassword=${encodeURIComponent(userPassword)}&emailId=${emailId}&userRole=${userRole}&memberCount=${memberCount}&membershipJoin=${membershipJoin}&membershipEnd=${membershipEnd}`)
        .then(res =>
            {
                if(res && res.data && res.data.message !== "") {
                    alert(res.data.message)
                } else {
                    setShow(true)
                    console.log(res.data)
                }
            })
        .catch(err =>
             console.log(err)
                     
             )
        handleClose()
    }
    return (

        <div>
            {/* <IdleTimerContainer></IdleTimerContainer> */}
            <Toast bg="success" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Success</strong>
                    <small>1 sec ago</small>
                </Toast.Header>
                <Toast.Body className="success">Data inserted successfully</Toast.Body>
            </Toast>
            {props.AddShow &&
                <Modal show={props.AddShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add User</Modal.Title>
                    </Modal.Header>

                    <Form>
                <Modal.Body>
                <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>Username </Form.Label>
                            <Form.Control type="text" placeholder="Enter username " value={userName} onChange={handleOnChangeUserName} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                            </Form.Group>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={handleOnChangeFirstName} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={handleOnChangeLastName} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="flatNumber">
                            <Form.Label>Flat Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter Last Name" value={flatNumber} onChange={handleOnChangeFlatNumber} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="emailId">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" value={emailId} onChange={handleOnChangeEmailId} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="userPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={userPassword} onChange={handleOnChangeUserPassword} placeholder="Enter password" />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="userRole">
                            <Form.Label>User role</Form.Label>
                            <Form.Control type="password" value={userRole} onChange={handleOnChangeUserRole} placeholder="Enter password" />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="memberCount">
                            <Form.Label>Member Count</Form.Label>
                            <Form.Control type="text" value={memberCount} onChange={handleOnChangeMemberCount} placeholder="Enter Member Count" />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="membershipJoin">
                            <Form.Label>Membership Join</Form.Label>
                            <Form.Control type="date" value={membershipJoin} onChange={handleOnChangeMembershipJoin} placeholder="Enter Membership Join" />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="membershipEnd">
                            <Form.Label>Membership End</Form.Label>
                            <Form.Control type="date" value={membershipEnd} onChange={handleOnChangeMembershipEnd} placeholder="Enter Membership End" />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" type="submit" onClick={addUser}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            }
        </div>
    )
}