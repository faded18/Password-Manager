import Axios from "axios";
import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
   let navigate = useNavigate();
  return (
      <div className="card home-card">
        <img
          src={props.source}
          className="card-img-top"
          alt={props.alternate}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.text}</h5>
          <p className="card-text">{props.description}</p>
          <button
            onClick={() => navigate(`${props.path}`)}
            className="btn btn-primary"
          >
            {props.text}
          </button>
        </div>
      </div>
  );
};

export default Card;

// onClick={() => props.setLoginUser({})}
