import React from 'react';
import Lo001 from '../../../assets/sectors/Logistics/Lo001.png';
import Lo002 from '../../../assets/sectors/Logistics/Lo002.png';
import Lo003 from '../../../assets/sectors/Logistics/Lo003.png';
import Lo004 from '../../../assets/sectors/Logistics/Lo004.png';
import Lo005 from '../../../assets/sectors/Logistics/Lo005.png';
import Lo006 from '../../../assets/sectors/Logistics/Lo006.svg';
import Lo007 from '../../../assets/sectors/Logistics/Lo007.svg';
import Lo008 from '../../../assets/sectors/Logistics/Lo008.svg';

const Logistics = () => {
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
    <div className="logistics-sector">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'linear-gradient(180deg, #0066cc, #00ff99)',
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
          e.target.style.background = '#47B5FF';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #0066cc 0%, #004499 100%)';
          e.target.style.transform = 'scale(1)';
        }}
        title="Scroll to top"
      >
        ↑
      </button>

      <div className="logistics-header">
        <div className="logistics-icon">
          <i className="fas fa-shipping-fast"></i>
        </div>
        <h1>Logistics & Supply Chain</h1>
        <p className="logistics-subtitle">Sri Lanka: The Strategic Logistics Hub Connecting East-West Trade Routes</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      <div className="logistics-overview">
        <h2>Industry Overview</h2>
        <p>
         Sri Lanka’s logistics sector is rapidly expanding, fueled by strategic location, modernizing infrastructure, and growing demand for efficient supply chain solutions. Key developments in port, airport, road, and rail facilities are enhancing the country’s connectivity, making it a vital transshipment hub in the Indian Ocean region.
        </p>
        <p>
          The rise of e-commerce and global trade is driving demand for warehousing, distribution, and last-mile delivery services. Ongoing digitalization and technology adoption in logistics operations are improving efficiency and productivity, while government incentives and a skilled workforce make Sri Lanka an attractive destination for investment in the logistics sector.
        </p>
        
        <div className="logistics-stat-cards">   
          <div className="logistics-stat-card">
            <div className="logistics-stat-icon">🚢</div>
            <div className="logistics-stat-number"> 2.5%</div>
            <div className="logistics-stat-label"> services contribute</div>
            <div className="stat-growth">↑ Approximately</div>
          </div>
          <div className="logistics-stat-card">
            <div className="logistics-stat-icon">👥</div>
            <div className="logistics-stat-number">40,000+</div>
            <div className="logistics-stat-label">Employing</div>
            <div className="stat-growth">Skilled Workforce</div>
          </div>
          <div className="logistics-stat-card">
            <div className="logistics-stat-icon">🏢</div>
            <div className="logistics-stat-number">$7.78B</div>
            <div className="logistics-stat-label"> Market is valued </div>
            <div className="stat-growth">in 2025</div>
          </div>
          <div className="logistics-stat-card">
            <div className="logistics-stat-icon">🌐</div>
            <div className="logistics-stat-number">$9.63B </div>
            <div className="logistics-stat-label">Projections to reach</div>
            <div className="stat-growth"> By 2030</div>
          </div>
        </div>
      </div>

      <div className="logistics-growth">
        <h2>Sector Performance & Growth Trajectory</h2>
        <div className="growth-insight">
          <p>The logistics sector has demonstrated exceptional growth, with revenue increasing by an average of 
          18% annually, driven by strategic infrastructure investments and growing regional trade volumes.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2020" style={{height: '80%'}}>
              <span className="bar-value">$5.6M</span>
              <span className="bar-label">2020</span>
            </div>
            <div className="chart-bar" data-year="2021" style={{height: '100%'}}>
              <span className="bar-value">$5.9M</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '80%'}}>
              <span className="bar-value">$5.6M</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '95%'}}>
              <span className="bar-value">$5.8M</span>
              <span className="bar-label">2023</span>
            </div>
          </div>
          <p className="chart-note">📈 Rapid growth in logistics services and infrastructure development</p>
        </div>
      </div>

      <div className="logistics-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities across high-growth logistics and supply chain segments
        </p>
        
        <div className="logistics-opportunity-cards">
          <div className="logistics-opportunity-card">
            <div className="card-header">
              <div className="logistics-card-icon">
                <i className="fas fa-ship"></i>
              </div>
              <span className="opportunity-badge">Port Services</span>
            </div>
            <h3>Port & Maritime Logistics</h3>
            <p className="opportunity-desc">Advanced port services and maritime logistics solutions</p>
            <ul>
              <li>Container terminal operations</li>
              <li>Bulk cargo handling facilities</li>
              <li>Ship repair and maintenance</li>
              <li>Bunkering services</li>
              <li>Maritime support services</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Global shipping hub</span>
            </div>
          </div>
          
          <div className="logistics-opportunity-card">
            <div className="card-header">
              <div className="logistics-card-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <span className="opportunity-badge">Warehousing</span>
            </div>
            <h3>Modern Warehousing & Distribution</h3>
            <p className="opportunity-desc">State-of-the-art storage and distribution facilities</p>
            <ul>
              <li>Temperature-controlled warehouses</li>
              <li>Bonded warehousing facilities</li>
              <li>Automated storage systems</li>
              <li>Cross-docking operations</li>
              <li>Last-mile delivery hubs</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Growing e-commerce demand</span>
            </div>
          </div>
          
          <div className="logistics-opportunity-card">
            <div className="card-header">
              <div className="logistics-card-icon">
                <i className="fas fa-plane"></i>
              </div>
              <span className="opportunity-badge">Air Cargo</span>
            </div>
            <h3>Air Freight & Cargo Services</h3>
            <p className="opportunity-desc">Premium air cargo and logistics services</p>
            <ul>
              <li>Perishable cargo handling</li>
              <li>Express cargo operations</li>
              <li>Air freight forwarding</li>
              <li>Cargo terminal management</li>
              <li>Charter operations</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">High-value goods focus</span>
            </div>
          </div>
          
          <div className="logistics-opportunity-card">
            <div className="card-header">
              <div className="logistics-card-icon">
                <i className="fas fa-truck"></i>
              </div>
              <span className="opportunity-badge">Road Transport</span>
            </div>
            <h3>Road Freight & Transportation</h3>
            <p className="opportunity-desc">Efficient road transport and fleet management</p>
            <ul>
              <li>Heavy vehicle operations</li>
              <li>Refrigerated transport</li>
              <li>Container haulage</li>
              <li>Fleet management services</li>
              <li>Cross-border transportation</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Regional connectivity</span>
            </div>
          </div>

          <div className="logistics-opportunity-card">
            <div className="card-header">
              <div className="logistics-card-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <span className="opportunity-badge">Tech Solutions</span>
            </div>
            <h3>Logistics Technology</h3>
            <p className="opportunity-desc">Digital logistics and supply chain solutions</p>
            <ul>
              <li>Logistics software development</li>
              <li>Supply chain visibility platforms</li>
              <li>IoT tracking solutions</li>
              <li>Blockchain for logistics</li>
              <li>AI-powered optimization</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Digital transformation</span>
            </div>
          </div>

          <div className="logistics-opportunity-card">
            <div className="card-header">
              <div className="logistics-card-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <span className="opportunity-badge">3PL/4PL</span>
            </div>
            <h3>Third-Party Logistics</h3>
            <p className="opportunity-desc">Comprehensive logistics outsourcing services</p>
            <ul>
              <li>End-to-end supply chain management</li>
              <li>Inventory management services</li>
              <li>Customs brokerage</li>
              <li>Freight management</li>
              <li>Value-added services</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Outsourcing growth</span>
            </div>
          </div>
        </div>
      </div>

      <div className="logistics-advantages">
        <h2>Strategic Advantages</h2>
        <p className="advantages-intro">Why global businesses choose Sri Lanka as their logistics hub</p>
        
        <div className="logistics-advantages-grid">
          <div className="logistics-advantage-item">
            <div className="advantage-number">01</div>
            <div className="logistics-advantage-icon">
              <i className="fas fa-globe-asia"></i>
            </div>
            <h3>Prime Geographic Location</h3>
            <p>Strategic position on major East-West shipping routes with proximity to key markets including 
            India, Middle East, and Southeast Asia. Natural deep-water ports and optimal time zone for 
            global business operations.</p>
          </div>
          
          <div className="logistics-advantage-item">
            <div className="advantage-number">02</div>
            <div className="logistics-advantage-icon">
              <i className="fas fa-anchor"></i>
            </div>
            <h3>World-Class Port Infrastructure</h3>
            <p>Colombo Port ranks among top 25 global container ports with state-of-the-art terminals, 
            deep-draft berths, and efficient operations. Hambantota Port provides additional capacity 
            and specialized services.</p>
          </div>
          
          <div className="logistics-advantage-item">
            <div className="advantage-number">03</div>
            <div className="logistics-advantage-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <h3>Operational Efficiency</h3>
            <p>Fast vessel turnaround times, streamlined customs procedures, and efficient port operations. 
            Digital documentation and single-window clearance systems reducing processing times and costs.</p>
          </div>
          
          <div className="logistics-advantage-item">
            <div className="advantage-number">04</div>
            <div className="logistics-advantage-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Regional Transshipment Hub</h3>
            <p>Colombo Port handles over 7 million TEUs annually with extensive feeder network connecting 
            to Indian subcontinent, Bay of Bengal, and Middle Eastern markets. Proven expertise in 
            transshipment operations.</p>
          </div>
          
          <div className="logistics-advantage-item">
            <div className="advantage-number">05</div>
            <div className="logistics-advantage-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Skilled Workforce</h3>
            <p>Highly trained maritime professionals, logistics managers, and supply chain experts. 
            Strong educational institutions producing qualified graduates in logistics and transportation 
            management.</p>
          </div>
          
          <div className="logistics-advantage-item">
            <div className="advantage-number">06</div>
            <div className="logistics-advantage-icon">
              <i className="fas fa-expand-arrows-alt"></i>
            </div>
            <h3>Multi-Modal Connectivity</h3>
            <p>Integrated transport network combining sea, air, and land connectivity. Bandaranaike 
            International Airport offers cargo facilities while road networks connect to industrial zones 
            and consumption centers.</p>
          </div>
        </div>
      </div>

      <div className="logistics-infrastructure">
        <h2>Key Infrastructure Assets</h2>
        <p className="infrastructure-intro">World-class logistics infrastructure supporting global trade</p>
        <div className="infrastructure-grid">
          <div className="infrastructure-item">
            <div className="infrastructure-icon">🏗️</div>
            <h4>Colombo Port</h4>
            <div className="infrastructure-bar">
              <div className="infrastructure-fill" style={{width: '100%'}}></div>
            </div>
            <span className="infrastructure-capacity">7M+ TEUs annually</span>
            <p>South Asia's largest transshipment hub with Jaya, Unity, and South Asia Gateway terminals</p>
          </div>
          <div className="infrastructure-item">
            <div className="infrastructure-icon">⚓</div>
            <h4>Hambantota Port</h4>
            <div className="infrastructure-bar">
              <div className="infrastructure-fill" style={{width: '75%'}}></div>
            </div>
            <span className="infrastructure-capacity">Multi-purpose port</span>
            <p>Strategic deep-water port handling bulk cargo, Ro-Ro, and industrial operations</p>
          </div>
          <div className="infrastructure-item">
            <div className="infrastructure-icon">✈️</div>
            <h4>Bandaranaike Airport</h4>
            <div className="infrastructure-bar">
              <div className="infrastructure-fill" style={{width: '60%'}}></div>
            </div>
            <span className="infrastructure-capacity">Modern cargo facilities</span>
            <p>International airport with dedicated cargo terminal and cold storage facilities</p>
          </div>
          <div className="infrastructure-item">
            <div className="infrastructure-icon">🛣️</div>
            <h4>Expressway Network</h4>
            <div className="infrastructure-bar">
              <div className="infrastructure-fill" style={{width: '85%'}}></div>
            </div>
            <span className="infrastructure-capacity">Growing network</span>
            <p>Modern expressways connecting ports to key economic zones and urban centers</p>
          </div>
        </div>
      </div>

      <div className="logistics-capabilities">
        <h2>Advanced Logistics Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">📦</div>
            <h3>Container Handling</h3>
            <p>State-of-the-art container terminals with automated stacking cranes, efficient yard management, 
            and rapid vessel turnaround times averaging under 24 hours for mainline vessels</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🌡️</div>
            <h3>Cold Chain Logistics</h3>
            <p>Comprehensive temperature-controlled logistics for pharmaceuticals, perishables, and food 
            products with end-to-end monitoring and specialized handling equipment</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🔗</div>
            <h3>Supply Chain Integration</h3>
            <p>Seamless integration of logistics services with manufacturing and distribution operations 
            through advanced warehouse management systems and real-time tracking</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">📊</div>
            <h3>Digital Logistics</h3>
            <p>Advanced digital platforms for shipment tracking, documentation, customs clearance, and 
            supply chain visibility using blockchain, IoT, and AI technologies</p>
          </div>
        </div>
      </div>

      <div className="logistics-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for logistics and supply chain investors</p>
        
        <div className="logistics-incentives-list">
          <div className="logistics-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 10+5 years for logistics infrastructure projects</li>
              <li>Duty-free import of logistics equipment and vehicles</li>
              <li>Investment tax allowances up to 100% of capital expenditure</li>
              <li>Concessional financing for port and logistics development</li>
              <li>VAT exemptions on export-related logistics services</li>
              <li>Accelerated depreciation on logistics assets</li>
            </ul>
          </div>
          
          <div className="logistics-incentive-item">
            <div className="incentive-icon">🏗️</div>
            <h3>Infrastructure Support</h3>
            <ul>
              <li>Access to port zones and logistics parks</li>
              <li>Land allocation for logistics facilities</li>
              <li>Utilities and connectivity infrastructure</li>
              <li>Modern telecommunications networks</li>
              <li>Transport corridor development</li>
              <li>Public-private partnership opportunities</li>
            </ul>
          </div>
          
          <div className="logistics-incentive-item">
            <div className="incentive-icon">📋</div>
            <h3>Regulatory Environment</h3>
            <ul>
              <li>100% foreign ownership permitted in logistics sector</li>
              <li>Streamlined customs and border procedures</li>
              <li>Free repatriation of profits and capital</li>
              <li>Simplified business registration processes</li>
              <li>International arbitration support</li>
              <li>One-stop investment facilitation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="logistics-success">
  <h2>Global Logistics Partnerships</h2>
  <p className="success-intro">Sri Lanka hosts leading global logistics and shipping companies</p>
  
  <div className="logistics-company-logos">
    <div className="logistics-company-logo">
      <img src={Lo001} alt="Maersk" />
      <span>Maersk</span>
    </div>
    <div className="logistics-company-logo">
      <img src={Lo002} alt="CMA CGM" />
      <span>CMA CGM</span>
    </div>
    <div className="logistics-company-logo">
      <img src={Lo003} alt="MSC" />
      <span>MSC</span>
    </div>
    <div className="logistics-company-logo">
      <img src={Lo004} alt="COSCO" />
      <span>COSCO</span>
    </div>
    <div className="logistics-company-logo">
      <img src={Lo005} alt="DHL" />
      <span>DHL</span>
    </div>
    <div className="logistics-company-logo">
      <img src={Lo006} alt="FedEx" />
      <span>FedEx</span>
    </div>
    <div className="logistics-company-logo">
      <img src={Lo007} alt="UPS" />
      <span>UPS</span>
    </div>
    <div className="logistics-company-logo">
      <img src={Lo008} alt="DB Schenker" />
      <span>DB Schenker</span>
    </div>
  </div>
</div>

      <div className="logistics-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for logistics sector growth and modernization</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>Regional Logistics Hub</h3>
            <p>Vision to become the premier logistics hub for South Asia and Indian Ocean region through 
            infrastructure expansion and service excellence</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🤖</div>
            <h3>Digital Transformation</h3>
            <p>Comprehensive digitalization of logistics operations with smart ports, automated terminals, 
            and blockchain-based documentation systems</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌱</div>
            <h3>Sustainable Logistics</h3>
            <p>Focus on green logistics, electrification of port equipment, and sustainable supply chain 
            practices for environmental stewardship</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🔗</div>
            <h3>Integrated Corridors</h3>
            <p>Development of integrated transport corridors connecting ports to production centers and 
            consumption markets across the region</p>
          </div>
        </div>
      </div>

      <div className="logistics-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's Logistics Sector?</h2>
          <p>Join leading global logistics companies in Sri Lanka's strategic hub location</p>
        
        </div>
      </div>
    </div>
  );
};

export default Logistics;