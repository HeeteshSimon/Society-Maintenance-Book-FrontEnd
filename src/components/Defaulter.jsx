import React, { useEffect, useState } from 'react'
import { Table} from 'react-bootstrap';
import axios from 'axios';
import { Navbar, Nav, Container } from 'react-bootstrap';
import IdleTimerContainer from '../IdealTime';

export default function Defaulter(props) {
    const loc = window.location;

    const [fname, setFname] = useState([]);
    const [lname, setLname] = useState([]);
    const [amount, setAmount] = useState([]);
    const [monthPending, setMonthPending] = useState([]);
    const [ID, setId] = useState([]);
    const [show, setShow] = useState(false);
    const [updateId, setUpdateId] = useState();
    const [data, setData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {

        
         axios.get('http://20.204.87.58:8080/sqlartifact/def')
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
    }, [])

    const DisplayData=data.map(
        
        (info)=>{
            return(
                <tr key={ID}>
                    <td>{info.flatNumber}</td>
                    <td>{info.firstName}</td>
                    <td>{info.lastName}</td>
                    <td>{info.months}</td>
                    <td>{info.amount}</td>
  
                </tr>
            )
        }
    )
    return (
        <div style={{ marginTop: '0.01%' }}>
            <IdleTimerContainer></IdleTimerContainer>
            <div style={{ marginTop: '2%' }}></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Flat Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Months Pending</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {id && id.map((ID, index) => (
                        <tr key={ID}>
                            <td>{index + 1}</td>
                            <td>{fname[index]}</td>
                            <td>{lname[index]}</td>
                            <td>{amount[index]}</td>
                            <td>{monthPending[index]}</td>
                        </tr>

                    ))} */}
                    {DisplayData}
                </tbody>
            </Table>
        </div>
    )
}