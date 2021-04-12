import React from 'react'
import ReactDom from 'react-dom';

import './index.css';

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

/////////////////////////////////
// PROPS method - 1

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book title="Whatever" author="Someone" img="https://images-na.ssl-images-amazon.com/images/I/51BlTo5rKoL._AC_SX184_.jpg" />
//       <Book title='The 48 Laws of Power' author = 'harry potter' img = 'https://images-na.ssl-images-amazon.com/images/I/51ucj27xFCL._AC_SX184_.jpg'/>
//     </section>
//   )
// }

// const Book = (props) => {
  
//   return (
//     <article className="book" style={{padding: "1rem", backgroundColor: "#fff", borderRadius: "10px"}}>
//       <img src={props.img} alt=""/>
//       <h1>{props.title}</h1>
//       <p>{props.author}</p>
//     </article>
//   )
// }

/////////////////////////////////
// PROPS method - 2

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book title="Whatever" author="Someone" img="https://images-na.ssl-images-amazon.com/images/I/51BlTo5rKoL._AC_SX184_.jpg" />
//       <Book title='The 48 Laws of Power' author = 'harry potter' img = 'https://images-na.ssl-images-amazon.com/images/I/51ucj27xFCL._AC_SX184_.jpg'/>
//     </section>
//   )
// }

// const Book = (props) => {

//   const { title, author, img } = props;
  
//   return (
//     <article className="book" style={{padding: "1rem", backgroundColor: "#fff", borderRadius: "10px"}}>
//       <img src={img} alt=""/>
//       <h1>{title}</h1>
//       <p>{author}</p>
//     </article>
//   )
// }

/////////////////////////////////
// PROPS method - 3

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book title="Whatever" author="Someone" img="https://images-na.ssl-images-amazon.com/images/I/51BlTo5rKoL._AC_SX184_.jpg" />
//       <Book title='The 48 Laws of Power' author = 'harry potter' img = 'https://images-na.ssl-images-amazon.com/images/I/51ucj27xFCL._AC_SX184_.jpg'/>
//     </section>
//   )
// }

// const Book = ({
//   title,
//   author,
//   img
// }) => {

//   return (
//     <article className="book" style={{padding: "1rem", backgroundColor: "#fff", borderRadius: "10px"}}>
//       <img src={img} alt=""/>
//       <h1>{title}</h1>
//       <p>{author}</p>
//     </article>
//   )
// }

/////////////////////////////////
// PROPS children

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book title="Whatever" author="Someone" img="https://images-na.ssl-images-amazon.com/images/I/51BlTo5rKoL._AC_SX184_.jpg">
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quidem iusto ullam asperiores sequi vel, cum, sapiente laboriosam, libero deleniti iure reiciendis pariatur iste nisi. Excepturi labore sit temporibus culpa?</p>
//       </Book>
//       <Book title='The 48 Laws of Power' author = 'harry potter' img = 'https://images-na.ssl-images-amazon.com/images/I/51ucj27xFCL._AC_SX184_.jpg'/>
//     </section>
//   )
// }

const Book = ({
  title,
  author,
  img,
  children //special name that denotes children, always.
}) => {

  const clickHandler = () => {
    console.log('reference works')
  }

  const handlerWithEvent = (e) => {
    console.log(e);
    console.log(e.target);
  }

  return (
    <article className="book" style={{padding: "1rem", backgroundColor: "#fff", borderRadius: "10px"}}>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <p>{author}</p>
      {children}
      <button onClick={handlerWithEvent}>reference with event</button>
      <button onClick={clickHandler}>reference</button>
      <button onClick={() => console.log('inline works')}>inline</button>
    </article>
  )
}

function BookList() {
  const books = [
    {
      id: 1,
      title: 'Whatever',
      author: 'Someone',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51BlTo5rKoL._AC_SX184_.jpg'
    },
    {
      id: 2,
      title: 'The 48 Laws of Power',
      author: 'harry potter',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51ucj27xFCL._AC_SX184_.jpg'
    }
  ];

  // const names = ['john', 'doe', 'jane'];
  
  // const newNames = names.map(name => <h1>name</h1>)

  return (
    <section className="booklist">
      {books.map(book => {
        return (
          <Book key={book.id} {...book} />
        )
      })}
    </section>
  )
}



ReactDom.render(<BookList />, document.getElementById('root'));