import React from "react";
import { createBrowserRouter } from "react-router-dom";
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
import LoginReg from "../pages/Auth/LoginReg";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import WatchList from "../pages/stockPage/WatchList";
import StockListID from "../pages/stockPage/StockListID";
import OtpPage from "../pages/Auth/OtpPage";
import Page404 from "../components/common/Page404";

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
        path: "stocksID/:id",
        element: <StockListID />,
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
        path: "/watch-list",
        element: <WatchList />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: "/loginReg",
    element: <LoginReg />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/otp",
    element: <OtpPage />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default Router;
