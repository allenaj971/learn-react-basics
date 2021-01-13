import React from 'react';
import ReactDom from 'react-dom';
// 1.) import the above

// 2.) setup a function (called component in react).
// Function must begin with a capital letter for react to recognise it
function Greeting() {
  return <h1>This is Allen and this is my first component</h1>;
}

// 3.) import react-dom will allow us to inject the function into the 'root' element in the index.html 
// we call .render and pass the function and document.getElementById('root')
ReactDom.render(<Greeting />, document.getElementById('root'));