import React from "react";

import { ReactComponent as ArrowUp } from "../../../assets/shared/icon-arrow-up.svg";
import CategoryButton from "../../Elements/CategoryButton";

const Feedback = ({ feedback }) => {
  return (
    <div className="flex flex-row px-8 mb-6 bg-white rounded-lg py-7">
      <div className="flex flex-col justify-center p-2 rounded-lg cursor-pointer hover:bg-hover-color bg-main-secondary max-h-14">
        {/* There should be a functionality to increase the upvotes in the backend when this is pressed */}
        <ArrowUp className="mx-auto mb-2" />
        <p className="text-xs font-semibold ">{feedback.upvotes}</p>
      </div>

      <div className="ml-7">
        <p className="text-lg font-semibold text-navy-primary">
          {feedback.title}
        </p>
        <p className="mb-3 font-light text-md text-navy-tertiary">
          {feedback.description}
        </p>
        <CategoryButton text={feedback.category} />
      </div>
    </div>
  );
};

export default Feedback;
