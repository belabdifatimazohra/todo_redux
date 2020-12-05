import React from "react";
import Addtask from "./Addtask";
import  Task from "./Task"
function ListTask() {
  
  return (
    <div>
          <h1>Todo List</h1>
      <Addtask />
      <Task />
    </div>
  );
}

export default ListTask;
