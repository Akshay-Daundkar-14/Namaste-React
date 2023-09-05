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

//---------- Functional component -----------

// two ways to write component

const Fn_Header1 = ()=>{
  return <h1>Header 01 from Fn_Header1</h1>
};

const Fn_Component = () =>(
<mark>Akshay Daundkar From component function</mark>
);

// another way

const Fn_Header2 = ()=>(
  <div>
    <Fn_Header1/>
    <Fn_Header1/>     {/* Way to render Component in Component   */}
    {jsxElement}      {/* Way to render jsxElement in Component   */}
    {Fn_Component()}  {/* Another way to render Component   */}
  <h1>Header 02 from Fn_Header2</h1>
  </div>
);

// component composition - component inside another component

// How to render ??
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fn_Header2/>);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxElements);
