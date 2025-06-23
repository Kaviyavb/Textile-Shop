import React, { useState } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ramesh",
      date: "December 10, 2023",
      daysAgo: "1 day ago",
      rating: 4,
      title: "The Products I purchased was too good.",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque id dui eget venenatis. In hac habitasse platea dictumst.",
      status: "",
    },
    {
      id: 2,
      name: "Suresh",
      date: "December 09, 2023",
      daysAgo: "2 day ago",
      rating: 4,
      title: "The Products I purchased was too good.",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque id dui eget venenatis. In hac habitasse platea dictumst.",
      status: "",
    },
  ]);

  const handleApprove = (id) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, status: "Approved" } : review
      )
    );
  };

  const handleReject = (id) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, status: "Rejected" } : review
      )
    );
  };

  return (
    <div className="reviews-page">
      {reviews.map((review) => (
        <div className="review-card" key={review.id}>
          <div className="review-header">
            <div className="review-user">
              <h4>{review.name}</h4>
              <span>{review.date}</span>
              <small>{review.daysAgo}</small>
            </div>
            <div className="review-rating">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
              <span className="review-score">({review.rating}/5)</span>
            </div>
          </div>

          <div className="review-body">
            <h5>{review.title}</h5>
            <p>{review.message}</p>
          </div>

          <div className="review-actions">
            {review.status === "" ? (
              <>
                <button
                  className="reject-btn"
                  onClick={() => handleReject(review.id)}
                >
                  Reject
                </button>
                <button
                  className="approve-btn"
                  onClick={() => handleApprove(review.id)}
                >
                  Approve
                </button>
              </>
            ) : (
              <span
                className={`review-status ${
                  review.status === "Approved" ? "approved" : "rejected"
                }`}
              >
                {review.status}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
