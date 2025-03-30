import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/Auth/LoginPages";
import RegisterPages from "../pages/Auth/RegisterPages";
import Mainlayout from "../layouts/Mainlayout";
import WatchList from "../pages/stockPage/WatchListPage";
import StockList from "../pages/stockPage/StockList";
import PortfolioPage from "../pages/portfolioPage/PortfolioPage";
import Overview from "../pages/MarketOverview/Overview";

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
        path: "/watchlist",
        element: <WatchList />,
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
