import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ name, job, image, text, handlers }) => {
  return <article className='review'>
    <div className="img-container">
      <img src={image} alt="" className="person-img" />
      <span className="quote-icon">{<FaQuoteRight />}</span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={handlers.prevPerson}>{<FaChevronLeft />}</button>
      <button className="next-btn" onClick={handlers.nextPerson}>{<FaChevronRight />}</button>
    </div>
    <button className="random-btn" onClick={handlers.randomPerson}>surprise me</button>
  </article>;
};

export default Review;
