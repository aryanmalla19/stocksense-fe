import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/Auth/LoginPages";
import RegisterPages from "../pages/Auth/RegisterPages";
import Mainlayout from "../layouts/Mainlayout";
import Overview from "../pages/MarketOverview/Overview";
import StockList from "../pages/stockPage/StockList";
import PortfolioPage from "../pages/portfolioPage/PortfolioPage";

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
