import React from "react";

import CategoryButton from "../Elements/CategoryButton";

const FeedbackCategory = () => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3.5 p-8 bg-white  rounded-lg ">
      <CategoryButton text="All" />
      <CategoryButton text="UI" />
      <CategoryButton text="UX" />
      <CategoryButton text="Enhancement" />
      <CategoryButton text="Bug" />
      <CategoryButton text="Feature" />
    </div>
  );
};

export default FeedbackCategory;
