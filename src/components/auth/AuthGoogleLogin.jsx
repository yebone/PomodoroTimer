import React from "react";
import { auth, providerGoogle } from "../../../config/firebase";
import { signInWithPopup } from "firebase/auth";
const AuthGoogleLogin = () => {
  const logInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center py-2">
      <button
        onClick={logInWithGoogle}
        className="flex gap-1 items-center px-16 py-2 font-lg font-semibold text-gray-400 border border-gray-300 rounded-md shadow-[0_2px_2px_rgba(0,0,0,0.2)] "
      >
        <img
          className=" w-5 h-5"
          src="src/assets/logo/g-logo.png"
          alt="google logo"
        />{" "}
        Login with Google
      </button>
    </div>
  );
};

export default AuthGoogleLogin;
