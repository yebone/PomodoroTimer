import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/main/Main";
import SettingPage from "./SettingPage";
import LoginPage from "./LoginPage";
import MenuBar from "../components/MenuBar";
import TasksMain from "../components/tasks/TasksMain";

const Home = () => {
  return (
    <div className="relative  w-full mx-auto   flex flex-col items-center  bg-slate-200 h-[100vh]  ">
      {/* Model box */}
      <SettingPage />
      <LoginPage />

      {/* Normal components */}
      <Navbar />
      <MenuBar />
      <Main />
      <TasksMain />
    </div>
  );
};

export default Home;
