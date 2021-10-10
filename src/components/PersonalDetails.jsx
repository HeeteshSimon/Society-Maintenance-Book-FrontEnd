import React, { useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import AddUser from './AddUser';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import IdleTimerContainer from './IdealTimer';

export default function PersonalDetails() {
  const loc = window.location;

    const [userId, setUserId] = useState([]);
    const [userName ,setUserName] = useState([]);
    const [fname, setFname] = useState([]);
    const [lname, setLname] = useState([]);
    const [email, setEmail] = useState([]);
    // const [amount, setAmount] = useState([]);
    // const [dop, setDop] = useState();
    const [ID, setId] = useState();
    const [AddShow , setAddShow] =useState(false);
    //const [name, setName] = useState([]);
    const [updateData, setUpdateData] = useState();
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [updateFname, setUpdateFname] = useState(); 
    const [updateUserName, setUpdateUserName] = useState(); 
    //const [NameUpdate, setNameUpdate] = useState();
    const [updateLname, setUpdateLname] = useState();
    const [updateEmail, setUpdateEmail] = useState();
    const [updateMemberCount, setUpdateMemberCount] = useState();
    const [updateMembershipJoin, setUpdateMembershipJoin] = useState();
    const [updateMembershipEnd, setUpdateMembershipEnd] = useState();

    const [updateId, setUpdateId] = useState(); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        axios.get('http://20.204.87.58:8080/sqlartifact/get')
        .then((response) => {
          console.log(response.data)
          console.log(response.data.records)
          const x=JSON.parse(response.data.records)
          setData(x)
          console.log(x)
          }) 
          .catch((error) => {
            console.log(error);
          });
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
    const handleOnChangeUserName = (e) =>{
        e.preventDefault();
        setUpdateUserName(e.target.value)
    }
    const handleOnChangeEmail = (e) =>{
        e.preventDefault();
        setUpdateEmail(e.target.value)
    }
    const handleOnChangeMemberCount = (e) =>{
        e.preventDefault();
        setUpdateMemberCount(e.target.value)
    }
    const handleOnChangeMembershipJoin = (e) =>{
        e.preventDefault();
        setUpdateMembershipJoin(e.target.value)
    }
    const handleOnChangeMembershipEnd = (e) =>{
        e.preventDefault();
        setUpdateMembershipEnd(e.target.value)
    }
    
    const onClickUpdateBtn = (e) =>{
        e.preventDefault();
        console.log(updateId);
       
    }

    const DisplayData=data.map(
        
      (info)=>{
          return(
              <tr key={ID}>
                  <td>{info.flatNumber}</td>
                  <td>{info.userName}</td>
                  <td>{info.firstName}</td>
                  <td>{info.lastName}</td>
                  {/* <td>{info.userPassword}</td> */}
                  <td>{info.emailId}</td>
                  {/* <td>{info.userRole}</td> */}
                  <td>{info.memberCount}</td>
                  <td>{info.membershipJoin}</td>
                  <td>{info.membershipEnd}</td>
                  <td><Button variant="warning" onClick={(e)=>upDatebyId(e,ID)}>Update</Button>&nbsp;&nbsp;<Button variant="danger" onClick={(e)=>deleteById(e,ID)}>Delete</Button></td>

              </tr>
          )
      }
  )
    return (

      <div style={{marginTop: '0.01%'}}>
        {/* <IdleTimerContainer></IdleTimerContainer> */}
       
     <div style={{marginTop: '2%'}}></div>
    <Button className="float-right" style={{marginTop: "3.5%"}} variant="primary" onClick={() => { setAddShow(true) }}>Add</Button>
    <AddUser AddShow={AddShow} setAddShow={setAddShow} />  
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Flat Number</th>
      <th>Username</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Member Count</th>
      <th>Membership Join</th>
      <th>Membership End</th>
     
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {/* {id && id.map((ID, index)=>(
          <tr key={ID}>
              <td>{index+1}</td>
              <td>{username[index]}</td>
              <td>{fname[index]}</td>
              <td>{lname[index]}</td>
              <td>{email[index]}</td>
              
              <td><Button variant="warning" onClick={(e)=>upDatebyId(e,ID)}>Update</Button>&nbsp;&nbsp;<Button variant="danger" onClick={(e)=>deleteById(e,ID)}>Delete</Button></td>
              </tr>

      ))} */}

      {DisplayData}
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
        <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" value={updateUserName} onChange={handleOnChangeUserName} placeholder="Enter User Name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                            </Form.Group>

        <Form.Group className="mb-3" controlId="fname">
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
                        <Form.Group className="mb-3" controlId="memberCount">
                            <Form.Label>Member Count</Form.Label>
                            <Form.Control type="text" placeholder="Enter Member Count" value={updateMemberCount} onChange={handleOnChangeMemberCount} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="membeshipJoin">
                            <Form.Label>Membership Join</Form.Label>
                            <Form.Control type="text" placeholder="Enter Membership Join" value={updateMembershipJoin} onChange={handleOnChangeMembershipJoin} />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="membeshipEnd">
                            <Form.Label>Membership End</Form.Label>
                            <Form.Control type="text" placeholder="Enter Membership End" value={updateMembershipEnd} onChange={handleOnChangeMembershipEnd} />
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

