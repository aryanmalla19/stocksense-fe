// hooks/stockshooks/useStocks.js
import { useQuery } from "@tanstack/react-query";
import { stockList } from "../../api/stocksApiService";

const useStocks = (searchSymbol = "") => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stocks"],
    queryFn: stockList,
  });

  if (isLoading) return [];
  if (isError) return [];

  // Normalize data
  let stocks = data?.data.map((stock) => ({
    id: stock.id,
    symbol: stock.symbol.toUpperCase(),
    name: stock.company_name,
    sector: stock.sector,
    open: parseFloat(stock.open_price),
    high: parseFloat(stock.high_price),
    low: parseFloat(stock.low_price),
    price: parseFloat(stock.close_price),
    change: parseFloat(stock.close_price) - parseFloat(stock.open_price),
    changePercent:
      ((parseFloat(stock.close_price) - parseFloat(stock.open_price)) /
        parseFloat(stock.open_price)) *
      100,
    volume: Math.floor(Math.random() * 10000000),
  }));

  // Filter by symbol
  if (searchSymbol) {
    stocks = stocks.filter((stock) =>
      stock.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
    );
  }

  return stocks;
};

export default useStocks;
