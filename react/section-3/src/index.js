import React from 'react'
import ReactDom from 'react-dom';

// function Greeting() {
//   return (
//     <h4>This is Ahmet and this is my first component.</h4>
//   )
// }

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

const Greeting = () => {
  return React.createElement('div', {}, React.createElement('h4', {}, 'hello world'));
}

ReactDom.render(<Greeting />, document.getElementById('root'));