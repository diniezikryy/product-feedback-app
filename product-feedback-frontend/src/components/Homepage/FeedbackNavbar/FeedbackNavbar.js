import { Link } from "react-router-dom";

import ButtonPrimary from "../../Elements/Buttons/ButtonPrimary";
import SortDropdown from "./SortDropdown";
import { ReactComponent as Lightbulb } from "./icon-suggestions.svg";

const FeedbackNavbar = ({ feedbackNum }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center px-6 py-2 bg-navy-primary sm:rounded-lg">
        <div className="hidden sm:contents">
          <div className="flex items-center ">
            <Lightbulb />
            <p className="ml-4 text-lg font-bold text-white">
              {feedbackNum} Suggestions
            </p>
          </div>
        </div>
        <SortDropdown />
        <div className="ml-auto">
          <Link to="/add-feedback">
            <ButtonPrimary text="+ Add Feedback" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedbackNavbar;
