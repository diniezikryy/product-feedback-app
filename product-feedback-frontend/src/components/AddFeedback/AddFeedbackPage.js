import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setFeedbackTitle,
  setFeedbackCategory,
  setFeedbackDetail,
} from "../../reducers/addFeedbackSlice";
import { createFeedback } from "../../reducers/feedbackSlice";

/* import ButtonPrimary from "../Elements/Buttons/ButtonPrimary"; */
import ButtonSecondary from "../Elements/Buttons/ButtonSecondary";

/* import { ReactComponent as ArrowDown } from "../../assets/shared/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../assets/shared/icon-arrow-up.svg";
 */
const AddFeedbackPage = () => {
  const [dropdownPressed, setDropdownPressed] = useState(false);

  const dispatch = useDispatch();
  const feedbackCategory = useSelector((state) => {
    return state.addFeedback.feedbackCategory;
  });
  const feedbackTitle = useSelector((state) => {
    return state.addFeedback.feedbackTitle;
  });
  const feedbackDetail = useSelector((state) => {
    return state.addFeedback.feedbackDetail;
  });

  const addFeedback = (event) => {
    event.preventDefault();
    const content = {
      title: feedbackTitle,
      category: feedbackCategory,
      upvotes: 0,
      status: "suggestion",
      description: feedbackDetail,
    };
    dispatch(createFeedback(content));
  };

  // Should be a function here to handle the onsubmit function

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/">
        <h1>Go Back</h1>
      </Link>
      <form
        onSubmit={addFeedback}
        className="p-10 rounded-lg shadow-lg w-456 bg-color-white text-navy-primary"
      >
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
            onChange={(event) => dispatch(setFeedbackTitle(event.target.value))}
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
        <section className="mb-8">
          <h2 className="text-sm font-bold">Feedback Detail</h2>
          <h4 className="mb-3 text-sm font-light">
            Include any specific comments on what should be improved, added,
            etc.
          </h4>
          <textarea
            onChange={(event) => {
              console.log(event.target.value);
              dispatch(setFeedbackDetail(event.target.value));
            }}
            className="bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 p-2.5"
          ></textarea>
        </section>

        {/* Button to go back or add feedback */}
        <div className="flex justify-end">
          <Link to="/">
            <ButtonSecondary text="Cancel" />
          </Link>
          <button
            type="submit"
            className="px-6 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
          >
            Add Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFeedbackPage;
