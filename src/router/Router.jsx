import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/Auth/LoginPages";
import RegisterPages from "../pages/Auth/RegisterPages";
import Mainlayout from "../layouts/Mainlayout";
import StockList from "../pages/stockPage/StockList";
import PortfolioPage from "../pages/portfolioPage/PortfolioPage";
import Overview from "../pages/marketOverview/Overview";
import MyASBAPage from "../pages/sharePage/MyASBAPage";
import ApplyPage from "../pages/sharePage/ApplyPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/stocks",
        element: <StockList />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/shares",
        element: <MyASBAPage />,
      },
      {
        path: "/apply/:id",
        element: <ApplyPage />,
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
