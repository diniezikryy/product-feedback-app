import ErrorAlert from "./ErrorAlert";
import SuccessAlert from "./SuccessAlert";
import InfoAlert from "./InfoAlert";
import WarningAlert from "./WarningAlert";

const Alerts = ({ type, message }) => {
  if (message === null) {
    return null;
  }
  return (
    <div>
      {type === "success" ? (
        <SuccessAlert message={message} />
      ) : type === "warning" ? (
        <WarningAlert message={message} />
      ) : type === "info" ? (
        <InfoAlert message={message} />
      ) : (
        <ErrorAlert message={message} />
      )}
    </div>
  );
};

export default Alerts;
