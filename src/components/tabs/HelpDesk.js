import React, { useState, useEffect, useRef } from 'react';
import WebQRBOI001 from "../../assets/WebQRBOI001.png";
import Department001QR from "../../assets/Department001QR.png"; 
import BOIGateway001 from "../../assets/BOIGatewayQR001.png"; 
import img001 from "../../assets/helpdeskimg/img001.gif";
import img002 from "../../assets/helpdeskimg/img002.gif";
import img003 from "../../assets/helpdeskimg/img003.gif";
import img004 from "../../assets/helpdeskimg/img004.gif";
import img005 from "../../assets/helpdeskimg/img005.gif";
import img006 from "../../assets/helpdeskimg/img006.gif";
import img007 from "../../assets/helpdeskimg/img007.gif";
import img008 from "../../assets/helpdeskimg/img008.gif";
const HelpDesk = () => {       
  
    useEffect(() => {
    const scrollPosition = window.scrollY;
    
    // Prevent scrolling  
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';

    // Cleanup - restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition); 
    };
  }, []); 
  
  const backgroundImages = [
    img001,
    img002,
    img003,
    img004,
    img005,
    img006,
    img007,
    img008
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [modalClosing, setModalClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [titleAnimation, setTitleAnimation] = useState(false);
  const autoCloseTimerRef = useRef(null);
  const scrollTextRef = useRef(null);

  // QR code data
  const qrCodes = [
    { 
      id: 1, 
      image: WebQRBOI001,
      title: "Connect with BOI Web", 
      description: "Scan to access our digital resources and investment information",
      icon: "✽",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    { 
      id: 2, 
      image: Department001QR, 
      title: "Office Layout Map", 
      description: "Scan to download our Interactive Office Layout Map",
      icon: "➥",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" 
    },
    {  
      id: 3, 
      image: BOIGateway001, 
      title: "BOI Gateway", 
      description: "Scan to get immediate support",
      icon: "✧",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Title animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleAnimation(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Auto-close countdown effect
  useEffect(() => {
    if (activeModal) {
      setTimeLeft(30);
      
      autoCloseTimerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            closeModal();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setTimeLeft(30);
    }

    return () => {
      if (autoCloseTimerRef.current) {
        clearInterval(autoCloseTimerRef.current);
        autoCloseTimerRef.current = null;
      }
    };
  }, [activeModal]);

  const openModal = (qrId) => {
    setActiveModal(qrId);
    setModalClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (autoCloseTimerRef.current) {
      clearInterval(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
    
    setModalClosing(true);
    setTimeout(() => {
      setActiveModal(null);
      setModalClosing(false);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
<div
  className="tab-content active"
  style={{
    padding: 0,
    position: 'relative',
    width: "2000px",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  
  }}>


      <div 
        className="welcome-section"
        style={{
          position: 'relative',
          height: '80vh',
          display: 'flex',  
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '40px 20px',
          borderRadius: '10px',
          overflow: 'hidden'
          
        }}
      >
        {/* Background Image Layer 1 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgb(236, 249, 255), rgba(178, 250, 255, 0.7)), url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.9)',
            backgroundBlendMode: 'darken',
            boxShadow: 'inset 0 0 0 2000px rgba(255, 255, 255, 0.2)',
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1  
          }}
        />

        {/* Content Layer */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          
        }}>
          
          {/* Enhanced Title with Modern Animations - Moved Up */}
          <div style={{
            position: 'relative',
            marginBottom: '398px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '3.5rem',
              marginBottom: '15px',
              fontWeight: '800',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #fb8500 0%, #fffbfa 50%, #ffb703 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: `${titleAnimation ? 'gradientShift 3s ease-in-out infinite, slideInFromTop 1s ease-out, glow 2s ease-in-out infinite alternate' : 'none'}`,
              transform: titleAnimation ? 'translateY(0)' : 'translateY(-50px)',
              opacity: titleAnimation ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              padding: '0 20px',
              borderColor: 'black'
            }}>
              Your Growth Story Begins Here
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: titleAnimation ? '200px' : '0px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #4895ef, transparent)',
                borderRadius: '2px',
                transition: 'width 1.2s ease-in-out 0.5s',
                animation: 'pulseLine 2s ease-in-out infinite'
              }} />
            </h2>
            
            {/* Animated Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '10%',
              fontSize: '2rem',
              opacity: titleAnimation ? 1 : 0,
              transform: titleAnimation ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0)',
              transition: 'all 1s ease-in-out 0.3s',
              animation: 'float 6s ease-in-out infinite'
            }}>
              ✦
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              right: '10%',
              fontSize: '2rem',
              opacity: titleAnimation ? 1 : 0,
              transform: titleAnimation ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
              transition: 'all 1s ease-in-out 0.5s',
              animation: 'float 6s ease-in-out infinite 1s'
            }}>
              ✦
            </div>
          </div>

          {/* QR Code Selection Buttons - Centered */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            {qrCodes.map((qr) => (
              <button
                key={qr.id}
                onClick={() => openModal(qr.id)}
                style={{
                  padding: '20px 30px',
                  background: qr.gradient,
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  position: 'relative',
                  overflow: 'hidden',
                  minWidth: '180px',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  animation: 'float 3s ease-in-out infinite',
                  opacity: titleAnimation ? 1 : 0,
                  transform: titleAnimation ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-in-out ${0.6 + qr.id * 0.1}s`
                }}
                className="qr-button"
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-8px) scale(1.05)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                }}
              >
                <span style={{ 
                  fontSize: '1.5rem', 
                  marginRight: '10px',
                  display: 'inline-block',
                  animation: 'bounce 2s infinite'
                }}>
                  {qr.icon}
                </span>
                {qr.title}
                <div style={{
                  position: 'absolute',
                  top: 0,  
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'left 0.6s'
                }} 
                onMouseOver={(e) => {
                  e.target.style.left = '100%';
                }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Description as Moving Bar at Bottom - Independent Continuous Scroll */}
        <div style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
          padding: '15px 0',
          background: '#E4F1FF',
          overflow: 'hidden',
          zIndex: 5,
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <div 
            ref={scrollTextRef}
            style={{
              whiteSpace: 'nowrap', 
              display: 'inline-block',
              animation: 'scrollText 30s linear infinite'
            }}
          >
            <span style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #003049 0%, #4895ef 50%, #003049 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingRight: '50px'
            }}>
              Our Virtual Help Desk connects you to expert guidance, real-time support, and streamlined investment services — making your journey in Sri Lanka effortless and efficient • • • • • • • 
            </span>
          </div>
        </div>

        {/* Modal Overlay */}
        {activeModal && (
          <div 
            onClick={handleBackdropClick}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              animation: modalClosing ? 'fadeOut 0.3s ease-in' : 'fadeIn 0.3s ease-out'
            }}
          >
            <div 
              style={{
                background: qrCodes.find(qr => qr.id === activeModal)?.gradient,
                padding: '40px',
                borderRadius: '25px',
                textAlign: 'center',
                maxWidth: '400px',
                width: '90%',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                animation: modalClosing ? 
                  'slideOutDown 0.3s ease-in' : 
                  'slideInUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: 'scale(1)',
                overflow: 'hidden'
              }}
            >
              {/* Auto-close Countdown Timer */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: timeLeft > 10 ? '#4ade80' : timeLeft > 5 ? '#fbbf24' : '#ef4444',
                  animation: timeLeft <= 10 ? 'pulse 1s infinite' : 'none'
                }} />
                Auto closes in: {formatTime(timeLeft)}
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  color: 'white',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.transform = 'rotate(90deg)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'rotate(0deg)';
                }}
              >
                ✕
              </button>

              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '30px',
                borderRadius: '15px',
                marginBottom: '20px',
                marginTop: '10px'
              }}>
                <h3 style={{
                  color: '#333',
                  marginBottom: '25px',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  textShadow: 'none'
                }}>
                  <span style={{ 
                    fontSize: '2rem', 
                    marginRight: '10px',
                    display: 'inline-block',
                    animation: 'bounce 2s infinite'
                  }}>
                    {qrCodes.find(qr => qr.id === activeModal)?.icon}
                  </span>
                  {qrCodes.find(qr => qr.id === activeModal)?.title}
                </h3>
                
                <img 
                  src={qrCodes.find(qr => qr.id === activeModal)?.image}
                  alt={`QR Code ${activeModal}`}
                  style={{
                    width: '220px',
                    height: '220px',
                    marginBottom: '25px',
                    animation: 'fadeIn 0.8s ease-in-out, pulse 2s ease-in-out infinite',
                    borderRadius: '10px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                    border: '5px solid white'
                  }}
                />
                
                <p style={{
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  fontWeight: '500'
                }}>
                  {qrCodes.find(qr => qr.id === activeModal)?.description}
                </p>
              </div>

              <button
                onClick={closeModal}
                style={{
                  padding: '12px 30px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#333',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Close Now
              </button>
            </div>
          </div>
        )}

        {/* Background Image Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '-560px',
          right: '540px',
          display: 'flex',
          gap: '8px',
          padding: '8px 14px',
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

      {/* Enhanced CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-5px); }
            60% { transform: translateY(-3px); }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInFromTop {
            from {
              opacity: 0;
              transform: translateY(-50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.8);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes slideOutDown {
            from {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
            to {
              opacity: 0;
              transform: translateY(50px) scale(0.8);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes glow {
            from { filter: drop-shadow(0 0 5px rgba(72, 149, 239, 0.5)); }
            to { filter: drop-shadow(0 0 20px rgba(72, 149, 239, 0.8)); }
          }

          @keyframes pulseLine {
            0%, 100% { opacity: 1; transform: translateX(-50%) scaleX(1); }
            50% { opacity: 0.7; transform: translateX(-50%) scaleX(1.1); }
          }

          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-5px) scale(1.02); }
          }

          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }

          @keyframes floatParticle {
            0%, 100% { 
              transform: translateY(0) translateX(0);
              opacity: 0.6;
            }
            25% { 
              transform: translateY(-10px) translateX(5px);
              opacity: 0.8;
            }
            50% { 
              transform: translateY(-5px) translateX(10px);
              opacity: 0.4;
            }
            75% { 
              transform: translateY(-15px) translateX(5px);
              opacity: 0.7;
            }
          }

          @keyframes scrollText {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .qr-button:hover::before {
            left: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default HelpDesk;