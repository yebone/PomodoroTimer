import React from "react";
import AuthHeader from "./AuthHeader";
import AuthEmailLogin from "./AuthEmailLogin";
import FullLineBreak from "../smallComponents/FullLineBreak";
import LineBreakWithText from "../smallComponents/LineBreakWithText";
import AuthGoogleLogin from "./AuthGoogleLogin";

const Auth = () => {
  return (
    <div
      className={`relative max-w-md w-full bg-white rounded-lg block top-[75px] px-3 pb-3`}
    >
      <AuthHeader />
      <FullLineBreak />
      <AuthGoogleLogin />
      <LineBreakWithText text={"or"} />
      <AuthEmailLogin />
    </div>
  );
};

export default Auth;
