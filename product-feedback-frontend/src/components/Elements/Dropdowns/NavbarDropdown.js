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

  return (
    <>
      <select onChange={(e) => dispatch(setFeedbackSortType(e.target.value))}>
        <option value="mostUpvotes">Most Upvotes</option>
        <option value="leastUpvotes">Least Upvotes</option>
      </select>
    </>
  );
};

export default NavbarDropdown;
