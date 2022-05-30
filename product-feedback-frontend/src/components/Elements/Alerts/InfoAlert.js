const InfoAlert = ({ message }) => {
  return (
    <div
      id="alert-1"
      className="flex p-4 bg-blue-100 sm:mb-4 sm:rounded-lg dark:bg-blue-200"
      role="alert"
    >
      <svg
        className="flex-shrink-0 w-5 h-5 text-blue-700 sm:w-7 sm:h-7 dark:text-blue-800"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <div className="ml-3 text-base font-medium text-blue-700 dark:text-blue-800">
        {message}
      </div>
    </div>
  );
};

export default InfoAlert;
