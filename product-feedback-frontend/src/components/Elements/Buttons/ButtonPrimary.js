import React from "react";

const ButtonPrimary = (props) => {
  return (
    <>
      <button className="px-6 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400">
        {props.text}
      </button>
    </>
  );
};

export default ButtonPrimary;
