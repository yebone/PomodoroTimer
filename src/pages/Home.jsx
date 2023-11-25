import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import SettingPage from "./SettingPage";
import Navbar2 from "../components/Navbar2";
import LoginPage from "./LoginPage";

const Home = () => {
  return (
    <div className=" bg-slate-200 h-[100vh] relative ">
      {/* Model box */}
      <SettingPage />
      <LoginPage />

      {/* Normal components */}
      <Navbar />
      <Navbar2 />
      <Main />
    </div>
  );
};

export default Home;
