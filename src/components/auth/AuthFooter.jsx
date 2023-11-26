import React from "react";
import { useGlobalState } from "../../globalState/StateContext";

const AuthFooter = ({ message, button, btnPayload }) => {
  const { dispatch } = useGlobalState();
  return (
    <div className="flex justify-between">
      <h1 className="text-gray-400"> {message}</h1>
      <button
        onClick={() =>
          dispatch({ type: "SIGNUPFORMTOGGLE", payload: btnPayload })
        }
        className="underline text-gray-700 font-semibold"
      >
        {button}
      </button>
    </div>
  );
};

export default AuthFooter;
