import React from "react";
import { useGlobalState } from "../globalState/StateContext";

const MainHeader = () => {
  const { dispatch } = useGlobalState();

  return (
    <div className=" flex gap-2 justify-center">
      <button
        onClick={(event) =>
          dispatch({ type: "MODE", payload: event.target.value })
        }
        name="pomodoro"
        value={"pomodoro"}
        className="px-3 font-bold py-1 border-2 rounded-3xl border-white "
      >
        pomodoro
      </button>

      <button
        onClick={(event) =>
          dispatch({ type: "MODE", payload: event.target.value })
        }
        name="shortBreak"
        value={"shortBreak"}
        className="px-3 font-bold py-1 border-2 rounded-3xl border-white "
      >
        short break
      </button>
      <button
        onClick={(event) =>
          dispatch({ type: "MODE", payload: event.target.value })
        }
        name="longBreak"
        value={"longBreak"}
        className="px-3 font-bold py-1 border-2 rounded-3xl border-white "
      >
        long break
      </button>
    </div>
  );
};

export default MainHeader;
