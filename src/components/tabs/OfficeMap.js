import React from 'react';
import qrcodeimage5 from "../../assets/ZonesQR.png";
import qrcodeimage6 from "../../assets/DepartmentQR.png";
import qrcodeimage7 from "../../assets/LocationQR.png";

const OfficeMap = () => { 

  return (  
    <div className="tab-content">
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem 2rem', 
        borderRadius: '20px', 
        marginBottom: '2rem',
        color: 'white',
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
        
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '0.5rem',
          textAlign: 'center',
          animation: 'fadeIn 2.0s ease',
          alignItems: 'center',
          color: 'white',
        }}>
           Interactive Office Layout Map
        </h2>
      </div>

        

      {/* Full Width Interactive Map Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        padding: '1.5rem',
        boxShadow: '0 5px 25px rgba(0, 0, 0, 0.08)',
        marginBottom: '2rem'
      }}>
        <div className="map-container" style={{
          height: '700px',
          borderRadius: '16px',
          overflow: 'auto',
          position: 'relative',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <iframe 
            src="https://worldsbestcables.com/boi_dev"
            style={{
              width: '100%', 
              height: '100%', 
              border: 'none',
              display: 'block'
            }}
            title="BOI Office Interactive Map"
            allowFullScreen
          />
        </div>
      </div>

      {/* Location & Contact Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {/* Location Card */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '2rem',
          color: 'white',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '1rem'
          }}>
            <i className="fas fa-building" style={{fontSize: '2rem'}}></i>
            <h4 style={{fontSize: '1.5rem', fontWeight: '600', margin: 0}}>Our Location</h4>
          </div>
          <div style={{lineHeight: '1.8'}}>
            <p style={{margin: '0.5rem 0', fontSize: '1.1rem', fontWeight: '600', color: 'white'}}>BOI Head Office</p>
            <p style={{margin: '0.3rem 0', opacity: '0.95', color: 'white'}}>No. 551, T.B. Jayah Mawatha</p>
            <p style={{margin: '0.3rem 0', opacity: '0.95', color: 'white'}}>(Deans Road)</p>
            <p style={{margin: '0.3rem 0', opacity: '0.95', color: 'white'}}>Colombo 10, Sri Lanka</p>
          </div>
        </div>

        {/* Office Hours Card */}
        <div style={{
          background:  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '2rem',
          color: 'white',
          transition: 'transform 0.3s ease',
          
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '1rem'
          }}>
            <i className="fas fa-clock" style={{fontSize: '2rem'}}></i>
            <h4 style={{fontSize: '1.5rem', fontWeight: '600', margin: 0}}>Office Hours</h4>
          </div>
          <div style={{lineHeight: '1.8'}}>
            <p style={{margin: '0.8rem 0', fontSize: '1.05rem', color: 'white'}}>
              <span style={{fontWeight: '600', display: 'block', marginBottom: '0.3rem', color: 'white'}}>Weekdays</span>
              Monday - Friday: 8:30 AM - 4:15 PM
            </p>
            <p style={{margin: '0.8rem 0', fontSize: '1.05rem', color: 'white'}}>
              <span style={{fontWeight: '600', display: 'block', marginBottom: '0.3rem', color: 'white'}}>Weekend</span>
              Saturday & Sunday: Closed
            </p>
          </div>
        </div>

       
      </div>

      {/* QR Code Section */}
      <div style={{
       
        borderRadius: '16px',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '0 5px 25px rgba(0, 0, 0, 0.08)',
        background:  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <h4 style={{
          fontSize: '1.3rem',
          fontWeight: '600',
          color: '#E8F9FF',
          marginBottom: '1rem'
        }}>
          Need Directions?
        </h4>  
        <p style={{
          color: '#E8F9FF',
          marginBottom: '2rem',
          fontSize: '1.05rem'
        }}>
          Use the interactive map above to navigate to our office or scan the QR codes below
        </p>
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {/* QR Code 5 */}
          <div className="qr-contact" style={{
            padding: '1.5rem', 
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            minWidth: '180px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img 
              src={qrcodeimage5}
              style={{
                width: '150px',
                height: '150px',
                marginBottom: '25px',
                animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
                borderRadius: '5%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                border: '3px solid #667eea'
              }} 
              alt="QR Code 5" 
              className="w-24 h-24 mx-auto" 
            />
          </div>

          {/* QR Code 6 */}
          <div className="qr-contact" style={{
            padding: '1.5rem',
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            minWidth: '180px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img 
              src={qrcodeimage6}
              style={{
                width: '150px',
                height: '150px',
                marginBottom: '25px',
                animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
                borderRadius: '5%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                border: '3px solid #f5576c'
              }} 
              alt="QR Code 6" 
              className="w-24 h-24 mx-auto" 
            />
          
          </div>

          {/* QR Code 7 */}
          <div className="qr-contact" style={{
            padding: '1.5rem',
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            minWidth: '180px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img 
              src={qrcodeimage7}
              style={{
                width: '150px',
                height: '150px',
                marginBottom: '25px',
                animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
                borderRadius: '5%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                border: '3px solid #8AA624'
              }} 
              alt="QR Code 7" 
              className="w-24 h-24 mx-auto" 
            />
            <p style={{
              color: '#2d3748',
              fontWeight: '600',
              margin: 0
            }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeMap;