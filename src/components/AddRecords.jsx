import React, {useState} from 'react'
import { Modal, Form, Button, Toast } from 'react-bootstrap'
import axios from 'axios';
import IdleTimerContainer from './IdealTimer';

export default function AddRecords(props) {
    const handleClose = () => props.setAddShow(false);
    const handleShow = () => props.setAddShow(true);
    const [ID, setID] = useState([]);
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState([])
    const [dop, setDop] = useState([])
   
   
    const handleOnChangeId = (e) =>{
        e.preventDefault();
        setID(e.target.value)
    }
    const handleOnChangeAmount = (e) =>{
        e.preventDefault();
        setAmount(e.target.value)
    }
    const handleOnChangeDop = (e) =>{
        e.preventDefault();
        setDop(e.target.value)
    }
    const addRecord = (e) => {
        e.preventDefault();
        axios.get(`http://20.204.78.15:8080/sqlartifact/addUserRecord?uid=${ID}&amount=${amount}&date=${dop}`)
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
                    <Modal.Title>Add Record</Modal.Title>
                </Modal.Header>

                    <Form>
                <Modal.Body>
                <Form.Group className="mb-3" controlId="ID">
                            <Form.Label>User ID </Form.Label>
                            <Form.Control type="text" placeholder="Enter user ID " value={ID} onChange={handleOnChangeId} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                            </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" step="0.01" placeholder="Enter Amount" value={amount} onChange={handleOnChangeAmount} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                
                        <Form.Group className="mb-3" controlId="dop">
                            <Form.Label>Date of Payment</Form.Label>
                            <Form.Control type="date" placeholder="Enter Date of Payment" value={dop} onChange={handleOnChangeDop} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type="submit" onClick={addRecord}>
                            Submit
                        </Button>
                </Modal.Footer>
                    </Form>
            </Modal>
}
        </div>
    )
}