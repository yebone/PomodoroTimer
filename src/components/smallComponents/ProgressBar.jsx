import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-1 w-[30vw]  bg-gray-300 rounded-md">
      <div
        style={{ width: progress + "%" }}
        className={`h-1  bg-red-500 rounded-md`}
      ></div>
    </div>
  );
};

export default ProgressBar;
