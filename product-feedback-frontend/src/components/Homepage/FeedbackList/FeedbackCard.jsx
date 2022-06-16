import { Link } from "react-router-dom";

import CategoryButton from "../../Elements/CategoryButton";
import { ReactComponent as ArrowUp } from "./icon-arrow-up.svg";
import { ReactComponent as CommentsIcon } from "./icon-comments.svg";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="p-6 mb-5 rounded-lg sm:flex sm:flex-row bg-main-primary">
      <div className="flex-col items-center justify-center hidden px-2 py-2 mr-10 text-sm font-semibold tracking-wide capitalize rounded-lg cursor-pointer max-h-14 sm:block sm:flex hover:bg-hover-color min-w-[40px] bg-main-secondary">
        <ArrowUp />
        <p className="mt-2 text-sm text-navy-primary">{feedback.upvotes}</p>
      </div>

      <div>
        <Link to={`/feedbacks/${feedback.id}s`}>
          <h2 className="mb-2 text-sm font-bold text-navy-primary">
            {feedback.title}
          </h2>
        </Link>
        <p className="mb-2 text-sm font-base text-navy-tertiary">
          {feedback.description}
        </p>
        <CategoryButton text={feedback.category} />
      </div>

      <div className="flex items-center self-center invisible ml-auto sm:visible">
        <CommentsIcon />
        <p className="ml-1.5 text-sm font-bold text-navy-primary">
          {feedback.comments.length}
        </p>
      </div>

      <div className="flex items-center justify-between sm:hidden">
        <div className="flex flex-row items-center hover:bg-hover-color cursor-pointer px-4 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min  bg-main-secondary">
          <ArrowUp />
          <p className="ml-2 text-sm text-navy-primary">{feedback.upvotes}</p>
        </div>

        <div className="flex items-center">
          <CommentsIcon />
          <p className="ml-1.5 text-sm font-bold text-navy-primary">
            {feedback.comments.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
