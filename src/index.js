import React from 'react';
import ReactDom from 'react-dom';
// 1.) import the above

// 2.) setup a function (called component in react).
// Function must begin with a capital letter for react to recognise it
// stateless functional component, always return JSX 
function Greeting() {
  return <div>
    <h1>Hello World</h1>
  </div>
}

// basically the same code as above but what it is actually doing under-the-hood
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// };


// 3.) import react-dom will allow us to inject the function into the 'root' element in the index.html 
// we call .render and pass the function and document.getElementById('root')
ReactDom.render(<Greeting />, document.getElementById('root'));