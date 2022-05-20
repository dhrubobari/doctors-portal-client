import React from "react";

const Review = ({ review }) => {

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={review.img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{review.name}</h2>
      <p>{review.comment}</p>
    </div>
  </div>
  );
};

export default Review;
