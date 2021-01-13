import React from "react";
import ReactDom from "react-dom";
// how to import CSS
import "./index.css";

// 1.) import the above

// 2.) setup a function (called component in react).
// Function must begin with a capital letter for react to recognise it
// stateless functional component, always return JSX

// setup variables in classes
const books = [
  {
    id: 1,
    title: "Gutenberg",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
    job: "developer",
  },
  {
    id: 2,
    title: "yet another book",
    img:
      "data:image/jpeg;base64,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",
    job: "author",
  },
];
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
// adding styling through jsx. jsx css or imported libraries overwrites any styling applied in index.css

// can destruct directly inside function parameter (if not a list { img, title, job, children })
// we can pass children (btw, reserved keyword) props into component in the destruct
const Book = (props) => {
  // instead of having to type in props.'xyz' variable, we can deconstruct it here
  // destructing the book prop
  const { img, title, job } = props.book;
  // props is the properties we want to pass into our component
  // referencing variables inside html, use {'insert_variable_here'}

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {title.toLocaleUpperCase()}
      </h1>
      {/* <p>{let x = 6}</p> */}
      {/* The above doesn't work, JSX requires that it return a value, which the above
      does not */}
      <p>{6 + 6}</p>
      {/* When we pass props, to use it, we call props.'property' */}
      <p>{job}</p>
      {/* how we access children props */}
      {/* {children} */}
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
