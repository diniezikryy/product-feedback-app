import Hero from "./Hero";
import FeedbackNavbar from "./FeedbackNavbar/FeedbackNavbar";

const Homepage = () => {
  return (
    <div>
      <div className="border-2 border-solid border-blue-primary">
        <Hero />
      </div>
      <div className="hidden border-2 border-solid border-blue-primary sm:contents">
        <div className="border-2 border-solid">Category</div>
        <div className="border-2 border-solid">Roadmap</div>
      </div>
      <div className="border-2 border-solid border-blue-primary">
        <FeedbackNavbar />
        <div className="border-2 border-solid">Feedback List</div>
      </div>
    </div>
  );
};

export default Homepage;

// How to center a div?
