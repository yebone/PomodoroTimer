import React from "react";
import SettingFormTimer from "./SettingFormTimer";

const SettingForm = ({ dispatch }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    dispatch({ type: "UPDATEBYSETTING", payload: formJson });
  };
  return (
    <div>
      <form method="post" onSubmit={(e) => onSubmitHandler(e)}>
        <SettingFormTimer />
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
