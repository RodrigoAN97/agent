import type { FC } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Reviews.css";
import { IAgent } from "../../types/Agent";

const Reviews: FC<{ agent: IAgent }> = ({ agent }) => {
  const [reviewText, setReviewText] = useState("");
  const [myAgent, setMyAgent] = useState<IAgent>();
  useEffect(() => {
    setMyAgent(agent);
  }, [agent]);

  const onAddReview = () => {
    const newAgent: IAgent = {
      ...agent,
      reviews: [...agent.reviews, reviewText],
    };
    axios
      .post("/agent/add-review", {
        agent: newAgent,
      })
      .then(() => {
        setMyAgent(newAgent);
        setReviewText("");
      });
  };

  return (
    <>
      <h2>Reviews</h2>
      <div id="add-review">
        <textarea
          placeholder="Write your review about this agent"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button type="button" id="add-review-bt" onClick={onAddReview}>
          Add review
        </button>
      </div>
      <ul>
        {myAgent &&
          myAgent.reviews.map((review, index) => <li key={index}>{review}</li>)}
      </ul>
    </>
  );
};

export default Reviews;
