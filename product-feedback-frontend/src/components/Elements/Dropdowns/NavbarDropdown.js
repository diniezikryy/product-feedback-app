import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFeedbacks,
  setFeedbackSortType,
} from "../../../reducers/feedbackSlice";

// !! Need to add functionality to allow the selection determine the list that is supposed to be displayed

const NavbarDropdown = () => {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => {
    return state.feedbacks.feedbacks;
  });
  const sortType = useSelector((state) => {
    return state.feedbacks.feedbackSortType;
  });

  useEffect(() => {
    const sortArray = (type) => {
      if (sortType === "mostUpvotes") {
        const sorted = [...feedbacks].sort((a, b) => b.upvotes - a.upvotes);
        dispatch(setFeedbacks(sorted));
      } else if (sortType === "leastUpvotes") {
        const sorted = [...feedbacks].sort((a, b) => a.upvotes - b.upvotes);
        dispatch(setFeedbacks(sorted));
      }
    };

    sortArray(sortType);
  }, [sortType]);

  /* onChange={(e) => dispatch(setFeedbackSortType(e.target.value))} */

  return (
    <>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-navy-primary focus:ring-4 focus:outline-none focus:ring-blue-3 font-medium rounded-lg text-sm px-0 sm:px-4 py-2.5 text-center inline-flex items-center   "
        type="button"
      >
        <span className="pr-1.5 font-normal text-slate-300">Sort By : </span>
        <span className="font-bold text-main-secondary">
          {sortType === "mostUpvotes" ? "Most Upvotes" : "Least Upvotes"}{" "}
        </span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-white rounded-lg shadow w-44"
      >
        <ul
          className="py-1 text-sm text-navy-tertiary"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 border-b hover:text-purple-primary"
              onClick={() => {
                dispatch(setFeedbackSortType("mostUpvotes"));
              }}
            >
              Most Upvotes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:text-purple-primary"
              onClick={() => {
                dispatch(setFeedbackSortType("leastUpvotes"));
              }}
            >
              Least Upvotes
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarDropdown;
