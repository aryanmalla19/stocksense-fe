import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";
import Mainlayout from "../layouts/Mainlayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/home",
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/register",
    element: <RegisterPages />,
  },
]);

export default Router;
