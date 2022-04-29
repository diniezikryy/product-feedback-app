import CategoryButton from "../Elements/CategoryButton";

const FeedbackCategory = () => {
  return (
    <div className="sm:w-56 h-44 sm:rounded-lg flex-wrap flex gap-x-1.5 gap-y-2 p-6 w-auto bg-white rounded-lg ">
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
