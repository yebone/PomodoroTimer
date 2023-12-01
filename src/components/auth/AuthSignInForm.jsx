import React from "react";
import AuthEmailSignIn from "./AuthEmailSignIn";
import FullLineBreak from "../smallComponents/FullLineBreak";
import LineBreakWithText from "../smallComponents/LineBreakWithText";
import AuthGoogleLogin from "./AuthGoogleLogin";
import AuthFooter from "./AuthFooter";
import ModelBoxHeader from "../smallComponents/ModelBoxHeader";

const AuthSignInForm = () => {
  return (
    <div
      className={`relative max-w-md w-full bg-white rounded-lg block top-[75px] px-3 pb-3`}
    >
      <ModelBoxHeader
        header={"Sign In"}
        dispatchType={"LOGINPAGETOGGLE"}
        dispatchPayload={false}
      />
      <FullLineBreak />
      <AuthGoogleLogin />
      <LineBreakWithText text={"or"} />
      <AuthEmailSignIn />
      <AuthFooter
        message={"Do not have an account?"}
        button={"Create account"}
        btnPayload={true}
      />
    </div>
  );
};

export default AuthSignInForm;
