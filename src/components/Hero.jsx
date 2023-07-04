import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";
import Feature from "./Feature";

// var cryptoani =require('./cryptoani.html');

// import cryptoani from cryptoani.html

const { Title } = Typography;

const Hero = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(globalStats);

  if (isFetching) return <Loader />;

  return (
    <div className="hero">
      <Title level={2} className="hero-header">
        Stay ahead of the game and keep your cryptos in check, with a watchful
        eye on every move.
      </Title>
      <div className="text-effect">
        <h1>
          <span> Analyze. </span>
          <span> Follow. </span>
          <span> Trace. </span>
        </h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="hero-header">
        <a href="javascript:;" className="scroll-down mouse effect2">
          <span></span>
        </a>
      </div>
      <br />

      {/* // add some good animation here or illustartion */}
      
      <Feature/>

      <div className="features">
        <h1> ~ ~ ~ ~ ~ ~ ~ ~</h1>
        <Title level={5} className="content">
          Our crypto tracking website provides real-time data updates,
          interactive{" "}
          <span class="underline--magical">
            visual graphs, aggregated news, comprehensive exchange listings,
            live market updates, portfolio tracking, personalized price alerts,
            ICO/token sale tracking,
          </span>{" "}
          and a user-friendly interface for seamless navigation. Stay informed,
          analyze trends, discover new opportunities, and connect with a vibrant
          crypto community all in one place.
        </Title>
        <br />
        <Title level={5} className="content">
          Furthermore, our platform offers comprehensive{" "}
          <span class="underline--magical2">
            listings of various crypto exchanges, allowing you to compare and
            choose the best platforms for your trading needs.
          </span>{" "}
          Stay connected to the market with live updates, ensuring you never
          miss out on important developments.{" "}
        </Title>
        <h1> ~ ~ ~ ~ ~ ~ ~ ~</h1>
      </div>
    </div>
  );
};

export default Hero;
