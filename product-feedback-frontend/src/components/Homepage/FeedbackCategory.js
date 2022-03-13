import React from "react";

const FeedbackCategory = () => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3.5 p-8 bg-white  rounded-lg ">
      <div className="px-3 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min text-blue-primary bg-main-secondary">
        MPTW
      </div>

      <div className="px-3 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min text-blue-primary bg-main-secondary">
        HSTC
      </div>

      <div className="px-3 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min text-blue-primary bg-main-secondary">
        SCTW
      </div>

      <div className="px-3 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min text-blue-primary bg-main-secondary">
        IDTW
      </div>
    </div>
  );
};

export default FeedbackCategory;
