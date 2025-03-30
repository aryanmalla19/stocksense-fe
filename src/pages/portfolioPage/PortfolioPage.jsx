import React, { useState } from "react";
import "./Portfolio.css"; // You'll need to create this CSS file

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [watchlist, setWatchlist] = useState([
    "AAPL",
    "MSFT",
    "TSLA",
    "AMZN",
    "GOOGL",
  ]);
  const [portfolio, setPortfolio] = useState([
    { symbol: "AAPL", shares: 10, avgPrice: 145.32, currentPrice: 182.63 },
    { symbol: "MSFT", shares: 5, avgPrice: 245.76, currentPrice: 420.72 },
    { symbol: "TSLA", shares: 8, avgPrice: 210.45, currentPrice: 175.25 },
  ]);

  // Calculate portfolio totals
  const portfolioValue = portfolio.reduce(
    (total, stock) => total + stock.shares * stock.currentPrice,
    0
  );
  const investedAmount = portfolio.reduce(
    (total, stock) => total + stock.shares * stock.avgPrice,
    0
  );
  const profitLoss = portfolioValue - investedAmount;
  const profitLossPercent = (profitLoss / investedAmount) * 100;

  return (
    <div className="stock-portfolio">
      {/* Header */}
      <header className="portfolio-header">
        <h1>Stock Portfolio Tracker</h1>
        <div className="portfolio-summary">
          <div className="summary-card">
            <h3>Portfolio Value</h3>
            <p>
              $
              {portfolioValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="summary-card">
            <h3>Today's Change</h3>
            <p className={profitLoss >= 0 ? "positive" : "negative"}>
              {profitLoss >= 0 ? "+" : ""}
              {profitLoss.toFixed(2)} ({profitLossPercent.toFixed(2)}%)
            </p>
          </div>
          <div className="summary-card">
            <h3>Invested Amount</h3>
            <p>
              $
              {investedAmount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="portfolio-content">
        {/* Navigation Tabs */}
        <nav className="portfolio-tabs">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={activeTab === "holdings" ? "active" : ""}
            onClick={() => setActiveTab("holdings")}
          >
            Holdings
          </button>
          <button
            className={activeTab === "watchlist" ? "active" : ""}
            onClick={() => setActiveTab("watchlist")}
          >
            Watchlist
          </button>
          <button
            className={activeTab === "analysis" ? "active" : ""}
            onClick={() => setActiveTab("analysis")}
          >
            Analysis
          </button>
        </nav>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "overview" && (
            <div className="overview-tab">
              <h2>Portfolio Overview</h2>
              <div className="chart-placeholder">
                {/* This would be replaced with an actual chart component */}
                <p>[Portfolio Performance Chart]</p>
              </div>
              <div className="sector-allocation">
                <h3>Sector Allocation</h3>
                <div className="allocation-chart">
                  {/* Sector allocation visualization would go here */}
                  <p>[Sector Allocation Pie Chart]</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "holdings" && (
            <div className="holdings-tab">
              <h2>Your Holdings</h2>
              <table className="holdings-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Shares</th>
                    <th>Avg Price</th>
                    <th>Current Price</th>
                    <th>Value</th>
                    <th>P/L</th>
                    <th>P/L %</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.map((stock, index) => {
                    const value = stock.shares * stock.currentPrice;
                    const cost = stock.shares * stock.avgPrice;
                    const pl = value - cost;
                    const plPercent = (pl / cost) * 100;

                    return (
                      <tr key={index}>
                        <td>{stock.symbol}</td>
                        <td>{stock.shares}</td>
                        <td>${stock.avgPrice.toFixed(2)}</td>
                        <td>${stock.currentPrice.toFixed(2)}</td>
                        <td>${value.toFixed(2)}</td>
                        <td className={pl >= 0 ? "positive" : "negative"}>
                          {pl >= 0 ? "+" : ""}
                          {pl.toFixed(2)}
                        </td>
                        <td className={pl >= 0 ? "positive" : "negative"}>
                          {pl >= 0 ? "+" : ""}
                          {plPercent.toFixed(2)}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "watchlist" && (
            <div className="watchlist-tab">
              <h2>Watchlist</h2>
              <div className="watchlist-container">
                {watchlist.map((symbol, index) => (
                  <div key={index} className="watchlist-item">
                    <span className="symbol">{symbol}</span>
                    <span className="price">$---.--</span>
                    <span className="change">+0.00%</span>
                    <button
                      className="remove-btn"
                      onClick={() =>
                        setWatchlist(
                          watchlist.filter((item) => item !== symbol)
                        )
                      }
                    >
                      ×
                    </button>
                  </div>
                ))}
                <div className="add-stock">
                  <input type="text" placeholder="Add stock symbol..." />
                  <button>Add</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analysis" && (
            <div className="analysis-tab">
              <h2>Portfolio Analysis</h2>
              <div className="analysis-grid">
                <div className="analysis-card">
                  <h3>Risk Analysis</h3>
                  <p>[Risk metrics visualization]</p>
                </div>
                <div className="analysis-card">
                  <h3>Diversification</h3>
                  <p>[Diversification metrics]</p>
                </div>
                <div className="analysis-card">
                  <h3>Performance vs Benchmarks</h3>
                  <p>[Comparison charts]</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>
          Data provided by financial data API | Last updated:{" "}
          {new Date().toLocaleString()}
        </p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
