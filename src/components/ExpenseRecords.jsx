
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import IdleTimerContainer from '../IdealTime';
// import AddAdminRecords from './AddAdminRecords';

export default function ExpenseRecords(props) {
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
  const [AddShow, setAddShow] = useState(false);

  //const [name, setName] = useState([]);
  const [updateData, setUpdateData] = useState();
  const [show, setShow] = useState(false);
  const [modeMonthly, setModeMonthly] = useState(true);

  const [Data, setData] = useState([]);
  //const [updateFname, setUpdateFname] = useState(); 
  //const [NameUpdate, setNameUpdate] = useState();
  //const [updateLname, setUpdateLname] = useState();
  const [updateMonth, setUpdateMonth] = useState();
  const [updateExpType, setUpdateExpType] = useState();
  const [updateAmount, setUpdateAmount] = useState();
  const [updateId, setUpdateId] = useState();
  //const [Subject3Update, setSubject3Update] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    // axios.get('http://20.204.78.15:8080/sqlartifact/getSocietyRecords')
    // .then((response) => {
    //  console.log(response.data)
    //    setExpType(JSON.parse(response.data.expense))
    //    setAmount(JSON.parse(response.data.amount))
    //    setDop(JSON.parse(response.data.date))
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //   axios.get('http://20.204.78.15:8080/sqlartifact/getSocietyRecords?type=yearly')
    // .then((response) => {
    //  console.log(response.data)
    //    setExpYType(JSON.parse(response.data.expense))
    //    setYearAmount(JSON.parse(response.data.amount))
    //    setYear(JSON.parse(response.data.date))
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [])

  const deleteById = (e, ID) => {
    e.preventDefault();
    console.log(ID);
    // axios.get("http://localhost:8080/sqlartifact/delete/"+ID)
    // .then((response)=>{
    //     console.log(response.data);
    //     // window.location.reload();
    //     setUpdateData(Math.random());
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
  }
  const upDatebyId = async (e, ID) => {
    e.preventDefault();
    console.log(ID);
    setUpdateId(ID);
    handleShow();
    // const response = await axios.get("http://localhost:8080/sqlartifact/get/"+ID)
    // console.log(response.data);
    // // setData(response.data);
    // setData(response.data);
    // setNameUpdate(response.data.name);
    // setSubject1Update(response.data.subject1);
    // setSubject2Update(response.data.subject2);
    // setSubject3Update(response.data.subject3);

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
  // const handleOnChangeSubject3 = (e) =>{
  //     e.preventDefault();
  //     setSubject3Update(e.target.value)
  // }
  const onClickUpdateBtn = (e) => {
    e.preventDefault();
    console.log(updateId);
    // axios.get(`http://localhost:8080/sqlartifact/update/${updateId}/?name=${NameUpdate}&subject1=${Subject1Update}&subject2=${Subject2Update}&subject3=${Subject3Update}`)
    // .then((response)=>{
    //     console.log(response.data);
    //     // window.location.reload();
    //     handleClose();
    //     setUpdateData(Math.random());
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
  }
  return (
    <div style={{ marginTop: '0.01%', padding: '20px' }}>
      <IdleTimerContainer></IdleTimerContainer> 
      {/* <AddAdminRecords AddShow={AddShow} setAddShow={setAddShow} />   */}{' '}
      <Button variant="primary" onClick={() => { setAddShow(true) }}>Add</Button>{' '}
      <Button variant="warning" onClick={(e) => setModeMonthly(true)}>Monthly</Button>{' '}
      <Button variant="warning" onClick={(e) => setModeMonthly(false)}>Yearly</Button>{' '}


      {modeMonthly ? (
        <Table style={{ marginTop: '1%' }} striped bordered hover key='monthly'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Expense Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expType && expType.map((ID, index) => (
              <tr key={`${index}-${ID}`}>
                {/* <td>{index+1}</td> */}
                <td>{dop[index]}</td>
                <td>{ID}</td>
                <td>{amount[index]}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      ) : (
        <Table striped bordered hover key='yearly'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Expense Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expYType && expYType.map((ID, index) => (
              <tr key={`${ID}-${index}`}>
                <td>{year[index]}</td>
                <td>{ID}</td>
                <td>{yearAmount[index]}</td>
              </tr>
            ))}
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
          {/* <Form.Group className="mb-3" controlId="subject3">
                            <Form.Label>Subject3</Form.Label>
                            <Form.Control type="text" placeholder="Enter Marks" value={Subject3Update} onChange={handleOnChangeSubject3} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group> */}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onClickUpdateBtn}>Update</Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </div>
  );
}


