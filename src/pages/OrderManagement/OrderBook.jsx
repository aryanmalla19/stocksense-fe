import React from "react";

const buyOrders = [
  { order: 3, qty: 270, price: 370 },
  { order: 3, qty: 160, price: 368 },
  { order: 2, qty: 170, price: 365 },
  { order: 1, qty: 200, price: 364 },
  { order: 1, qty: 1000, price: 360 },
];

const sellOrders = [
  { price: 375, qty: 430, order: 3 },
  { price: 376, qty: 200, order: 1 },
  { price: 377, qty: 133, order: 1 },
  { price: 380, qty: 488, order: 4 },
  { price: 382, qty: 160, order: 3 },
];

const OrderBook = ({ theme }) => {
  const totalBuyQty = buyOrders.reduce((sum, item) => sum + item.qty, 0);
  const totalSellQty = sellOrders.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div
      className={`border-2 m-4 ${
        theme === "dark" ? "border-gray-600" : "border-gray-200"
      }  rounded-lg overflow-hidden w-full max-w-4xl`}
    >
      <div className="grid grid-cols-2 text-white text-center font-bold">
        <div
          className={` py-2 ${
            theme === "dark" ? "bg-gray-900" : "bg-blue-600"
          }`}
        >
          TOP 5 BUY
        </div>
        <div
          className={` py-2 ${theme === "dark" ? "bg-gray-800" : "bg-red-600"}`}
        >
          TOP 5 SELL
        </div>
      </div>

      <div className="grid grid-cols-2 text-sm text-center">
        {/* Buy Section */}
        <div
          className={`grid grid-cols-3 border-r border-b ${
            theme === "dark" ? "border-gray-600" : "border-gray-200"
          }  font-semibold`}
        >
          <div className="py-1 border border-gray-500">ORDER</div>
          <div className="py-1 border border-gray-500">QTY</div>
          <div className="py-1 border border-gray-500">PRICE</div>
          {buyOrders.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="py-1 border border-gray-500">{item.order}</div>
              <div className="py-1 border border-gray-500">{item.qty}</div>
              <div className="py-1 border border-gray-500">{item.price}</div>
            </React.Fragment>
          ))}
          <div className="col-span-3 py-1 font-bold">Total {totalBuyQty}</div>
        </div>

        {/* Sell Section */}
        <div className="grid grid-cols-3 font-semibold">
          <div className="py-1 border border-gray-500">PRICE</div>
          <div className="py-1 border border-gray-500">QTY</div>
          <div className="py-1 border border-gray-500">ORDER</div>
          {sellOrders.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="py-1 border border-gray-500">{item.price}</div>
              <div className="py-1 border border-gray-500">{item.qty}</div>
              <div className="py-1 border border-gray-500">{item.order}</div>
            </React.Fragment>
          ))}
          <div className="col-span-3 py-1 font-bold">Total {totalSellQty}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
