import ButtonPrimary from "../../Elements/Buttons/ButtonPrimary";

import { ReactComponent as Empty } from "../../../assets/suggestions/illustration-empty.svg";

const NoFeedbackCard = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 rounded-lg sm:py-28 bg-main-primary">
      <Empty />
      <h1 className="mt-10 text-lg font-bold text-navy-primary">
        There is no feedback yet.
      </h1>
      <p className="max-w-md mt-3 mb-6 text-base text-center text-navy-tertiary">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <div className="w-fit">
        <ButtonPrimary text="+ Add Feedback" />
      </div>
    </div>
  );
};

export default NoFeedbackCard;
