import React, { useEffect, useState } from 'react'
import { Table} from 'react-bootstrap';
import axios from 'axios';
import { Navbar, Nav, Container } from 'react-bootstrap';
import IdleTimerContainer from './IdealTimer';

export default function DisplayTable(props) {
  const loc = window.location;

    const [fname, setFname] = useState([]);
    const [lname, setLname] = useState([]);
    const [amount, setAmount] = useState([]);
    const [monthPending, setMonthPending] = useState([]);
    const [id, setId] = useState([]);
    const [show, setShow] = useState(false);
    const [updateId, setUpdateId] = useState();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {

        
         axios.get('http://20.204.78.15:8080/sqlartifact/def/all')
        .then((response) => {
            console.log(response)
           const responseJSON = JSON.parse(response.data.Defaultors)
            // setId(JSON.parse(response.data.id));
            // setName(JSON.parse(response.data.name));
            console.log(response)
            console.log(responseJSON);
            responseJSON.forEach((e,index) => {
                setId( [  ...id,  e[0] ] )
                setFname([  ...fname,  e[1] ] )        
                setLname([  ...lname,  e[2] ] )        
                setAmount([  ...amount,  e[3] ] )        
                setMonthPending([  ...monthPending,  e[4] ] )        
     })
          })
          .catch((error) => {
            console.log(error);
          });
    }, [])

    
    return (
        <div style={{marginTop: '0.01%'}}>
            <IdleTimerContainer></IdleTimerContainer>
            <Navbar bg="dark" variant="dark">
<Container>
<Nav className="me-auto">
 <Nav.Link href="/records" active={loc.pathname === '/records'}>Records</Nav.Link>
 <Nav.Link href="/defaulter" active={loc.pathname === '/defaulter'}>Defaulter</Nav.Link>
 <Nav.Link href="/pusers"  active={loc.pathname==='/pusers'}>Users</Nav.Link>
 <Nav.Link href="/adminrecords"  active={loc.pathname==='/adminrecords'}>Society Records(A)</Nav.Link>
</Nav>
</Container>
</Navbar>
          <div style={{marginTop: '2%'}}></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Amount</th>
                        <th>Months Pending</th>
                    </tr>
                </thead>
                <tbody>
                    {id && id.map((ID, index) => (
                        <tr key={ID}>
                            <td>{index + 1}</td>
                            <td>{fname[index]}</td>
                            <td>{lname[index]}</td>
                            <td>{amount[index]}</td>
                            <td>{monthPending[index]}</td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </div>
    )
}