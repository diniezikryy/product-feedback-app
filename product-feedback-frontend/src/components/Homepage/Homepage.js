import { useEffect, useState } from "react";
import React from "react";

import Feedback from "../Feedback";
import Logo from "./Logo";
import FeedbackCategory from "./FeedbackCategory";
import FeedbackNavBar from "./FeedbackNavbar";

import feedbackService from "../../services/feedback";

const Homepage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    feedbackService.getAll().then((initialFeedbacks) => {
      setFeedbacks(initialFeedbacks);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2 bg-green-100 ">
          <div className="sticky top-0 p-4 w-full">
            <Logo />
            <FeedbackCategory />
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 px-2">
          <FeedbackNavBar />
          <div className="bg-blue-100">
            {feedbacks.map((feedback) => {
              return <Feedback feedback={feedback} key={feedback.id} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
