import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { useHistory } from 'react-router';
import "../ValidatedLoginForm.css"
import { Button, Form } from "react-bootstrap";
import PasswordStrengthBar from 'react-password-strength-bar';
const ValidatedLoginForm = () => {
// const [password, setPassword] = useState('');
    
    let history = useHistory();
    return (
        <Formik
            initialValues={{ Username: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
                console.log("Submitting");
                console.log(values);
                localStorage.setItem("user", "anurag");
                localStorage.setItem("isLoggedIn", true);
                history.push("/dashboard");
            }}

            validationSchema={Yup.object().shape({
                Username: Yup.string()
                    .required("Required")
                    .min(5)
                    .max(12)
                    .matches(
                        /^[aA-zZ._\s]+$/,
                        "Only alphabets and '.' '_' are allowed for this field "
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
                    handleSubmit
                } = props;
                return (
                    <div style={{ padding: '0.5px', display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                    <form onSubmit={handleSubmit} style={{backgroundColor: "black",border: '1px solid rgba(0, 0, 0, 0.05)',borderRadius: '20px', padding:'50px'}}>
                    <h2 style={{color:'white',textAlign:'center'}}> LogIn Here </h2>
                    <label style={{color:'white'}} htmlFor="Username">Username</label>
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
                        <label style={{color:'white'}} htmlFor="Password">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password && "error"}
                        />
                        <div style={{paddingTop:'20px'}}> 
                        <PasswordStrengthMeter password={values.password} />
                        </div>
                        {errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}
                        {/* <br /> */}
                        {/*  */}
                        <Form.Check
                            style={{color:'white'}}
                            type="checkbox"
                            label={`Remember Me`}
                            id={`default-1`}
                        />
                        <br />
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            Login
                        </Button>
                    </form>
                    </div>);
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