import React from "react";
import { GiTomato } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-5">
      <div className=" flex gap-1 items-center">
        <GiTomato className=" text-2xl text-red-500" />
        <h1 className=" text-2xl font-bold">Pomodoro Timer </h1>
        <GiTomato className=" text-2xl text-red-500" />
      </div>
    </nav>
  );
};

export default Navbar;
