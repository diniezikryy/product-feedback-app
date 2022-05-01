import React from "react";

const CategoryButton = ({ text }) => {
  return (
    <>
      <div className="hover:bg-hover-color cursor-pointer px-4 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min text-blue-primary bg-main-secondary">
        {text}
      </div>
    </>
  );
};

export default CategoryButton;
