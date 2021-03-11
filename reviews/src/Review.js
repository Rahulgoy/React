import React, { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = reviews[index];



  const checkIndex=(index)=>
  {
    if (index > reviews.length-1)
      return 0;
    if (index < 0)
      return reviews.length -1;
    return index;
  }

  const prevReview=(index)=>{
    setIndex((index)=>{
      let newIndex = index -1;
      return checkIndex(newIndex);
    });
    };
  const nextReview=()=>{
    setIndex((index)=>{
    let newIndex = index +1;
    return checkIndex(newIndex);
  });
  };

  const randomRev=()=>{
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index)
      randomNumber = index + 1;
    setIndex(checkIndex(randomNumber));
  }
  return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
            <span className="quote-icon">
              <FaQuoteRight/>
            </span>
        </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevReview}><FaChevronLeft/></button>
            <button className="next-btn" onClick={nextReview}><FaChevronRight/></button>
          </div>
        <button className="random-btn" onClick={randomRev}>Surprise Me</button>
      </article>
    )

  
};

export default Review;