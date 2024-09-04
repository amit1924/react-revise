/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Correct hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          text: task,
          completed: false,
        })
      );
      setTask("");
      navigate("/tasklist"); // Navigate to the task list after adding a task
    }
  };

  const taskListPage = () => {
    navigate("/tasklist");
  };

  return (
    <form className="flex justify-center my-4 relative" onSubmit={handleSubmit}>
      <button
        className="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-2xl"
        onClick={taskListPage}
      >
        Task List
      </button>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="px-4 py-2 border rounded-l"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
