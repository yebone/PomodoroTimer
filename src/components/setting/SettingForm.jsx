import React from "react";
import SettingFormTimer from "./SettingFormTimer";
import SettingFormSound from "./SettingFormSound";
import { auth, db } from "../../../config/firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const SettingForm = ({ dispatch }) => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    dispatch({ type: "UPDATEBYSETTING", payload: formJson });

    if (auth?.currentUser?.uid) {
      await setDoc(
        doc(db, "users", auth.currentUser.uid),
        {
          ...formJson,
        },
        { merge: true }
      );
    }
  };
  return (
    <div>
      <form method="post" onSubmit={(e) => onSubmitHandler(e)}>
        <SettingFormTimer />
        <SettingFormSound />
        <div className=" p-4 text-end">
          <button
            type="submit"
            onClick={() => dispatch({ type: "SETTINGTOGGLE", payload: false })}
            className="px-6 py-2 bg-[#363636] text-white font-semibold text-1xl rounded-md"
          >
            OK
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingForm;
