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

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h1>John Doe</h1>
const Message = () => <p>This is my message.</p>

ReactDom.render(<Greeting />, document.getElementById('root'));