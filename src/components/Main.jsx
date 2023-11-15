import React from "react";
import TimeDisplay from "./TimeDisplay";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

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
