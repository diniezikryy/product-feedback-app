import React from "react";

import CategoryButton from "../Elements/CategoryButton";

const FeedbackCategory = () => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3.5 p-8 bg-white  rounded-lg ">
      <CategoryButton text="MPTW" />
      <CategoryButton text="SCTW" />
      <CategoryButton text="HSTC" />
      <CategoryButton text="IDTW" />
      <CategoryButton text="ATW" />
    </div>
  );
};

export default FeedbackCategory;
