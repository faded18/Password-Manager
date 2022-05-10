import React from "react";
import "./register.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    list:[],
  });

  const handleChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      Axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigate("/");
      });
    } else {
      alert("Invalid input");
    }
  };
  return (
    <div>
      <div className="register">
        {console.log("User", user)}
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={user.name}
          placeholder="Your Name"
        ></input>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={user.email}
          placeholder="Your Email"
        ></input>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
          placeholder="Your Paassword"
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          onChange={handleChange}
          value={user.reEnterPassword}
          placeholder="Re-enter Paassword"
        ></input>

        <div className="button" onClick={register}>
          Register
        </div>

        <div>or</div>
        <div
          className="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
