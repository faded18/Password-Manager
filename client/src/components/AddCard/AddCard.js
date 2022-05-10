import React from "react";
import { useContext, useState } from "react";
import "./AddCard.css";
import { currentUser, setsLoginUser } from "../../App";
import Axios from "axios";
const AddCard = ({ setCardList }) => {
  const user = useContext(currentUser);
  const setLoginUser = useContext(setsLoginUser)
  // console.log("User whose session is there", user);
  const [item, setItem] = useState({
    email: "",
    website: "",
    password: "",
  });
  const handleChange = (e) => {
    // console.log("Item created", item);
    const { name, value } = e.target;
    console.log("current item", item);
    setItem({
      ...item,
      [name]: value,
    });
  };
  const addPassword = () => {
    const { email, website, password } = item;
    if (email && website && password) {
      console.log("usersending post request",user);
      Axios.post("http://localhost:9002/additem", { user, item })
        .then((res) => {
          console.log(res.data);
          // console.log("User sent back by the add card post request", res.data);
          setLoginUser(res.data.foundUser);
        })
        .catch((error) => {
          console.log("Error occured while adding", error);
        });
    } else {
      alert("Invalid Request");
    }
  };
  return (
    <>
      <div className="card add-card">
        <div className="card-body">
          <h5 className="card-title">Add Password</h5>
          <form className="add-password-form">
            <div className="form-group form-group-add-password">
              <input
                type="text"
                className="form-control"
                name="website"
                aria-describedby="emailHelp"
                placeholder="Website"
                onChange={handleChange}
              />
            </div>
            <div className="form-group form-group-add-password">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={handleChange}
                name="email"
              />
            </div>

            <div className="form-group form-group-add-password">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={handleChange}
                name="password"
              />
            </div>
          </form>
          <button className="btn btn-primary" onClick={addPassword}>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCard;
