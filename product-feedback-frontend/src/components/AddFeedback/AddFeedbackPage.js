import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setFeedbackDetail } from "../../reducers/addFeedbackSlice";
import { createFeedback } from "../../reducers/feedbackSlice";

/* import ButtonPrimary from "../Elements/Buttons/ButtonPrimary"; */
import ButtonSecondary from "../Elements/Buttons/ButtonSecondary";
import TextFieldDefault from "../Elements/Forms/TextFieldDefault";
import DropdownDefault from "../Elements/Dropdowns/DropdownDefault/DropdownDefault";

/* import { ReactComponent as ArrowDown } from "../../assets/shared/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../assets/shared/icon-arrow-up.svg";
 */
const AddFeedbackPage = () => {
  const [dropdownPressed, setDropdownPressed] = useState(false);
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackCategory, setFeedbackCategory] = useState("Feature");

  const optionsArray = ["Feature", "Enhancement", "UI", "UX", "Bug"];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const feedbackDetail = useSelector((state) => {
    return state.addFeedback.feedbackDetail;
  });

  const handleFeedbackTitleChange = (event) => {
    event.preventDefault();
    setFeedbackTitle(event.target.value);
  };

  const handleDropdownClick = () => {
    setDropdownPressed(!dropdownPressed);
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
    dispatch(createFeedback(content));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/">
        <h1>Go Back</h1>
      </Link>
      <form
        onSubmit={addFeedback}
        className="p-10 rounded-lg shadow-lg w-456 bg-color-white text-navy-primary"
      >
        <header className="mb-10 text-2xl font-bold">
          Create New Feedback
        </header>

        {/* Feedback Title */}
        <TextFieldDefault
          label="Feedback Title"
          formDescription="Add a short description headline"
          handleChange={handleFeedbackTitleChange}
        />
        {/* Category */}
        <DropdownDefault
          label="Category"
          formDescription="Choose a category for your feedback"
          handleChange={setFeedbackCategory}
          handleDropdownClick={handleDropdownClick}
          selected={feedbackCategory}
          optionsArray={optionsArray}
        />

        {/* Feedback Detail */}
        <section className="mb-8">
          <h2 className="text-sm font-bold">Feedback Detail</h2>
          <h4 className="mb-3 text-sm font-light">
            Include any specific comments on what should be improved, added,
            etc.
          </h4>
          <textarea
            onChange={(event) => {
              dispatch(setFeedbackDetail(event.target.value));
            }}
            className="bg-main-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 p-2.5"
          ></textarea>
        </section>

        {/* Button to go back or add feedback */}
        <div className="flex justify-end">
          <Link to="/">
            <ButtonSecondary text="Cancel" />
          </Link>
          <button
            type="submit"
            className="px-6 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
          >
            Add Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFeedbackPage;
