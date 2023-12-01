import React from "react";
import { useGlobalState } from "../globalState/StateContext";
import AuthSignUpForm from "../components/auth/AuthSignUpForm";
import AuthSignInForm from "../components/auth/AuthSignInForm";

const LoginPage = () => {
  const { logInPageToggle, signUpFormToggle } = useGlobalState();

  return (
    <div
      className={` ${
        logInPageToggle ? "block" : "hidden"
      } fixed w-full  flex justify-center `}
    >
      {signUpFormToggle ? <AuthSignUpForm /> : <AuthSignInForm />}
    </div>
  );
};

export default LoginPage;
