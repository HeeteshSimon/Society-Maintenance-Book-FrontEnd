import React, { useState } from 'react'
import { Modal, Form, Button, Toast } from 'react-bootstrap'
import axios from 'axios';

import IdleTimerContainer from '../IdealTime';


export default function AddRecords(props) {
    const handleClose = () => props.setAddShow(false);
    const handleShow = () => props.setAddShow(true);
    const [ID, setID] = useState([]);
    const [flatNumber, setFlatNumber] = useState([]);

    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState([])
    const [dateOfPayment, setDateOfPayment] = useState([])
    const [modeOfPayment, setModeOfPayment] = useState([])
    const [paymentReference, setPaymentReference] = useState([])


    const handleOnChangeFlatNumber = (e) => {
        e.preventDefault();
        setFlatNumber(e.target.value)
    }
    const handleOnChangeAmount = (e) => {
        e.preventDefault();
        setAmount(e.target.value)
    }
    const handleOnChangeDateOfPayment = (e) => {
        e.preventDefault();
        setDateOfPayment(e.target.value)
    }
    const handleOnChangeModeOfPayment = (e) => {
        e.preventDefault();
        setModeOfPayment(e.target.value)
    }
    const handleOnChangePaymentReference = (e) => {
        e.preventDefault();
        setPaymentReference(e.target.value)
    }
    const addRecord = (e) => {
        e.preventDefault();
        axios.get(`http://20.204.78.15:8080/sqlartifact/addUserRecord?flatNumber=${flatNumber}&amount=${amount}&dateOfPayment=${dateOfPayment}&modeOfPayment=${modeOfPayment}&paymentReference=${paymentReference}`)
            .then(res => {
                setShow(true)
                console.log(res.data)
            })
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
            {props.AddShow &&
                <Modal show={props.AddShow} onHide={handleClose} className="mt-5">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Record</Modal.Title>
                    </Modal.Header>

                    <Form>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="flatNumber">
                                <Form.Label>Flat Number </Form.Label>
                                <Form.Control type="number" placeholder="Enter Flat Number " value={flatNumber} onChange={handleOnChangeFlatNumber} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="amount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" step="0.01" placeholder="Enter Amount" value={amount} onChange={handleOnChangeAmount} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="dateOfPayment">
                                <Form.Label>Date of Payment</Form.Label>
                                <Form.Control type="date" placeholder="Enter Date of Payment" value={dateOfPayment} onChange={handleOnChangeDateOfPayment} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="modeOfPayment">
                                <Form.Label>Mode of Payment</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mode of Payment" value={modeOfPayment} onChange={handleOnChangeModeOfPayment} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="paymentReference">
                                <Form.Label>Payment Reference</Form.Label>
                                <Form.Control type="number" placeholder="Enter Payment Reference" value={paymentReference} onChange={handleOnChangePaymentReference} />
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
