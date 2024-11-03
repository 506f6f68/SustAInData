// ChatbotPage.js
import React, { useState } from 'react';
import { Layout, Input, Button, List, Typography, Card, Avatar, Spin, Form, Select, InputNumber } from 'antd';
import { UserOutlined, RobotOutlined, LoadingOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import './css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';
import Dashboards from './Dashboards'; // Import the Dashboards component

const { Header, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialQuestionsAnswered, setInitialQuestionsAnswered] = useState(false);
  const [initialFormData, setInitialFormData] = useState({});
  const [summary, setSummary] = useState(''); // Initialize summary state as an empty string
  const [showDashboard, setShowDashboard] = useState(false); // Add state to control dashboard visibility
  const [dashboardData, setDashboardData] = useState([]); // Add state to store dashboard data

  const handleInitialSubmit = (values) => {
    console.log('Received values:', values);
    setInitialFormData(values);
    setInitialQuestionsAnswered(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput(''); // Clear the text box immediately

    setLoading(true); // Show loading indicator

    // Combine form data with input text
    const requestData = {
      ...initialFormData,
      text: input,
    };

    // Send the combined data to the API endpoint
    const response = await fetch('http://127.0.0.1:5000/process_text/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.answer };
    setMessages([...messages, userMessage, botMessage]);
    setLoading(false); // Hide loading indicator
  };

  const handleGenerateSummary = async () => {
    setLoading(true); // Set loading state to true
    try {
      // Fetch the summary from the /summary endpoint
      const summaryResponse = await fetch('http://127.0.0.1:5000/summary', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Parse the response
      const summaryData = await summaryResponse.json();

      // Update summary state
      setSummary(summaryData.summary);

      // Map the summaryData.plans to the format required by Dashboards component
      const mappedDashboardData = summaryData.plans.map(plan => ({
        planTitle: plan.Location,
        locationDetails: plan.Location,
        coolingTech: {
          building: { techName: plan.CoolingTech_air_name, supplier: plan.CoolingTech_air_supplier },
          server: { techName: plan.CoolingTech_server_name, supplier: plan.CoolingTech_server_supplier }
        },
        energyDetails: {
          type: plan.Energy_Choice,
          supplier: plan.Energy_Choice,
          renewablePercentage: parseInt(plan.RenewablePercentage)
        },
        operationalCost: {
          total: parseInt(plan.OperatingCost.replace(/[^0-9]/g, '')),
          utility: parseInt(plan.GridEnergyCost.replace(/[^0-9]/g, '')),
          rent: 0, // Assuming rent is not provided
          staff: 0 // Assuming staff cost is not provided
        },
        emissions: parseInt(plan.CarbonEmissions.replace(/[^0-9]/g, '')),
        waterUsage: parseInt(plan.WaterUsage.replace(/[^0-9]/g, '')),
        regulations: plan.RegulatoryCompliance
      }));

      // Update dashboard data state
      setDashboardData(mappedDashboardData);
      setShowDashboard(true); // Show the dashboard after generating summary
    } catch (error) {
      console.error("Error generating summary or fetching dashboard data:", error);
      setSummary("Error generating summary. Please try again.");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const windTurbineIcon = (
    <img src="images/fan.png" alt="Loading" style={{ width: 25, height: 25 }} className="spin" />
  );

  //Sample data for the dashboard
  //const dashboardData = {
  //  planTitle: "Plan A",
  //  locationDetails: "Los Angeles, CA",
  //  coolingTech: {
  //    building: { techName: "HVAC", supplier: "Supplier Name" },
  //    server: { techName: "Submerging servers in nonconductive liquid", supplier: "Supplier Name" }
  //  },
  //  energyDetails: {
  //    type: "Solar/Mixed",
  //    supplier: "PV Solar California",
  //    renewablePercentage: 70
  //  },
  //  operationalCost: {
  //    total: 10000,
  //    utility: 5000,
  //    rent: 2000,
  //    staff: 3000
  //  },
  //  emissions: 120,
  //  waterUsage: 500000,
  //  regulations: "Regulations to be aware/consider"
  //};

  return (
    <div className="chatbot_page">
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
                <li className="nav-item active">
                  <a className="nav-link blue-text" href="/chatbot">Chatbot <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link blue-text" href="/marketplace">MarketPlace</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <Content className="chatbot_section">
        <div className="container">
          <Title level={2} style={{ textAlign: 'center' }}>Chat with our Data Center Consultant</Title>
          {!initialQuestionsAnswered ? (
            <Form
              layout="vertical"
              onFinish={handleInitialSubmit}
              style={{ maxWidth: '600px', margin: '0 auto' }}
            >
              <Form.Item
                name="tier"
                label="Choose Tier"
                rules={[{ required: true, message: 'Please select a tier!' }]}
              >
                <Select placeholder="Select a tier">
                  <Option value="1">Tier 1</Option>
                  <Option value="2">Tier 2</Option>
                  <Option value="3">Tier 3</Option>
                  <Option value="4">Tier 4</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="servers"
                label="Number of Servers"
                rules={[{ required: true, message: 'Please input the number of servers!' }]}
              >
                <InputNumber min={1} placeholder="Enter number of servers" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="budget"
                label="Operational Budget"
                rules={[{ required: true, message: 'Please input your operational budget!' }]}
              >
                <InputNumber min={0} placeholder="Enter operational budget" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          ) : (
            <>
              <div id="chat-container" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                <List
                  dataSource={messages}
                  renderItem={(msg, index) => (
                    <List.Item key={index} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                      {msg.sender === 'bot' && <Avatar src="images/llama.png" style={{ marginRight: '10px' }} />}
                      <Card style={{ width: '100%', backgroundColor: msg.sender === 'user' ? '#e6f7ff' : '#f6ffed' }}>
                        <Typography.Text>
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </Typography.Text>
                      </Card>
                      {msg.sender === 'user' && <Avatar icon={<UserOutlined />} style={{ marginLeft: '10px' }} />}
                    </List.Item>
                  )}
                />
                {loading && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontSize: "20px"}}>
                    <p>L</p>
                    <Spin indicator={windTurbineIcon} />
                    <p>ADING ...</p>
                  </div>
                )}
                <form id="chat-form" onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '20px' }}>
                  <TextArea
                    rows={2}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message here..."
                    required
                    style={{ flex: 1, marginRight: '10px' }}
                  />
                  <Button type="primary" htmlType="submit">Send</Button>
                </form>
                <Button id="generateSummaryButton" onClick={handleGenerateSummary} style={{ marginTop: '20px' }}>Generate Summary</Button>
                {summary && (
                  <Card style={{ marginTop: '20px', backgroundColor: '#fffbe6' }}>
                    <Typography.Text strong>Summary:</Typography.Text>
                    <p> <ReactMarkdown>{summary}</ReactMarkdown></p>
                  </Card>
                )}
                {showDashboard && dashboardData.map((plan, index) => (
                  <Dashboards key={index} {...plan} />
                ))} {/* Render multiple dashboards */}
              </div>
            </>
          )}
        </div>
      </Content>
      
      
    </div>
  );
};

export default ChatbotPage;