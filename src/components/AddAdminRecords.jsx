import React, { useState } from 'react'
import { Modal, Form, Button, Toast } from 'react-bootstrap'
import axios from 'axios';
import IdleTimerContainer from '../IdealTime';

export default function AddAdminRecords(props) {
    const handleClose = () => props.setAddShow(false);
    const handleShow = () => props.setAddShow(true);
    const [show, setShow] = useState(false);
    const [expenseType, setExpenseType] = useState([])
    const [amount, setAmount] = useState([])
    const [dateOfPay, setDateOfPay] = useState([])
    const [modeOfPayment, setModeOfPayment] = useState([])
    const [paymentReference, setPaymentReference] = useState([])
    const [expenseDescription, setExpenseDescription] = useState([])
    
    
    const handleOnChangeExpenseType = (e) => {
        e.preventDefault();
        setExpenseType(e.target.value)
    }
    const handleOnChangeAmount = (e) => {
        e.preventDefault();
        setAmount(e.target.value)
    }
    const handleOnChangeDateOfPay = (e) => {
        e.preventDefault();
        setDateOfPay(e.target.value)
    }
    const handleOnChangeModeOfPayment = (e) => {
        e.preventDefault();
        setModeOfPayment(e.target.value)
    }
    const handleOnChangePaymentReference = (e) => {
        e.preventDefault();
        setPaymentReference(e.target.value)
    }
    const handleOnChangeExpenseDescription = (e) => {
        e.preventDefault();
        setExpenseDescription(e.target.value)
    }
   

    const addAdminRecord = (e) => {
        e.preventDefault();
        axios.get(`http://20.204.87.58:8080/sqlartifact/addSocietyRecord?expenseType=${expenseType}&amount=${amount}&dateOfPay=${dateOfPay}&expenseDescription=${expenseDescription}&modeOfPayment=${modeOfPayment}&paymentReference=${paymentReference}`)
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
                <Modal show={props.AddShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Record</Modal.Title>
                    </Modal.Header>

                    <Form>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="expenseType">
                                <Form.Label>Expense Type </Form.Label>
                                <Form.Control type="text" placeholder="Enter Expense Type" value={expenseType} onChange={handleOnChangeExpenseType} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="amount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" step="0.01" placeholder="Enter Amount" value={amount} onChange={handleOnChangeAmount} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="dateOfPay">
                                <Form.Label>Date of Payment</Form.Label>
                                <Form.Control type="date" placeholder="Enter Date of Payment" value={dateOfPay} onChange={handleOnChangeDateOfPay} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="modeOfPayment">
                                <Form.Label>Mode of Payment</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mode of Payment" value={modeOfPayment} onChange={handleOnChangeModeOfPayment} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="expenseDescription">
                                <Form.Label>Expense Description </Form.Label>
                                <Form.Control type="text" placeholder="Enter Expense Description" value={expenseDescription} onChange={handleOnChangeExpenseDescription} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="paymentReference">
                                <Form.Label>Payment Reference </Form.Label>
                                <Form.Control type="text" placeholder="Enter Payment Reference" value={paymentReference} onChange={handleOnChangePaymentReference} />
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