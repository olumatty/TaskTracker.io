import { useEffect, useState } from "react";
import Edit from "./Edit";

const ToDo = ({ task, index, taskList, setTaskList }) => {
  const [time, setTime] = useState(0);
  const [running, setrunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running]);

  const handleDelete = (itemID) => {
    let removeItems = taskList.indexOf(task);
    taskList.splice(removeItems, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => todo.id !== itemID)
    );
  };
  return (
    <>
      <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
        <div className="w-full flex flex-row justify-between">
          <p className="font-semibold text-xl">{task.projectName}</p>
          <Edit
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <p className="text-lg py-2">{task.taskDescription}</p>
        <div className="w-full flex flex-row items-center justify-evenly">
          <div className="w-1/4 text-xl font-semibold py-4">
            <span>{("0" + Math.floor((time / 360000) % 24)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span className="text-sm">
              {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
          </div>
          <div className="w-1/3 max-w-sm flex flex-row justify-evenly gap-4">
            {running ? (
              <>
                <button className="border rounded-lg py-1 px-3"onClick={() => {setrunning(false)}}>Stop</button>
              </>
            ) : (
              <>
                <button className="border rounded-lg py-1 px-3" onClick={() => {setrunning(true)}}>Start</button>
              </>
            )}
            <button className="border rounded-lg py-1 px-3"onClick={()=> {setTime(0)}}>Reset</button>
          </div>
        </div>
        <div className="justify-center w-full flex ">
          <button
            className="bg-red-500 text-white uppercase text-sm font-semibold py-1.5 px-3 mt-6 mb-1 rounded-lg"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
