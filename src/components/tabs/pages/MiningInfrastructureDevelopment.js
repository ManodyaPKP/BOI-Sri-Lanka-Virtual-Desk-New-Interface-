import React from 'react';

const MiningInfrastructureDevelopment = () => {
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
    <div className="mining-infrastructure-sector">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
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
          e.target.style.background = '#A02334';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)';
          e.target.style.transform = 'scale(1)';
        }}
        title="Scroll to top"
      >
        ↑
      </button>

      <div className="mining-infrastructure-header">
        <div className="mining-infrastructure-icon">
          <i className="fas fa-mountain"></i>
        </div>
        <h1>Mining & Infrastructure Development</h1>
        <p className="mining-infrastructure-subtitle">Sri Lanka: Strategic Hub for Mineral Resources & Infrastructure Growth</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      <div className="mining-infrastructure-overview">
        <h2>Industry Overview</h2>
        <p>
          Sri Lanka's <strong>mining and infrastructure sector</strong> represents a 
          <strong> cornerstone of economic development</strong>, with abundant mineral resources 
          and ongoing major infrastructure projects driving national growth. The country 
          boasts <strong>rich deposits of high-value minerals</strong> including graphite, 
          ilmenite, rutile, and rare earth elements.
        </p>
        <p>
          The infrastructure development landscape is undergoing <strong>rapid transformation</strong>, 
          with strategic investments in transportation, energy, and urban development 
          creating unprecedented opportunities for investors and developers.
        </p>
        <p>
          Supported by <strong>government initiatives</strong> and <strong>international partnerships</strong>, 
          Sri Lanka is positioned to become a regional leader in sustainable mining 
          practices and modern infrastructure development.
        </p>
        
        <div className="mining-infrastructure-stat-cards">
          <div className="mining-infrastructure-stat-card">
            <div className="mining-infrastructure-stat-icon">⛏️</div>
            <div className="mining-infrastructure-stat-number">$850M+</div>
            <div className="mining-infrastructure-stat-label">Mineral Export Value</div>
            <div className="stat-growth">↑ 15% Annual Growth</div>
          </div>
          <div className="mining-infrastructure-stat-card">
            <div className="mining-infrastructure-stat-icon">🏗️</div>
            <div className="mining-infrastructure-stat-number">$5B+</div>
            <div className="mining-infrastructure-stat-label">Infrastructure Projects</div>
            <div className="stat-growth">Ongoing Development</div>
          </div>
          <div className="mining-infrastructure-stat-card">
            <div className="mining-infrastructure-stat-icon">📊</div>
            <div className="mining-infrastructure-stat-number">30K+</div>
            <div className="mining-infrastructure-stat-label">Direct Employment</div>
            <div className="stat-growth">Skilled Workforce</div>
          </div>
          <div className="mining-infrastructure-stat-card">
            <div className="mining-infrastructure-stat-icon">🌍</div>
            <div className="mining-infrastructure-stat-number">25+</div>
            <div className="mining-infrastructure-stat-label">Mineral Types</div>
            <div className="stat-growth">Commercially Viable</div>
          </div>
        </div>
      </div>

      <div className="mining-infrastructure-growth">
        <h2>Sector Performance & Growth Trajectory</h2>
        <div className="growth-insight">
          <p>The mining and infrastructure sector has demonstrated strong growth momentum, 
          with mineral exports increasing steadily and major infrastructure projects 
          transforming the country's economic landscape.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2020" style={{height: '60%'}}>
              <span className="bar-value">$650M</span>
              <span className="bar-label">2020</span>
            </div>
            <div className="chart-bar" data-year="2021" style={{height: '75%'}}>
              <span className="bar-value">$720M</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '85%'}}>
              <span className="bar-value">$780M</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '100%'}}>
              <span className="bar-value">$850M</span>
              <span className="bar-label">2023</span>
            </div>
          </div>
          <p className="chart-note">📈 Consistent growth in mineral exports and infrastructure investments</p>
        </div>
      </div>

      <div className="mining-infrastructure-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities in mineral mining and infrastructure development
        </p>
        
        <div className="mining-infrastructure-opportunity-cards">
          <div className="mining-infrastructure-opportunity-card">
            <div className="card-header">
              <div className="mining-infrastructure-card-icon">
                <i className="fas fa-gem"></i>
              </div>
              <span className="opportunity-badge">Minerals</span>
            </div>
            <h3>Graphite & Industrial Minerals</h3>
            <p className="opportunity-desc">High-quality graphite and industrial mineral mining</p>
            <ul>
              <li>Vein graphite mining operations</li>
              <li>Graphite processing and value addition</li>
              <li>Ilmenite and rutile extraction</li>
              <li>Silica sand and quartz mining</li>
              <li>Feldspar and clay minerals</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$2B+ global market</span>
            </div>
          </div>
          
          <div className="mining-infrastructure-opportunity-card">
            <div className="card-header">
              <div className="mining-infrastructure-card-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <span className="opportunity-badge">Energy</span>
            </div>
            <h3>Energy Infrastructure</h3>
            <p className="opportunity-desc">Renewable energy and power generation projects</p>
            <ul>
              <li>Solar power plant development</li>
              <li>Wind energy farms</li>
              <li>Hydroelectric power projects</li>
              <li>Energy transmission networks</li>
              <li>Smart grid infrastructure</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">70% renewable target</span>
            </div>
          </div>
          
          <div className="mining-infrastructure-opportunity-card">
            <div className="card-header">
              <div className="mining-infrastructure-card-icon">
                <i className="fas fa-road"></i>
              </div>
              <span className="opportunity-badge">Transport</span>
            </div>
            <h3>Transport Infrastructure</h3>
            <p className="opportunity-desc">Modern transportation networks and logistics</p>
            <ul>
              <li>Highway and expressway development</li>
              <li>Port expansion and modernization</li>
              <li>Railway network upgrades</li>
              <li>Airport infrastructure</li>
              <li>Urban transport systems</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$3B+ projects ongoing</span>
            </div>
          </div>
          
          <div className="mining-infrastructure-opportunity-card">
            <div className="card-header">
              <div className="mining-infrastructure-card-icon">
                <i className="fas fa-tint"></i>
              </div>
              <span className="opportunity-badge">Utilities</span>
            </div>
            <h3>Water & Sanitation</h3>
            <p className="opportunity-desc">Water resource management and sanitation systems</p>
            <ul>
              <li>Water treatment plants</li>
              <li>Irrigation system modernization</li>
              <li>Wastewater treatment facilities</li>
              <li>Water distribution networks</li>
              <li>Flood control infrastructure</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Essential infrastructure</span>
            </div>
          </div>

          <div className="mining-infrastructure-opportunity-card">
            <div className="card-header">
              <div className="mining-infrastructure-card-icon">
                <i className="fas fa-recycle"></i>
              </div>
              <span className="opportunity-badge">Sustainable</span>
            </div>
            <h3>Sustainable Mining</h3>
            <p className="opportunity-desc">Environmentally responsible mining practices</p>
            <ul>
              <li>Green mining technologies</li>
              <li>Mineral processing innovation</li>
              <li>Land rehabilitation projects</li>
              <li>Water conservation in mining</li>
              <li>Community development programs</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">ESG-focused investment</span>
            </div>
          </div>

          <div className="mining-infrastructure-opportunity-card">
            <div className="card-header">
              <div className="mining-infrastructure-card-icon">
                <i className="fas fa-city"></i>
              </div>
              <span className="opportunity-badge">Urban</span>
            </div>
            <h3>Urban Development</h3>
            <p className="opportunity-desc">Smart city and urban infrastructure projects</p>
            <ul>
              <li>Mixed-use development projects</li>
              <li>Commercial and industrial parks</li>
              <li>Residential township development</li>
              <li>Public facility construction</li>
              <li>Urban regeneration projects</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Rapid urbanization</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mining-infrastructure-advantages">
        <h2>Competitive Advantages</h2>
        <p className="advantages-intro">Why Sri Lanka is ideal for mining and infrastructure investments</p>
        
        <div className="mining-infrastructure-advantages-grid">
          <div className="mining-infrastructure-advantage-item">
            <div className="advantage-number">01</div>
            <div className="mining-infrastructure-advantage-icon">
              <i className="fas fa-gem"></i>
            </div>
            <h3>Rich Mineral Resources</h3>
            <p>Abundant deposits of high-quality minerals including some of the world's 
            purest vein graphite, ilmenite, rutile, and rare earth elements. Proven 
            reserves with significant commercial potential and established mining history.</p>
          </div>
          
          <div className="mining-infrastructure-advantage-item">
            <div className="advantage-number">02</div>
            <div className="mining-infrastructure-advantage-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3>Strategic Location</h3>
            <p>Prime location on major international shipping routes with access to 
            growing Asian markets. Ideal position for regional infrastructure hubs 
            and logistics centers serving South Asia and beyond.</p>
          </div>
          
          <div className="mining-infrastructure-advantage-item">
            <div className="advantage-number">03</div>
            <div className="mining-infrastructure-advantage-icon">
              <i className="fas fa-hard-hat"></i>
            </div>
            <h3>Skilled Workforce</h3>
            <p>Highly capable engineering and technical workforce with expertise in 
            mining operations, civil engineering, and project management. Strong 
            educational institutions producing qualified professionals.</p>
          </div>
          
          <div className="mining-infrastructure-advantage-item">
            <div className="advantage-number">04</div>
            <div className="mining-infrastructure-advantage-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Supportive Regulatory Framework</h3>
            <p>Progressive mining and infrastructure policies with transparent 
            licensing processes. Environmental regulations ensuring sustainable 
            development while facilitating responsible investment.</p>
          </div>
          
          <div className="mining-infrastructure-advantage-item">
            <div className="advantage-number">05</div>
            <div className="mining-infrastructure-advantage-icon">
              <i className="fas fa-plug"></i>
            </div>
            <h3>Developing Infrastructure</h3>
            <p>Ongoing major infrastructure projects creating enabling environment 
            for industrial development. Modern ports, expanding road networks, and 
            improving utilities supporting business operations.</p>
          </div>
          
          <div className="mining-infrastructure-advantage-item">
            <div className="advantage-number">06</div>
            <div className="mining-infrastructure-advantage-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>International Partnerships</h3>
            <p>Strong track record of successful international collaborations in 
            major infrastructure projects. Experience working with global engineering 
            firms, development partners, and investors.</p>
          </div>
        </div>
      </div>

      <div className="mining-infrastructure-minerals">
        <h2>Key Mineral Resources</h2>
        <p className="minerals-intro">Sri Lanka's diverse mineral wealth offers significant investment potential</p>
        <div className="minerals-grid">
          <div className="mineral-item">
            <div className="mineral-icon">⚫</div>
            <h4>Graphite</h4>
            <div className="mineral-bar">
              <div className="mineral-fill" style={{width: '95%'}}></div>
            </div>
            <span className="mineral-quality">95%+ Pure Carbon</span>
            <p>World's purest vein graphite, high demand for batteries and advanced materials</p>
          </div>
          <div className="mineral-item">
            <div className="mineral-icon">🟫</div>
            <h4>Ilmenite</h4>
            <div className="mineral-bar">
              <div className="mineral-fill" style={{width: '85%'}}></div>
            </div>
            <span className="mineral-quality">High Grade</span>
            <p>Major titanium mineral used in pigments, welding rods, and titanium metal</p>
          </div>
          <div className="mineral-item">
            <div className="mineral-icon">🟥</div>
            <h4>Rutile</h4>
            <div className="mineral-bar">
              <div className="mineral-fill" style={{width: '80%'}}></div>
            </div>
            <span className="mineral-quality">Premium Quality</span>
            <p>High-purity titanium dioxide source for pigments and titanium production</p>
          </div>
          <div className="mineral-item">
            <div className="mineral-icon">⭐</div>
            <h4>Rare Earths</h4>
            <div className="mineral-bar">
              <div className="mineral-fill" style={{width: '70%'}}></div>
            </div>
            <span className="mineral-quality">Strategic Minerals</span>
            <p>Growing reserves of rare earth elements for electronics and green tech</p>
          </div>
        </div>
      </div>

      <div className="mining-infrastructure-projects">
        <h2>Major Infrastructure Projects</h2>
        <div className="projects-grid">
          <div className="project-item">
            <div className="project-icon">🏗️</div>
            <h3>Port City Colombo</h3>
            <p>$15B integrated development creating a new financial and business district with world-class infrastructure</p>
          </div>
          <div className="project-item">
            <div className="project-icon">🛣️</div>
            <h3>Expressway Network</h3>
            <p>Expanding highway system connecting major economic centers with modern transportation infrastructure</p>
          </div>
          <div className="project-item">
            <div className="project-icon">⚡</div>
            <h3>Renewable Energy</h3>
            <p>Ambitious program to achieve 70% renewable energy generation through solar, wind, and hydro projects</p>
          </div>
          <div className="project-item">
            <div className="project-icon">💧</div>
            <h3>Water Security</h3>
            <p>Major water supply and irrigation projects ensuring water security for agriculture and urban needs</p>
          </div>
        </div>
      </div>

      <div className="mining-infrastructure-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for mining and infrastructure investors</p>
        
        <div className="mining-infrastructure-incentives-list">
          <div className="mining-infrastructure-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 10+2 years for infrastructure projects</li>
              <li>Duty-free import of mining and construction equipment</li>
              <li>Investment tax allowances for capital expenditure</li>
              <li>Accelerated depreciation on machinery</li>
              <li>Export duty exemptions on mineral products</li>
              <li>R&D tax credits for mining innovation</li>
            </ul>
          </div>
          
          <div className="mining-infrastructure-incentive-item">
            <div className="incentive-icon">🏛️</div>
            <h3>Regulatory Support</h3>
            <ul>
              <li>Streamlined mining license approval process</li>
              <li>Transparent environmental clearance procedures</li>
              <li>Long-term mining leases available</li>
              <li>Expedited project approval for infrastructure</li>
              <li>Investment protection agreements</li>
              <li>Dispute resolution mechanisms</li>
            </ul>
          </div>
          
          <div className="mining-infrastructure-incentive-item">
            <div className="incentive-icon">🔧</div>
            <h3>Infrastructure & Technical</h3>
            <ul>
              <li>Access to geological survey data</li>
              <li>Technical assistance and research support</li>
              <li>Infrastructure connectivity to project sites</li>
              <li>Energy and utility support</li>
              <li>Transport and logistics facilitation</li>
              <li>Workforce training programs</li>
            </ul>
          </div>
        </div>
      </div>

