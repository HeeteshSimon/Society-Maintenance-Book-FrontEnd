import React from 'react';
import { Link } from "react-router-dom";
import { Container, Carousel, Navbar, Nav } from "react-bootstrap";
import { ReactComponent as BGImg } from "../lo.svg";

const Landing = () => {
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

                <div className="main mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12 h100 d-flex flex-column justify-content-center align-items-center">
                            {/* <BGImg width={"90%"} /> */}
                            <Carousel variant="dark">
                                <Carousel.Item interval={1000}>
                                    <BGImg width={"90%"} />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <BGImg width={"90%"} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <BGImg width={"90%"} />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-6 col-12 h100 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="text-center">
                                Welcome to <br /> Revenue Dashboard
                            </h1>
                            <br />
                            <Link
                                style={{ fontSize: "1.5rem" }}
                                className="btn btn-primary rounded-pill px-5 shadow"
                                to="/login"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
export default Landing;