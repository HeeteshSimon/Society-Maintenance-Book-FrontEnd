
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import IdleTimerContainer from '../IdealTime';
import AddRecords from './AddRecords';

export default function MaintainanceRecords(props) {
  const loc = window.location;
    const [userid, setUserid] = useState([]);
    const [fname, setFname] = useState([]);
    const [lname, setLname] = useState([]);
    const [month, setMonth] = useState([]);
    const [expType, setExpType] = useState([]);
    const [amount, setAmount] = useState([]);
    const [dop, setDop] = useState([]);
    const [ID, setId] = useState();
    const [AddShow , setAddShow] =useState(false);

    //const [name, setName] = useState([]);
    const [updateData, setUpdateData] = useState();
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [yearlyData, setYearlyData] = useState([]);    //const [updateFname, setUpdateFname] = useState(); 
    //const [NameUpdate, setNameUpdate] = useState();
    //const [updateLname, setUpdateLname] = useState();
    const [updateDop, setUpdateDop] = useState();
    // const [updateExpType, setUpdateExpType] = useState();
    const [updateAmount, setUpdateAmount] = useState();
    const [updateId, setUpdateId] = useState(); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        axios.get('http://20.204.87.58:8080/sqlartifact/getAllRecords')
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
        // axios.get("http://20.204.78.15:8080/sqlartifact/deleteUserRecord?rid="+ID)
        // .then((response)=>{
        //     console.log(response.data);
        //     window.location.reload();
        //     setUpdateData(Math.random());
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }
    const upDatebyId = async (e, ID) =>{
        e.preventDefault();
        console.log(ID);
        setUpdateId(ID);
        handleShow();
        

    }
    const handleOnChangeDop = (e) =>{
        e.preventDefault();
        setUpdateDop(e.target.value)
    }
   
    const handleOnChangeAmount = (e) =>{
        e.preventDefault();
        setUpdateAmount(e.target.value)
    }
    
    const onClickUpdateBtn = (e) =>{
        e.preventDefault();
        console.log(updateId);
       
        // axios.get(`http://20.204.78.15:8080/sqlartifact/updateUserRecord?rid=${updateId}&date=${updateDop}&amount=${updateAmount}`)
        // .then((response)=>{
        //     console.log(response.data);
        //     window.location.reload();
        //     handleClose();
        //     setUpdateData(Math.random());
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }


    const DisplayData=data.map(
        
      (info)=>{
          return(
              <tr key={ID}>
                  <td>{info.recordId}</td>
                  <td>{info.flatNumber}</td>
                  <td>{info.amount}</td>
                  <td>{info.dateOfPay}</td>
                  <td>{info.modeOfPayment}</td>
                  <td>{info.paymentReference}</td>
                  {/* <td><Button variant="warning" onClick={(e)=>upDatebyId(e,ID)}>Update</Button>&nbsp;&nbsp;<Button variant="danger" onClick={(e)=>deleteById(e,ID)}>Delete</Button></td> */}

              </tr>
          )
      }
  )

    return (
        <div style={{marginTop: '0.01%'}}>
          <IdleTimerContainer></IdleTimerContainer>
          
          <Button className="float-right" style={{marginTop: "3.5%"}} variant="primary" onClick={() => { setAddShow(true) }}>Add</Button>
    <AddRecords AddShow={AddShow} setAddShow={setAddShow} />  
          <div style={{marginTop: '2%'}}></div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Record Id</th>
      <th>Flat Number</th>
      <th>Amount</th>
      <th>Date of Payment</th>
      <th>Mode Of Payment</th>
      <th>Payment Reference</th>
      {/* <th>Actions</th> */}
    </tr>
  </thead>
  <tbody>
      {/* {id && id.map((ID, index)=>(
          <tr key={ID}>
              <td>{id[index]}</td>

              <td>{fname[index]}</td>
              <td>{lname[index]}</td>
              <td>{amount[index]}</td>
              <td>{dop[index]}</td>
              <td><Button variant="warning" onClick={(e) => upDatebyId(e, ID)}>Update</Button>&nbsp;&nbsp;<Button variant="danger" onClick={(e) => deleteById(e, ID)}>Delete</Button></td>
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
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Date of Payment</Form.Label>
            <Form.Control type="date" placeholder="Enter Date of Payment" value={updateDop} onChange={handleOnChangeDop} />
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
  );
}


