import React from "react";

const Feedback = ({ feedback }) => {
  return (
    <div className="border-2">
      <p>title: {feedback.title}</p>
      <p>category: {feedback.category}</p>
      <p>upvotes: {feedback.upvotes}</p>
      <p>description: {feedback.description}</p>
    </div>
  );
};

export default Feedback;
