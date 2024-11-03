import React from 'react';
import { Card, Col, Row, Typography, Statistic, Progress } from 'antd';
import { DashboardOutlined, EnvironmentOutlined, BuildOutlined, ThunderboltOutlined, DollarOutlined, CloudOutlined, FireOutlined, FileProtectOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Dashboards = ({ planTitle, locationDetails, coolingTech, energyDetails, operationalCost, emissions, waterUsage, regulations }) => {
  // Split location details by comma and join with line breaks
  const formattedLocationDetails = locationDetails.split(',').join(',\n');

  return (
    <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
      <Title level={2}>{planTitle} <DashboardOutlined /></Title>
      <Row gutter={16}>
        <Col span={24}>
          <Title level={3}>Solutions</Title>
        </Col>
        <Col span={8}>
          <Card title={<><EnvironmentOutlined /> Location</>} bordered={false} style={{ background: 'linear-gradient(135deg, #a8e063, #56ab2f)', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Title level={1} style={{ color: 'white', textAlign: 'center', whiteSpace: 'pre-line' }}>{formattedLocationDetails}</Title>
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<><BuildOutlined /> Cooling Tech</>} bordered={false} style={{ background: '#ffffff', height: '100%' }}>
            <Title level={5}>Building</Title>
            <Text>Tech Name: {coolingTech.building.techName}</Text><br />
            <Text>Supplier: {coolingTech.building.supplier}</Text>
            <Title level={5}>Server</Title>
            <Text>Tech Name: {coolingTech.server.techName}</Text><br />
            <Text>Supplier: {coolingTech.server.supplier}</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<><ThunderboltOutlined /> Energy</>} bordered={false} style={{ background: 'linear-gradient(135deg, #a8e063, #56ab2f)', height: '100%' }}>
            <Title level={4}>{energyDetails.type}</Title><br />
            <Title level={5}>{energyDetails.supplier}</Title><br />
            <Text>Renewable Percentage:</Text><br />
            <Progress percent={energyDetails.renewablePercentage} status="active" />
          </Card>
        </Col>
        <Col span={24}>
          <Title level={3}>Results</Title>
        </Col>
        <Col span={8}>
          <Card title={<><DollarOutlined /> Operational Cost</>} bordered={false} style={{ background: '#ffffff', height: '100%' }}>
            <Statistic title="Total Cost" value={operationalCost.total} prefix="$" />
            <Text style={{ fontSize: '12px' }}>Utility: ${operationalCost.utility}</Text><br />
            <Text style={{ fontSize: '12px' }}>Rent: ${operationalCost.rent}</Text><br />
            <Text style={{ fontSize: '12px' }}>Staff: ${operationalCost.staff}</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<><CloudOutlined /> Emissions</>} bordered={false} style={{ background: 'linear-gradient(135deg, #a8e063, #56ab2f)', height: '100%' }}>
            <Statistic title="CO2 eq tons/year" value={emissions} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<><FireOutlined /> Water Usage</>} bordered={false} style={{ background: '#ffffff', height: '100%' }}>
            <Statistic title="L/year" value={waterUsage} />
          </Card>
        </Col>
        <Col span={24} style={{ marginTop: '20px' }}>
          <Card title={<><FileProtectOutlined /> Regulations</>} bordered={false} style={{ background: 'linear-gradient(135deg, #a8e063, #56ab2f)', height: '100%' }}>
            <Text>{regulations}</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboards;