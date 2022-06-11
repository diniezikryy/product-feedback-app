import CategoryButton from "../Elements/CategoryButton";
import { ReactComponent as ArrowUp } from "./icon-arrow-up.svg";
import { ReactComponent as CommentsIcon } from "./icon-comments.svg";

const FeedbackDetail = ({ feedback }) => {
  return (
    <div className="relative flex flex-col p-6 bg-white rounded-lg mt-14">
      <div className="mb-5 bg-white rounded-lg sm:flex sm:flex-row">
        <div className="flex-col items-center justify-center hidden px-2 py-2 mr-10 text-sm font-semibold tracking-wide capitalize rounded-lg cursor-pointer max-h-14 sm:block sm:flex hover:bg-hover-color min-w-[40px] bg-main-secondary">
          <ArrowUp />
          <p className="mt-2 text-sm text-navy-primary">{feedback.upvotes}</p>
        </div>

        <div className="bg-white">
          <h2 className="mb-2 text-sm font-bold text-navy-primary">
            {feedback.title}
          </h2>
          <p className="mb-2 text-sm font-base text-navy-tertiary">
            {feedback.description}
          </p>
          <CategoryButton text={feedback.category} />
        </div>

        <div className="flex items-center self-center invisible ml-auto bg-white sm:visible">
          <CommentsIcon />
          <p className="ml-1.5 text-sm font-bold text-navy-primary">
            {feedback.comments.length}
          </p>
        </div>

        <div className="flex items-center justify-between bg-white sm:hidden">
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
    </div>
  );
};

export default FeedbackDetail;
