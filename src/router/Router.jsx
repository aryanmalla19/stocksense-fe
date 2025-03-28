import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";
import Mainlayout from "../layouts/Mainlayout";
import WatchList from "../pages/WatchList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/watchlist",
        element: <WatchList />,
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
