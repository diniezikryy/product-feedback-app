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
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button{" "}
        <svg
          class="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul
          class="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
