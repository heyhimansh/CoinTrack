import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  console.log(cryptoNews);

  // if (!cryptoNews) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}

      {cryptoNews.articles.map((news) => (
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.publisher.name}
                </Title>
                <img
                  src={demoImage}
                  alt=""
                />
              </div>
              <p>
              {news.title}...
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                       demoImage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.publisher.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.published_date).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}

      {/* <Col xs={24} sm={12} lg={8}>
        <Card hoverable className="news-card">
          <a href="#" target="_blank" rel="noreferrer">
            <div className="news-image-container">
              <Title className="news-title" level={4}>
                Crypto
              </Title>
              <img src={demoImage} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur impedit provident est numquam tempora eveniet omnis
              debitis, itaque aliquid ab.
            </p>
            <div className="provider-container">
              <div>
                <Avatar src="#" alt="" />
                <Text className="provider-name">werhjkjhg</Text>
              </div>
              <Text>Hello</Text>
            </div>
          </a>
        </Card>
      </Col> */}
    </Row>
  );
};

export default News;
