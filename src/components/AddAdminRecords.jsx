import React, {useState} from 'react'
import { Modal, Form, Button, Toast } from 'react-bootstrap'
import axios from 'axios';
import IdleTimerContainer from './IdealTimer';

export default function AddAdminRecords(props) {
    const handleClose = () => props.setAddShow(false);
    const handleShow = () => props.setAddShow(true);
    const [show, setShow] = useState(false);
    const [expType, setExpType] = useState([])
    const [amount, setAmount] = useState([])
    const [dop, setDop] = useState([])
   
    const handleOnChangeExpType = (e) =>{
        e.preventDefault();
        setExpType(e.target.value)
    }
    const handleOnChangeAmount = (e) =>{
        e.preventDefault();
        setAmount(e.target.value)
    }
    const handleOnChangeDop = (e) =>{
        e.preventDefault();
        setDop(e.target.value)
    }
    const addAdminRecord = (e) => {
        e.preventDefault();
        axios.get(`http://20.204.78.15:8080/sqlartifact/addSocietyRecord?expense_type=${expType}&amount=${amount}&date=${dop}`)
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
                <Form.Group className="mb-3" controlId="expType">
                            <Form.Label>Expense Type </Form.Label>
                            <Form.Control type="text" placeholder="Enter Expense Type" value={expType} onChange={handleOnChangeExpType} />
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
                        <Button variant="primary" type="submit" onClick={addAdminRecord}>
                            Submit
                        </Button>
                </Modal.Footer>
                    </Form>
            </Modal>
}
        </div>
    )
}