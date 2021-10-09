import React from 'react';
import { Link } from "react-router-dom";
import { Container, Carousel, Navbar, Nav, Card, Placeholder } from "react-bootstrap";
// import { ReactComponent as BGImg} from "../images";
import images from "../images";
import { render } from '@testing-library/react';
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

                <div className="main mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12 h100 d-flex flex-column justify-content-center align-items-center">
                            {/* <BGImg width={"90%"} /> */}
                            <Carousel fade variant="dark">
                                <Carousel.Item interval={3000}>
                                    <img src={images.a} margin={"auto"} height={"500px"} width={"900px"} alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.b} margin={"auto"} height={"500px"} width={"900px"} alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.c} margin={"auto"} height={"500px"} width={"900px"} alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.d} margin={"auto"} height={"500px"} width={"900px"} alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.e} margin={"auto"} height={"500px"} width={"900px"} alt="Hpic" />
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
                        <div style={{padding: '20px'}}>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                </Placeholder>
                                <Placeholder.Button variant="primary" xs={6} />
                            </Card.Body>
                        </Card>
                        </div>
                        
                    </div>
                </div>
            
        </Container>
        </>
    );
}
export default Landing;