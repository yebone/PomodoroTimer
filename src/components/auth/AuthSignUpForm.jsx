import React from "react";
import AuthEmailSignUp from "./AuthEmailSignUp";
import AuthHeader from "./AuthHeader";
import FullLineBreak from "../smallComponents/FullLineBreak";
import AuthFooter from "./AuthFooter";

const AuthSignUpForm = () => {
  return (
    <div
      className={`relative max-w-md w-full bg-white rounded-lg block top-[75px] px-3 pb-3`}
    >
      <AuthHeader header={"Sign Up"} />
      <FullLineBreak />
      <AuthEmailSignUp />
      <AuthFooter
        message={"Already have an account?"}
        button={"Sign In"}
        btnPayload={false}
      />
    </div>
  );
};

export default AuthSignUpForm;
