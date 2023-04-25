import React, { useState } from "react";
import "../Styles/Login.css";
import signinLogo from "../assets/Netflix_2015_logo.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { Config } from "../Config/Config";
import { useNavigate } from "react-router-dom";

const formValidationSchema = yup.object({
  email: yup
    .string("Enter email")
    .email("Enter a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "password must contain 8 or more characters")
    .matches(/[0-9]/, "password must contain at least 1 number")
    .matches(/[a-z]/, "password must contain at least 1 lower case letter")
    // .matches(/[A-Z]/, "password must contain at least 1 upper case letter")
    .matches(/[^\w]/, "password must contain at least 1 special character"),
});

function Login() {
  const navigate = useNavigate();
  const {
    values,
    handleChange,
    handleBlur,
    resetForm,
    touched,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      try {
        const data = await axios.post(`${Config.api}/user/login`, values);
        console.log(data);
        toast.success(data.data.message);
        localStorage.setItem("token", data.data.sessionData.token);
        localStorage.setItem("role", data.data.sessionData.role);
        localStorage.setItem("id", data.data.sessionData.userId);

        navigate("/");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    },
  });
  return (
    <div className="login-head">
      <div className="login-box">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            aliignItems: "center",
          }}
        >
          <img src={signinLogo} alt="logo-signin" />
        </div>
        <div className="all-sign-in-input-head">
          <form onSubmit={handleSubmit}>
            <div className="labelAndInputs">
              <label htmlFor="email">Email</label>
              <input
                placeholder="netflix1@gmail.com"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <small>
                {errors.email && touched.email ? errors.email : null}
              </small>
            </div>
            <div className="labelAndInputs">
              <label htmlFor="password">Password</label>
              <input
                placeholder="*******"
                ype="password"
                name="password"
                id="password"
                className="login-inputs"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <small>
                {errors.password && touched.password ? errors.password : null}
              </small>
            </div>
            <div className="signinBtnHead">
              <button type="submit">SIGNIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
