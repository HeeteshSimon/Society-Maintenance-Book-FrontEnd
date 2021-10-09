
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import IdleTimerContainer from './IdealTimer';
import AddRecords from './AddRecords'

export default function Records(props) {
  const loc = window.location;
    const [userid, setUserid] = useState([]);
    const [fname, setFname] = useState([]);
    const [lname, setLname] = useState([]);
    const [month, setMonth] = useState([]);
    const [expType, setExpType] = useState([]);
    const [amount, setAmount] = useState([]);
    const [dop, setDop] = useState([]);
    const [id, setId] = useState();
    const [AddShow , setAddShow] =useState(false);

    //const [name, setName] = useState([]);
    const [updateData, setUpdateData] = useState();
    const [show, setShow] = useState(false);
    const [Data, setData] = useState([]);
    //const [updateFname, setUpdateFname] = useState(); 
    //const [NameUpdate, setNameUpdate] = useState();
    //const [updateLname, setUpdateLname] = useState();
    const [updateDop, setUpdateDop] = useState();
    // const [updateExpType, setUpdateExpType] = useState();
    const [updateAmount, setUpdateAmount] = useState();
    const [updateId, setUpdateId] = useState(); 
    //const [Subject3Update, setSubject3Update] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        axios.get('http://20.204.78.15:8080/sqlartifact/getUserRecords')
        .then((response) => {
         console.log(response.data)
            setId(JSON.parse(response.data.id));
            setFname(JSON.parse(response.data.fname))
           setLname(JSON.parse(response.data.lname))
           setAmount(JSON.parse(response.data.amount))
           setDop(JSON.parse(response.data.date))
        //     setName(JSON.parse(response.data.name));
        //     setSubject1(JSON.parse(response.data.subject1));
        //     console.log(JSON.parse(response.data.subject1))
        //     setSubject2(JSON.parse(response.data.subject2));
        //     setSubject3(JSON.parse(response.data.subject3)); 
        //     setAverage(JSON.parse(response.data.average));
        //     console.log("length",JSON.parse(response.data.name).length, "testdata", JSON.parse(response.data.name)[0])
        //     for(let i = 0; i < JSON.parse(response.data.name).length; i++){
        //         setCSVData(csvData => [csvData, [JSON.parse(response.data.name)[i], JSON.parse(response.data.subject1)[i], JSON.parse(response.data.subject2)[i], JSON.parse(response.data.subject3)[i], JSON.parse(response.data.average)[i]]]);
        //     }
        //     console.log(csvData);
          })
          .catch((error) => {
            console.log(error);
          });
    },[])

    const deleteById = (e, ID) =>{
        e.preventDefault();
        console.log(ID);
        axios.get("http://20.204.78.15:8080/sqlartifact/deleteUserRecord?rid="+ID)
        .then((response)=>{
            console.log(response.data);
            window.location.reload();
            setUpdateData(Math.random());
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const upDatebyId = async (e, ID) =>{
        e.preventDefault();
        console.log(ID);
        setUpdateId(ID);
        handleShow();
        // const formData = { rid: ID, amount: updateAmount, date: updateDop};
        // const response = await axios.post("http://localhost:8080/sqlartifact/updateUserRecord", formData)
        // const response = await axios.post("http://localhost:8080/sqlartifact/updateUserRecord"+ID)
        // console.log(response.data);
        // setUpdateDop(response.data.date);
        // setUpdateAmount(response.data.amount); 
        // setNameUpdate(response.data.name);
        // setSubject1Update(response.data.subject1);
        // setSubject2Update(response.data.subject2);
        // setSubject3Update(response.data.subject3);

    }
    const handleOnChangeDop = (e) =>{
        e.preventDefault();
        setUpdateDop(e.target.value)
    }
    // const handleOnChangeExpType = (e) =>{
    //     e.preventDefault();
    //     setUpdateExpType(e.target.value)
    // }
    const handleOnChangeAmount = (e) =>{
        e.preventDefault();
        setUpdateAmount(e.target.value)
    }
    // const handleOnChangeSubject3 = (e) =>{
    //     e.preventDefault();
    //     setSubject3Update(e.target.value)
    // }
    const onClickUpdateBtn = (e) =>{
        e.preventDefault();
        console.log(updateId);
        // const formData = { rid: updateId, amount: updateAmount, date: updateDop};
        // var formData = new FormData()
        // formData.append("rid", upDatebyId)
        // formData.append("amount", updateAmount)
        // formData.append("date", updateDop)
        // axios.post("http://20.204.78.15:8080/sqlartifact/updateUserRecord", formData)
        axios.get(`http://20.204.78.15:8080/sqlartifact/updateUserRecord?rid=${updateId}&date=${updateDop}&amount=${updateAmount}`)
        .then((response)=>{
            console.log(response.data);
            window.location.reload();
            handleClose();
            setUpdateData(Math.random());
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div style={{marginTop: '0.01%'}}>
          <IdleTimerContainer></IdleTimerContainer>
          <Navbar bg="dark" variant="dark">
<Container>
<Nav className="me-auto">
 {/* <Nav.Link href="/users" active={loc.pathname === '/users'}>Society Records</Nav.Link> */}
 <Nav.Link href="/records" active={loc.pathname === '/records'}>Records</Nav.Link>
 <Nav.Link href="/defaulter" active={loc.pathname === '/defaulter'}>Defaulter</Nav.Link>
 <Nav.Link href="/pusers"  active={loc.pathname==='/pusers'}>Users</Nav.Link>
 <Nav.Link href="/adminrecords"  active={loc.pathname==='/adminrecords'}>Society Records(A)</Nav.Link>
 {/* <Nav.Link href="/userRecords"  active={loc.pathname==='/userRecords'}>My Records</Nav.Link> */}
</Nav>
</Container>
</Navbar>
          <Button className="float-right" style={{marginTop: "3.5%"}} variant="primary" onClick={() => { setAddShow(true) }}>Add</Button>
    <AddRecords AddShow={AddShow} setAddShow={setAddShow} />  
          <div style={{marginTop: '2%'}}></div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>RecordId</th>
      <th>First Name </th>
      <th>Last Name</th>
      {/* <th>Month</th> */}
      {/* <th>Expense Type</th> */}
      <th>Amount</th>
      <th>Date of Payment</th>
      {/* <th>Average</th>
      <th>Result</th> */}
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {id && id.map((ID, index)=>(
          <tr key={ID}>
              {/* <td>{index+1}</td> */}
              <td>{id[index]}</td>
              {/* <td>{month[index]}</td> */}

              <td>{fname[index]}</td>
              <td>{lname[index]}</td>
              {/* <td>{expType[index]}</td> */}
              <td>{amount[index]}</td>
              <td>{dop[index]}</td>
              <td><Button variant="warning" onClick={(e)=>upDatebyId(e,ID)}>Update</Button>&nbsp;&nbsp;<Button variant="danger" onClick={(e)=>deleteById(e,ID)}>Delete</Button></td>
              </tr>

      ))}
  </tbody>
</Table>
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
                            <Form.Label>Date of Payment</Form.Label>
                            <Form.Control type="date" placeholder="Enter Date of Payment" value={updateDop} onChange={handleOnChangeDop} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="ExpType">
                            <Form.Label>Expense Type</Form.Label>
                            <Form.Control type="text" value={updateExpType} onChange={handleOnChangeExpType} placeholder="Enter Expense Type" />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group> */}
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


