import React from "react";

const LineBreakWithText = ({ text }) => {
  return (
    <div className=" flex items-center justify-around">
      <div className="grow h-[1px] bg-gray-300 block"></div>
      <div className="font-semibold text-gray-400 px-2">{text}</div>
      <div className="grow h-[1px] bg-gray-300 block"></div>
    </div>
  );
};

export default LineBreakWithText;
