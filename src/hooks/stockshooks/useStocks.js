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
  let stocks = data?.data.map((stock) => {
    return {
      id: stock.id,
      symbol: stock.symbol.toUpperCase(),
      company_name: stock.company_name,
      sector: stock.sector,
      open_price: parseFloat(stock.open_price),
      high_price: parseFloat(stock.high_price),
      low_price: parseFloat(stock.low_price),
      close_price: parseFloat(stock.close_price),
      current_price: parseFloat(stock.current_price),
    };
  });

  // Filter by symbol
  if (searchSymbol) {
    stocks = stocks.filter((stock) =>
      stock.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
    );
  }

  return stocks;
};

export default useStocks;
