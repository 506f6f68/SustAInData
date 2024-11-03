import React from 'react';
import { Layout, Row, Col, Card, Typography } from 'antd';
import './css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const suppliers = {
  solarEnergy: [
    { name: 'SunPower Corporation', image: 'images/sunpower.jpg' },
    { name: 'Tesla Energy', image: 'images/tesla.jpeg' },
    { name: 'First Solar', image: 'images/First_Solar_logo.jpeg' },
    { name: 'NextEra Energy Resources ', image: 'images/Nextra.jpeg' },
    { name: 'Sunnova', image: 'images/Sunnova.jpeg' },
  ],
  coolingSystems: [
    { name: 'Vertiv', image: 'images/vertiv.jpeg' },
    { name: 'Munters', image: 'images/Munters.jpeg' },
    { name: 'Rittal', image: 'images/rittal.jpeg' },
    { name: 'Schneider Electric', image: 'images/Schneider.jpg' },
    { name: 'Stulz', image: 'images/stulz.jpeg' },
  ],
  serverRacks: [
    { name: 'Vertiv', image: 'images/vertiv.jpeg' },
    { name: 'Chatsworth Products', image: 'images/chatsworth.png' },
    { name: 'Panduit', image: 'images/panduit-logo.png' },
    { name: 'Rittal', image: 'images/Rittal-Logo_2010.png' },
    { name: 'APC by Schneider Electric', image: 'images/APC.jpeg' },
  ],
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const MarketPlace = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="/images/hero-bg.png" alt="" />
        </div>
      </div>

      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <span className="navbar-brand-text">sustAIn data</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link blue-text" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link blue-text" href="/chatbot">Chatbot</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link blue-text" href="/marketplace">MarketPlace <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <Content className="marketplace_section">
        <div className="container">
          <Title level={2} style={{ textAlign: 'center', color: 'green' }}>MarketPlace</Title>
          {Object.keys(suppliers).map((category) => (
            <div key={category} style={{ marginBottom: '40px' }}>
              <Title level={3} style={{ color: 'green' }}>{capitalizeFirstLetter(category.replace(/([A-Z])/g, ' $1').trim())}</Title>
              <Row gutter={16}>
                {suppliers[category].map((supplier, index) => (
                  <Col span={8} key={index}>
                    <Card
                      hoverable
                      cover={<img alt={supplier.name} src={supplier.image} />}
                      style={{ marginBottom: '20px' }}
                    >
                      <Card.Meta title={supplier.name} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </Content>

    </div>
  );
};

export default MarketPlace;