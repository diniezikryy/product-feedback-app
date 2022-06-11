import { useState, useEffect, useContext } from "react";

import Hero from "./Hero";
import FeedbackNavbar from "./FeedbackNavbar/FeedbackNavbar";
import FeedbackCategory from "./FeedbackCategory";
import FeedbackList from "./FeedbackList/FeedbackList";
import FeedbackRoadmap from "./FeedbackRoadmap";
import Slideover from "./Slideover";
import Alerts from "../Elements/Alerts/Alerts";

import UserContext from "../../contexts/UserContext";
import NotificationContext from "../../contexts/NotificationContext";

import feedbackService from "../../services/feedback";

const Homepage = ({ feedbacks }) => {
  const [open, setOpen] = useState(false);
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  const [sortOption, setSortOption] = useState("Most Upvotes");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { message, type } = useContext(NotificationContext);
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem("loggedFeedbackAppUser");
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson);
      setLoggedInUser(user);
      feedbackService.setToken(user.token);
    }
  }, []);

  useEffect(() => {
    if (feedbacks.length > 0) {
      setShowFeedbacks(true);
    }
  }, [feedbacks.length]);

  const handleSlideoverOpen = () => {
    setOpen(!open);
  };

  const updateSortOption = (sort) => {
    setSortOption(sort);
  };

  const sortedFeedbacks = (feedbacks) => {
    if (sortOption === "Most Upvotes") {
      return feedbacks.sort((a, b) => b.upvotes - a.upvotes);
    } else if (sortOption === "Least Upvotes") {
      return feedbacks.sort((a, b) => a.upvotes - b.upvotes);
    } else if (sortOption === "Most Comments") {
      return feedbacks.sort((a, b) => b.comments.length - a.comments.length);
    } else if (sortOption === "Least Comments") {
      return feedbacks.sort((a, b) => a.comments.length - b.comments.length);
    }
  };

  return (
    <div className="container p-0 mx-auto sm:mt-14 md:px-9">
      <Alerts type={type} message={message} />
      {/* When screen is > 1024px (Desktop Screens) */}
      <div className="hidden lg:contents">
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-col gap-y-6">
            <Hero handleSlideoverOpen={handleSlideoverOpen} open={open} />
            <FeedbackCategory />
            <FeedbackRoadmap />
          </div>

          <div className="flex flex-col w-full">
            <FeedbackNavbar
              feedbackNum={feedbacks.length}
              sortOption={sortOption}
              updateSortOption={updateSortOption}
            />
            <FeedbackList
              feedbacks={sortedFeedbacks(feedbacks)}
              showFeedbacks={showFeedbacks}
              sortOption={sortOption}
            />
          </div>
        </div>
      </div>
      {/* When screen is > 768px (Tablet Screens) */}
      <div className="hidden sm:contents lg:hidden">
        <div className="flex flex-row justify-between mb-10">
          <Hero handleSlideoverOpen={handleSlideoverOpen} open={open} />
          <FeedbackCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <FeedbackRoadmap />
        </div>
      </div>
      {/* When screen is < 640px (Mobile Screens) */}
      <div className="sm:hidden">
        <Hero handleSlideoverOpen={handleSlideoverOpen} open={open} />
      </div>
      <div className="hidden">
        <FeedbackCategory />
        <FeedbackRoadmap />
      </div>
      {/* Slideover */}
      <div className="sm:hidden">
        <Slideover open={open} setOpen={handleSlideoverOpen} />
      </div>
      <div className="lg:hidden">
        <FeedbackNavbar
          feedbackNum={feedbacks.length}
          sortOption={sortOption}
          updateSortOption={updateSortOption}
        />
        <FeedbackList feedbacks={feedbacks} showFeedbacks={showFeedbacks} />
      </div>
    </div>
  );
};

export default Homepage;

// How to center a div?
