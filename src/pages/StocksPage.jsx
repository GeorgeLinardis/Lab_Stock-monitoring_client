import React from "react";
import { Link } from "react-router-dom";

import {
  FaBinoculars, FaBriefcase,
  FaRegChartBar, FaEyeSlash, FaMinusCircle
} from "react-icons/fa";

import {
  getLocaleByCountry, formatMoney, formatNumber,
  formatUnixTime,
} from "../utils.js";
import ScoreBadge from "../components/ScoreBadge.jsx";
import ChangeBadge from "../components/ChangeBadge.jsx";

const StocksPage = () => {
  const usMarketSP500Stocks = [
    {
      "profile": {
        "symbol": "A",
        "name": "Agilent Technologies Inc.",
        "exchange": "NYSE",
        "currency": "USD",
        "country": "United States",
        "type": "Common Stock"
      },
      "quote": {
        "datetime": "2025-11-05",
        "timestamp": 1762353000,
        "lastQuoteAt": 1762353000,
        "open": 143.14999,
        "high": 147.49001,
        "low": 142.46001,
        "close": 146.77,
        "volume": 1382935,
        "previousClose": 146.080002,
        "change": 0.69000244,
        "percentChange": 0.47234559,
        "averageVolume": 1525814,
        "isMarketOpen": false,
        "fiftyTwoWeek": {
          "low": 96.43,
          "high": 153.84,
          "lowChange": 50.34,
          "highChange": -7.069992,
          "lowChangePercent": 52.20368,
          "highChangePercent": -4.59568,
          "range": "96.430000 - 153.839996"
        }
      }
    },
    {
      "profile": {
        "symbol": "AAPL",
        "name": "Apple Inc.",
        "exchange": "NASDAQ",
        "currency": "USD",
        "country": "United States",
        "type": "Common Stock"
      },
      "quote": {
        "datetime": "2025-11-05",
        "timestamp": 1762353000,
        "lastQuoteAt": 1762353000,
        "open": 268.59,
        "high": 271.70001,
        "low": 266.92999,
        "close": 270.14001,
        "volume": 40379287,
        "previousClose": 270.040009,
        "change": 0.1000061,
        "percentChange": 0.03703381,
        "averageVolume": 50442059,
        "isMarketOpen": false,
        "fiftyTwoWeek": {
          "low": 169.21001,
          "high": 277.32001,
          "lowChange": 100.93001,
          "highChange": -7.17999,
          "lowChangePercent": 59.64778,
          "highChangePercent": -2.58906,
          "range": "169.210007 - 277.320007"
        }
      }
    }
  ];
  const watchingStockSymbols = ['A'];
  const portfolioStockSymbols = ['AAPL'];
  const isInWatchList = symbol =>  watchingStockSymbols.includes(symbol);
  const isInPortfolio = symbol =>  portfolioStockSymbols.includes(symbol);

  return (
    <div className="card bg-dark border-secondary">
      <div className="card-header d-flex flex-wrap justify-content-center align-items-center border-secondary">
        <div className="fw-semibold text-white">
          <FaRegChartBar className="me-2" />
          US Market — S&P 500
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-dark align-middle mb-0">
          <thead className="text-secondary">
          <tr>
            <th className="text-center">Symbol</th>
            <th>Name</th>
            <th>Exchange</th>
            <th className="text-end">Price</th>
            <th className="text-end">52W</th>
            <th className="text-end">Volume</th>
            <th className="text-end">Last Update</th>
            <th className="text-end">Score</th>
            <th className="text-center">Actions</th>
          </tr>
          </thead>
          <tbody>
          {usMarketSP500Stocks.map(({profile, quote}) => {
            return (
              <tr key={profile.symbol}>
                <td className="text-uppercase text-center">{profile.symbol}</td>
                <td className="text-truncate" title={profile.name}>{profile.name}</td>
                <td className="text-secondary">{profile.exchange}</td>
                <td className="text-end">
                  <div className=" d-flex align-items-end justify-content-end flex-column">
                    <span>
                      {`${formatMoney((quote.close || 0), profile.currency, getLocaleByCountry(profile.country))}`}
                    </span>
                    <ChangeBadge percent={quote.percentChange}/>
                  </div>
                </td>
                <td className="small">
                  <div className="d-flex flex-column justify-content-end align-items-end text-secondary">
                    <span>
                      {`${formatMoney((quote.fiftyTwoWeek.low || 0), profile.currency, getLocaleByCountry(profile.country))}`}
                    </span>
                    <span>
                      {`${formatMoney((quote.fiftyTwoWeek.high || 0), profile.currency, getLocaleByCountry(profile.country))}`}
                    </span>
                  </div>
                </td>
                <td className="text-truncate text-end small">{formatNumber(quote.averageVolume)}</td>
                <td className="text-truncate text-end small">{formatUnixTime(quote.lastQuoteAt)}</td>
                <td>
                  <Link
                    to={`/stock-score/${profile.symbol}`}
                  >
                    <ScoreBadge
                      score={75}
                      containerClassName="d-flex align-items-center justify-content-end"
                      size="lg"
                    />
                  </Link>
                </td>
                <td className="text-center">
                  <div className="btn-group btn-group-sm btn-group-vertical gap-3" role="group">
                    {isInWatchList(profile.symbol)
                      ? (
                        <button
                          className="btn btn-outline-info me-2 d-inline-flex align-items-center justify-content-center"
                          onClick={() => {}}
                        >
                          <FaEyeSlash className="me-2"/>
                          Unwatch
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-info me-2 d-inline-flex align-items-center justify-content-center"
                          onClick={() => {}}
                        >
                          <FaBinoculars className="me-2"/>
                          Watch
                        </button>
                      )}
                    {isInPortfolio(profile.symbol)
                      ? (
                        <button
                          className="btn btn-outline-danger me-2 d-inline-flex align-items-center justify-content-center"
                          onClick={() => {}}
                        >
                          <FaMinusCircle className="me-2"/>
                          Move out
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-success me-2 d-inline-flex align-items-center justify-content-center"
                          onClick={() => {}}
                        >
                          <FaBriefcase className="me-2"/>
                          Add in
                        </button>
                      )}
                  </div>
                </td>
              </tr>
            )
          })
          }
          {usMarketSP500Stocks.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center text-secondary">No matches</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StocksPage
