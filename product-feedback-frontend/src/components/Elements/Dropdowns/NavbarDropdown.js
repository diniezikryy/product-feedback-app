import React from "react";

// !! Need to add functionality to allow the selection determine the list that is supposed to be displayed

const NavbarDropdown = () => {
  return (
    <>
      <button
        className="text-white bg-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        data-dropdown-toggle="dropdownId"
      >
        <p className="text-sm text-slate-400">Sort by: </p>
        <span className="ml-2 text-sm font-semibold text-slate-400">
          Most Upvotes
        </span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
        id="dropdownId"
      >
        <ul className="py-1" aria-labelledby="dropdown">
          <li className="px-10 border-b">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-primary"
            >
              Most Upvotes
            </a>
          </li>
          <li className="px-10 border-b">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-primary"
            >
              Least Upvotes
            </a>
          </li>
          <li className="px-10 border-b">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-primary"
            >
              Most comments
            </a>
          </li>
          <li className="px-10">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-primary"
            >
              Least comments
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarDropdown;
