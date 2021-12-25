import React from 'react';

const Person = ({ name, age, image }) => {
   return (
      <article className='person'>
         <img src={image} alt="" />
         <div>
            <h4>{name}</h4>
            <p>{age}</p>
         </div>
      </article>
   );
};

export default Person;
