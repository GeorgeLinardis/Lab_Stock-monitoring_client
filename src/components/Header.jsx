import React from "react";

import { formatMoney, percentageOf, subtract } from "../utils.js";

const Header = () => {
  const currentPortfolioTotal = 11000;
  const capital = 1110;
  const currentProfitLoss = subtract(currentPortfolioTotal, capital);
  const currentProfitLossPercentage = percentageOf(currentProfitLoss, capital).percent.toFixed(2);
  return (
    <div className="min-vh-100 bg-dark text-light py-4">
      <div className="container">
        <div className="d-flex flex-sm-row flex-column justify-content-sm-between justify-content-end align-items-sm-end align-items-start mb-3">
          <div className="d-flex align-items-center gap-2">
            <h2 className="m-0 mb-2 mb-sm-0">Stocks Watcher</h2>
          </div>
          <div className="d-flex gap-4 text-start text-md-end">
            <div className="d-flex flex-column align-items-between justify-content-end">
              <div className="small text-secondary">Current</div>
              <div>{`${formatMoney(currentPortfolioTotal)}`}</div>
            </div>
            <div className="d-flex flex-column align-items-between justify-content-end">
              <div className="small text-secondary">Capital</div>
              <div>{`${formatMoney(capital)}`}</div>
            </div>
            <div className="d-flex flex-column align-items-between justify-content-end">
              <div className="small text-secondary">Change</div>
              <div
                className={`fw-bold ${currentProfitLossPercentage > 0 ? 'text-success' : currentProfitLossPercentage < 0 ? 'text-danger' : ''}`}
              >
                {formatMoney(currentProfitLoss)}
              </div>
            </div>
            <div className="d-flex flex-column align-items-between justify-content-end">
              <div className="small text-secondary">Δ%</div>
              <div
                className={`fw-bold ${currentProfitLossPercentage > 0 ? 'text-success' : currentProfitLossPercentage < 0 ? 'text-danger' : ''}`}
              >
                {currentProfitLossPercentage}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

      export default Header;
