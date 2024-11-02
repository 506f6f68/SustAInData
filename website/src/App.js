import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ChatbotPage from './Chatbot'; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </Router>
  );
}

export default App;