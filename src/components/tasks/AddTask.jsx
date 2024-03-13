import React from "react";
import { useGlobalState } from "../../globalState/StateContext";

const AddTask = () => {
  const { dispatch } = useGlobalState();

  return (
    <div className="w-full p-2 bg-zinc-300">
      <button
        onClick={() => dispatch({ type: "ADDTASKMODELTOGGLE", payload: true })}
        className=" w-full border-4 border-gray-800 border-dashed font-mono font-semibold p-3"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
