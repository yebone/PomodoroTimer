import React from "react";
import { ImCross } from "react-icons/im";
import { useGlobalState } from "../../globalState/StateContext";

const ModelBoxHeader = ({ header, dispatchType, dispatchPayload }) => {
  const { dispatch } = useGlobalState();
  return (
    <div className=" flex justify-between p-4 items-center ">
      <h1 className=" text-lg font-semibold">{header}</h1>
      <button
        onClick={() =>
          dispatch({ type: dispatchType, payload: dispatchPayload })
        }
      >
        <ImCross />
      </button>
    </div>
  );
};

export default ModelBoxHeader;
