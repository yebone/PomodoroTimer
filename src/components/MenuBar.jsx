import React, { useState, useEffect } from "react";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useGlobalState } from "../globalState/StateContext";
import { auth } from "../../config/firebase";
import ProfileAvator from "./userProfile/ProfileAvator";
import { onAuthStateChanged } from "firebase/auth";

const MenuBar = () => {
  const { dispatch } = useGlobalState();
  const [userState, setUserState] = useState();

  useEffect(() => {
    if (auth?.currentUser) {
      setUserState(true);
    } else {
      setUserState(false);
    }
  }, [auth?.currentUser]);

  return (
    <div className="flex justify-center">
      <div className="flex gap-16">
        <button className="flex gap-1 items-center font-semibold border border-black px-3 rounded-lg ">
          <HiOutlineDocumentReport /> Report
        </button>

        {/* if user is logged in dispaly the information else display logIn btn */}
        {userState ? (
          <ProfileAvator userName={auth?.currentUser?.displayName} />
        ) : (
          <button
            onClick={() => dispatch({ type: "LOGINPAGETOGGLE", payload: true })}
            className="flex gap-1 items-center font-semibold border border-black px-3 rounded-lg "
          >
            <FaRegUserCircle />
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
