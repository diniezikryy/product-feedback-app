import { createSlice } from "@reduxjs/toolkit";

const addFeedbackSlice = createSlice({
  name: "addFeedback",
  initialState: {
    feedbackTitle: "",
    feedbackCategory: "Feature",
    feedbackDetail: "",
  },
  reducers: {
    setFeedbackTitle: (state, action) => {
      state.feedbackTitle = action.payload;
    },
    setFeedbackCategory: (state, action) => {
      state.feedbackCategory = action.payload;
    },
    setFeedbackDetail: (state, action) => {
      state.feedbackDetail = action.payload;
    },
  },
});

export const {
  setFeedbackTitle,
  setFeedbackCategory,
  setFeedbackDetail,
} = addFeedbackSlice.actions;

export default addFeedbackSlice.reducer;
