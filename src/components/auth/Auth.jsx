import React from "react";
import { useGlobalState } from "../../globalState/StateContext";
import AuthHeader from "./AuthHeader";
import AuthEmailLogin from "./AuthEmailLogin";

const Auth = () => {
  const { dispatch } = useGlobalState();
  return (
    <div
      className={`relative max-w-md w-full bg-white rounded-lg block top-[75px] px-3 pb-3`}
    >
      <AuthHeader />
      {/* full line break */}
      <div className="flex justify-center">
        <div className="w-full h-[1px] bg-gray-300 block"></div>
      </div>

      {/* login with google */}
      <div className="flex justify-center items-center py-2">
        <button className="flex gap-1 items-center px-16 py-2 font-lg font-semibold text-gray-400 border border-gray-300 rounded-md shadow-[0_2px_2px_rgba(0,0,0,0.2)] ">
          <img
            className=" w-5 h-5"
            src="src/assets/logo/g-logo.png"
            alt="google logo"
          />{" "}
          Login with Google
        </button>
      </div>
      {/* line break with text  */}
      <div className=" flex items-center justify-around">
        <div className="grow h-[1px] bg-gray-300 block"></div>
        <div className="font-semibold text-gray-400 px-2">or</div>
        <div className="grow h-[1px] bg-gray-300 block"></div>
      </div>

      {/* email and password login  */}
      <AuthEmailLogin />
    </div>
  );
};

export default Auth;
