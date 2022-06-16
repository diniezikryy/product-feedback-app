import { createContext, useState, useEffect } from "react";
import feedbackService from "../services/feedback";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  //console.log(feedbacks);

  useEffect(() => {
    feedbackService.getAll().then((initialFeedbacks) => {
      setFeedbacks(initialFeedbacks.sort((a, b) => b.upvotes - a.upvotes));
    });
  }, []);

  return (
    <FeedbackContext.Provider value={{ feedbacks, setFeedbacks }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
