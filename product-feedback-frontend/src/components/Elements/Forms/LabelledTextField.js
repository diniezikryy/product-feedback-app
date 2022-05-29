const LabelledTextField = ({ label, description, handleChange }) => {
  return (
    <section className="mt-6">
      <h2 className="text-sm font-bold text-navy-primary">Feedback Title</h2>
      <p className="text-sm font-light text-navy-tertiary">
        Add a short, descriptive headline
      </p>
      <input
        type="text"
        id="base-input"
        onChange={handleChange}
        className="block w-full p-3 text-sm text-gray-900 rounded-lg bg-main-secondary focus:ring-blue-500 focus:border-blue-500"
      ></input>
    </section>
  );
};

export default LabelledTextField;
