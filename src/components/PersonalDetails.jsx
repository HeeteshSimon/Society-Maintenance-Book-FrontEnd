import React, {useEffect, useState} from 'react'
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
// import axios from 'axios';
// import AddUser from './AddUser';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import IdleTimerContainer from './IdealTimer';

export default function PersonalDetails() {
  const loc = window.location;

    const [userId, setUserId] = useState([]);
    const [username ,setUsername] = useState([]);
    const [fname, setFname] = useState([]);
    const [lname, setLname] = useState([]);
    const [email, setEmail] = useState([]);
    // const [amount, setAmount] = useState([]);
    // const [dop, setDop] = useState();
    const [id, setId] = useState();
    const [AddShow , setAddShow] =useState(false);
    //const [name, setName] = useState([]);
    const [updateData, setUpdateData] = useState();
    const [show, setShow] = useState(false);
    const [Data, setData] = useState([]);
    const [updateFname, setUpdateFname] = useState(); 
    //const [NameUpdate, setNameUpdate] = useState();
    const [updateLname, setUpdateLname] = useState();
    const [updateEmail, setUpdateEmail] = useState();
    const [updateAmount, setUpdateAmount] = useState();
    const [updateId, setUpdateId] = useState(); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        // axios.get('http://20.204.78.15:8080/sqlartifact/get')
        //  .then((response) => {
        //    console.log(response.data)

        //    setId(JSON.parse(response.data.userid));
        //    setUsername(JSON.parse(response.data.username));
        //    setFname(JSON.parse(response.data.firstname))
        //    setLname(JSON.parse(response.data.lastname))
        //    setEmail(JSON.parse(response.data.email))
          
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
    },[])

    const deleteById = (e, ID) =>{
        e.preventDefault();
        console.log(ID);
       
    }
    const upDatebyId = async (e, ID) =>{
        e.preventDefault();
        console.log(ID);
        setUpdateId(ID);
        handleShow();
        

    }
    const handleOnChangeFname = (e) =>{
        e.preventDefault();
        setUpdateFname(e.target.value)
    }
    const handleOnChangeLname = (e) =>{
        e.preventDefault();
        setUpdateLname(e.target.value)
    }
    const handleOnChangeEmail = (e) =>{
        e.preventDefault();
        setUpdateEmail(e.target.value)
    }
    const handleOnChangeAmount = (e) =>{
        e.preventDefault();
        setUpdateAmount(e.target.value)
    }
    
    const onClickUpdateBtn = (e) =>{
        e.preventDefault();
        console.log(updateId);
       
    }
    return (

      <div style={{marginTop: '0.01%'}}>
        {/* <IdleTimerContainer></IdleTimerContainer> */}
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
     <div style={{marginTop: '2%'}}></div>
    <Button className="float-right" style={{marginTop: "3.5%"}} variant="primary" onClick={() => { setAddShow(true) }}>Add</Button>
    {/* <AddUser AddShow={AddShow} setAddShow={setAddShow} />   */}
<Table striped bordered hover>
  <thead>
    <tr>
      <th>UserId</th>
      <th>Username</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
     
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {id && id.map((ID, index)=>(
          <tr key={ID}>
              <td>{index+1}</td>
              <td>{username[index]}</td>
              <td>{fname[index]}</td>
              <td>{lname[index]}</td>
              <td>{email[index]}</td>
              
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
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" value={updateFname} onChange={handleOnChangeFname} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={updateLname} onChange={handleOnChangeLname} placeholder="Enter Last Name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={updateEmail} onChange={handleOnChangeEmail} placeholder="Enter Email" />
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
    )
}

