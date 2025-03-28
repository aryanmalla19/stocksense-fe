import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";
import Mainlayout from "../layouts/Mainlayout";
import WishList from "../pages/WishList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/wishlist",
        element: <WishList />,
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
