import { useState, useEffect } from "react";
import {
  convertDateToUnixTimeStamp,
  convertUnixTimeStampToDate,
  createDate,
} from "../api/dateService";
import chartconfig from "../api/chartconfig";

const fetchHistoricalData = async (symbol, resolution, start, end, filter) => {
  const dataPoints = 30;
  const timeRange = end - start;
  const interval = timeRange / dataPoints;

  const t = [];
  const c = [];

  // Different base values for each filter
  const baseValues = {
    "1D": 150,
    "1W": 160,
    "1M": 170,
    "1Y": 180,
  };

  for (let i = 0; i < dataPoints; i++) {
    const timestamp = start + i * interval;
    t.push(timestamp);
    const baseValue = baseValues[filter] || 150;
    c.push(baseValue + Math.sin(timestamp * 0.0001) * 10 + (i % 5));
  }

  return { t, c };
};

const useStockChart = (symbol = "AAPL") => {
  const [filter, setFilter] = useState("1W");
  const [data, setData] = useState([]);
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
      const config = chartconfig[filter];
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
        const resolution = chartconfig[filter]?.resolution || "D";
        const result = await fetchHistoricalData(
          symbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix,
          filter
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
  }, [filter, symbol]);

  return { filter, setFilter, data, loading };
};

export default useStockChart;
