import React from 'react';

const OfficeMap = () => {
  return (
    <div className="tab-content">
      <h2>Office Layout Map</h2>
      <p>Our main office is located at:</p>
      <p><strong>BOI Head Office</strong><br />
        No. 551, T.B. Jayah Mawatha (Deans Road),<br />
        Colombo 10, Sri Lanka.</p>
      
      <div className="map-container">
        <div className="map-overlay">
          <i className="fas fa-map-marker-alt"></i>
          <span style={{marginLeft: '10px'}}>Interactive Map Will Appear Here</span>
        </div>
      </div>
      
      <div className="cards-container">
        <div className="card">
          <div className="card-header"><i className="fas fa-clock"></i> Office Hours</div>
          <div className="card-body">
            <p><strong>Monday - Friday:</strong> 8:30 AM - 4:15 PM</p>
            <p><strong>Saturday & Sunday:</strong> Closed</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header"><i className="fas fa-phone"></i> Contact</div>
          <div className="card-body">
            <p><strong>Phone:</strong> +94 11 242 6900</p>
            <p><strong>Email:</strong> info@boi.lk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeMap;