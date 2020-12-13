import React from "react";
import "./styles.css";

export default class ContactList extends React.Component {
  render() {
    //this render method is the only method that is required for this class
    const people = [
      { name: "chidiebere" },
      { name: "chris" },
      { name: "christy" }
    ];

    return (
      <ol>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

/*const people = [{ name: "chidi" }, { name: "chris" }, { name: "christy" }];

export default function App() {
  return (
    <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  );
}*/
