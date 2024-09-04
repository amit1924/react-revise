/* eslint-disable no-unused-vars */
// src/components/TaskList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../features/tasks/tasksSlice";
import TaskItem from "./TaskItem";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/task");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 relative">
        <button
          className="absolute top-4 left-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition-all duration-300 ease-in-out"
          onClick={handleHomePage}
        >
          Home
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Task List
        </h1>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li
                className="flex items-center justify-between bg-gray-50 p-4 mb-4 rounded-lg shadow-sm"
                key={task.id}
              >
                <TaskItem key={task.id} task={task} />
                <button
                  onClick={() => dispatch(removeTask(task.id))}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition-all duration-300 ease-in-out"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
