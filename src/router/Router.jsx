import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/LoginPages";

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPages />,
  },
]);

export default Router;
