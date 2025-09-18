import React, { useState, useEffect } from 'react';
import qrcodeimage from "../../assets/frame.jpg";

const HelpDesk = () => {
  const backgroundImages = [
    "https://i.pinimg.com/1200x/c0/b0/7d/c0b07df7a86435de9b95d80978cc2631.jpg",
    "https://i.pinimg.com/1200x/b2/88/d2/b288d27d91097176b26450bf236348d2.jpg",
    "https://images.pexels.com/photos/33511789/pexels-photo-33511789.jpeg",
    "https://images.pexels.com/photos/33511788/pexels-photo-33511788.jpeg",
    "https://images.pexels.com/photos/20711996/pexels-photo-20711996.jpeg",
    "https://i.pinimg.com/736x/93/43/2e/93432e4e6159d980c4fb7fa4294a4ec7.jpg",
    "https://i.pinimg.com/1200x/f8/8b/03/f88b03fc17866c3410dee4e28ca70450.jpg",
    "https://images.pexels.com/photos/33847304/pexels-photo-33847304.jpeg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="tab-content active">
      <div 
        className="welcome-section"
        style={{
          backgroundImage: `linear-gradient(rgba(246, 220, 190, 0.7), rgba(0, 61, 128, 0.7)), url(${backgroundImages[currentImageIndex]})`,
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
          transition: 'background-image 1s ease-in-out'

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
              border: '5px solid var(--secondary)'
            }}
          />
        </div>

        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(252, 182, 60, 0.5)'
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
          WebkitTextFillColor: 'black'
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
          WebkitTextFillColor: 'black',
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
          right: '25px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          opacity: '0.5',
          '&:hover': { opacity: 10 },
          padding: '4px 15px',
          borderRadius: '20px',
          color: 'white',
          fontSize: '0.9rem'
        }}>
          {currentImageIndex + 1} of {backgroundImages.length}
        </div>
      </div>
  );
};

export default HelpDesk;