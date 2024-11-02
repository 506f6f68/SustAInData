// ChatbotPage.js
import React from 'react';
import { AiChat } from '@nlux/react';
import { useChatAdapter } from '@nlux/langchain-react';
import '@nlux/themes/nova.css';
import './css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';

const ChatbotPage = () => {
  // LangServe adapter that connects to a demo LangChain Runnable API
  const adapter = useChatAdapter({
    url: 'https://pynlux.api.nlkit.com/pirate-speak', // Your LangServe Runnable URL
    dataTransferMode: 'batch'
  });

  return (
    <div className="chatbot_page">
        
        <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <span>sustAIn data</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/chatbot">Chatbot</a>
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
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span>DataCenterBot</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className="chatbot_section">
        <div className="container">
          <h2>Chat with our Data Center Consultant</h2>
          <div id="nlux-chatbot" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <AiChat
              adapter={adapter}
              personaOptions={{
                assistant: {
                  name: 'Feather-AI',
                  avatar: 'https://docs.nlkit.com/nlux/images/personas/feather.png',
                  tagline: 'Yer AI First Mate!'
                },
                user: {
                  name: 'Alex',
                  avatar: 'https://docs.nlkit.com/nlux/images/personas/alex.png'
                }
              }}
              layoutOptions={{
                height: 320,
                maxWidth: 600
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotPage;