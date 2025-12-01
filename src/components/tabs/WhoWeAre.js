import React from 'react';
import chairman from '../../assets/whoweareimg/chairman.png';
import directorGeneral from '../../assets/whoweareimg/DirectorGeneral.png';

const WhoWeAre = () => {
  // Smooth scroll function
  const smoothScrollTo = (element, to, duration) => {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    Math.easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    animateScroll();
  };

  // Scroll to top function
  const scrollToTop = () => {
    smoothScrollTo(document.documentElement, 0, 600); // scroll to top in 600ms
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div className="whoweare-container">
        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#c0392b';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#e74c3c';
            e.target.style.transform = 'scale(1)';
          }}
          title="Scroll to top"
        >
          ↑
        </button>

        {/* Particle Background */}
        <div className="whoweare-particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="whoweare-particle"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 241, ${Math.random() * 0.3 + 0.1})`
              }}
            />
          ))}
        </div>

        <div className="whoweare-hero-section"> 
          <h2 className="whoweare-main-title" data-text="Who We Are">Who We Are</h2>
          <div className="whoweare-title-decoration"></div>
        </div>

        <div className="whoweare-intro-content">
          <p className="whoweare-intro-text">
            Established in 1978, under the name Greater Colombo Economic Commission, the Board of Investment of Sri Lanka is one of the foremost investment promotion agencies in South Asia. As the apex agency for foreign direct investment in Sri Lanka, there are over 1,600 enterprises under the purview of BOI in the span of its 40 years in operation. In carrying out its primary function of investment promotion, the BOI aims at sector based investor targeting, while specializing in aftercare, navigating and regulating investor operations to reach its true and highest potential throughout the lifespan of the enterprise.
          </p>
        </div>
        
        <div className="whoweare-statistics-wrapper">
          <div className="whoweare-statistics-grid">
            <div className="whoweare-stat-card">
              <div className="whoweare-stat-icon-wrapper">
                <i className="fas fa-building"></i>
              </div>
              <div className="whoweare-stat-number">1,600+</div>
              <div className="whoweare-stat-label">Companies in Operation under BOI</div>
              <div className="whoweare-stat-glow"></div>
            </div>
            
            <div className="whoweare-stat-card">
              <div className="whoweare-stat-icon-wrapper">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="whoweare-stat-number">64%</div>
              <div className="whoweare-stat-label">National Exports</div>
              <div className="whoweare-stat-glow"></div>
            </div>
            
            <div className="whoweare-stat-card">
              <div className="whoweare-stat-icon-wrapper">
                <i className="fas fa-industry"></i>
              </div>
              <div className="whoweare-stat-number">83%</div>
              <div className="whoweare-stat-label">National Industrial Exports</div>
              <div className="whoweare-stat-glow"></div>
            </div>
            
            <div className="whoweare-stat-card">
              <div className="whoweare-stat-icon-wrapper">
                <i className="fas fa-tshirt"></i>
              </div>
              <div className="whoweare-stat-number">96%</div>
              <div className="whoweare-stat-label">National Garment & Textile Exports</div>
              <div className="whoweare-stat-glow"></div>
            </div>
            
            <div className="whoweare-stat-card">
              <div className="whoweare-stat-icon-wrapper">
                <i className="fas fa-users"></i>
              </div>
              <div className="whoweare-stat-number">485,000</div>
              <div className="whoweare-stat-label">Direct cumulative employment</div>
              <div className="whoweare-stat-glow"></div>
            </div>
          </div>
        </div>

        <div className="whoweare-vision-mission-wrapper">
          <div className="whoweare-vision-card">
            <div className="whoweare-vm-icon-circle">
              <i className="fas fa-eye"></i>
            </div>
            <div className="whoweare-vm-header">Vision</div>
            <div className="whoweare-vm-divider"></div>
            <div className="whoweare-vm-content">
              <p>"To make Sri Lanka the most preferred destination for sustainable investment in Asia"</p>
            </div>
            <div className="whoweare-vm-background-pattern"></div>
          </div>
          
          <div className="whoweare-mission-card">
            <div className="whoweare-vm-icon-circle">
              <i className="fas fa-bullseye"></i>
            </div>
            <div className="whoweare-vm-header">Mission</div>
            <div className="whoweare-vm-divider"></div>
            <div className="whoweare-vm-content">
              <p>"BOI will work in a positive and speedy manner to fulfill Sri Lanka's potential to attract and retain quality investment that leads to an enhanced export base, and brings more and better jobs, enhanced knowledge and skills through new technologies and innovations."</p>
            </div>
            <div className="whoweare-vm-background-pattern"></div>
          </div>
        </div>

        <div className="whoweare-leadership-wrapper">
          <div className="whoweare-section-title-container">
            <h3 className="whoweare-section-title">Leadership</h3>
            <div className="whoweare-section-subtitle">Meet Our Visionary Leaders</div>
          </div>
          
          <div className="whoweare-leader-profile">
            <div className="whoweare-leader-image-container">
              <div className="whoweare-leader-image-frame">
                <img 
                  src={chairman}
                  alt="Mr. Arjuna Herath" 
                  className="whoweare-leader-photo" 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x450/1e3a8a/ffffff?text=Mr.+Arjuna+Herath';
                  }}
                />
                <div className="whoweare-image-overlay"></div>
              </div>
            </div>
            
            <div className="whoweare-leader-details">
              <h4 className="whoweare-leader-name">Mr. Arjuna Herath</h4>
              <p className="whoweare-leader-title">CHAIRMAN</p>
              <p className="whoweare-leader-org">BOARD OF INVESTMENT OF SRI LANKA</p>
              <div className="whoweare-leader-bio-text">
                <p>Mr. Arjuna Herath is a corporate leader with an extensive career spanning over three decades, marked by notable contributions to both the public and private sectors. Currently, he serves as the Chairman of the Board of Investment of Sri Lanka and on the Board of the Colombo Stock Exchange.</p>
                <p>Having recently retired as Senior Partner and Head of Consulting at Ernst & Young (Sri Lanka and Maldives), he has a wealth of experience advising clients across a wide range of industries on matters including capital markets, corporate restructuring, governance, technology, and performance improvement.</p>
                <p>The inaugural Chairman of the Data Protection Authority of Sri Lanka, Mr. Herath is a Fellow Member of the Institute of Chartered Accountants of Sri Lanka (ICASL) and The Chartered Institute of Management Accountants (CIMA).</p>
              </div>
            </div>
          </div>

          <div className="whoweare-leader-profile whoweare-leader-profile-reverse">
            <div className="whoweare-leader-image-container">
              <div className="whoweare-leader-image-frame">
                <img 
                  src={directorGeneral} 
                  alt="Mrs. Renuka M. Weerakone" 
                  className="whoweare-leader-photo" 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x450/7c3aed/ffffff?text=Mrs.+Renuka+Weerakone';
                  }}
                />
                <div className="whoweare-image-overlay"></div>
              </div>
            </div>
            
            <div className="whoweare-leader-details">
              <h4 className="whoweare-leader-name">MRS. RENUKA M.WEERAKONE</h4>
              <p className="whoweare-leader-title">Director General</p>
              <p className="whoweare-leader-org">Board of Investment of Sri Lanka</p>
              <div className="whoweare-leader-bio-text">
                <p>Mrs. Renuka Weerakone is an Attorney-at-Law by profession counting over 31 years of experience and commenced her working career as an instructing attorney with a leading Law firm in Colombo. She is also a licensed Notary Public and Commissioner for Oaths.</p>
                <p>She currently serves as the Director General (Actg) at the BOI previously holding the post of Executive Director heading Project Monitoring. In her career at the BOI spanning over 27 years, she has gained a wealth of experience and broad knowledge to facilitate activities of foreign direct investment projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;