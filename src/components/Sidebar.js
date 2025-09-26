import React from 'react';
  
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'helpdesk', label: 'Virtual Help Desk', icon: 'fa-headset' },
    { id: 'whoweare', label: 'Who We Are', icon: 'fa-info-circle' },
    { id: 'whysrilanka', label: 'Why Sri Lanka', icon: 'fa-globe-asia' },
    { id: 'guideline', label: 'Guideline', icon: 'fa-book' },
    { id: 'officemap', label: 'Office Layout Map', icon: 'fa-map-marked-alt' },
    { id: 'sectors', label: 'Investment Sectors', icon: 'fa-industry' },
    { id: 'services', label: 'Our Services', icon: 'fa-concierge-bell' },
    { id: 'contact', label: 'Contact Us', icon: 'fa-envelope' },
  ];
  
  return (
    <div className="sidebar">
      {menuItems.map(item => (
        <div 
          key={item.id}
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          <i className={`fas ${item.icon}`}></i>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;