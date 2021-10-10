import React from 'react';
import { Link } from "react-router-dom";
import { Container, Carousel, Navbar, Nav, Card, Placeholder } from "react-bootstrap";
// import { ReactComponent as BGImg} from "../images";
import images from "../images";
import { render } from '@testing-library/react';
// import { Alert } from '@coreui/react';


const Landing = () => {
    render()
    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container fluid>

                <div className="main ">
                    <div >
                        <div className="justify-content-center align-items-center">
                            {/* <BGImg width={"90%"} /> */}
                            <Carousel fade variant="dark">
                                <Carousel.Item interval={3000}>
                                    <img src={images.a} margin={"auto"} height={"auto"} width={"100%"}  alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.b} margin={"auto"} height={"auto"} width={"100%"}  alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.c} margin={"auto"} height={"auto"} width={"100%"}  alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.d} margin={"auto"} height={"auto"} width={"100%"}  alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.e} margin={"auto"} height={"auto"} width={"100%"}  alt="Hpic" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div style={{ padding: '20px' }} className="justify-content-center align-items-center">
                            <h1 className="text-center">
                                Welcome to <br /> Continental Housing Society!
                            </h1>
                            <br />
                            <div className="justify-content-center align-items-center">
                                <Link
                                    style={{ fontSize: "1.5rem" }}
                                    className="btn btn-primary rounded-pill px-5 shadow"
                                    to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                        {/* <CRow>
                            <CCol sm={6}>
                                <CCard>
                                    <CCardBody>
                                        <CCardTitle>Special title treatment</CCardTitle>
                                        <CCardText>
                                            With supporting text below as a natural lead-in to additional content.
                                        </CCardText>
                                        <CButton href="#">Go somewhere</CButton>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                            <CCol sm={6}>
                                <CCard>
                                    <CCardBody>
                                        <CCardTitle>Special title treatment</CCardTitle>
                                        <CCardText>
                                            With supporting text below as a natural lead-in to additional content.
                                        </CCardText>
                                        <CButton href="#">Go somewhere</CButton>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        </CRow> */}

                    </div>
                </div>

            </Container>
        </>
    );
}
export default Landing;