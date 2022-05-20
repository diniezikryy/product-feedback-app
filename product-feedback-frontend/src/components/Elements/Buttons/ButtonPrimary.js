import React from "react";

const ButtonPrimary = ({ text }) => {
  return (
    <>
      <button className="w-full px-4 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400">
        {text}
      </button>
    </>
  );
};

export default ButtonPrimary;
