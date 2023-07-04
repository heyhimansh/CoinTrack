import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import down from "../images/down.png";
import up from "../images/up.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, coinColor }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data.history[i].price);
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i]?.timestamp * 1000
      ).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: `Price of ${coinName} in USD`,
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: `${coinColor}`,
        borderColor: `${coinColor}`,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <br />
      <br />
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
          <span className="graph">
          {coinHistory?.data?.change >= 0 ? (
            <img width="40" height="40"  src={up} />
          ) : (
            <img width="40" height="40" src={down} />
          )}
        </span>
        </Title>
        
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            {" "}
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <br />
      <Line data={data} options={options} />
      <br />
    </>
  );
};

export default LineChart;
