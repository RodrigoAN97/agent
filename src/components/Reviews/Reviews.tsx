import type { FC } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Reviews.css";

const Reviews: FC = () => {
  const [reviewText, setReviewText] = useState("");
  useEffect(() => {}, []);

  const onAddReview = () => {
    console.log(reviewText);
  };

  return (
    <>
      <h2>Reviews</h2>
      <div id="add-review">
        <textarea
          placeholder="Write your review about this agent"
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button type="button" id="add-review-bt" onClick={onAddReview}>
          Add review
        </button>
      </div>
    </>
  );
};

export default Reviews;
