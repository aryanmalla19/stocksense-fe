import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Slider from "react-slick";
import SliderCarousel from "../../components/stocks/SliderCarousel";
import useStocks from "../../hooks/stockshooks/useStocks";

const PortfolioTracker = () => {
  const { theme } = useContext(ThemeContext);

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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const { data: response } = useStocks();
  const stocks = response?.data || [];

  return (
    <div className="relative">
      <SliderCarousel direction="left" theme={theme} />
      <Slider {...settings} className="max-w-[1210px]  p-4">
        {stocks.map((stock, index) => (
          <div key={index}>
            <div className="px-2 flex gap-8">
              <div
                className={`w-[300px] h-[174px] rounded-[12px] p-4 space-y-5 ${
                  theme === "dark"
                    ? "bg-dark-bg text-dark-text"
                    : "bg-light-bg text-light-text"
                }`}
              >
                <div className="flex items-center gap-4 h-12">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold bg-blue-400 text-white">
                    {stock.company_name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold ">
                      {stock.company_name}
                    </p>
                    <p className="text-[12px]">{stock.symbol}</p>
                  </div>
                </div>

                <p className="text-red-400">${stock.current_price}</p>

                <div className="text-accent-green font-semibold flex justify-between">
                  <p>PNL Daily</p>
                  <p>+${stock.high_price}</p>
                  <p>+{stock.low_price}%</p>
                </div>
              </div>
            </div>

            {/* Spacer div after every 2 items */}
            {(index + 1) % 2 === 0 && <div className="w-4" />}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioTracker;
