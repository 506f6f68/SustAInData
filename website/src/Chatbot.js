// ChatbotPage.js
import React, { useState } from 'react';
import { Layout, Input, Button, List, Typography, Card, Avatar } from 'antd';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';
import './css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';

const { Header, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const response = await fetch('/process_text/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input }),
    });

    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.answer };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <Layout className="chatbot_page">
      <Header className="header_section">
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
              </ul>
            </div>
          </nav>
        </div>
      </Header>

      <Content className="chatbot_section">
        <div className="container">
          <Title level={2} style={{ textAlign: 'center' }}>Chat with our Data Center Consultant</Title>
          <div id="chat-container" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <List
              dataSource={messages}
              renderItem={(msg, index) => (
                <List.Item key={index} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.sender === 'bot' && <Avatar icon={<RobotOutlined />} style={{ marginRight: '10px' }} />}
                  <Card style={{ width: '100%', backgroundColor: msg.sender === 'user' ? '#e6f7ff' : '#f6ffed' }}>
                    <Typography.Text>{msg.text}</Typography.Text>
                  </Card>
                  {msg.sender === 'user' && <Avatar icon={<UserOutlined />} style={{ marginLeft: '10px' }} />}
                </List.Item>
              )}
            />
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
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ChatbotPage;