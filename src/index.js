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
function Booklist() {
  // JSX Rules
  // returns only single element
  // div / section / article or fragment
  // use camelCase for html attribute
  // className, not class
  // close every element + format! (generally prettier takes care of it)
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
    </article>
  );
};

const Image = () => (
  <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x" />
);

const Title = () => <h1>Tesla Model S</h1>;

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
