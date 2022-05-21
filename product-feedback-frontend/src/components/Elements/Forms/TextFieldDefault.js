const TextField = (props) => {
  return (
    <section className="mb-6">
      <h2 className="text-sm font-bold">{props.label}</h2>
      <h4 className="mb-3 text-sm font-light">{props.formDescription}</h4>
      <input
        type="text"
        id="base-input"
        onChange={props.handleChange}
        className="block w-full p-3 text-sm text-gray-900 rounded-lg bg-main-secondary focus:ring-blue-500 focus:border-blue-500"
      ></input>
    </section>
  );
};

export default TextField;
