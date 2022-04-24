import { ReactComponent as ArrowLeft } from "./icon-arrow-left.svg";

const ButtonTertiary = ({ buttonText }) => {
  return (
    <div className="flex items-center text-navy-tertiary">
      <ArrowLeft />
      <span className="ml-4 font-bold">{buttonText}</span>
    </div>
  );
};

export default ButtonTertiary;
