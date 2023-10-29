import React, { useState } from "react";

const TodaysTasksComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
      <h2 className="text-2xl font-bold mb-4">Today's Tasks</h2>
      <div className="mb-4 flex flex-col items-start gap-1">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="w-full border-2 border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleAddTask}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-0.5 px-2 rounded"
        >
          Add task
        </button>
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleCompletion(index)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <p className={`ml-2 ${task.completed ? "line-through" : ""}`}>
            {task.task}
          </p>
        </div>
      ))}
      <div className="mt-4">
        <a
          href="/all-tasks"
          className="text-indigo-600 font-bold hover:underline"
        >
          View All Tasks
        </a>
      </div>
    </div>
  );
};

export default TodaysTasksComponent;
