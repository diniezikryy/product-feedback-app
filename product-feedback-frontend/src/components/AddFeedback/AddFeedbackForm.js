import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import ButtonSecondary from "../Elements/Buttons/ButtonSecondary";
import ButtonTertiary from "../Elements/Buttons/ButtonTertiary";
import CategoryDropdown from "./CategoryDropdown";
import TextFieldDefault from "../Elements/Forms/TextFieldDefault";
import { ReactComponent as NewFeedbackIcon } from "./icon-new-feedback.svg";

import feedbackService from "../../services/feedback";

const AddFeedbackForm = () => {
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackCategory, setFeedbackCategory] = useState("Feature");
  const [feedbackDetail, setFeedbackDetail] = useState("");

  const navigate = useNavigate();

  const categoryOptions = ["Feature", "Enhancement", "UI", "UX", "Bug"];

  const handleFeedbackTitleChange = (event) => {
    event.preventDefault();
    setFeedbackTitle(event.target.value);
  };

  const addFeedback = (event) => {
    event.preventDefault();
    const content = {
      title: feedbackTitle,
      category: feedbackCategory,
      upvotes: 0,
      status: "suggestion",
      description: feedbackDetail,
    };
    feedbackService.createNewFeedback(content);
    navigate("/");
  };

  console.log(feedbackTitle, feedbackCategory, feedbackDetail);

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

        <div className="mt-6">
          <h2 className="text-sm font-bold text-navy-primary">
            Feedback Title
          </h2>
          <p className="text-sm font-light text-navy-tertiary">
            Add a short, descriptive headline
          </p>
          <TextFieldDefault handleChange={handleFeedbackTitleChange} />
        </div>

        <CategoryDropdown
          setFeedbackCategory={setFeedbackCategory}
          selected={feedbackCategory}
          options={categoryOptions}
        />

        <div className="mt-6 mb-10">
          <h2 className="text-sm font-bold text-navy-primary">
            Feedback Detail
          </h2>
          <p className="text-sm font-light text-navy-tertiary">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            className="mt-4 bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 p-2.5"
            onChange={(event) => {
              setFeedbackDetail(event.target.value);
            }}
          ></textarea>
        </div>

        <div className="sm:hidden">
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

        <div className="hidden ml-auto sm:flex">
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