<div className="mining-infrastructure-success">
  <h2>Successful Projects & Partnerships</h2>
  <p className="success-intro">Global companies investing in Sri Lanka's mining and infrastructure sector</p>
  
  <div className="mining-infrastructure-company-logos">
    <div className="mining-infrastructure-company-logo">
      <img src="https://www.guiaminera.cl/wp-content/uploads/2018/07/sierra-gorda.jpg" alt="Sierra Gorda" />
      <span>Sierra Gorda</span>
    </div>
    <div className="mining-infrastructure-company-logo">
      <img src="https://companieslogo.com/img/orig/601186.SS-a0c0c5aa.png?t=1744741411" alt="China Railway" />
      <span>China Railway</span>
    </div>
    <div className="mining-infrastructure-company-logo">
      <img src="https://brandlogos.net/wp-content/uploads/2022/02/larsen__toubro-logo_brandlogos.net_egljc.png" alt="Larsen & Toubro" />
      <span>Larsen & Toubro</span>
    </div>
    <div className="mining-infrastructure-company-logo">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Taisei_Corporation_logo.svg/280px-Taisei_Corporation_logo.svg.png" alt="Taisei Corporation" />
      <span>Taisei Corporation</span>
    </div>
    <div className="mining-infrastructure-company-logo">
      <img src="https://imgs.search.brave.com/O3zegw0aWffH8bzLcqjYMUVJ8gbh_YQb5dFqFgVm41I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdGdy/YXBoaXRlLmNvbS9f/bmV4dC9zdGF0aWMv/bWVkaWEvZGV2ZWxv/cGVycy1tb2JpbGUu/N2JjY2NhNDQucG5n" alt="Graphite Developers" />
      <span>Graphite Developers</span>
    </div>
    <div className="mining-infrastructure-company-logo">
      <img src="https://cdn.worldvectorlogo.com/logos/minerals-technologies.svg" alt="Mineral Holdings" />
      <span>Mineral Holdings</span>
    </div>
    <div className="mining-infrastructure-company-logo">
      <img src="https://upload.wikimedia.org/wikipedia/en/b/b6/Access_Engineering_logo.jpg" alt="Access Engineering" />
      <span>Access Engineering</span>
    </div>
    <div className="mining-infrastructure-company-logo">
      <img src="http://metprodco.com/wp-content/uploads/2021/12/logo3.jpg" alt="Metallurgical Corp" />
      <span>Metallurgical Corp</span>
    </div>
  </div>
</div>

      <div className="mining-infrastructure-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for sustainable mining and infrastructure development</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>$2B Mining Export Target</h3>
            <p>Strategic vision to double mineral exports to $2 billion by 2028 through 
            value addition, new mine development, and exploration of untapped resources</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🏗️</div>
            <h3>Infrastructure Modernization</h3>
            <p>Comprehensive infrastructure upgrade program focusing on smart cities, 
            digital infrastructure, and sustainable urban development across the country</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌱</div>
            <h3>Sustainable Mining Hub</h3>
            <p>Developing Sri Lanka as a regional center for environmentally responsible 
            mining practices and mineral processing technologies</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🔗</div>
            <h3>Regional Connectivity</h3>
            <p>Enhancing Sri Lanka's position as a regional logistics and infrastructure 
            hub through port development, transportation networks, and energy connectivity</p>
          </div>
        </div>
      </div>

      <div className="mining-infrastructure-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's Infrastructure?</h2>
          <p>Join leading global companies in Sri Lanka's rapidly developing mining and infrastructure sector</p>
         
        
        </div>        
      </div>
    </div>
    
  );
};

export default MiningInfrastructureDevelopment;