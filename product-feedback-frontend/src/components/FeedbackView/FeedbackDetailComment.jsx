const FeedbackDetailComment = ({ comment }) => {
  return (
    <div className="py-2 border-t">
      <h2 className="text-sm font-bold text-navy-primary">
        {comment.user.name}
      </h2>
      <h2 className="text-sm font-base text-navy-tertiary">
        @{comment.user.username}
      </h2>
      <p className="text-sm font-base text-navy-tertiary">{comment.content}</p>
    </div>
  );
};

export default FeedbackDetailComment;
