import React, { useState, useEffect, useContext } from "react";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import { ThemeContext } from "../../context/ThemeContext";

const WatchListPage = ({ Stockhistory }) => {
  const { theme } = useContext(ThemeContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Process Stockhistory data to use formattedDate and current_price
  useEffect(() => {
    if (Stockhistory.length > 0) {
      const chartData = Stockhistory.map((item) => ({
        date: new Date(item.date).toLocaleString(),
        value: parseFloat(item.current_price),
      }));

      setData(chartData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [Stockhistory]); // Run effect whenever Stockhistory changes

  return (
    <div className="h-[410px] rounded-lg p-4 relative">
      <div className="pt-12 h-full">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p>Loading chart data...</p>
          </div>
        ) : data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                  {theme === "dark" ? (
                    <>
                      <stop offset="0%" stopColor="#0149B3" stopOpacity={0.8} />
                      <stop
                        offset="100%"
                        stopColor="#000000"
                        stopOpacity={0.8}
                      />
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor="#1573FE" stopOpacity={0.8} />
                      <stop
                        offset="100%"
                        stopColor="#FFFFFF"
                        stopOpacity={0.8}
                      />
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
                  return dateObj.toLocaleTimeString(); // Simple format
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
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>No data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
