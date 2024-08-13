import AddTask from "./Components/AddTask";
import { useState } from "react";

function App() {
  const {taskList, setTaskList} = useState('')
  return (
    <>
      <h1 className="text-2xl font-bold py-4 pl-6">The Task Tracker</h1>
      <p className="text-xl pl-6">Hi there!!</p>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6"> Click</p>
        <AddTask taskList ={taskList} setTaskList={setTaskList}/>
        <p className="text-xl ml-2">to add task</p>
      </div>
    </>
  );
}

export default App;
