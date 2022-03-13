import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./reducers/feedbackSlice";

export default configureStore({
  reducer: {
    feedbacks: feedbackReducer,
  },
});
