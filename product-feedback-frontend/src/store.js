import { configureStore } from "@reduxjs/toolkit";
import addFeedbackReducer from "./reducers/addFeedbackSlice";
import feedbackReducer from "./reducers/feedbackSlice";

export default configureStore({
  reducer: {
    feedbacks: feedbackReducer,
    addFeedback: addFeedbackReducer,
  },
});
