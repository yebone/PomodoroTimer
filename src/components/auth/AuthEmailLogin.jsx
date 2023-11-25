import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

const AuthEmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);

  const logInWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold text-gray-300">
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          className=" border bg-gray-100 px-2 py-2 rounded-md text-gray-500"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="password"
          className="text-sm font-semibold text-gray-300"
        >
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          className=" border bg-gray-100 px-2 py-2 rounded-md text-gray-500"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={logInWithEmail}
        className="w-full border rounded-md py-2 text-lg bg-gray-800   hover:bg-gray-950 text-gray-50 hover:text-gray-50  "
      >
        Log in with Email
      </button>

      <div className="flex justify-between">
        <h1 className="text-gray-400"> Do not have an account?</h1>
        <button className="underline text-gray-700 font-semibold">
          Create account
        </button>
      </div>
    </div>
  );
};

export default AuthEmailLogin;
