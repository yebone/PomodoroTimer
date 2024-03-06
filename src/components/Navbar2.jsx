import React from "react";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useGlobalState } from "../globalState/StateContext";
const Navbar2 = () => {
  const { dispatch } = useGlobalState();
  return (
    <div className="w-full items-center justify-center flex gap-16 pt-2">
      <button className="flex justify-between gap-x-1  w-fit h-fit items-center font-semibold border border-black px-3 py-1 rounded-lg ">
        <HiOutlineDocumentReport size={22} /> <span>Report</span>
      </button>
      <button
        onClick={() => dispatch({ type: "LOGINPAGETOGGLE", payload: true })}
        className="flex justify-between gap-x-1  w-fit h-fit items-center font-semibold border border-black px-3 py-1 rounded-lg "
      >
        <FaRegUserCircle size={22} />
        <span>Login</span>
      </button>
    </div>
  );
};

export default Navbar2;
