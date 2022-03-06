import React from "react";

const FeedbackNavBar = () => {
  return (
    <div className="p-6 bg-orange-100">
      <div className="flex flex-row ">
        <p>6 Suggestions</p>
        <p>Sort By: Most Upvotes</p>
        <button>Add Feedback</button>
      </div>
    </div>
  );
};

export default FeedbackNavBar;
