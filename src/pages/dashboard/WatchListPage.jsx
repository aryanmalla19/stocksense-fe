import React, { useState, useEffect } from "react";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import { chartConfig } from "../../constants/config";
import {
  convertDateToUnixTimeStamp,
  convertUnixTimeStampToDate,
  createDate,
} from "../../helper/dateService";
import ChartFilter from "../../components/stocks/ChartFilter";

// Mock API function
const fetchHistoricalData = async (symbol, resolution, start, end) => {
  // Generate dummy data based on time range
  const dataPoints = 30;
  const timeRange = end - start;
  const interval = timeRange / dataPoints;

  const basePrice = 150;
  const volatility = 5;

  const t = [];
  const c = [];

  for (let i = 0; i < dataPoints; i++) {
    t.push(start + i * interval);
    c.push(basePrice + (Math.random() * volatility * 2 - volatility));
  }

  return { t, c };
};

const WatchListPage = () => {
  const [filter, setFilter] = useState("1W");
  const [data, setData] = useState([]);
  const [darkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const formatData = (data) => {
    if (!data || !data.c || !data.t) return [];
    return data.c.map((item, index) => ({
      value: parseFloat(item.toFixed(2)),
      date: convertUnixTimeStampToDate(data.t[index]),
    }));
  };

  useEffect(() => {
    const getDateRange = () => {
      const config = chartConfig[filter];
      if (!config) return { startTimestampUnix: 0, endTimestampUnix: 0 };

      const endDate = new Date();
      const startDate = createDate(
        endDate,
        -config.days || 0,
        -config.weeks || 0,
        -config.months || 0,
        -config.years || 0
      );

      if (!startDate || !endDate)
        return { startTimestampUnix: 0, endTimestampUnix: 0 };

      return {
        startTimestampUnix: convertDateToUnixTimeStamp(startDate),
        endTimestampUnix: convertDateToUnixTimeStamp(endDate),
      };
    };

    const updateChartData = async () => {
      setLoading(true);
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter]?.resolution || "D";
        const result = await fetchHistoricalData(
          "AAPL",
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    updateChartData();
  }, [filter]);

  return (
    <div className="w-full h-[400px] bg-white dark:bg-gray-900 rounded-lg p-4 relative">
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => setFilter(item)}
            />
          </li>
        ))}
      </ul>

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <p>Loading chart data...</p>
        </div>
      ) : data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
              itemStyle={darkMode ? { color: "#818cf8" } : null}
              formatter={(value) => [`$${value}`, "Price"]}
              labelFormatter={(label) =>
                `Date: ${new Date(label).toLocaleString()}`
              }
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#312e81"
              fill="url(#chartColor)"
              fillOpacity={1}
              strokeWidth={0.5}
            />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
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
              tick={{ fontSize: 12 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p>No data available</p>
        </div>
      )}
    </div>
  );
};

export default WatchListPage;
