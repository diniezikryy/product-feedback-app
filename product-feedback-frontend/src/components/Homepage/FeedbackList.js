import React, { useEffect, useState } from "react";

import Feedback from "../Homepage/Feedback/Feedback";

import feedbackService from "../../services/feedback";

import { useDispatch } from "react-redux";
import { incrementByAmount } from "../../reducers/feedbackSlice";

const FeedbackList = () => {
  // Traditional State
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    feedbackService.getAll().then((initialFeedbacks) => {
      setFeedbacks(initialFeedbacks);
    });
  }, []);

  // Redux
  const dispatch = useDispatch();
  dispatch(incrementByAmount(feedbacks.length));

  return (
    <div className="px-6">
      {feedbacks.map((feedback) => {
        return <Feedback feedback={feedback} key={feedback.id} />;
      })}
    </div>
  );
};

export default FeedbackList;
