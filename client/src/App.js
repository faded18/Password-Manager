import React, { createContext } from "react";
import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Homepage from "./components/homepage/homepage";
import Manager from "./components/manager/manager";
import Generator from "./components/Generator/generator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
const currentUser = createContext();
const setsLoginUser = createContext();
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />

          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/manager"
            element={
              <currentUser.Provider value={user}>
                <setsLoginUser.Provider value={setLoginUser}>
                  <Manager setLoginUser={setLoginUser} />
                </setsLoginUser.Provider>
              </currentUser.Provider>
            }
          />
          <Route
            path="/generator"
            element={
              // user && user._id ? (
              //   <Generator setLoginUser={setLoginUser} />
              // ) : (
              //   <Login setLoginUser={setLoginUser} />
              // )
              <Generator/>
            }
          />
          {/* <Route path="/casestudies" element={<CaseStudy />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
export { currentUser, setsLoginUser };
