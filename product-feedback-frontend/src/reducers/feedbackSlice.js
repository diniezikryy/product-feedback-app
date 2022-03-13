import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedbacks",
  initialState: {
    feedbackCount: 0,
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
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;
