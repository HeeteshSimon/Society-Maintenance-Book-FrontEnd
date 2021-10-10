import React from 'react';
import { Link } from "react-router-dom";
import { Container, Carousel, Navbar, Nav, Card, Placeholder } from "react-bootstrap";
import images from "../images";
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {
    render()
    return (
        <>
            <Container fluid>

                <div className="main ">
                    <div >
                        <div className="justify-content-center align-items-center">
                            <Carousel fade variant="dark">
                                <Carousel.Item interval={3000}>
                                    <img src={images.a} margin={"auto"} height={"auto"} width={"100%"} alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.b} margin={"auto"} height={"auto"} width={"100%"} alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.c} margin={"auto"} height={"auto"} width={"100%"} alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.d} margin={"auto"} height={"auto"} width={"100%"} alt="Hpic" />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src={images.e} margin={"auto"} height={"auto"} width={"100%"} alt="Hpic" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div style={{ padding: '20px' }} className="justify-content-center align-items-center">
                            <h1 className="text-center">
                                Welcome to <br /> Continental Housing Society!
                            </h1>
                            <br />
                            <div className="justify-content-center align-items-center" style={{ position: 'absolute', right: 950 }}>
                                <Link
                                    style={{ fontSize: "1.5rem" }}
                                    className="btn btn-primary rounded-pill px-5 shadow"
                                    to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
}
export default Landing;