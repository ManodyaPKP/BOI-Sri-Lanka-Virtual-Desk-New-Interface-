import React from 'react';

const ElectricalElectronics = () => {
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
    <div className="electrical-electronics-sector">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: '#3a86ff',
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
          e.target.style.background = '#2667cc';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = '#3a86ff';
          e.target.style.transform = 'scale(1)';
        }}
        title="Scroll to top"
      >
        ↑
      </button>

      <div className="electrical-electronics-header">
        <div className="electrical-electronics-icon">
          <i className="fas fa-bolt"></i>
        </div>
        <h1>Electrical & Electronics</h1>
        <p className="electrical-electronics-subtitle">Powering Sri Lanka's High-Tech Manufacturing Renaissance</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      <div className="electrical-electronics-overview">
        <h2>Industry Overview</h2>
        <p>
          Sri Lanka's Electrical and Electronics sector stands as a cornerstone of the nation's export economy, 
          contributing <strong>over $1.5 billion annually</strong> to GDP. With a robust legacy spanning 
          three decades, the sector has transformed from basic assembly operations to sophisticated manufacturing 
          of high-value electronic products, components, and cutting-edge technology solutions.
        </p>
        <p>
          As South Asia emerges as a hotspot for electrical and electronic manufacturing, 
          Sri Lanka leverages its strategic access to key regional markets and trade blocs, positioning itself 
          as an emerging manufacturing destination with a young, tech-savvy workforce complemented by specialized 
          training and strategic air and shipping connectivity.
        </p>
        <p>
          The industry employs <strong>over 75,000 skilled professionals</strong> across 200+ state-of-the-art 
          manufacturing facilities, serving global markets with innovative solutions in consumer electronics, 
          industrial automation, telecommunications, and emerging technologies.
        </p>
        
        <div className="electrical-electronics-stat-cards">
          <div className="electrical-electronics-stat-card">
            <div className="electrical-electronics-stat-icon">💰</div>
            <div className="electrical-electronics-stat-number">$1.5B+</div>
            <div className="electrical-electronics-stat-label">Annual Export Revenue</div>
            <div className="stat-growth">↑ 15% YoY Growth</div>
          </div>
          <div className="electrical-electronics-stat-card">
            <div className="electrical-electronics-stat-icon">👥</div>
            <div className="electrical-electronics-stat-number">75K+</div>
            <div className="electrical-electronics-stat-label">Skilled Professionals</div>
            <div className="stat-growth">Highly Trained Workforce</div>
          </div>
          <div className="electrical-electronics-stat-card">
            <div className="electrical-electronics-stat-icon">🏭</div>
            <div className="electrical-electronics-stat-number">200+</div>
            <div className="electrical-electronics-stat-label">Manufacturing Facilities</div>
            <div className="stat-growth">ISO Certified Plants</div>
          </div>
          <div className="electrical-electronics-stat-card">
            <div className="electrical-electronics-stat-icon">🌍</div>
            <div className="electrical-electronics-stat-number">60+</div>
            <div className="electrical-electronics-stat-label">Global Markets Served</div>
            <div className="stat-growth">Worldwide Presence</div>
          </div>
        </div>
      </div>

      <div className="electrical-electronics-growth">
        <h2>Export Performance & Growth Trajectory</h2>
        <div className="growth-insight">
          <p>The sector has demonstrated remarkable resilience and consistent growth, with exports increasing 
          by an average of 15% annually over the past five years.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2020" style={{height: '55%'}}>
              <span className="bar-value">$0.9B</span>
              <span className="bar-label">2020</span>
            </div>
            <div className="chart-bar" data-year="2021" style={{height: '70%'}}>
              <span className="bar-value">$1.1B</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '85%'}}>
              <span className="bar-value">$1.3B</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '100%'}}>
              <span className="bar-value">$1.5B</span>
              <span className="bar-label">2023</span>
            </div>
          </div>
          <p className="chart-note">📈 Consistent double-digit growth in electrical and electronics exports</p>
        </div>
      </div>

      <div className="electrical-electronics-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities across six high-growth sub-sectors with proven global demand
        </p>
        
        <div className="electrical-electronics-opportunity-cards">
          <div className="electrical-electronics-opportunity-card">
            <div className="card-header">
              <div className="electrical-electronics-card-icon">
                <i className="fas fa-tv"></i>
              </div>
              <span className="opportunity-badge">High Demand</span>
            </div>
            <h3>Consumer Electronics</h3>
            <p className="opportunity-desc">Advanced consumer electronic products for global markets</p>
            <ul>
              <li>Smart TVs and home entertainment systems</li>
              <li>Audio equipment and premium sound systems</li>
              <li>Kitchen and home appliances</li>
              <li>Personal care devices and grooming products</li>
              <li>Wearable technology and fitness trackers</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Market: $2.1T globally</span>
            </div>
          </div>
          
          <div className="electrical-electronics-opportunity-card">
            <div className="card-header">
              <div className="electrical-electronics-card-icon">
                <i className="fas fa-industry"></i>
              </div>
              <span className="opportunity-badge">Industry 4.0</span>
            </div>
            <h3>Industrial Electronics & Automation</h3>
            <p className="opportunity-desc">Advanced industrial control and automation systems</p>
            <ul>
              <li>Programmable Logic Controllers (PLCs)</li>
              <li>Industrial sensors and actuators</li>
              <li>Motor drives and power electronics</li>
              <li>Process control instrumentation</li>
              <li>Robotics and automation systems</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Growing at 8% CAGR</span>
            </div>
          </div>
          
          <div className="electrical-electronics-opportunity-card">
            <div className="card-header">
              <div className="electrical-electronics-card-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <span className="opportunity-badge">High-Tech</span>
            </div>
            <h3>Electronic Components & Semiconductors</h3>
            <p className="opportunity-desc">Critical components for electronic systems worldwide</p>
            <ul>
              <li>Printed Circuit Boards (PCBs) - $53B market</li>
              <li>Semiconductor devices and integrated circuits</li>
              <li>Connectors and interconnect systems</li>
              <li>Passive components and LED displays</li>
              <li>Sensor modules and MEMS devices</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">PCB market: $53B</span>
            </div>
          </div>
          
          <div className="electrical-electronics-opportunity-card">
            <div className="card-header">
              <div className="electrical-electronics-card-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <span className="opportunity-badge">Green Energy</span>
            </div>
            <h3>Electrical Equipment & Power Systems</h3>
            <p className="opportunity-desc">Power distribution and electrical infrastructure</p>
            <ul>
              <li>Transformers and advanced switchgear</li>
              <li>Power cables and wiring harnesses</li>
              <li>LED lighting systems and smart solutions</li>
              <li>Energy management and monitoring systems</li>
              <li>Renewable energy components and inverters</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Renewable focus</span>
            </div>
          </div>

          <div className="electrical-electronics-opportunity-card">
            <div className="card-header">
              <div className="electrical-electronics-card-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <span className="opportunity-badge">5G Ready</span>
            </div>
            <h3>Telecommunications Equipment</h3>
            <p className="opportunity-desc">Next-gen communication devices and infrastructure</p>
            <ul>
              <li>Mobile phones and 5G smartphones</li>
              <li>Network equipment, routers, and switches</li>
              <li>Fiber optic components and systems</li>
              <li>Wireless communication devices</li>
              <li>IoT devices and smart connectivity modules</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">5G revolution</span>
            </div>
          </div>

          <div className="electrical-electronics-opportunity-card">
            <div className="card-header">
              <div className="electrical-electronics-card-icon">
                <i className="fas fa-car-battery"></i>
              </div>
              <span className="opportunity-badge">EV Growth</span>
            </div>
            <h3>Automotive Electronics</h3>
            <p className="opportunity-desc">Electronic systems for next-generation vehicles</p>
            <ul>
              <li>Automotive infotainment and navigation systems</li>
              <li>Advanced driver assistance systems (ADAS)</li>
              <li>Vehicle control modules and ECUs</li>
              <li>Electric vehicle components and batteries</li>
              <li>Automotive sensors, cameras, and LiDAR</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">EV boom accelerating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="electrical-electronics-advantages">
        <h2>Competitive Advantages</h2>
        <p className="advantages-intro">Why global electronics leaders choose Sri Lanka as their manufacturing partner</p>
        
        <div className="electrical-electronics-advantages-grid">
          <div className="electrical-electronics-advantage-item">
            <div className="advantage-number">01</div>
            <div className="electrical-electronics-advantage-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Highly Skilled Workforce</h3>
            <p>Over 75,000 trained professionals including engineers, technicians, and specialists in electronics 
            manufacturing. Strong technical education system with continuous upskilling programs and industry partnerships 
            ensuring world-class talent availability.</p>
          </div>
          
          <div className="electrical-electronics-advantage-item">
            <div className="advantage-number">02</div>
            <div className="electrical-electronics-advantage-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>International Quality Standards</h3>
            <p>ISO 9001, ISO 14001, ISO 45001, and IATF 16949 certified facilities with comprehensive quality 
            management systems. Rigorous compliance with global electronics industry requirements and international 
            safety standards.</p>
          </div>
          
          <div className="electrical-electronics-advantage-item">
            <div className="advantage-number">03</div>
            <div className="electrical-electronics-advantage-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3>Cost Competitiveness</h3>
            <p>Competitive manufacturing costs with European-quality output, offering 25-30% cost advantage compared 
            to traditional manufacturing locations. Optimal balance of quality, efficiency, and affordability in 
            production operations.</p>
          </div>
          
          <div className="electrical-electronics-advantage-item">
            <div className="advantage-number">04</div>
            <div className="electrical-electronics-advantage-icon">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h3>Strategic Logistics Hub</h3>
            <p>Prime location on major shipping routes between Asia, Europe, and Americas. World-class port facilities, 
            efficient air connectivity, and established supply chain networks with preferential access to key markets 
            through trade agreements.</p>
          </div>
          
          <div className="electrical-electronics-advantage-item">
            <div className="advantage-number">05</div>
            <div className="electrical-electronics-advantage-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Proven Global Partnerships</h3>
            <p>Established supply relationships with leading global electronics brands and OEMs including Samsung, 
            Sony, Panasonic, and Bosch. Proven track record of reliability, on-time delivery, and consistent quality 
            over decades.</p>
          </div>
          
          <div className="electrical-electronics-advantage-item">
            <div className="advantage-number">06</div>
            <div className="electrical-electronics-advantage-icon">
              <i className="fas fa-flask"></i>
            </div>
            <h3>R&D and Innovation Ecosystem</h3>
            <p>Strong focus on research and development with active partnerships with universities, innovation centers, 
            and technology institutes. Government support for continuous innovation, product development, and technology 
            transfer initiatives.</p>
          </div>
        </div>
      </div>

      <div className="electrical-electronics-markets">
        <h2>Key Export Markets</h2>
        <p className="markets-intro">Sri Lankan electronics reach consumers and industries across 60+ countries</p>
        <div className="markets-grid">
          <div className="market-item">
            <div className="market-flag">🇺🇸</div>
            <h4>United States</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '35%'}}></div>
            </div>
            <span className="market-share">35% of exports</span>
            <p>Largest export market for consumer electronics and components</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇪🇺</div>
            <h4>European Union</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '30%'}}></div>
            </div>
            <span className="market-share">30% of exports</span>
            <p>Germany, UK, France, Netherlands, Belgium</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌏</div>
            <h4>Asia Pacific</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '20%'}}></div>
            </div>
            <span className="market-share">20% of exports</span>
            <p>Japan, Australia, Singapore, India, South Korea</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌍</div>
            <h4>Other Regions</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '15%'}}></div>
            </div>
            <span className="market-share">15% of exports</span>
            <p>Middle East, Africa, Latin America</p>
          </div>
        </div>
      </div>

      <div className="electrical-electronics-capabilities">
        <h2>Advanced Manufacturing Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">🔧</div>
            <h3>Surface Mount Technology</h3>
            <p>State-of-the-art high-speed SMT lines for precision PCB assembly with automated optical inspection, 
            X-ray verification, and advanced quality control systems</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🏭</div>
            <h3>Plastic Injection Molding</h3>
            <p>Advanced multi-cavity injection molding for enclosures and precision components with automated finishing, 
            painting, and assembly capabilities</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">⚙️</div>
            <h3>Metal Fabrication</h3>
            <p>5-axis CNC machining, precision sheet metal work, and advanced fabrication for structural components 
            with tight tolerances</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">✅</div>
            <h3>Testing & Quality Assurance</h3>
            <p>Comprehensive testing facilities including environmental chambers, reliability testing, EMC/EMI testing, 
            and performance validation labs</p>
          </div>
        </div>
      </div>

      <div className="electrical-electronics-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for electronics manufacturers</p>
        
        <div className="electrical-electronics-incentives-list">
          <div className="electrical-electronics-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 10+5 years for high-tech electronics manufacturing</li>
              <li>Duty-free import of raw materials, components, and capital equipment</li>
              <li>Investment tax allowances up to 100% of capital expenditure</li>
              <li>Double tax deduction for research and development activities</li>
              <li>VAT exemptions on exports and related services</li>
              <li>Concessional import duties on specialized machinery</li>
            </ul>
          </div>
          
          <div className="electrical-electronics-incentive-item">
            <div className="incentive-icon">🏗️</div>
            <h3>Infrastructure Support</h3>
            <ul>
              <li>Access to technology parks and specialized industrial zones</li>
              <li>Reliable 24/7 power supply with backup systems and competitive tariffs</li>
              <li>High-speed fiber optic telecommunications and internet connectivity</li>
              <li>Modern logistics and supply chain infrastructure</li>
              <li>Technical training centers and skill development programs</li>
              <li>Dedicated export processing zones with streamlined operations</li>
            </ul>
          </div>
          
          <div className="electrical-electronics-incentive-item">
            <div className="incentive-icon">📋</div>
            <h3>Business Environment</h3>
            <ul>
              <li>100% foreign ownership permitted in electronics sector</li>
              <li>Streamlined approval processes through Board of Investment</li>
              <li>Free repatriation of profits, dividends, and capital</li>
              <li>Special visa facilities for expatriate technical staff and families</li>
              <li>Strong intellectual property protection framework</li>
              <li>One-stop facilitation for business setup and operations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="electrical-electronics-success">
  <h2>Global Technology Partnerships</h2>
  <p className="success-intro">Sri Lankan electronics manufacturers are trusted partners to the world's leading technology brands</p>
  
  <div className="electrical-electronics-company-logos">
    <div className="electrical-electronics-company-logo">
      <img src="https://imgs.search.brave.com/rHfsLTQ7PpMBkUrQABO1aoOnhDHaknxuHuObiOgA3S4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQyL2Vl/LzI4LzQyZWUyODAz/OGI5NjhkOWQzYWQy/NzI3MjQ3NzA4Yjhh/LmpwZw" alt="Samsung" />
      <span>Samsung</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo-768x432.png" alt="Sony" />
      <span>Sony</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://1000logos.net/wp-content/uploads/2022/12/Panasonic-logo-768x432.png" alt="Panasonic" />
      <span>Panasonic</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://images.seeklogo.com/logo-png/8/1/lg-electronics-logo-png_seeklogo-83711.png" alt="LG Electronics" />
      <span>LG Electronics</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://imgs.search.brave.com/V3D6DgqhEv2dqx5wWOXGFjAeGk0EmAf54VGrpWqLdEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRkLzIw/L2NmLzRkMjBjZjU2/Njk4MWY2NmFmMzUz/Mjc0ZDkwNDQ4ZDc0/LmpwZw" alt="Toshiba" />
      <span>Toshiba</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://logosdown.com/wp-content/uploads/2023/08/philips-logo-0-2048x2048-1.png" alt="Philips" />
      <span>Philips</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://i.redd.it/rarcgqu6pgef1.png" alt="Huawei" />
      <span>Huawei</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Lenovo-640x400.png" alt="Lenovo" />
      <span>Lenovo</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://imgs.search.brave.com/sp5tbXpxWZ4FkeT-ledYzIigWk9nq8nKUIZjlO2RDNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVsZWFkaGVzaXZv/LmNvbS9lcy9pbWcv/YXNmczE2OTVfMS1q/cGcvZm9sZGVyL3By/b2R1Y3RzLWRldGFs/bGUtbXVlc3RyYXMt/Z3JhbmRlcy9wZWdh/dGluYXMtY29jaGVz/LW1vdG9zLWJvc2No/LWxvZ28uanBn" alt="Bosch" />
      <span>Bosch</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://imgs.search.brave.com/ERqGzA8sGONmedwzXbtEd_nSPfiVAqk2LzWJ9LyduGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTU5/Mzk0OTcvcGhvdG8v/dGhlLXNpZW1lbnMt/YWctbG9nby1pcy1z/ZWVuLWluLWVybGFu/Z2VuLWdlcm1hbnkt/b24tdGh1cnNkYXkt/amFuLTIxLTIwMTAt/c2llbWVucy1hZy1p/cy1ldXJvcGVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0x/Q2tXZjhIUjFRUU45/Zklnc2tmZXktUTZM/TkRDdEdwOFBPUk1I/aG5Udld3PQ" alt="Siemens" />
      <span>Siemens</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://images.seeklogo.com/logo-png/0/1/abb-logo-png_seeklogo-1844.png" alt="ABB" />
      <span>ABB</span>
    </div>
    <div className="electrical-electronics-company-logo">
      <img src="https://www.logo.wine/a/logo/Schneider_Electric/Schneider_Electric-Logo.wine.svg" alt="Schneider Electric" />
      <span>Schneider Electric</span>
    </div>
  </div>
</div>

      <div className="electrical-electronics-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for sector growth and technological advancement</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>$3B Export Target</h3>
            <p>Strategic roadmap to double electronics exports to $3 billion by 2026 through capacity expansion 
            and value addition</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🤖</div>
            <h3>Emerging Technologies</h3>
            <p>Major focus on IoT, AI, machine learning, robotics, and Industry 4.0 technologies for smart 
            manufacturing</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌱</div>
            <h3>Sustainable Electronics</h3>
            <p>Developing green manufacturing practices, circular economy initiatives, and eco-friendly product 
            designs</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🔗</div>
            <h3>Global Value Chain Integration</h3>
            <p>Strengthening position in global electronics supply chains and expanding into higher value-added 
            segments</p>
          </div>
        </div>
      </div>

      <div className="electrical-electronics-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's Electronics Sector?</h2>
          <p>Join leading global brands in Sri Lanka's thriving electronics manufacturing ecosystem</p>
          
    </div>
  </div>
    </div>
  );
};

export default ElectricalElectronics;