
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import IdleTimerContainer from '../IdealTime';
export default function SocietyRecords(props) {
  const loc = window.location;

  const [userid, setUserid] = useState([]);
  const [fname, setFname] = useState([]);
  const [lname, setLname] = useState([]);
  const [month, setMonth] = useState([]);
  const [expType, setExpType] = useState([]);
  const [expYType, setExpYType] = useState([]);
  const [amount, setAmount] = useState([]);
  const [dop, setDop] = useState([]);
  const [id, setId] = useState();
  const [year, setYear] = useState([]);
  const [yearAmount, setYearAmount] = useState([]);

  //const [name, setName] = useState([]);
  const [updateData, setUpdateData] = useState();
  const [show, setShow] = useState(false);
  const [modeMonthly, setModeMonthly] = useState(true);

  const [data, setData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);
  //const [updateFname, setUpdateFname] = useState(); 
  //const [NameUpdate, setNameUpdate] = useState();
  //const [updateLname, setUpdateLname] = useState();
  const [updateMonth, setUpdateMonth] = useState();
  const [updateExpType, setUpdateExpType] = useState();
  const [updateAmount, setUpdateAmount] = useState();
  const [updateId, setUpdateId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios.get('http://20.204.87.58:8080/sqlartifact/society')
      .then((response) => {
        console.log(response.data)
        console.log(response.data.records)
        const x = JSON.parse(response.data.records)
        setData(x)
        console.log(x)
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('http://20.204.87.58:8080/sqlartifact/society?type=yearly')
      .then((response) => {
        console.log(response.data)
        console.log(response.data.records)
        const x = JSON.parse(response.data.records)
        setYearlyData(x)
        console.log(x)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const deleteById = (e, ID) => {
    e.preventDefault();
    console.log(ID);

  }
  const upDatebyId = async (e, ID) => {
    e.preventDefault();
    console.log(ID);
    setUpdateId(ID);
    handleShow();


  }
  const handleOnChangeMonth = (e) => {
    e.preventDefault();
    setUpdateMonth(e.target.value)
  }
  const handleOnChangeExpType = (e) => {
    e.preventDefault();
    setUpdateExpType(e.target.value)
  }
  const handleOnChangeAmount = (e) => {
    e.preventDefault();
    setUpdateAmount(e.target.value)
  }

  const onClickUpdateBtn = (e) => {
    e.preventDefault();
    console.log(updateId);

  }
  console.log('.....CHECKING', data)
  const DisplayData = () => {
    if (modeMonthly) {
      return data.map(

        (info, index) => {
          return (
            <tr key={`${Math.random()}-${index}`}>
              <td>{info.month}</td>
              <td>{info.expenseType}</td>
              <td>{info.amount}</td>
              <td>{info.dateOfPay}</td>
              <td>{info.modeOfPayment}</td>
              <td>{info.paymentReference}</td>
              <td>{info.expenseDescription}</td>
              {/* <td>{info.expenseId}</td> */}
            </tr>
          )
        }
      )
    }
    return yearlyData.map(

      (info, index) => {
        return (
          <tr key={`${index}-${Math.random()}`}>
            <td>{info.expenseType}</td>
            <td>{info.year}</td>
            <td>{info.amount}</td>
          </tr>
        )
      }
    )
  }

  return (
    <>
    <IdleTimerContainer></IdleTimerContainer>
    <div style={{ marginTop: '0.01%', padding: '20px' }}>
      {/* <IdleTimerContainer></IdleTimerContainer> */}

      <Button variant="warning" style={{ marginRight:'7px'}} onClick={(e) => setModeMonthly(true)}>Monthly</Button>{'  '}
      <Button variant="warning" onClick={(e) => setModeMonthly(false)}>Yearly</Button>{'  '}


      {modeMonthly ? (
        <Table style={{ marginTop: '1%', padding: '20px' }} striped bordered hover key='monthly'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Expense Type</th>
              <th>Amount</th>
              <th>Date of Payment</th>
              <th>Mode Of Payment</th>
              <th>Payment Reference</th>
              <th>Expense Description</th>
              {/* <th>Expense Id</th> */}
            </tr>
          </thead>
          <tbody>
            {/* {expType && expType.map((ID, index)=>(
          <tr key={`${index}-${ID}`}>
                    <td>{index+1}</td>
              <td>{dop[index]}</td>
              <td>{ID}</td>
              <td>{amount[index]}</td>
              </tr>
        )) } */}

            {DisplayData()}
          </tbody>
        </Table>

      ) : (
        <Table striped bordered hover key='yearly'>
          <thead>
            <tr>
              <th>Expense Type</th>
              <th>Year</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* {expYType && expYType.map((ID, index)=>(
          <tr key={`${ID}-${index}`}>
                    <td>{index+1}</td>
              <td>{year[index]}</td>
              <td>{ID}</td>
              <td>{yearAmount[index]}</td>
              </tr>
        )) } */}
            {DisplayData()}
          </tbody>
        </Table>

      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
          </Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Month</Form.Label>
            <Form.Control type="text" placeholder="Enter Month" value={updateMonth} onChange={handleOnChangeMonth} />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="ExpType">
            <Form.Label>Expense Type</Form.Label>
            <Form.Control type="text" value={updateExpType} onChange={handleOnChangeExpType} placeholder="Enter Expense Type" />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter Amount" value={updateAmount} onChange={handleOnChangeAmount} />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onClickUpdateBtn}>Update</Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </div>
    </>
  );
}


