import { useState } from "react";
import DropdownOption from "./DropdownOption";

const DropdownDefault = ({
  label,
  formDescription,
  handleChange,
  handleDropdownClick,
  selected,
  optionsArray,
}) => {
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
        <span className="font-normal text-navy-primary">{selected}</span>
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
          {optionsArray.map((option) => {
            return (
              <DropdownOption
                option={option}
                optionText={option}
                handleChange={handleChange}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default DropdownDefault;
