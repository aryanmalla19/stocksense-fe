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
import Filter from "./Filter";

const WatchListPage = ({ Stockhistory }) => {
  console.log(Stockhistory);
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [selectedPriceType, setSelectedPriceType] = useState("open_price");

  useEffect(() => {
    if (Stockhistory && Stockhistory.length > 0) {
      const formattedData = Stockhistory.map((item) => ({
        date: item.date?.split("T")[0] || "",
        value: parseFloat(item[selectedPriceType]),
      }));
      setData(formattedData);
      setLoading(false);
    }
  }, [Stockhistory, selectedPriceType]);

  return (
    <div className="w-full h-full rounded-lg p-4 relative">
      <Filter theme={theme} onSelect={(type) => setSelectedPriceType(type)} />
      <div className="h-full">
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
                      <stop offset="0%" stopColor="#923eb9" stopOpacity={0.8} />
                      <stop
                        offset="100%"
                        stopColor="#000000"
                        stopOpacity={0.8}
                      />
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor="#923eb9" stopOpacity={0.8} />
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
                formatter={(value) => [`Rs ${value}`, "Price"]}
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
              />

              <YAxis
                domain={["auto", "auto"]}
                tickCount={6}
                tickFormatter={(value) => `Rs ${value}`}
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
