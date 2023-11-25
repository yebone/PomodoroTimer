import React from "react";
import { useGlobalState } from "../globalState/StateContext";
import Auth from "../components/auth/Auth";

const LoginPage = () => {
  const { logInPageToggle } = useGlobalState();

  return (
    <div
      className={` ${
        logInPageToggle ? "block" : "hidden"
      } fixed w-full  flex justify-center `}
    >
      <Auth />
    </div>
  );
};

export default LoginPage;
