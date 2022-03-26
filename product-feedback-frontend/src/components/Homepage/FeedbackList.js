import React, { useEffect, useState } from "react";

import Feedback from "../Homepage/Feedback/Feedback";

import feedbackService from "../../services/feedback";

import { useDispatch, useSelector } from "react-redux";

import {
  initialiseFeedbacks,
  setFeedbacks,
} from "../../reducers/feedbackSlice";

const FeedbackList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialiseFeedbacks());
  }, [dispatch]);

  const feedbacks = useSelector((state) => {
    return state.feedbacks.feedbacks;
  });

  return (
    <div className="px-6">
      {feedbacks.map((feedback) => {
        return <Feedback feedback={feedback} key={feedback.id} />;
      })}
    </div>
  );
};

export default FeedbackList;
