import React, { useEffect, useState } from "react";

import Feedback from "../Homepage/Feedback/Feedback";

import feedbackService from "../../services/feedback";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    feedbackService.getAll().then((initialFeedbacks) => {
      setFeedbacks(initialFeedbacks);
    });
  }, []);

  return (
    <div className="px-6">
      {feedbacks.map((feedback) => {
        return <Feedback feedback={feedback} key={feedback.id} />;
      })}
    </div>
  );
};

export default FeedbackList;
