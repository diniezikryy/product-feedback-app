import { useParams, useNavigate, Link } from "react-router-dom";

import ButtonTertiary from "../Elements/Buttons/ButtonTertiary";
import FeedbackDetail from "../FeedbackView/FeedbackDetail";

const FeedbackDetailView = ({ feedbacks }) => {
  const id = useParams().id.slice(0, -1);
  const feedback = feedbacks.find((feedback) => feedback.id === id);

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

      {/* comment section */}
      <div className="p-6 bg-white rounded-lg mt-14 sm:mx-28 md:max-w-xl md:mx-auto">
        <h1 className="text-lg font-bold text-navy-primary">
          {feedback.comments.length} Comments
        </h1>
      </div>
    </div>
  );
};

export default FeedbackDetailView;
