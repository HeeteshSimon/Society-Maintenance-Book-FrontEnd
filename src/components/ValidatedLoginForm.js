import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { useHistory } from 'react-router';
import "../ValidatedLoginForm.css"
import { Button, Form } from "react-bootstrap";
import Particles from "react-tsparticles";
import axios from "axios";
import PasswordStrengthBar from 'react-password-strength-bar';
const ValidatedLoginForm = () => {
    // const [password, setPassword] = useState('');
    const onSubmit = (values) => {
        axios.get(`http://20.204.87.58:8080/sqlartifact/login?username=${encodeURIComponent(values.Username)}&password=${encodeURIComponent(values.password)}`)
            .then(response => {
                console.log('login', response.data)
                if (response.data.role !== "") {

                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('role', response.data.role);
                    localStorage.setItem('flatNumber', response.data.flatNumber);
                    if (response.data.role === 'admin') {

                        history.push("/MaintenanceRecords")
                    }
                    else {
                        history.push("/UserDetails");
                    }
                }
                else {
                    alert('USername or Password Incorrect')
                }
            })

    }
    let history = useHistory();
    return (
        <Formik
            initialValues={{ Username: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
                console.log("Submitting");
                console.log(values);
                onSubmit(values)
            }}

            validationSchema={Yup.object().shape({
                Username: Yup.string()
                    .required("Required")
                    .min(5)
                    .max(12)
                    .matches(
                        /^[aA-zZ._0-9\s]+$/,
                        "Only alphanumberic chars and '.' '_' are allowed for this field "
                    ),

                password: Yup.string()

                    .required("Required")
                    .min(8, "Password is too short - should be 8 characters minimum")
                    .matches(/(?=.*[0-9])/, "Password must contain a number")
                    .matches(
                        /(?=.*?[;:"!@#'$&*>~()-+,<])/,
                        "Password must contain a special char"
                    )
                    .matches(/(?=.*[a-z])/, "Password must contain a small Alphabet")
                    .matches(/(?=.*[A-Z])/, "Password must contain a capital Alphabet")
            })}
        >
            {(props) => {

                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;
                return (
                    <>

                        <img style={{ position: "fixed", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, width: "100vw", height: "100vh" }}
                            src='https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2016/06/5-amenities-e1466597431628.jpg'
                            alt='bg' />
                        <Particles
                            style={{ position: "fixed", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1 }}
                            id="tsparticles"
                            options={{
                                background: {
                                    color: {
                                        value: ""
                                    }
                                },
                                fpsLimit: 60,
                                interactivity: {
                                    detectsOn: "canvas",
                                    events: {
                                        onClick: {
                                            enable: true,
                                            mode: "push"
                                        },
                                        onHover: {
                                            enable: true,
                                            mode: "repulse"
                                        },
                                        resize: true
                                    },
                                    modes: {
                                        bubble: {
                                            distance: 400,
                                            duration: 2,
                                            opacity: 0.8,
                                            size: 40
                                        },
                                        push: {
                                            quantity: 4
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4
                                        }
                                    }
                                },
                                particles: {
                                    color: {
                                        value: "#ffffff"
                                    },
                                    links: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 1.0,
                                        width: 2
                                    },
                                    collisions: {
                                        enable: true
                                    },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outMode: "bounce",
                                        random: false,
                                        speed: 6,
                                        straight: false
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            value_area: 800
                                        },
                                        value: 80
                                    },
                                    opacity: {
                                        value: 0.5
                                    },
                                    shape: {
                                        type: "circle"
                                    },
                                    size: {
                                        random: true,
                                        value: 5
                                    }
                                },
                                detectRetina: true
                            }}
                        />
                        <div style={{ zIndex: 1, padding: '0.5px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <form onSubmit={handleSubmit} style={{ backgroundColor: "black", border: '1px solid rgba(0, 0, 0, 0.05)', borderRadius: '20px', padding: '50px' }}>
                                <h2 style={{ color: 'white', textAlign: 'center' }}> LogIn Here </h2>
                                <label style={{ color: 'white' }} htmlFor="Username">Username</label>
                                <input
                                    name="Username"
                                    type="text"
                                    placeholder="Enter your Username"
                                    value={values.Username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.Username && touched.Username && "error"}
                                />
                                {errors.Username && touched.Username && (
                                    <div className="input-feedback">{errors.Username}</div>
                                )}
                                <label style={{ color: 'white' }} htmlFor="Password">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "error"}
                                />
                                <div style={{ paddingTop: '20px' }}>
                                    <PasswordStrengthMeter password={values.password} />
                                </div>
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                {/* <br /> */}
                                {/*  */}
                                <Form.Check
                                    style={{ color: 'white' }}
                                    type="checkbox"
                                    label={`Remember Me`}
                                    id={`default-1`}
                                />
                                <br />
                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    Login
                                </Button>
                            </form>
                        </div>
                    </>);
            }}
        </Formik>);
};

export default ValidatedLoginForm;



// 
  // export default function ValidtaedLoginForm () => {
    // let history = useHistory();
// 
      // return ();
  // };