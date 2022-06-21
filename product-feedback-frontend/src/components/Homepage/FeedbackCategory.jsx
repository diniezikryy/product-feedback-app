import CategoryButton from "../Elements/CategoryButton";

const FeedbackCategory = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="sm:w-56 h-44 sm:rounded-lg flex-wrap flex gap-x-1.5 gap-y-2 p-6 w-auto bg-white rounded-lg ">
      {categories.map((category) => {
        return (
          <div
            onClick={() => {
              setSelectedCategory(category);
            }}
            key={categories.indexOf(category)}
            className={
              category === selectedCategory
                ? " hover:bg-hover-color cursor-pointer px-4 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min bg-blue-primary text-main-secondary"
                : " hover:bg-hover-color cursor-pointer px-4 py-1.5 text-sm font-semibold tracking-wide capitalize rounded-lg max-w-min text-blue-primary bg-main-secondary"
            }
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackCategory;
