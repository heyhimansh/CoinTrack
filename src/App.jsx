import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Exchange from "./components/Exchange";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchange />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CoinTrcak <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
            <Link style={{ color: "white" }} to="/exchanges">
              Exchanges
            </Link>
            <Link style={{ color: "white" }} to="/news">
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
