import React from "react";
import ButtonPrimary from "../Elements/Buttons/ButtonPrimary";
import NavbarDropdown from "../Elements/Dropdowns/NavbarDropdown";

import { ReactComponent as Lightbulb } from "../../assets/suggestions/icon-suggestions.svg";

const FeedbackNavBar = () => {
  return (
    <div className="p-6 mb-6">
      <div className="flex flex-row items-center px-6 py-6 rounded-lg bg-navy-primary">
        <div className="flex ">
          <Lightbulb />
          <p className="ml-3 text-lg font-semibold text-white">6 Feedbacks</p>
        </div>
        <div className="ml-6">
          <NavbarDropdown />
        </div>
        <div className="ml-auto">
          <ButtonPrimary text="+ Add Feedback" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackNavBar;
