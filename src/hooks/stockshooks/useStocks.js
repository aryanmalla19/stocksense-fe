import { useQuery } from "@tanstack/react-query";
import { stockList } from "../../api/stocksApiService";

const mapStockData = (stock) => ({
  id: stock.id,
  symbol: stock.symbol.toUpperCase(),
  company_name: stock.company_name,
  sector: stock.sector,
  open_price: parseFloat(stock.open_price),
  high_price: parseFloat(stock.high_price),
  low_price: parseFloat(stock.low_price),
  close_price: parseFloat(stock.close_price),
  current_price: parseFloat(stock.current_price),
});

const useStocks = (searchSymbol = "", pageNumber = 1) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stocks", pageNumber, searchSymbol],
    queryFn: () => stockList({ page: pageNumber, searchSymbol }),
    keepPreviousData: true,
  });

  if (isLoading) return { stocks: [], isLoading, isError };
  if (isError) return { stocks: [], isLoading, isError };

  let stocks = data?.data.map(mapStockData);

  if (searchSymbol) {
    stocks = stocks.filter((stock) =>
      stock.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
    );
  }

  return { stocks, isLoading, isError };
};

export default useStocks;
