/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask("");
    }
  };

  const handleDelete = (deleteId) => {
    const filteredTasks = tasks.filter((_, index) => index !== deleteId);
    setTasks(filteredTasks);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const handleUpdate = () => {
    const updatedTasks = tasks.map((t, index) =>
      index === editIndex ? editTask : t
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">ToDo List</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your task name"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Task
          </button>
        </form>
        <div className="mt-6">
          {tasks.map((task, index) => (
            <div
              className="flex items-center justify-between bg-gray-50 p-4 mb-2 rounded-lg shadow-md"
              key={index}
            >
              <span className="text-gray-700">
                {index === editIndex ? (
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full"
                    placeholder="Update task"
                  />
                ) : (
                  task
                )}
              </span>
              <div className="flex gap-2">
                {index === editIndex ? (
                  <button
                    className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition duration-200"
                    onClick={handleUpdate}
                  >
                    Update Task
                  </button>
                ) : (
                  <button
                    className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition duration-200"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
