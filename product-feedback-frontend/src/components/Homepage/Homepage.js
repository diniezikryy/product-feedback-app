import { useState } from "react";

import Hero from "./Hero";
import FeedbackNavbar from "./FeedbackNavbar/FeedbackNavbar";
// import FeedbackCategory from "./FeedbackCategory";
import Slideover from "./Slideover";

const Homepage = () => {
  const [open, setOpen] = useState(false);

  const handleSlideoverOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div>
      <div className="">
        <Hero handleSlideoverOpen={handleSlideoverOpen} open={open} />
      </div>

      <div className="hidden border-2 border-solid border-blue-primary sm:contents">
        <div className="border-2 border-solid">Category</div>
        <div className="border-2 border-solid">Roadmap</div>
      </div>

      {/* Slideover */}

      <Slideover open={open} setOpen={handleSlideoverOpen} />

      <div className="">
        <FeedbackNavbar />
        <div className="border-2 border-solid">Feedback List</div>
      </div>
    </div>
  );
};

export default Homepage;

// How to center a div?
