import React from "react";
export default function Review({ rev }) {
  return (
    <div className="review-card">
      <div className="review-img-wrapper">
        <img
          className="image"
          src={rev.image}
          alt={rev.name}
        />
      </div>
      <div className="review-details">
        <p className="name">{rev.name}</p>
        <p className="job">{rev.job}</p>
        <p className="text">{rev.text}</p>
      </div>
    </div>
  );
}
