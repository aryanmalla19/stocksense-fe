import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
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

import Notification from "../pages/Notifications/Notifications";

import VerifyEmail from "../pages/Auth/VerifyEmail";

import UserManagement from "../admin/user/UserManagement";
import Holdings from "../pages/portfolioPage/Holdings";
import Transactions from "../pages/portfolioPage/Transactions";
import IPOList from "../pages/sharePage/IPOList";
import StockManagemant from "../admin/user/StockManagemant";
import IpoManagement from "../admin/user/IpoManagement";

import PortfolioManagement from "../admin/user/PortfolioManagement";

import Overview from "../pages/MarketOverview/Overview";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "dashboard",
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
        path: "portfolio/holdings",
        element: <Holdings />,
      },
      {
        path: "portfolio/transactions",
        element: <Transactions />,
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
        path: "ipo-list",
        element: <IPOList />,
      },
      {
        path: "apply/:id",
        element: <ApplyPage />,
      },
      {
        path: "watch-list",
        element: <WatchList />,
      },
      {
        path: "usermanagement",
        element: <UserManagement />,
      },
      {
        path: "stockmanagement",
        element: <StockManagemant />,
      },
     
      {
        path: "notifications",
        element: <Notification />
      },
        path: "ipomanagement",
        element: <IpoManagement />,
      },
      {
        path: "portfoliomanagement",
        element: <PortfolioManagement />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginReg />,
  },
  {
    path: "/register",
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
    path: "/email-verified",
    element: <VerifyEmail />,
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
