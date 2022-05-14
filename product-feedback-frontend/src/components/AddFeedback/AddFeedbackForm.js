import { Link } from "react-router-dom";
import { useState } from "react";

import ButtonPrimary from "../Elements/Buttons/ButtonPrimary";
import ButtonSecondary from "../Elements/Buttons/ButtonSecondary";
import ButtonTertiary from "../Elements/Buttons/ButtonTertiary";
import TextFieldDefault from "../Elements/Forms/TextFieldDefault";
import { ReactComponent as NewFeedbackIcon } from "./icon-new-feedback.svg";

const AddFeedbackForm = () => {
  const [feedbackCategory, setFeedbackCategory] = useState("Feature");

  return (
    <div className="p-6 sm:mx-28">
      <div className="mt-8">
        <Link to="/">
          <ButtonTertiary buttonText="Go Back" />
        </Link>
      </div>
      <div className="relative flex flex-col p-6 bg-white rounded-lg mt-14">
        <div className="absolute left-10 -top-7">
          <NewFeedbackIcon />
        </div>
        <h1 className="text-lg font-bold mt-11 text-navy-primary">
          Create New Feedback
        </h1>

        <div className="mt-6">
          <h2 className="text-sm font-bold text-navy-primary">
            Feedback Title
          </h2>
          <p className="text-sm font-light text-navy-tertiary">
            Add a short, descriptive headline
          </p>
          <TextFieldDefault />
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-bold text-navy-primary">Category</h2>
          <p className="text-sm font-light text-navy-tertiary">
            Choose category for your feedback
          </p>
          <TextFieldDefault />
        </div>

        <div className="mt-6 mb-10">
          <h2 className="text-sm font-bold text-navy-primary">
            Feedback Detail
          </h2>
          <p className="text-sm font-light text-navy-tertiary">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <TextFieldDefault />
        </div>

        <ButtonPrimary text="Add Feedback" />
        <div className="mt-4">
          <ButtonSecondary text="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default AddFeedbackForm;
