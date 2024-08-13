import AddTask from "./Components/AddTask";
import { useState } from "react";
import ToDo from "./Components/Todo";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);

  return (
    <>
      <h1 className="text-2xl font-bold py-4 pl-6">The Task Tracker</h1>
      <p className="text-xl pl-6">Hi there!!</p>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6"> Click</p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className="text-xl my-2">to add task</p>
      </div>
      <div>
        <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-1 px-2 bg-gray-300 ">
          To Do:
        </h2>
        {taskList?.map((task, i) => (
          <>
            <ToDo Key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
