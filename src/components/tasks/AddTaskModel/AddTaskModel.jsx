import React from "react";
import AddTaskModelForm from "./AddTaskModelForm";
import { useGlobalState } from "../../../globalState/StateContext";

const AddTaskModel = () => {
  const { dispatch, addTaskModelToggle } = useGlobalState();
  console.log(addTaskModelToggle);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log(formData);
  };

  return (
    <form
      method="post"
      onSubmit={(e) => onSubmitHandler(e)}
      className={`${
        addTaskModelToggle ? "block" : "hidden"
      } w-full absolute bg-white rounded-lg`}
    >
      <section className="p-5">
        <AddTaskModelForm />
      </section>
      {/* bottom section */}
      <section className=" w-full h-16 p-3   bg-gray-400 flex gap-2 justify-end border rounded-b-lg ">
        <button
          className=" "
          onClick={() =>
            dispatch({ type: "ADDTASKMODELTOGGLE", payload: false })
          }
        >
          Cancel
        </button>
        <button
          className=" px-5 py-2 bg-gray-700 text-white border rounded-md border-transparent"
          type="submit"
          onClick={() =>
            dispatch({ type: "ADDTASKMODELTOGGLE", payload: false })
          }
        >
          Save
        </button>
      </section>
    </form>
  );
};

export default AddTaskModel;
