import { useEffect, useState } from "react";

import Feedback from "./components/Feedback";

import feedbackService from "./services/feedback";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    feedbackService.getAll().then((initialFeedbacks) => {
      setFeedbacks(initialFeedbacks);
    });
  }, []);

  return (
    <div>
      <h1 className="text-6xl m2">Product Feedback App</h1>
      {feedbacks.map((feedback) => {
        return <Feedback feedback={feedback} key={feedback.id} />;
      })}
    </div>
  );
};

export default App;
