import React, {useState} from 'react'
import { Modal, Form, Button, Toast } from 'react-bootstrap'
import axios from 'axios';
import IdleTimerContainer from './IdealTimer'

export default function AddUser(props) {
    const handleClose = () => props.setAddShow(false);
    const handleShow = () => props.setAddShow(true);
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState()
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const [dop, setDop] = useState()
    //const [subject3, setSubject3] = useState()
    const handleOnChangeUsername = (e) =>{
        e.preventDefault();
        setUsername(e.target.value)
    }
    const handleOnChangeFname = (e) =>{
        e.preventDefault();
        setFname(e.target.value)
    }
    const handleOnChangeLname = (e) =>{
        e.preventDefault();
        setLname(e.target.value)
    }
    const handleOnChangeEmail = (e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handleOnChangePassword = (e) =>{
        e.preventDefault();
        setPassword(e.target.value)
    }
  
    const addUser = (e) => {
        e.preventDefault();
        axios.get(`http://20.204.78.15:8080/sqlartifact/add?uname=${username}&fname=${fname}&lname=${lname}&password=${password}&email=${email}`)
        .then(res =>
            {
            setShow(true)
            console.log(res.data)})
        .catch(err =>
             console.log(err)
                     
             )
        handleClose()
    }
    return (
        
        <div>
            <IdleTimerContainer></IdleTimerContainer>
            <Toast bg="success" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Success</strong>
            <small>1 sec ago</small>
          </Toast.Header>
          <Toast.Body className="success">Data inserted successfully</Toast.Body>
        </Toast>
            { props.AddShow &&
            <Modal show={props.AddShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>

                    <Form>
                <Modal.Body>
                <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username </Form.Label>
                            <Form.Control type="text" placeholder="Enter username " value={username} onChange={handleOnChangeUsername} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                            </Form.Group>
                        <Form.Group className="mb-3" controlId="fname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" value={fname} onChange={handleOnChangeFname} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" value={lname} onChange={handleOnChangeLname} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" value={email} onChange={handleOnChangeEmail} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={handleOnChangePassword} placeholder="Enter password" />
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