import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login";
import { useState } from "react";
import Profile from "./page/Profile";

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate replace to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoute;
