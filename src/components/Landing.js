import React from 'react';
import { Link } from "react-router-dom";
import { Container,Carousel} from "react-bootstrap";
import { ReactComponent as BGImg } from "../lo.svg";

const Landing = () => {
    return (
        <Container fluid>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="main mt-5">
                <div className="row">
                    <div className="col-md-6 col-12 h100 d-flex flex-column justify-content-center align-items-center">
                        <BGImg width={"90%"} />
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
    );
}
export default Landing;