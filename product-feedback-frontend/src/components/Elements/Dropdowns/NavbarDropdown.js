import React from "react";

// !! Need to add functionality to allow the selection determine the list that is supposed to be displayed

const NavbarDropdown = () => {
  return (
    <>
      <button
        class="text-white bg-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        data-dropdown-toggle="dropdownId"
      >
        <p className="text-sm text-slate-400">Sort by: </p>
        <span className="ml-2 text-sm font-semibold text-slate-400">
          Most Upvotes
        </span>
        <svg
          class="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
        id="dropdownId"
      >
        <ul class="py-1" aria-labelledby="dropdown">
          <li className="px-10 border-b">
            <a
              href="#"
              class="text-sm hover:text-purple-primary text-gray-700 block px-4 py-2"
            >
              Most Upvotes
            </a>
          </li>
          <li className="px-10 border-b">
            <a
              href="#"
              class="text-sm hover:text-purple-primary text-gray-700 block px-4 py-2"
            >
              Least Upvotes
            </a>
          </li>
          <li className="px-10 border-b">
            <a
              href="#"
              class="text-sm hover:text-purple-primary text-gray-700 block px-4 py-2"
            >
              Most comments
            </a>
          </li>
          <li className="px-10">
            <a
              href="#"
              class="text-sm hover:text-purple-primary text-gray-700 block px-4 py-2"
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
