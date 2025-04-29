import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import {
  FiList,
  FiStar,
  FiPieChart,
  FiLayers,
  FiShoppingCart,
} from "react-icons/fi";
// import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiUserShared2Fill } from "react-icons/ri";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import MenuItem from "./MenuItems";
import DropdownMenu from "./DropdownMenu";

const menuItems = [
  { icon: <MdOutlineDashboard />, label: "Dashboard", href: "/dashboard" },
  { icon: <FiList />, label: "Stocks List", href: "/stocks" },
  { icon: <FiShoppingCart />, label: "Trade Stocks", href: "/buy" },
  { icon: <FiStar />, label: "Watchlist", href: "/watch-list" },
  { icon: <FiPieChart />, label: "Portfolio", href: "/portfolio" },
  { icon: <FiLayers />, label: "IPO Applications", href: "/shares" },

  {
    icon: <BsDatabaseFillGear />,
    label: "Stock Management",
    href: "/stockmanagement",
  },
  {
    icon: <FaClipboardList />,
    label: "Ipo Management",
    href: "/ipomanagement",
  },

  {
    icon: <RiUserShared2Fill />,
    label: "Portfolios",
    href: "/portfoliomanagement",
  },
  // { icon: <FaHeadphonesAlt />, label: "Support", href: "/admin/support" },
];

const ipoItems = [
  { label: "IPO Apply", href: "/shares" },
  { label: "IPO List", href: "/ipo-list" },
];

const portfolioItems = [
  { label: "My Portfolio", href: "/portfolio" },
  { label: "Holdings", href: "/portfolio/holdings" },
  { label: "Transactions", href: "/portfolio/transactions" },
];
import useUserDetails from "../hooks/authhooks/useUserDetails";

const Menu = ({ collapsed, theme }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isIpoOpen, setIsIpoOpen] = useState(false);

  const { userDetails } = useUserDetails();
  const role = userDetails?.data?.role;

  const commonMenuItems = [
    { icon: <MdOutlineDashboard />, label: "Dashboard", href: "/dashboard" },
    { icon: <FiList />, label: "Stocks List", href: "/stocks" },
    { icon: <FiShoppingCart />, label: "Trade Stocks", href: "/buy" },
    { icon: <FiStar />, label: "Watchlist", href: "/watch-list" },
    { icon: <FiPieChart />, label: "Portfolio", href: "/portfolio" },
    { icon: <FiLayers />, label: "IPO Applications", href: "/shares" },
  ];

  const adminMenuItems = [
    {
      icon: <BsDatabaseFillGear />,
      label: "Stock Management",
      href: "/stockmanagement",
    },
    {
      icon: <FaClipboardList />,
      label: "Ipo Management",
      href: "/ipomanagement",
    },
    {
      icon: <RiUserShared2Fill />,
      label: "Portfolios",
      href: "/portfoliomanagement",
    },
  ];

  const menuItems =
    role === "admin"
      ? [...commonMenuItems, ...adminMenuItems]
      : commonMenuItems;

  const ipoItems = [
    { label: "IPO Application Form", href: "/shares" },
    { label: "IPO Listings", href: "/ipo-list" },
  ];

  const portfolioItems = [
    { label: "My Portfolio", href: "/portfolio" },
    { label: "Holdings", href: "/portfolio/holdings" },
    { label: "Transactions", href: "/portfolio/transactions" },
  ];

  const togglePortfolio = () => setIsPortfolioOpen(!isPortfolioOpen);
  const toggleIpo = () => setIsIpoOpen(!isIpoOpen);

  return (
    <div
      className={`flex flex-col justify-between h-screen text-lg ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="flex-1 text-[16px] overflow-y-auto scrollbar-hidden py-4">
        <div className="mt-2 h-60">
          {menuItems.map((item) => {
            if (item.label === "Portfolio") {
              return (
                <DropdownMenu
                  key={item.label}
                  label={item}
                  items={portfolioItems}
                  isOpen={isPortfolioOpen}
                  toggle={togglePortfolio}
                  currentPath={currentPath}
                  theme={theme}
                  collapsed={collapsed}
                />
              );
            }
            if (item.label === "IPO Applications") {
              return (
                <DropdownMenu
                  key={item.label}
                  label={item}
                  items={ipoItems}
                  isOpen={isIpoOpen}
                  toggle={toggleIpo}
                  currentPath={currentPath}
                  theme={theme}
                  collapsed={collapsed}
                />
              );
            }
            return (
              <MenuItem
                key={item.label}
                item={item}
                currentPath={currentPath}
                theme={theme}
                collapsed={collapsed}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
