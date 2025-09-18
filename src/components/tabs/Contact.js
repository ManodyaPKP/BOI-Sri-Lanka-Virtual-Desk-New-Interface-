import React from 'react';

const Contact = () => {
  return (
    <div className="tab-content">
      <h2>Contact Us</h2>
      <p>Get in touch with us for any inquiries or support:</p>
      
      <div className="cards-container">
        <div className="card">
          <div className="card-header"><i className="fas fa-envelope"></i> General Inquiries</div>
          <div className="card-body">
            <div className="contact-info">
              <i className="fas fa-phone"></i>
              <span>+94 11 242 6900</span>
            </div>
            <div className="contact-info">
              <i className="fas fa-envelope"></i>
              <span>info@boi.lk</span>
            </div>
            <div className="contact-info">
              <i className="fas fa-globe"></i>
              <span>www.investsrilanka.com</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header"><i className="fas fa-map-marker-alt"></i> Visit Us</div>
          <div className="card-body">
            <div className="contact-info">
              <i className="fas fa-building"></i>
              <span>BOI Head Office<br />No. 551, T.B. Jayah Mawatha<br />Colombo 10, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;