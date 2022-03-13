import { useEffect, useState } from "react";
import React from "react";

import Logo from "./Logo";
import FeedbackCategory from "./FeedbackCategory";
import FeedbackNavBar from "./FeedbackNavbar";
import FeedbackList from "./FeedbackList";

import feedbackService from "../../services/feedback";

const Homepage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full px-2 py-6 sm:w-1/3 md:w-1/4 ">
          <div className="sticky top-0 w-full ">
            <Logo />
            <FeedbackCategory />
          </div>
        </aside>
        <main role="main" className="w-full px-2 sm:w-2/3 md:w-3/4">
          <FeedbackNavBar />
          <FeedbackList />
        </main>
      </div>
    </div>
  );
};

export default Homepage;
