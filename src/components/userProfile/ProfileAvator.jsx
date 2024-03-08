import React from "react";
import { useGlobalState } from "../../globalState/StateContext";
import PopUpMenu from "./PopUpMenu";

const ProfileAvator = ({ userName }) => {
  const { dispatch, profilePopUpMenuToggle } = useGlobalState();

  return (
    <div className="">
      <button
        className="border border-blue-500 p-2 rounded-md"
        onClick={() =>
          dispatch({
            type: "PROFILEPOPUPMENUTOGGLE",
            payload: !profilePopUpMenuToggle,
          })
        }
      >
        {userName}
      </button>
      {profilePopUpMenuToggle ? <PopUpMenu /> : ""}
    </div>
  );
};

export default ProfileAvator;
