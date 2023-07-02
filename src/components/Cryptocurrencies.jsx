import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

import down from "../images/down.png";
import up from "../images/up.png";

// import MyLoader from './Loader'

// MILLIFY :

// npm i millify

// Converts long numbers into pretty, human-readable strings.

// Before 😒	After 🎉
// 2000	'2K'
// 10000	'10k'
// 42500	'42.5 kg'
// 1250000	'1.25 MB'
// 2700000000	'2.7 bil'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    // cryptosList?.data?.coins ::   we are going inside the cryptolist list
    // cryptosList  >> data >> coins   so inside coins we filter out our data

    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* // gutter to give the dimension to the card */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          // xs : extra small
          // sm : small
          // lg : large device

          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <div className="crypto-graph">
                  <span >Daily Change: {millify(currency.change)}%</span>

                  <span className="cry-change">
                    {currency.change >= 0 ? (
                      <img width="26" height="26" src={up} />
                    ) : (
                      <img width="26" height="26" src={down} />
                    )}
                  </span>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
