const LabelledTextArea = ({ label, description, handleChange }) => {
  return (
    <div className="mt-6">
      <h2 className="text-sm font-bold text-navy-primary">{label}</h2>
      <p className="text-sm font-light text-navy-tertiary">{description}</p>
      <textarea
        className="mt-4 bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 p-2.5"
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default LabelledTextArea;
