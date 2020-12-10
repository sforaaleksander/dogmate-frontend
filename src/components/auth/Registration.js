import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./auth.css";

export default function Registration() {
  const [loginErrors, setLoginErrors] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    registrationErrors: "",
  });
  const { name, email, password, passwordConfirmation } = form;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/register",
        {
          name: name,
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("registration res", response);
      })
      .catch((error) => {
        console.log("registration error", error);
        setLoginErrors("registration error");
      });
    setLoginErrors("registered successfully");
    setForm({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      registrationErrors: "",
    });
  }

  return (
    <div className={"wrapper-container"}>
      <div className={"outer-box light-blue"}>
        <div className={"inner-box"}>
          <h1 className={"brown"}>Join your dogmates!</h1>
          <h4>{loginErrors}</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="confirm password"
              value={passwordConfirmation}
              onChange={handleChange}
              required
            />
            <button className={"yellow shadow"} type="submit">
              Register
            </button>
            <Link to="/" className={"additional-info redirect-font-color"}>
              Back to login page
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
