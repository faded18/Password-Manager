import React from "react";
import "./login.css";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("prev", { user });

    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    Axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={user.email}
          placeholder="Enter your email"
        ></input>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
          placeholder="Enter your paassword"
        ></input>

        <div className="button" onClick={login}>
          Login
        </div>

        <div>or</div>
        <div className="button" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </>
  );
};

export default Login;
