import React from "react";
import TaskNavbar from "./TaskNavbar";
import TaskHeader from "./TaskHeader";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import AddTaskModel from "./AddTaskModel/AddTaskModel";

const TasksMain = () => {
  return (
    <div className=" w-full md:w-[60%]  flex flex-col gap-3 justify-center items-center h-fit mt-5 relative">
      <TaskHeader />
      <TaskNavbar />
      <Tasks />
      <AddTaskModel />
      <AddTask />
    </div>
  );
};

export default TasksMain;
