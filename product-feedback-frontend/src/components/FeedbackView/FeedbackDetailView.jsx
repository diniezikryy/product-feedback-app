import { useParams, useNavigate, Link } from "react-router-dom";

import ButtonTertiary from "../Elements/Buttons/ButtonTertiary";
import FeedbackDetail from "../FeedbackView/FeedbackDetail";

const FeedbackDetailView = ({ feedbacks }) => {
  const id = useParams().id.slice(0, -1);
  const feedback = feedbacks.find((feedback) => feedback.id === id);
  console.log("feedbacks: ", feedback);
  console.log("comment: ", feedback.comments[0]);
  console.log("user: ", feedback.comments[0].user);

  // implementation of fetching the data from here is wrong already,
  // will result in the 'state' to be lost, so a separate data fetching
  // should be written in this component

  return (
    <div className="p-6 sm:mx-28 md:max-w-xl md:mx-auto">
      <div className="mt-8">
        <Link to="/">
          <ButtonTertiary buttonText="Go Back" />
        </Link>
      </div>

      <FeedbackDetail feedback={feedback} />

      <div className="p-6 bg-white rounded-lg mt-14 sm:mx-28 md:max-w-xl md:mx-auto">
        <h1 className="text-lg font-bold text-navy-primary">
          {feedback.comments.length} Comment
        </h1>

        <div className="mt-2 border-t border-grey-50">
          <div className="mt-2">
            <h2 className="text-sm font-bold text-navy-primary">
              {feedback.comments[0].user.name}
            </h2>
            <h2 className="text-sm font-base text-navy-tertiary">
              @{feedback.comments[0].user.username}
            </h2>
            <p className="text-sm font-base text-navy-tertiary">
              {feedback.comments[0].content}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg mt-14 sm:mx-28 md:max-w-xl md:mx-auto">
        <h1 className="text-lg font-bold text-navy-primary">Add a comment</h1>
        <p className="text-sm font-light text-navy-tertiary">
          Max 250 characters.
        </p>
        <textarea className="mt-4 bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 p-2.5"></textarea>
        <div className="flex w-full justify-items-end">
          <button
            type="submit"
            className="px-6 py-3 mt-4 ml-auto text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetailView;
