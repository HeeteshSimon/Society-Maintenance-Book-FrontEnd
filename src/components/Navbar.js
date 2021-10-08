import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NavbarComponent = () => {
    let history = useHistory();
    function handlelogout() {
        localStorage.clear();
        history.push("/");
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='px-3'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link active onClick={handlelogout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavbarComponent;