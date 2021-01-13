import React from "react";
import ReactDom from "react-dom";
// 1.) import the above

// 2.) setup a function (called component in react).
// Function must begin with a capital letter for react to recognise it
// stateless functional component, always return JSX

// Nested Components, React Tools
// Generally, we have a main entry function (naming convention is App but here
// we are calling it Greeting), then we include the components we write below it or in
// other files and call it using JSX.
function Greeting() {
  // JSX Rules
  // returns only single element
  // div / section / article or fragment
  // use camelCase for html attribute
  // className, not class
  // close every element + format! (generally prettier takes care of it)
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li>
          <a href="#">Hello World</a>
        </li>
        <img src="" alt="" />
        <input type="text" name="" id="" />
      </ul>
      <Person />
      <Message />
    </div>
  );
}
// Component Person
const Person = () => {
  return (
    <div>
      <h2>John Doe</h2>
    </div>
  );
};
// Component Message
const Message = () => {
  return (
    <div>
      <p>this is my message</p>
    </div>
  );
};

// 3.) import react-dom will allow us to inject the function into the 'root' element in the index.html
// we call .render and pass the function and document.getElementById('root')
ReactDom.render(<Greeting />, document.getElementById("root"));

// basically the same code as above but what it is actually doing under-the-hood
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// };
