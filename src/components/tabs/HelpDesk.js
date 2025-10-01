import React, { useState, useEffect } from 'react';
import qrcodeimage from "../../assets/WebQR.png";

const HelpDesk = () => {
  const backgroundImages = [
    "https://images.pexels.com/photos/16910619/pexels-photo-16910619.jpeg",
    "https://i.pinimg.com/1200x/a7/40/e6/a740e6cb5223a2f10b54f2c9d4eb7486.jpg",
    "https://images.pexels.com/photos/33511789/pexels-photo-33511789.jpeg",
    "https://images.pexels.com/photos/33511788/pexels-photo-33511788.jpeg",
    "https://images.pexels.com/photos/20711996/pexels-photo-20711996.jpeg",
    "https://images.pexels.com/photos/3848793/pexels-photo-3848793.jpeg",
    "https://i.pinimg.com/1200x/f8/8b/03/f88b03fc17866c3410dee4e28ca70450.jpg",
    "https://images.pexels.com/photos/33126406/pexels-photo-33126406.jpeg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="tab-content active">
      <div 
        className="welcome-section"
        style={{
          backgroundImage: `linear-gradient(rgb(236, 249, 255), rgba(178, 250, 255, 0.7)), url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '40px 20px',
          position: 'relative',
          transition: 'filter 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          filter: 'brightness(0.9)',
          borderRadius: '15px',
          boxShadow: 'inset 0 0 0 2000px rgba(255, 255, 255, 0.2)',
          opacity: '100%',
          backgroundBlendMode: 'darken',
          animation: 'fadeIn 1s ease-in-out'

        }}
      >
        {/* Large BOI Logo */}
        <div style={{
          marginBottom: '30px',
          animation: 'fadeIn 1s ease-in-out,',

        }}>
          
          <img 
            src="https://investsrilanka.com/wp-content/uploads/2023/08/BOILOGO-2.png" 
            alt="BOI Logo" 
            style={{
              height: '180px',
              width: 'auto',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '49%',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
              transition: 'all 0.3s ease',
              marginBottom: '30px',
              marginTop: '20px',
              marginRight: '10px',
              marginLeft: '10px',
              WebkitTextFillColor: 'rgb(254, 255, 167)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontStyle: 'italic',
              color: 'rgb(254, 255, 167)',
              fontWeight: '600',
              textShadow: '2px 2px 4px rgba(252, 182, 60, 0.5)',
              display: 'inline-block',
              verticalAlign: 'middle',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '5px solid var(--secondary)'
            }}
          />
        </div>

        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(252, 182, 60, 0.5)',
          textAlign: 'center',
          WebkitTextFillColor: 'rgb(4, 0, 154)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontStyle: 'italic',
          color: 'rgb(4, 0, 154)',
        }}>
          We help you to grow in Sri Lanka
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          lineHeight: '1.8',
          marginBottom: '20px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          WebkitTextFillColor: 'rgb(254, 255, 167)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontStyle: 'italic',
          color: 'rgb(254, 255, 167)',
          fontWeight: '600'
        }}>
          Welcome to the Board of Investment of Sri Lanka Virtual Help Desk. 
          Our mission is to assist investors in navigating the investment process 
          in Sri Lanka efficiently.
        </p>
        
        <p style={{
          fontSize: '1.1rem',
          maxWidth: '800px',
          lineHeight: '1.8',
          marginBottom: '40px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          WebkitTextFillColor: 'rgb(254, 255, 167)',
          fontWeight: '600',
          color: 'rgb(254, 255, 167)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontStyle: 'italic'
        }}>
          Sri Lanka offers a strategic location, skilled workforce, and attractive 
          investment incentives. Let us help you explore the opportunities available.
        </p>

        {/* QR Code Section */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          padding: '30px',
          borderRadius: '15px',
          textAlign: 'center',
          maxWidth: '500px',
          width: '100%'

        }}>
          <h3 style={{
            color: 'var(--primary)',
            marginBottom: '20px',
            fontSize: '1.5rem',
            fontWeight: '600',
            textShadow: '2px 2px 4px rgba(252, 182, 60, 0.5)'
          }}>
            Scan to Connect with BOI
          </h3>
          
          <img 
            src={qrcodeimage}
            alt="BOI QR Code" 
            style={{
              width: '200px',
              height: '200px',
              marginBottom: '20px',
              animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
              borderRadius: '5%',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '4px solid var(--secondary)'
            }}
          />
          
          <p style={{
            color: 'var(--dark)',
            fontSize: '1rem',
            marginBottom: '15px'
          }}>
            Scan this QR code to access our digital resources and investment information
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            

            <div style={{ textAlign: 'center' }}>
             
                <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Web QR</span>
              </div>
            </div>
          </div>
        </div>

       {/* Background Image Indicator */}
<div style={{
  position: 'absolute',
  bottom: '-560px',
  right: '540px',
  display: 'flex',
  gap: '8px',
  padding: '8px 14px',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  zIndex: '10',
  alignItems: 'center',
  justifyContent: 'center',
  animation: 'fadeIn 1s ease-in-out',
  transition: 'all 0.3s ease-in-out',
  transform: 'translateY(0)',
  opacity: '1',
  filter: 'brightness(1)',
  userSelect: 'none',
  cursor: 'default',
  marginBottom: '26px',
  marginRight: '10px',
  marginLeft: '10px',
  marginTop: '10px',
  color: 'white',
  fontWeight: '600',
  fontSize: '0.9rem',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  WebkitTextFillColor: 'white',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'

}}>
  {backgroundImages.map((_, index) => (
    <div
      key={index}
      style={{
        width: index === currentImageIndex ? '24px' : '10px',
        height: '10px',
        borderRadius: '20px',
        backgroundColor: index === currentImageIndex ? '#003049' : '#4895ef',
        transition: 'all 0.4s ease-in-out'

      }}
    />
  ))}
</div>

      </div>
  );
};

export default HelpDesk;