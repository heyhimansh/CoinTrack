import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const demoImage =
  "https://cdn-icons-png.flaticon.com/512/2965/2965879.png";

const demoOrg =
  "https://cdn-icons-png.flaticon.com/512/1323/1323734.png";

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

  if (!cryptoNews) return <Loader />;

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

      {cryptoNews.data.items.map((news) => (
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable className="news-card">
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}                 
                </Title>
                <img
                   style={{ maxWidth: '25%', maxHeight: '10%' }}
                  src={demoImage}
                  alt=""
                />
              </div>
              <p>
              {news.description}...
              </p>
              <div className="provider-container">
                <div>
                
                  <Avatar
                    src={
                      demoOrg
                    }
                    alt=""
                  />
                  {/* <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" /> */}
                  <Text className="provider-name">
                  {`${news.title.split(' ')[0]} News`}     
                  </Text>
                </div>
                {/* <Text>
                  {moment(news.published_date).startOf("ss").fromNow()}
                </Text> */}
              </div>
            </a>
          </Card>
        </Col>
      ))}


{/* 
{cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}




      <Col xs={24} sm={12} lg={8}>
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
