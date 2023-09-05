import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ---> Object --> HTML

const element = React.createElement("h1", { id: "heading" }, "Namaste React !");
console.log(element);

// JSX -->  React.createElement ---> Object --> HTML

const jsxElement = <h1 id="heading">Namaste From JSX</h1>;
console.log(jsxElement);

// Multiple Lines

const jsxElements = (
  <div>
    <h1 id="heading">Namaste From JSX</h1>
    <h2>Heading two</h2>
  </div>
);

console.log(jsxElements);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxElements);
