/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/tasks/tasksSlice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      dispatch(editTask({ id: task.id, newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        ) : (
          <span className="break-all">{task.text}</span>
        )}
      </div>
      <button
        onClick={handleEdit}
        className="px-4 py-2 ml-4 bg-blue-500 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default TaskItem;
