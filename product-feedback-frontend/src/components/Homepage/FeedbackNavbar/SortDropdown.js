import { Fragment, useState, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ReactComponent as CheckIcon } from "./icon-check.svg";

import FeedbackContext from "../../../contexts/FeedbackContext";

const SortDropdown = ({ sortOption, setSortOption }) => {
  const sortOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  console.log("sort dropdown:", sortOption);

  return (
    <div className="ml-0 sm:ml-9">
      <Listbox value={sortOption} onChange={setSortOption}>
        <div className="relative">
          <Listbox.Button className="relative w-full text-left cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="flex items-center">
              <span className="text-sm font-light text-slate-300">
                Sort by :{" "}
              </span>
              <span className="ml-1.5 text-sm font-semibold text-slate-300">
                {sortOption}
              </span>
              <ChevronDownIcon
                className="w-5 h-5 -mr-1 text-slate-300"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-56 py-1 mt-1 text-base bg-white rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm">
              {sortOptions.map((sortOption) => (
                <Listbox.Option
                  key={sortOption}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-3 pr-4 ${
                      active ? "text-purple-primary" : "text-gray-700"
                    }`
                  }
                  value={sortOption}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {sortOption}
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
  );
};

export default SortDropdown;
