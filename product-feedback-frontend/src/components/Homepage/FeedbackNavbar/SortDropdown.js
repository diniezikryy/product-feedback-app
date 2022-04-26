import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ReactComponent as CheckIcon } from "./icon-check.svg";

{
  /* <ChevronDownIcon
            className="w-5 h-5 -mr-1 text-slate-300"
            aria-hidden="true"
          /> */
}

// Need to make this sort function actually work LMAO
// Icon Check must show up when selected

{
  /* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "text-purple-primary" : "text-gray-700",
                    "block px-4 py-2 text-sm flex justify-between items-center"
                  )}
                  onClick={() => setSelectedSortType("Least Upvotes")}
                >
                  Least Upvotes{" "}
                  {active ? (
                    <span>
                      <IconCheck />
                    </span>
                  ) : null}
                </a>
              )}
            </Menu.Item> */
}

const SortDropdown = () => {
  const sortOptions = ["Most Upvotes", "Least Upvotes"];
  const [selected, setSelected] = useState(sortOptions[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="flex items-center">
              <span className="text-sm font-light text-slate-300">
                Sort by :{" "}
              </span>
              <span className="ml-1.5 text-sm font-semibold text-slate-300">
                {selected}
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
