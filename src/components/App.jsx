import React from "react";
import contacts from "../contact";
import Card from "./Card";

function App() {
  return (
    <div className="cardcontainer">
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
        company={contacts[0].company}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].tel}
        email={contacts[1].email}
        company={contacts[1].company}
      />{" "}
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].tel}
        email={contacts[2].email}
        company={contacts[2].company}
      />{" "}
      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].tel}
        email={contacts[3].email}
        company={contacts[3].company}
      />{" "}
      <Card
        name={contacts[4].name}
        img={contacts[4].imgURL}
        tel={contacts[4].tel}
        email={contacts[4].email}
        company={contacts[4].company}
      />
      <Card
        name={contacts[5].name}
        img={contacts[5].imgURL}
        tel={contacts[5].tel}
        email={contacts[5].email}
        company={contacts[5].company}
      />{" "}
    </div>
  );
}

export default App;
