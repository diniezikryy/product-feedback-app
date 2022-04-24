const Homepage = () => {
  return (
    <div>
      <div className="border-2 border-solid border-blue-primary">
        <div className="h-20 border-2 border-solid w-96">Hero</div>
      </div>
      <div className="hidden border-2 border-solid border-blue-primary sm:contents">
        <div className="border-2 border-solid">Category</div>
        <div className="border-2 border-solid">Roadmap</div>
      </div>
      <div className="border-2 border-solid border-blue-primary">
        <div className="border-2 border-solid">Feedback Navbar</div>
        <div className="border-2 border-solid">Feedback List</div>
      </div>
    </div>
  );
};

export default Homepage;
