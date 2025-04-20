import React, { useContext, useMemo, useState } from "react";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import ChartFilter from "../../components/stocks/ChartFilter";
import { ThemeContext } from "../../context/ThemeContext";
import chartconfig from "../../api/chartconfig";

const WatchListPage = ({ prices }) => {
  const { theme } = useContext(ThemeContext);
  const [filter, setFilter] = useState("1M"); // default filter

  // Format prices data
  const formattedData = useMemo(() => {
    if (!prices || prices.length === 0) return [];

    // Sort by date just in case
    const sortedPrices = [...prices].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    return sortedPrices.map((price) => ({
      date: price.date,
      value: parseFloat(price.close_price),
    }));
  }, [prices]);

  return (
    <div className="h-[410px] rounded-lg p-4 relative">
      <ul className="flex absolute top-4 right-4 z-40 mb-4">
        {Object.keys(chartconfig).map((item) => (
          <li key={item} className="ml-2 first:ml-0">
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => setFilter(item)}
            />
          </li>
        ))}
      </ul>

      <div className="pt-12 h-full">
        {formattedData.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p>No data available</p>
          </div>
        ) : (
          <ResponsiveContainer key={filter} width="100%" height="100%">
            <AreaChart data={formattedData}>
              <defs>
                <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                  {theme === "dark" ? (
                    <>
                      <stop offset="0%" stopColor="#0149B3" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#000000" stopOpacity={0.8} />
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor="#1573FE" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.8} />
                    </>
                  )}
                </linearGradient>
              </defs>

              <Tooltip
                contentStyle={
                  theme === "dark" ? { backgroundColor: "#111827" } : null
                }
                itemStyle={theme === "dark" ? { color: "#818cf8" } : null}
                formatter={(value) => [`$${value}`, "Price"]}
                labelFormatter={(label) =>
                  `Date: ${new Date(label).toLocaleString()}`
                }
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#1573FE"
                fill="url(#chartColor)"
                fillOpacity={1}
                strokeWidth={0}
              />
              <XAxis
                dataKey="date"
                tick={{
                  fontSize: 12,
                  fill: theme === "dark" ? "#ffffff" : "#4d4d4d",
                }}
                tickFormatter={(date) => {
                  const dateObj = new Date(date);
                  return filter === "1D"
                    ? dateObj.toLocaleTimeString()
                    : dateObj.toLocaleDateString();
                }}
              />
              <YAxis
                domain={["auto", "auto"]}
                tickCount={6}
                tickFormatter={(value) => `$${value.toFixed(2)}`}
                tick={{
                  fontSize: 12,
                  fill: theme === "dark" ? "#ffffff" : "#4d4d4d",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
