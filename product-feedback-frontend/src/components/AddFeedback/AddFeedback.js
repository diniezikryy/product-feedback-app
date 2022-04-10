const AddFeedback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Go Back</h1>
      <div className="p-10 rounded-lg shadow-lg bg-color-white text-navy-primary">
        <header className="mb-10 text-2xl font-bold">
          Create New Feedback
        </header>
        <section>
          <h2 className="text-sm font-bold">Feedback Title</h2>
          <h4 className="mb-3 text-sm font-light">
            Add a short descriptive headline
          </h4>
          <input
            type="text"
            id="base-input"
            className="rounded-md w-456 bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          ></input>
        </section>
      </div>
    </div>
  );
};

export default AddFeedback;
