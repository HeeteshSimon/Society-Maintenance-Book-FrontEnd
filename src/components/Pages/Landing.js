import React from 'react';
import {  Link } from "react-router-dom";
import {  Container } from "react-bootstrap";
import { ReactComponent as BGImg } from "./lo.svg";


const Landing = () => {
    return (
        <Container fluid>
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