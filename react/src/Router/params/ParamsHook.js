import React from "react";
import { Routes, Route, useParams } from "react-router";
import User from "./User";

const ParamsHook = () => {
  const { userId } = useParams();
  console.log(userId);
  return (
    <Routes>
      <Route path="user/:userId" element={<User />} />
    </Routes>
  );
};

export default ParamsHook;
