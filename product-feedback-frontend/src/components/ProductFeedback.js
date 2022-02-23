import React from "react";

const ProductFeedback = (props) => {
  // const [feedbackData, setFeedbackData] = useState({});
  const object = props.productFeedback;
  const comments = object.comments;
  console.log(comments);

  return (
    <div className="border-2">
      <p>id: {object.id}</p>
      <p>title: {object.title}</p>
      <p>category: {object.category}</p>
      <p>upvotes: {object.upvotes}</p>
      <p>status: {object.status}</p>
      <p>description: {object.description}</p>
      <b>comments</b>
      {comments.map((comment) => {
        return <p>{comment.content}</p>;
      })}
    </div>
  );
};

export default ProductFeedback;
