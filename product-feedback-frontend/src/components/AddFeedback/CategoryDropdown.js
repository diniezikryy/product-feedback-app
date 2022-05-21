import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ReactComponent as CheckIcon } from "./icon-check.svg";

const CategoryDropdown = () => {
  const categoryOptions = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  const [selected, setSelected] = useState(categoryOptions[0]);

  return (
    <div className="">
      <h2 className="text-sm font-bold text-navy-primary">Category</h2>
      <p className="text-sm font-light text-navy-tertiary">
        Choose category for your feedback
      </p>
      {/* Where the dropdown goes */}
      <div className="">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-4">
            <Listbox.Button className="relative flex items-center w-full px-4 py-3 text-left rounded-lg cursor-default sm:px-6 bg-main-secondary bg-main-tertiary focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block text-sm font-normal truncate text-navy-primary">
                {selected}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
              <ChevronDownIcon
                className="w-5 h-5 ml-auto -mr-1 text-blue-primary"
                aria-hidden="true"
              />
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-sm bg-white rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm">
                {categoryOptions.map((option, optionIdx) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-3 pr-4 ${
                        active ? "text-purple-primary" : "text-gray-700"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option}
                        </span>
                        {selected ? (
                          <span className="absolute flex items-center pl-3 top-3 right-2">
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default CategoryDropdown;
