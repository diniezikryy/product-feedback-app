import ButtonPrimary from "../../Elements/Buttons/ButtonPrimary";

const FeedbackNavbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-6 py-2 bg-navy-primary">
        <div className="h-5 w-36">Sorting Dropdown</div>
        <ButtonPrimary text="+ Add Feedback" />
      </div>
    </div>
  );
};

export default FeedbackNavbar;
