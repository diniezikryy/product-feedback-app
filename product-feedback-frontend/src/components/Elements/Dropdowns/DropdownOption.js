const DropdownOption = (props) => {
  return (
    <>
      <li>
        <a
          href="#"
          className="block px-4 py-2 border-b hover:text-purple-primary"
          onClick={() => props.handleChange(props.option)}
        >
          {props.optionText}
        </a>
      </li>
    </>
  );
};

export default DropdownOption;
