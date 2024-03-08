import React from "react";
import { TbLogout } from "react-icons/tb";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";

const PopUpMenu = () => {
  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("sign out is successful");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" absolute bg-white text-gray-800 w-[200px] translate-y-1">
      <button className="flex items-center gap-1 py-1 ps-2 hover:bg-gray-100 w-full">
        <TbLogout /> Account
      </button>
      <button className="flex items-center gap-1 py-1 ps-2 hover:bg-gray-100 w-full">
        <TbLogout /> Subscription
      </button>
      <button
        onClick={logOut}
        className="flex items-center gap-1 py-1 ps-2 hover:bg-gray-100 w-full"
      >
        <TbLogout /> Logout
      </button>
    </div>
  );
};

export default PopUpMenu;
