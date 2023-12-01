import React from "react";
import TimeDisplay from "./TimeDisplay";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

// import { useGlobalState } from "../globalState/StateContext";
// import { useInterval } from "../hooks/useInterval";

const Main = () => {
  return (
    <div className=" flex flex-col gap-10 justify-center items-center h-[60%]">
      <MainHeader />
      <div className=" flex justify-center">
        <TimeDisplay />
      </div>
      <MainFooter />
    </div>
  );
};

export default Main;

// const {
//   countDown,
//   dispatch,
//   modes,
//   currentMode,
//   useEffectLoader,
//   currentAlarm,
// } = useGlobalState();
// const [count, setCount] = useState(modes[currentMode] * 60);

// //useEffectLoader to activate useeffect for reset btn,
// useEffect(() => {
//   setCount(modes[currentMode] * 60);
// }, [currentMode, useEffectLoader]);

// //Custom hook use to countdown the time!
// useInterval(
//   () => {
//     if (count > 0) {
//       setCount((count) => count - 1);
//     } else {
//       const alarm = new Audio(`/src/assets/sounds/${currentAlarm}.mp3`);
//       alarm.play();
//       dispatch({
//         type: "FINISH",
//         payload:
//           Object.keys(modes)[Object.keys(modes).indexOf(currentMode) + 1],
//       });
//     }
//   },
//   1000,
//   countDown
// );
// console.log(count);
