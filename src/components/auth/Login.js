import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./auth.css";
import Cookies from "js-cookie";
import { useState, useContext } from "react";
import { LoginContext } from "../common/avatar-menu/LoginContext";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    loginErrors: "",
    isLogged: false,
  });
  const [logOut, setIsLoggedIn] = useContext(LoginContext);
  const { email, password, loginErrors } = form;

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    axios
      .post(
        "http://localhost:8080/login",
        {
          username: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("res from login", response);
        console.log("auth below");
        console.log(response.headers.authorization.valueOf());
        //todo create cookie for user with jwt
        if (response.status.valueOf() === 200) {
          Cookies.set("user", response.headers.authorization.valueOf(), {
            expires: 7,
          });
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log("login error", error);
        setForm({ ...form, loginErrors: "Wrong Username or Password!" });
      });
    e.preventDefault();
  }

  return (
    <div className={"wrapper-container"}>
      <div className={"outer-box"}>
        <div className={"inner-box"}>
          <h1 className={"title"}>Sign in</h1>
          <h4>{loginErrors}</h4>
          <form onSubmit={handleSubmit}>
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
            <button className={"submit-btn"} type="submit">
              Sign in!
            </button>
          </form>
          <div className={"additional-info"}>
            <span>Don't have an account? &nbsp;</span>
            <Link className={"redirect-font-color"} to="/registration">
              Sign up!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
