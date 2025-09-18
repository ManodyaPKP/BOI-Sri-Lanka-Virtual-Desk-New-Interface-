import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';


function App() {
  const [activeTab, setActiveTab] = useState('helpdesk');
  
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