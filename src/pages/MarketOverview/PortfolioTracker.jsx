import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Slider from "react-slick";
import SliderCarousel from "../../components/stocks/SliderCarousel";
import useFetchWatchList from "../../hooks/stockshooks/useFetchWatchList";
import { useStocks } from "../../hooks/stockshooks/useStocks";

const PortfolioTracker = () => {
  const { theme } = useContext(ThemeContext);
  const { data: stocksData, isLoading, error } = useFetchWatchList();
  const { data: allStocksData, isLoading: isStocksLoading } = useStocks(
    "",
    "",
    ""
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // 👈 Default 4
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 6 } }, // 2xl screen
      { breakpoint: 1280, settings: { slidesToShow: 5 } }, // xl screen
      { breakpoint: 1024, settings: { slidesToShow: 4 } }, // lg screen
      { breakpoint: 768, settings: { slidesToShow: 3 } }, // md screen
      { breakpoint: 640, settings: { slidesToShow: 2 } }, // sm screen
      { breakpoint: 480, settings: { slidesToShow: 1 } }, // very small devices
    ],
  };

  if (isLoading || isStocksLoading) return <p>Loading watchlist...</p>;
  if (error) return <p>Error loading watchlist: {error.message}</p>;
  if (!stocksData?.data || !Array.isArray(stocksData.data))
    return <p>No data</p>;

  const watchList = stocksData.data;
  let finalStocks = [...watchList];

  if (watchList.length < 4 && allStocksData?.data?.length) {
    const remainingCount = 4 - watchList.length;

    const extraStocks = allStocksData.data
      .filter(
        (stock) =>
          !watchList.some(
            (watchItem) => watchItem.stock.symbol === stock.symbol
          )
      )
      .slice(0, remainingCount)
      .map((stock) => ({ stock }));

    finalStocks = [...finalStocks, ...extraStocks];
  }

  return (
    <div className="relative mt-5">
      <SliderCarousel direction="left" theme={theme} />
      <Slider {...settings} className="max-w-[1210px] p-4">
        {finalStocks.map((stock, index) => (
          <div key={index}>
            <div className="px-2 flex gap-8">
              <div
                className={`w-[300px] h-[174px] rounded-[12px] p-4 space-y-5 my-2 ${
                  theme === "dark"
                    ? "bg-dark-bg text-dark-text"
                    : "bg-light-bg text-light-text shadow-md"
                }`}
              >
                <div className="flex items-center gap-4 h-12">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold bg-gradient-to-br from-[#7F00FF] to-[#E100FF] text-white">
                    {stock?.stock.company_name?.charAt(0) || "?"}
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">
                      {stock?.stock.company_name || "Unknown"}
                    </p>
                    <p className="text-[12px]">{stock?.stock.symbol || "-"}</p>
                  </div>
                </div>

                <p>${stock?.stock.current_price?.toLocaleString() || "0.00"}</p>

                <div className="text-accent-green font-semibold flex justify-between">
                  <p>PNL Daily</p>
                  <p>+${stock?.stock.open_price || 0}</p>
                  <p>+{stock?.stock.close_price || 0}%</p>
                </div>
              </div>
            </div>

            {(index + 1) % 2 === 0 && <div className="w-4" />}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioTracker;
