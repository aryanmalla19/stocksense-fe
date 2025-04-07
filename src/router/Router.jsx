import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPages from "../pages/Auth/LoginPages";
import RegisterPages from "../pages/Auth/RegisterPages";
import Mainlayout from "../layouts/Mainlayout";
import Overview from "../pages/MarketOverview/Overview";
import StockList from "../pages/stockPage/StockList";
import PortfolioPage from "../pages/portfolioPage/PortfolioPage";
import MyASBAPage from "../pages/sharePage/MyASBAPage";
import ApplyPage from "../pages/sharePage/ApplyPage";
import ProfilePage from "../pages/profilePage/MainProfile/ProfilePage";
import SettingPage from "../pages/profilePage/MainSetting/SettingPage";
import ConfirmationPage from "../pages/Auth/ConfirmationPage";
import BuySellPage from "../pages/OrderManagement/BuySellPage";
import Watchlists from "../pages/MarketOverview/Watchlists";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "stocks",
        element: <StockList />,
      },
      {
        path: "buysell",
        element: <BuySellPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "settings",
        element: <SettingPage />,
      },
      {
        path: "shares",
        element: <MyASBAPage />,
      },
      {
        path: "apply/:id",
        element: <ApplyPage />,
      },
      {
        path: "/watchlists",
        element: <Watchlists />,
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
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  },
]);

export default Router;
