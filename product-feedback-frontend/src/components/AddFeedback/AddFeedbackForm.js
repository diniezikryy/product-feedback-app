import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import ButtonSecondary from "../Elements/Buttons/ButtonSecondary";
import ButtonTertiary from "../Elements/Buttons/ButtonTertiary";
import LabelledDropdown from "../Elements/Dropdowns/LabelledDropdown";
import LabelledTextField from "../Elements/Forms/LabelledTextField";
import LabelledTextArea from "../Elements/Forms/LabelledTextArea";

import { ReactComponent as NewFeedbackIcon } from "./icon-new-feedback.svg";

import NotificationContext from "../../NotificationContext";

import feedbackService from "../../services/feedback";

const AddFeedbackForm = () => {
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackCategory, setFeedbackCategory] = useState("Feature");
  const [feedbackDetail, setFeedbackDetail] = useState("");

  const { setNewMessage } = useContext(NotificationContext);

  const navigate = useNavigate();

  const categoryOptions = ["Feature", "Enhancement", "UI", "UX", "Bug"];

  const handleFeedbackTitleChange = (event) => {
    event.preventDefault();
    setFeedbackTitle(event.target.value);
  };

  const handleFeedbackDetailChange = (event) => {
    event.preventDefault();
    setFeedbackDetail(event.target.value);
  };

  const addFeedback = (event) => {
    event.preventDefault();
    feedbackService.createNewFeedback({
      title: feedbackTitle,
      category: feedbackCategory,
      upvotes: 0,
      status: "suggestion",
      description: feedbackDetail,
    });
    setNewMessage("Successfully added new feedback", "success");
    navigate("/");
  };

  return (
    <form
      onSubmit={addFeedback}
      className="p-6 sm:mx-28 md:max-w-xl md:mx-auto"
    >
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

        <LabelledTextField
          label="Feedback Title"
          description="Add a short descriptive headline"
          handleChange={handleFeedbackTitleChange}
        />

        <LabelledDropdown
          label="Category"
          description="Choose a category for your feedback"
          handleChange={setFeedbackCategory}
          selected={feedbackCategory}
          options={categoryOptions}
        />

        <LabelledTextArea
          label="Feedback Detail"
          description="Include any specific comments on what should be improved, added, etc."
          handleChange={handleFeedbackDetailChange}
        />

        <div className="mt-10 sm:hidden">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
          >
            Add Feedback
          </button>
          <div className="mt-4">
            <ButtonSecondary text="Cancel" />
          </div>
        </div>

        <div className="hidden mt-10 ml-auto sm:flex">
          <div className="ml-auto mr-4">
            <ButtonSecondary text="Cancel" />
          </div>
          <div className="">
            <button
              type="submit"
              className="px-6 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
            >
              Add Feedback
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddFeedbackForm;
