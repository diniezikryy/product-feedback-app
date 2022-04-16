import { createSlice } from "@reduxjs/toolkit";
import feedbackService from "../services/feedback";

const feedbackSlice = createSlice({
  name: "feedbacks",
  initialState: {
    feedbackCount: 0,
    feedbacks: [],
    feedbackSortType: "mostUpvotes",
  },
  reducers: {
    increment: (state) => {
      state.feedbackCount += 1;
    },
    decrement: (state) => {
      state.feedbackCount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.feedbackCount += action.payload;
    },
    setFeedbacks(state, action) {
      state.feedbacks = action.payload;
    },
    setFeedbackSortType: (state, action) => {
      state.feedbackSortType = action.payload;
    },
    appendFeedback: (state, action) => {
      state.feedbacks.push(action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setFeedbacks,
  setFeedbackSortType,
  appendFeedback,
} = feedbackSlice.actions;

export const initialiseFeedbacks = () => {
  return async (dispatch) => {
    const feedbacks = await feedbackService.getAll();
    dispatch(setFeedbacks(feedbacks));
  };
};

export const createFeedback = (content) => {
  return async (dispatch) => {
    const newFeedback = await feedbackService.createNewFeedback(content);
    dispatch(appendFeedback(newFeedback));
  };
};

export default feedbackSlice.reducer;
