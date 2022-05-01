import { useState, useEffect } from "react";

import Hero from "./Hero";
import FeedbackNavbar from "./FeedbackNavbar/FeedbackNavbar";
import FeedbackCategory from "./FeedbackCategory";
import FeedbackList from "./FeedbackList/FeedbackList";
import FeedbackRoadmap from "./FeedbackRoadmap";
import Slideover from "./Slideover";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 2,
      title: "Add a dark theme option",
      category: "feature",
      upvotes: 99,
      status: "suggestion",
      description:
        "It would help people with light sensitivities and who prefer dark mode.",
      comments: [
        {
          id: 3,
          content:
            "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
          user: {
            image: "./assets/user-images/image-elijah.jpg",
            name: "Elijah Moss",
            username: "hexagon.bestagon",
          },
        },
        {
          id: 4,
          content:
            "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
          user: {
            image: "./assets/user-images/image-james.jpg",
            name: "James Skinner",
            username: "hummingbird1",
          },
          replies: [
            {
              content:
                "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
              replyingTo: "hummingbird1",
              user: {
                image: "./assets/user-images/image-anne.jpg",
                name: "Anne Valentine",
                username: "annev1990",
              },
            },
            {
              content:
                "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
              replyingTo: "annev1990",
              user: {
                image: "./assets/user-images/image-ryan.jpg",
                name: "Ryan Welles",
                username: "voyager.344",
              },
            },
          ],
        },
      ],
    },
  ]);
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  useEffect(() => {
    if (feedbacks.length > 0) {
      setShowFeedbacks(true);
    }
  }, [feedbacks.length]);

  const handleSlideoverOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="container p-0 mx-auto sm:mt-14 md:px-9 lg:px-40">
      {/* When screen is > 1024px (Desktop Screens) */}
      <div className="hidden lg:contents">
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-col gap-y-6">
            <Hero handleSlideoverOpen={handleSlideoverOpen} open={open} />
            <FeedbackCategory />
            <FeedbackRoadmap />
          </div>

          <div className="flex flex-col w-full">
            <FeedbackNavbar feedbackNum={feedbacks.length} />
            <FeedbackList feedbacks={feedbacks} showFeedbacks={showFeedbacks} />
          </div>
        </div>
      </div>

      {/* When screen is > 768px (Tablet Screens) */}

      <div className="hidden sm:contents lg:hidden">
        <div className="flex flex-row justify-between mb-10">
          <Hero handleSlideoverOpen={handleSlideoverOpen} open={open} />
          <FeedbackCategory />
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
        <FeedbackNavbar feedbackNum={feedbacks.length} />
        <FeedbackList feedbacks={feedbacks} showFeedbacks={showFeedbacks} />
      </div>
    </div>
  );
};

export default Homepage;

// How to center a div?
