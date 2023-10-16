import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Setting from "../components/Setting";
import SettingPage from "./SettingPage";

const Home = () => {
  return (
    <div className=" bg-slate-200 h-[100vh] relative ">
      <SettingPage />
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
