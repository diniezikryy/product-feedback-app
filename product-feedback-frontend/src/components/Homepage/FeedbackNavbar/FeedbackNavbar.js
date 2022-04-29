import ButtonPrimary from "../../Elements/Buttons/ButtonPrimary";
import SortDropdown from "./SortDropdown";

const FeedbackNavbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-6 py-2 bg-navy-primary sm:rounded-lg">
        <SortDropdown />
        <ButtonPrimary text="+ Add Feedback" />
      </div>
    </div>
  );
};

export default FeedbackNavbar;
