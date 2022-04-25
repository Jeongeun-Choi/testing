import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Error from "../Error";

const Menu = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Menu;
