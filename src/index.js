import React from "react";
import ReactDom from "react-dom";

// how to import CSS
import "./index.css";
// importing list
import { books } from "./books.js";
// import app component
import Book from "./Book.js";
// 1.) import the above

// 2.) setup a function (called component in react).
// Function must begin with a capital letter for react to recognise it
// stateless functional component, always return JSX

// Nested Components, React Tools
// Generally, we have a main entry function (naming convention is App but here
// we are calling it Greeting), then we include the components we write below it or in
// other files and call it using JSX.
// const names = ["john", "peter", "susan"];
// const newName = names.map((name) => {
//   return <h1>{name}</h1>;
// });

function Booklist() {
  // JSX Rules
  // returns only single element
  // div / section / article or fragment
  // use camelCase for html attribute
  // className, not class
  // close every element + format! (generally prettier takes care of it)
  return (
    // add classname to elements so that they may be referenced in the index.css file
    <section className="booklist">
      {/* To pass properties to a component, when we call it, we pass a key and value */}
      {/* We must import it here if we want to use it in our component */}
      {/* Here we are mapping and deconstructing the book elements to pass them into the book component when we call it here. */}
      {books.map((book) => {
        // the keyword key is to ensure unique key prop when referenced
        return <Book key={book.id} book={book} />;
      })}
      {/* we can pass children elements inside component brackets */}
    </section>
  );
}

// 3.) import react-dom will allow us to inject the function into the 'root' element in the index.html
// we call .render and pass the function and document.getElementById('root')
ReactDom.render(<Booklist />, document.getElementById("root"));

// basically the same code as above but what it is actually doing under-the-hood
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// };
