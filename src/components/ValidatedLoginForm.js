import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router';
import "../ValidatedLoginForm.css"
import { Button,Form } from "react-bootstrap";

const ValidatedLoginForm = () => {
  let history = useHistory();

return (
  <Formik
    initialValues={{ Username: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      console.log("Submitting");
      console.log(values);
      localStorage.setItem("user","anurag");
      localStorage.setItem("isLoggedIn",true);
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
       
        <form onSubmit={handleSubmit}>
          <label htmlFor="Username">Username</label>
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
          <label htmlFor="Password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <br />
          <Form.Check
        
        type="checkbox"
        label={`Remember Me`}
        id={`default-1`}
      />
         <br />
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </form>
      );
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