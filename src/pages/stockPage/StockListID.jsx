import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetchStocksID from "../../hooks/stockshooks/useFetchStocksID";
import { ThemeContext } from "../../context/ThemeContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BadgeCheck, EyeOff } from "lucide-react";

const StockListID = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchStocksID(id);
  const { theme } = useContext(ThemeContext);

  if (isLoading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div>Error fetching stock data: {error.message}</div>;

  const { data: stock } = data;

  // Format price history data for graph
  const priceHistory = stock.prices.map((item, idx) => ({
    date: new Date(item.date).toLocaleDateString("en-GB"),
    close: parseFloat(item.close_price),
    open: parseFloat(item.open_price),
    high: parseFloat(item.high_price),
    low: parseFloat(item.low_price),
  }));

  return (
    <div
      className={`p-6 rounded-xl shadow-lg max-w-5xl mx-auto mt-6 transition-all duration-300 ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text border border-dark-card"
          : "bg-white text-black border border-gray-200"
      }`}
    >
      {/* Header */}
      <div className="flex items-center mb-4 gap-4">
        <div className="w-12 h-12 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-xl">
          {stock.company_name.charAt(0)}
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            {stock.company_name} ({stock.symbol})
          </h1>
          <p className="text-sm text-gray-500">{stock.sector}</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          {stock.is_listed ? (
            <span className="flex items-center gap-1 text-green-600 font-medium text-sm">
              <BadgeCheck size={16} /> Listed
            </span>
          ) : (
            <span className="flex items-center gap-1 text-red-500 font-medium text-sm">
              <EyeOff size={16} /> Not Listed
            </span>
          )}
        </div>
      </div>

      {/* Current Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <Stat label="Current Price" value={stock.current_price} />
        <Stat label="Close Price" value={stock.close_price} />
        <Stat label="Open Price" value={stock.open_price} />
        <Stat label="High Price" value={stock.high_price} />
        <Stat label="Low Price" value={stock.low_price} />
      </div>

      {/* Graph */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Price Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={priceHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#0f766e"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Mini component for displaying stock stats
const Stat = ({ label, value }) => (
  <div className="flex flex-col items-start bg-teal-50 p-3 rounded-lg w-full shadow-sm">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="text-xl font-semibold text-teal-700">Rs. {parseFloat(value).toFixed(2)}</span>
  </div>
);

export default StockListID;
