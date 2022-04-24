const TextField = (props) => {
  return (
    <section className="mb-6">
      <h2 className="text-sm font-bold">{props.label}</h2>
      <h4 className="mb-3 text-sm font-light">{props.formDescription}</h4>
      <input
        type="text"
        id="base-input"
        onChange={props.handleChange}
        className="bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      ></input>
    </section>
  );
};

export default TextField;
