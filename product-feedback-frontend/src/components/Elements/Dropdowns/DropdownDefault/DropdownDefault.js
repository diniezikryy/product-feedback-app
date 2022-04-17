import { useState } from "react";

const DropdownDefault = ({
  label,
  formDescription,
  handleChange,
  handleDropdownClick,
  selected,
}) => {
  const [selectedOption, setSelectedOption] = useState(selected);

  return (
    <section className="mb-6">
      <h2 className="text-sm font-bold">{label}</h2>
      <h4 className="mb-3 text-sm font-light">{formDescription}</h4>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="flex justify-between  w-full text-white  bg-main-secondary focus:ring-4 focus:outline-none focus:ring-blue-3   00 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center   "
        type="button"
        onClick={handleDropdownClick}
      >
        <span className="font-normal text-navy-primary">{selectedOption}</span>
        {/* {dropdownPressed ? <ArrowUp /> : <ArrowDown />} */}
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-white rounded-lg drop-shadow-2xl"
      >
        <ul
          className="py-1 text-sm text-navy-tertiary"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 border-b hover:text-purple-primary"
              onClick={() => setSelectedOption("Feature")}
            >
              Feature
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 border-b hover:text-purple-primary"
              onClick={() => setSelectedOption("Feature")}
            >
              Enhancement
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 border-b hover:text-purple-primary"
              onClick={() => setSelectedOption("UI")}
            >
              UI
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 border-b hover:text-purple-primary"
              onClick={() => setSelectedOption("UX")}
            >
              UX
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:text-purple-primary"
              onClick={() => setSelectedOption("Bug")}
            >
              Bug
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DropdownDefault;
