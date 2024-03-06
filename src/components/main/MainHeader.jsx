import React from "react";
import MainHeaderBtn from "../smallComponents/MainHeaderBtn";

const MainHeader = () => {
  const buttons = [
    { name: "Pomodoro", value: "pomodoro" },
    { name: "Short Break", value: "shortBreak" },
    { name: "Long break", value: "longBreak" },
  ];
  return (
    <div className=" flex h-fit w-full pt-5 gap-x-5 justify-center">
      {buttons?.map((btn) => {
        return (
          <MainHeaderBtn key={btn.value} name={btn.name} value={btn.value} />
        );
      })}
    </div>
  );
};

export default MainHeader;
