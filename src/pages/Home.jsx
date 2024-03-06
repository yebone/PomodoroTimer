import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/main/Main";
import SettingPage from "./SettingPage";
import LoginPage from "./LoginPage";
import MenuBar from "../components/MenuBar";

const Home = () => {
  return (
    <div className=" bg-slate-200 h-[100vh] relative ">
      {/* Model box */}
      <SettingPage />
      <LoginPage />

      {/* Normal components */}
      <Navbar />
      <MenuBar />
      <Main />
    </div>
  );
};

export default Home;
