import React from "react";
import { ImCross } from "react-icons/im";
import { useGlobalState } from "../../globalState/StateContext";

const AuthHeader = ({ header }) => {
  const { dispatch } = useGlobalState();
  return (
    <div className=" flex justify-between p-4 items-center ">
      <h1 className=" text-lg font-semibold">{header}</h1>
      <button
        onClick={() => dispatch({ type: "LOGINPAGETOGGLE", payload: false })}
      >
        <ImCross />
      </button>
    </div>
  );
};

export default AuthHeader;
