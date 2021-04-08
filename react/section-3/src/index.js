import React from 'react'
import ReactDom from 'react-dom';

import './index.css';

///////////////////////
// First component

// function Greeting() {
//   return (
//     <h4>This is Ahmet and this is my first component.</h4>
//   )
// }

////////////////////////
// JSX vs JS

// const Greeting = () => {
//   return React.createElement('h4', {}, 'hello world');
// }

// const Greeting = () => {
//   return (
//     <div>
//       <h4>This is Ahmet and this is my first component.</h4>   
//     </div>
//   )
// }

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h4', {}, 'hello world'));
// }

//////////////////////////
// Nested Components

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'The 48 Laws of Power';
  const author = 'harry potter';
  
  return (
    <article className="book" style={{padding: "1rem", backgroundColor: "#fff", borderRadius: "10px"}}>
      <img src="https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg" alt=""/>
      <h1>{title}</h1>
      <p>{author.toUpperCase()}</p>
      <p>{6 + 6}</p>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'));