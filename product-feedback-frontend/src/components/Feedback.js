import React from "react";

const Feedback = ({ feedback }) => {
  return (
    <div className="border-2">
      <p>id: {feedback.id}</p>
      <p>title: {feedback.title}</p>
      <p>category: {feedback.category}</p>
      <p>upvotes: {feedback.upvotes}</p>
      <p>status: {feedback.status}</p>
      <p>description: {feedback.description}</p>
      <b>comments</b>
    </div>
  );
};

export default Feedback;
