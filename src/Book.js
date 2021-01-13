import React from "react";

// adding styling through jsx. jsx css or imported libraries overwrites any styling applied in index.css

// can destruct directly inside function parameter (if not a list { img, title, job, children })
// we can pass children (btw, reserved keyword) props into component in the destruct
export const Book = (props) => {
  // instead of having to type in props.'xyz' variable, we can deconstruct it here
  // destructing the book prop
  const { img, title, job } = props.book;
  // props is the properties we want to pass into our component
  // referencing variables inside html, use {'insert_variable_here'}

  // The below is a function defining what happens when the user clicks the example button
  const clickHandler = () => {
    alert("hello world");
  };

  const example = (job) => {
    console.log(job);
  };

  return (
    <article
      className="book"
      // Here we are using mouse over element to console log title
      onMouseOver={() => {
        console.log(title);
      }}
    >
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
      {/* We can also use inline func to handle click events */}
      <p onClick={() => alert(job)}>{job}</p>
      {/* how we access children props */}
      {/* {children} */}
      <button type="button" onClick={clickHandler}>
        example
      </button>
      {/* if we are passing a variable into the func, we use inline func to call the func with the parameter */}
      <button type="button" onClick={() => example(job)}>
        another boi
      </button>
    </article>
  );
};

export default Book;
