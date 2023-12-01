import React from "react";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useGlobalState } from "../globalState/StateContext";
const Navbar2 = () => {
  const { dispatch } = useGlobalState();
  return (
    <div className="flex justify-center">
      <div className="flex gap-16">
        <button className="flex gap-1 items-center font-semibold border border-black px-3 rounded-lg ">
          <HiOutlineDocumentReport /> Report
        </button>
        <button
          onClick={() => dispatch({ type: "LOGINPAGETOGGLE", payload: true })}
          className="flex gap-1 items-center font-semibold border border-black px-3 rounded-lg "
        >
          <FaRegUserCircle />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
