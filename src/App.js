// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import useRestrictUserActions from './hooks/useRestrictUserActions';
import useAutoRefresh from './hooks/useAutoRefresh';
import useScrollToTop from './hooks/useScrollToTop'; // Import the new hook

function App() {
  const [activeTab, setActiveTab] = useState('helpdesk');
  // Register service worker


  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Content activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;