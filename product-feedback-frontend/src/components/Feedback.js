import React from "react";

const Feedback = ({ feedback }) => {
  return (
    <div className="mb-6 bg-blue-100">
      <p>title: {feedback.title}</p>
      <p>category: {feedback.category}</p>
      <p>upvotes: {feedback.upvotes}</p>
      <p>description: {feedback.description}</p>
    </div>
  );
};

export default Feedback;
