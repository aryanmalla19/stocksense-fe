import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Slider from "react-slick";
import SliderCarousel from "../../components/Stocks/SliderCarousel";
import useFetchWatchList from "../../hooks/stocks/useFetchWatchList";
import { useStocks } from "../../hooks/stocks/useStocks";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioTracker = () => {
  const { theme } = useContext(ThemeContext);
  const { data: stocksData, isLoading, error } = useFetchWatchList();
  const { data: allStocksData, isLoading: isStocksLoading } = useStocks("", "", "");

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // lg screen: 2 cards
      { breakpoint: 640, settings: { slidesToShow: 1 } }, // sm screen: 1 card
    ],
  };

  if (isLoading || isStocksLoading) return <p>Loading watchlist...</p>;
  if (error) return <p>Error loading watchlist: {error.message}</p>;
  if (!stocksData?.data?.length) return <p>No stocks in your watchlist.</p>;

  const watchList = stocksData.data;
  let finalStocks = [...watchList];

  // Fill up to 3 stocks if watchlist has fewer than 3
  if (watchList.length < 3 && allStocksData?.data?.length) {
    const remainingCount = 3 - watchList.length;
    const extraStocks = allStocksData.data
      .filter(
        (stock) => !watchList.some((watchItem) => watchItem.stock.symbol === stock.symbol)
      )
      .slice(0, remainingCount)
      .map((stock) => ({ stock }));
    finalStocks = [...finalStocks, ...extraStocks];
  }

  return (
    <div className="relative mt-5 max-w-[960px] mx-auto">
      <SliderCarousel direction="left" theme={theme} />
      <Slider {...settings} className="px-4">
        {finalStocks.map((item, index) => {
          const stock = item.stock;
          const pnl = stock.close_price - stock.open_price;
          const change = (pnl / stock.open_price) * 100;

          return (
            <div key={index} className="px-2">
              <div
                className={`w-[300px] h-[174px] rounded-[12px] p-4 space-y-5 ${
                  theme === "dark"
                    ? "bg-dark-bg text-dark-text"
                    : "bg-light-bg text-light-text shadow-md"
                }`}
              >
                <div className="flex items-center gap-4 h-12">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold bg-gradient-to-br from-[#7F00FF] to-[#E100FF] text-white">
                    {stock.company_name?.charAt(0) || "?"}
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">
                      {stock.company_name || "Unknown"}
                    </p>
                    <p className="text-[12px] uppercase">{stock.symbol || "-"}</p>
                  </div>
                </div>

                <p className="text-[24px] font-bold">
                  ${stock.current_price?.toLocaleString() || "0.00"}
                </p>

                <div
                  className={`font-semibold flex justify-between ${
                    change >= 0 ? "text-accent-green" : "text-accent-red"
                  }`}
                >
                  <p>PNL Daily</p>
                  <p>
                    {change >= 0 ? "+" : ""}${pnl.toFixed(2)} ({change.toFixed(2)}%)
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PortfolioTracker;