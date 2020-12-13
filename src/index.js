import React from "react";
import ReactDOM from "react-dom";

import ContactList from "./App";

//looks like <div class="App">hello worldss</div>
const element = React.createElement(
  "div",
  { className: "App" },
  "hello worldss"
);

//Rendering nested objects
/*
<ol>
  <li>chidi</li>
  <li>ebuka</li>
  <li>chidi</li>
</ol>
*/
const element2 = React.createElement(
  "ol",
  { className: "App" },
  React.createElement("li", null, "chidi"),
  React.createElement("li", null, "ebuka"),
  React.createElement("li", null, "chidi")
);

const people = [{ name: "chidodo" }, { name: "chris" }, { name: "christy" }];
//More efficient approach
const element3 = React.createElement(
  "ol",
  { className: "App" },
  people.map((person) =>
    React.createElement("li", { key: person.name }, person.name)
  )
);

//Use of JSX
const element4 = (
  <ol>
    {people.map((person) => (
      <li key={person.name}>{person.name}</li>
    ))}
  </ol>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<ContactList />, rootElement);
