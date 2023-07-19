import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="rounded" src={props.img} alt="dummyalt" />
      </div>
      <div>
        <h2 className="name">{props.name}</h2>
        <p className="info">
          <strong>Contact : </strong> {props.phone}
        </p>
        <p className="info">
          <strong>Email : </strong> {props.email}
        </p>
        <p className="info">
          <strong>Company : </strong> {props.company}
        </p>
      </div>
    </div>
  );
}
export default Card;
