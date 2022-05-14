import React from "react";

const ButtonSecondary = (props) => {
  return (
    <>
      <button className="w-full px-6 py-3 mr-4 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer bg-navy-secondary hover:bg-navy-tertiary text-b ">
        {props.text}
      </button>
    </>
  );
};

export default ButtonSecondary;
