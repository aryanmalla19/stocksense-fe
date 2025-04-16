import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Slider from "react-slick";
import SliderCarousel from "../../components/stocks/SliderCarousel";

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

  const stocksData = [
    {
      companyName: "Apple Inc",
      symbol: "AAPL",
      currentValue: 23738,
      pnlValue: 189.91,
      pnlPercent: 24.68,
    },
    {
      companyName: "Microsoft Corp",
      symbol: "MSFT",
      currentValue: 21455,
      pnlValue: 152.34,
      pnlPercent: 18.11,
    },
    {
      companyName: "Amazon.com",
      symbol: "AMZN",
      currentValue: 19432,
      pnlValue: 220.45,
      pnlPercent: 22.68,
    },
    {
      companyName: "Tesla Inc",
      symbol: "TSLA",
      currentValue: 25421,
      pnlValue: 300.0,
      pnlPercent: 35.02,
    },
    {
      companyName: "Alphabet Inc",
      symbol: "GOOGL",
      currentValue: 18342,
      pnlValue: 145.67,
      pnlPercent: 16.42,
    },
    {
      companyName: "Meta Platforms",
      symbol: "META",
      currentValue: 16555,
      pnlValue: 180.78,
      pnlPercent: 20.98,
    },
    {
      companyName: "NVIDIA Corp",
      symbol: "NVDA",
      currentValue: 28991,
      pnlValue: 410.23,
      pnlPercent: 41.55,
    },
    {
      companyName: "Netflix Inc",
      symbol: "NFLX",
      currentValue: 13420,
      pnlValue: 95.5,
      pnlPercent: 12.88,
    },
  ];

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
                    {stock.companyName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">
                      {stock.companyName}
                    </p>
                    <p className="text-[12px]">{stock.symbol}</p>
                  </div>
                </div>

                <p>${stock.currentValue.toLocaleString()}</p>

                <div className="text-accent-green font-semibold flex justify-between">
                  <p>PNL Daily</p>
                  <p>+${stock.pnlValue}</p>
                  <p>+{stock.pnlPercent}%</p>
                </div>
              </div>
            </div>

            {/* Spacer div after every 2 items */}
            {(index + 1) % 2 === 0 && <div className="w-4" />}
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioTracker;
