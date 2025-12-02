import React from 'react';
import image03 from "../../src/assets/BOILOGO-2.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src={image03} 
            alt="BOI Logo" 
            className="logo-image"
          />
          <div className="header-text">
            <h1 className="main-title">Board of Investment of Sri Lanka</h1>
            <h2 className="sub-title">Virtual Help Desk</h2>
          </div>
        </div>
        <div className="right-section">
          <div className="thanks-message">
            <span className="thanks-text">Thanks for Visiting!</span>
            <div className="thanks-underline"></div>
          </div>
          <div className="header-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        .header-container {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
          padding: 15px 40px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 3px solid #fbbf24;
          z-index: 1000;
        }
        
        .header-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shimmer 3s infinite;
        }
        
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          gap: 15px;
          animation: slideInLeft 1s ease-out;
          transform: translateX(-110px);

        }
        
        .logo-image {
          height: 60px;
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
          animation: fadeInLeft 1s ease-out;
        }
        
        .header-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .main-title {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          margin: 0;
          line-height: 1.2;
          animation: fadeInUp 1s ease-out;
          letter-spacing: 0.5px;
        }
        
        .sub-title {
          font-size: 16px;
          color: #e0ffecff;
          font-weight: 400;
          margin: 0;
          line-height: 1.2;
          animation: fadeInUp 1s ease-out 0.3s both;
          opacity: 0.9;
        }
        
        .right-section {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-left: 300px;
           transform: translateX(260px);
          
        }
        
        .thanks-message {
          position: relative;
          text-align: right;
        }
        
        .thanks-text {
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          animation: fadeInRight 1s ease-out 0.5s both;
          letter-spacing: 0.3px;
          display: inline-block;
          letter-spacing: 0.5px;
        }
        
        .thanks-underline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #fbbf24, #f59e0b, transparent);
          margin-top: 4px;
          border-radius: 2px;
          animation: expandWidth 2s ease-out 1.5s both;
          width: 0;
        }
        
        .header-decoration {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .decoration-dot {
          width: 12px;
          height: 12px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }
        
        .decoration-dot:nth-child(2) {
          animation-delay: 0.3s;
        }
        
        .decoration-dot:nth-child(3) {
          animation-delay: 0.6s;
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 15px;
          }
          
          .right-section {
            flex-direction: column;
            gap: 10px;
          }
          
          .main-title {
            font-size: 24px;
            text-align: center;
          }
          
          .sub-title {
            text-align: center;
          }
          
          .thanks-text {
            font-size: 18px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;