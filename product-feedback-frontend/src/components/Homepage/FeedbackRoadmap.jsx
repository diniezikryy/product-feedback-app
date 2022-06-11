const FeedbackRoadmap = () => {
  return (
    <div className="sm:w-56 h-44 sm:rounded-lg flex-wrap flex gap-x-1.5 gap-y-2 p-6 pt-2 w-auto bg-white rounded-lg ">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-lg font-bold text-navy-primary">Roadmap</h2>
        <button className="text-xs font-semibold text-blue-400 underline decoration-solid">
          View
        </button>
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between w-full">
          <p className="text-sm text-navy-tertiary">Planned</p>
          <span className="text-sm font-bold text-navy-tertiary">1</span>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-sm text-navy-tertiary">In-Progress</p>
          <span className="text-sm font-bold text-navy-tertiary">2</span>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-sm text-navy-tertiary">Live</p>
          <span className="text-sm font-bold text-navy-tertiary">3</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackRoadmap;
