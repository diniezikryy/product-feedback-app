import { useState } from "react";

import Hero from "./Hero";
import FeedbackNavbar from "./FeedbackNavbar/FeedbackNavbar";
import FeedbackCategory from "./FeedbackCategory";
import Slideover from "./Slideover";

const Homepage = () => {
  const [open, setOpen] = useState(false);

  const handleSlideoverOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="container p-0 mx-auto sm:mt-14 md:px-9">
      {/* When screen is > 1024px (Desktop Screens) */}

      {/* When screen is > 768px (Tablet Screens) */}

      <div className="hidden sm:contents md:flex md:flex-col">
        <div className="flex flex-row justify-between mb-10">
          <Hero handleSlideoverOpen={handleSlideoverOpen} open={open} />

          <FeedbackCategory />
          <FeedbackCategory />
        </div>
      </div>

      {/* When screen is < 640px (Mobile Screens) */}
      <div className="sm:hidden">
        <Hero handleSlideoverOpen={handleSlideoverOpen} open={open} />
      </div>

      <div className="hidden">
        <FeedbackCategory />
        <FeedbackCategory />
      </div>

      {/* Slideover */}
      <div className="sm:hidden">
        <Slideover open={open} setOpen={handleSlideoverOpen} />
      </div>

      <div className="">
        <FeedbackNavbar />
        <div className="border-2 border-solid">Feedback List</div>
      </div>
    </div>
  );
};

export default Homepage;

// How to center a div?
