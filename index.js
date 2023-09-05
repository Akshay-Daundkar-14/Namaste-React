import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";


 
 const element =  React.createElement('h1',{id:'heading',key:"ele1"},'Hello world from REACT - H1');
  const element2 =  React.createElement('h2',{id:'heading2',key:"ele2"},'Hello world from REACT  - H2');

const child =  React.createElement('div',{id:'child'},[element,element2]);
// const parent = React.createElement('div',{id:'parent'},child);





const parent = React.createElement('div',{id:'parent'},
[
    React.createElement('div',{id:'child1',key:"child1"},child),
    React.createElement('div',{id:'child2',key:"child2"},child)
]
);



//-----------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//---------------------
// setTimeout(() => {
//     const top1 = ReactDOM.createRoot(document.getElementById('top'));
// top1.render(React.createElement('h1',{id:'myTop'},"TOP from react"));
// }, 5000);


// //---------------------
// setTimeout(() => {
//     const bottom1 = ReactDOM.createRoot(document.getElementById('bottom'));
//     bottom1.render(React.createElement('h1',{id:'myBottom'},"BOTTOM from react"));
// }, 5000);