import React from "react";

const CategoryButton = (props) => {
  return (
    <>
      <div className="hover:bg-hover-color cursor-pointer px-6 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min text-blue-primary bg-main-secondary">
        {props.text}
      </div>
    </>
  );
};

export default CategoryButton;
