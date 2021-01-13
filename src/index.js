import React from "react";
import ReactDom from "react-dom";
// how to import CSS
import "./index.css";

// 1.) import the above

// 2.) setup a function (called component in react).
// Function must begin with a capital letter for react to recognise it
// stateless functional component, always return JSX

// Nested Components, React Tools
// Generally, we have a main entry function (naming convention is App but here
// we are calling it Greeting), then we include the components we write below it or in
// other files and call it using JSX.
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
      <Book />
    </section>
  );
}
// adding styling through jsx. jsx css or imported libraries overwrites any styling applied
// in index.css
const Book = () => {
  const title = "Gutenberg";
  // referencing variables inside html, use {'insert_variable_here'}

  return (
    <article className="book">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" />
      <h1
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {title.toLocaleUpperCase()}
      </h1>
      {/* <p>{let x = 6}</p> */}
      {/* The above doesn't work, JSX requires that it return a value, which the above
      does not  */}
      <p>{6 + 6}</p>
    </article>
  );
};

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
