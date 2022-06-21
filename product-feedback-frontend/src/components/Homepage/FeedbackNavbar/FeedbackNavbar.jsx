import { Link, useNavigate } from "react-router-dom";

import ButtonPrimary from "../../Elements/Buttons/ButtonPrimary";
import SortDropdown from "./SortDropdown";
import { ReactComponent as Lightbulb } from "./icon-suggestions.svg";

import NotificationContext from "../../../contexts/NotificationContext";
import { useContext } from "react";

const FeedbackNavbar = ({ feedbackNum, sortOption, updateSortOption }) => {
  const { setNewMessage } = useContext(NotificationContext);
  const navigate = useNavigate();

  const checkIfLoggedIn = () => {
    const loggedUserJson = window.localStorage.getItem("loggedFeedbackAppUser");
    if (loggedUserJson) {
      navigate("/add-feedback");
    } else {
      setNewMessage("You must be logged in to add a feedback.", "info");
      navigate("/login");
    }
  };

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
        <SortDropdown
          updateSortOption={updateSortOption}
          sortOption={sortOption}
        />
        <div className="ml-auto">
          <button
            onClick={checkIfLoggedIn}
            className="w-full px-4 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
          >
            + Add Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackNavbar;
