import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ReactComponent as IconCheck } from "./icon-check.svg";

// Need to make this sort function actually work LMAO
// Icon Check must show up when selected

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SortDropdown = () => {
  const [selectedSortType, setSelectedSortType] = useState("Most Upvotes");

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <span className="flex items-center">
          <span className="text-sm font-light text-slate-300">Sort by : </span>
          <span className="ml-1.5 text-sm font-semibold text-slate-300">
            {selectedSortType}
          </span>
          <ChevronDownIcon
            className="w-5 h-5 -mr-1 text-slate-300"
            aria-hidden="true"
          />
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "text-purple-primary" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => setSelectedSortType("Most Upvotes")}
                >
                  Most Upvotes{" "}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "text-purple-primary" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => setSelectedSortType("Least Upvotes")}
                >
                  Least Upvotes
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SortDropdown;
