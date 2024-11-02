// ChatbotPage.js
import React, { useState } from 'react';
import './css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';

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
                <form className="form-inline">
                  <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className="chatbot_section">
        <div className="container">
          <h2>Chat with our Data Center Consultant</h2>
          <div id="chat-container" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <div id="chat-output">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <span>{msg.text}</span>
                </div>
              ))}
            </div>
            <form id="chat-form" onSubmit={handleSubmit}>
              <input
                type="text"
                id="user-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotPage;