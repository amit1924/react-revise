/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Blog from "./components/Blog";
import ToDo from "./components/ToDo";
import DarkTheme from "./components/DarkTheme";
import FramerMotion from "./components/FramerMotion";
import TaskManagement from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-5 z-10  right-2">
        <DarkTheme />
      </div>
      <Router>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/" element={<FramerMotion />} />
          <Route path="/task" element={<TaskManagement />} />

          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
