import React from 'react'
import ReactDom from 'react-dom';

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
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg" alt=""/>
const Title = () => <h1>The 48 Laws of Power</h1>
const Author = () => <p>Robert Greene</p>

ReactDom.render(<BookList />, document.getElementById('root'));