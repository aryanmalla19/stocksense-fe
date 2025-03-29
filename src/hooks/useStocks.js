import { useState, useEffect } from "react";

// Dummy data for stocks
const dummyStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 189.98,
    volume: 45678900,
    change: 2.34,
    changePercent: 1.25,
    open: 187.5,
    high: 190.25,
    low: 186.75,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 420.72,
    volume: 32456700,
    change: -3.15,
    changePercent: -0.74,
    open: 423.5,
    high: 425.8,
    low: 419.2,
    inWatchlist: false,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 152.45,
    volume: 28765400,
    change: 5.62,
    changePercent: 3.83,
    open: 148.2,
    high: 153.75,
    low: 147.8,
  },
  {
    symbol: "GOGL",
    name: "Alphabet Inc.",
    price: 152.45,
    volume: 28765400,
    change: 5.62,
    changePercent: 3.83,
    open: 148.2,
    high: 153.75,
    low: 147.8,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 178.75,
    volume: 45672300,
    change: 1.22,
    changePercent: 0.69,
    open: 177.8,
    high: 179.9,
    low: 176.45,
    inWatchlist: false,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 172.63,
    volume: 98765400,
    change: -8.91,
    changePercent: -4.91,
    open: 180.2,
    high: 181.5,
    low: 171.8,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 152.45,
    volume: 28765400,
    change: 5.62,
    changePercent: 3.83,
    open: 148.2,
    high: 153.75,
    low: 147.8,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 178.75,
    volume: 45672300,
    change: 1.22,
    changePercent: 0.69,
    open: 177.8,
    high: 179.9,
    low: 176.45,
    inWatchlist: false,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 172.63,
    volume: 98765400,
    change: -8.91,
    changePercent: -4.91,
    open: 180.2,
    high: 181.5,
    low: 171.8,
  },
];
const useStocks = (searchSymbol) => {
  const [filteredStocks, setFilteredStocks] = useState(dummyStocks);

  // Filter stocks whenever searchSymbol changes
  useEffect(() => {
    const result = dummyStocks.filter(
      (stock) =>
        stock.symbol.toLowerCase().includes(searchSymbol.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchSymbol.toLowerCase())
    );

    setFilteredStocks(result);
  }, [searchSymbol]); // Runs every time searchSymbol changes

  return filteredStocks;
};

export default useStocks;
