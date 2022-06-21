import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import ButtonSecondary from "../Elements/Buttons/ButtonSecondary";
import ButtonTertiary from "../Elements/Buttons/ButtonTertiary";
import LabelledDropdown from "../Elements/Dropdowns/LabelledDropdown";
import LabelledTextField from "../Elements/Forms/LabelledTextField";
import LabelledTextArea from "../Elements/Forms/LabelledTextArea";

import { ReactComponent as EditFeedbackIcon } from "./icon-edit-feedback.svg";

import feedbackService from "../../services/feedback";

import NotificationContext from "../../contexts/NotificationContext";

const EditFeedbackForm = () => {
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackCategory, setFeedbackCategory] = useState("Feature");
  const [feedbackDetail, setFeedbackDetail] = useState("");

  const { setNewMessage } = useContext(NotificationContext);

  const id = useParams().id;

  useEffect(() => {
    feedbackService.getAll().then((initalFeedbacks) => {
      setFeedback(initalFeedbacks.find((feedback) => feedback.id === id));
      const feedback = initalFeedbacks.find((feedback) => feedback.id === id);
      setFeedbackTitle(feedback.title);
      setFeedbackCategory(feedback.category);
      setFeedbackDetail(feedback.description);
      setLoading(false);
    });
  }, []);

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

  const editFeedback = (event) => {
    event.preventDefault();

    console.log("feedback: ", feedback);

    const editedFeedback = {
      ...feedback,
      category: feedbackCategory,
      title: feedbackTitle,
      description: feedbackDetail,
      user: feedback.user.id,
    };

    console.log("editedFeedback: ", editedFeedback);

    feedbackService.editFeedback(editedFeedback);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <svg
            role="status"
            className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-navy-primary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  } else {
    return (
      <form
        onSubmit={editFeedback}
        className="p-6 sm:mx-28 md:max-w-xl md:mx-auto"
      >
        <div className="mt-8">
          <Link to="/">
            <ButtonTertiary buttonText="Go Back" />
          </Link>
        </div>
        <div className="relative flex flex-col p-6 bg-white rounded-lg mt-14">
          <div className="absolute left-10 -top-7">
            <EditFeedbackIcon />
          </div>
          <h1 className="text-lg font-bold mt-11 text-navy-primary">
            Edit Feedback
          </h1>

          <LabelledTextField
            placeholder={feedbackTitle}
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
            placeholder={feedbackDetail}
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
                Edit Feedback
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
};

export default EditFeedbackForm;
