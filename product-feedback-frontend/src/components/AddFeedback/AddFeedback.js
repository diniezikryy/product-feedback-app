import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setFeedbackTitle,
  setFeedbackCategory,
  setFeedbackDetail,
} from "../../reducers/addFeedbackSlice";

import ButtonPrimary from "../Elements/Buttons/ButtonPrimary";
import { ReactComponent as ArrowDown } from "../../assets/shared/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../assets/shared/icon-arrow-up.svg";

const AddFeedback = () => {
  const [dropdownPressed, setDropdownPressed] = useState(false);

  const dispatch = useDispatch();
  const feedbackCategory = useSelector((state) => {
    return state.addFeedback.feedbackCategory;
  });

  // Should be a function here to handle the onsubmit function

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/">
        <h1>Go Back</h1>
      </Link>
      <form className="p-10 rounded-lg shadow-lg w-456 bg-color-white text-navy-primary">
        <header className="mb-10 text-2xl font-bold">
          Create New Feedback
        </header>

        {/* Feedback Title */}
        <section className="mb-6">
          <h2 className="text-sm font-bold">Feedback Title</h2>
          <h4 className="mb-3 text-sm font-light">
            Add a short descriptive headline
          </h4>
          <input
            type="text"
            id="base-input"
            className="bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          ></input>
        </section>

        {/* Category */}
        <section className="mb-6">
          <h2 className="text-sm font-bold">Category</h2>
          <h4 className="mb-3 text-sm font-light">
            Choose a category for your feedback
          </h4>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="flex justify-between  w-full text-white  bg-main-secondary focus:ring-4 focus:outline-none focus:ring-blue-3   00 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center   "
            type="button"
            onClick={() => setDropdownPressed(!dropdownPressed)}
          >
            <span className="font-normal text-navy-primary">
              {feedbackCategory}
            </span>
            {/* {dropdownPressed ? <ArrowUp /> : <ArrowDown />} */}
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white rounded-lg drop-shadow-2xl"
          >
            <ul
              className="py-1 text-sm text-navy-tertiary"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 border-b hover:text-purple-primary"
                  onClick={() => dispatch(setFeedbackCategory("Feature"))}
                >
                  Feature
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 border-b hover:text-purple-primary"
                  onClick={() => dispatch(setFeedbackCategory("Enhancement"))}
                >
                  Enhancement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 border-b hover:text-purple-primary"
                  onClick={() => dispatch(setFeedbackCategory("UI"))}
                >
                  UI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 border-b hover:text-purple-primary"
                  onClick={() => dispatch(setFeedbackCategory("UX"))}
                >
                  UX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-purple-primary"
                  onClick={() => dispatch(setFeedbackCategory("Bug"))}
                >
                  Bug
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Feedback Detail */}
        <section>
          <h2 className="text-sm font-bold">Feedback Detail</h2>
          <h4 className="mb-3 text-sm font-light">
            Include any specific comments on what should be improved, added,
            etc.
          </h4>
          <textarea className="bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 p-2.5"></textarea>
        </section>

        {/* Button to go back or add feedback */}
        <div className="flex flex-end"></div>
      </form>
    </div>
  );
};

export default AddFeedback;
