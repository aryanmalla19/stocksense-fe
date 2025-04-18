import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Slider from "react-slick";
import SliderCarousel from "../../components/stocks/SliderCarousel";
import useFetchWatchList from "../../hooks/stockshooks/useFetchWatchList"; // adjust the path accordingly
import LoadingSpinner from "../../components/common/LoadingSpinner";

const PortfolioTracker = () => {
  const { theme } = useContext(ThemeContext);
  const { data: stocksData, isLoading, error } = useFetchWatchList();
  console.log(stocksData);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (isLoading) return <p>Loading watchlist...</p>;
  if (error) return <p>Error loading watchlist: {error.message}</p>;
  if (!stocksData || !Array.isArray(stocksData)) return <p>No stocks found.</p>;

  return (
    <div className="relative">
      <SliderCarousel direction="left" />
      <Slider {...settings} className="max-w-[1210px] p-4">
        {stocksData.map((stock, index) => (
          <React.Fragment key={index}>
            <div className="px-2 flex gap-8">
              <div
                className={`w-[300px] h-[174px] rounded-[12px] p-4 space-y-5 ${
                  theme === "dark"
                    ? "bg-dark-bg text-dark-text"
                    : "bg-light-bg text-light-text"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold bg-blue-400 text-white">
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
                  <p>+${stock?.stock.pnlValue || 0}</p>
                  <p>+{stock?.stock.pnlPercent || 0}%</p>
                </div>
              </div>
            </div>

            {(index + 1) % 2 === 0 && <div className="w-4" />}
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioTracker;
