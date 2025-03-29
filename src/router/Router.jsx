import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/Auth/LoginPages";
import RegisterPages from "../pages/Auth/RegisterPages";
import Mainlayout from "../layouts/Mainlayout";
import WatchList from "../pages/Watchlist/WatchListPage";
import StockChart from "../components/StockChart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/watchlist",
        element: <WatchList />,
      },
      {
        path: "/chart/:symbol?",
        element: <StockChart />,
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
