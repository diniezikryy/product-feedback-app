import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const CategoryDropdown = () => {
  const categoryOptions = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  const [selected, setSelected] = useState(categoryOptions[0]);

  return (
    <div className="mt-6">
      <h2 className="text-sm font-bold text-navy-primary">Category</h2>
      <p className="text-sm font-light text-navy-tertiary">
        Choose category for your feedback
      </p>
    </div>
  );
};

export default CategoryDropdown;
