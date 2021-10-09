import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import IdleTimerContainer from '../IdealTime';
import NavbarComponent from './Navbar';

export default function PrivateRoute({ component: Component, ...rest }) {
    let currentUser = localStorage.getItem("isLoggedIn") === null ? false : localStorage.getItem("isLoggedIn");
    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <>
                         {/* <IdleTimerContainer />  */}
                        <NavbarComponent />
                        <Container fluid >
                            <Component {...props} />
                        </Container>
                    </>
                ) : (
                    <Redirect to="/" />
                );
            }}
        ></Route>
    );
}