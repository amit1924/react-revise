import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], //this will also go in useSelector
};

const tasksSlice = createSlice({
  name: "tasks", // This name defines where the slice will be stored in the state this will go in useSelector
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleComplete, editTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
