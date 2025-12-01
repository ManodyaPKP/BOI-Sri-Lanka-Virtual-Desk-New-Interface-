import React from 'react';
import Info001 from '../../../assets/sectors/InformationTechnology/Info001.png';
import Info002 from '../../../assets/sectors/InformationTechnology/Info002.png';
import Info003 from '../../../assets/sectors/InformationTechnology/Info003.png';
import Info004 from '../../../assets/sectors/InformationTechnology/Info004.png';
import Info005 from '../../../assets/sectors/InformationTechnology/Info005.png';
import Info006 from '../../../assets/sectors/InformationTechnology/Info006.svg';
import Info007 from '../../../assets/sectors/InformationTechnology/Info007.png';
import Info008 from '../../../assets/sectors/InformationTechnology/Info008.png';


const InformationTechnology = () => {
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
    <div className="information-technology-sector">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: '#6a11cb',
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
          e.target.style.background = '#2575fc';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = '#6a11cb';
          e.target.style.transform = 'scale(1)';
        }}
        title="Scroll to top"
      >
        ↑
      </button>

      <div className="information-technology-header">
        <div className="information-technology-icon">
          <i className="fas fa-laptop-code"></i>
        </div>
        <h1>Information Technology</h1>
        <p className="information-technology-subtitle">Sri Lanka: The Emerging Digital Innovation Hub of South Asia</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      <div className="information-technology-overview">
        <h2>Industry Overview</h2>
        <p>
         <strong> Sri Lanka’s Information Technology (IT) </strong> sector is one of the country’s fastest-growing industries, generating over <strong> USD 1.5 billion in export revenue </strong> and supported by a highly skilled, English-proficient <strong> workforce of more than 175,000 professionals</strong>. With over <strong>4,000 registered software firms</strong>, strong government backing through DIGIECON-2030, and competitive costs for IT and business process outsourcing (BPO), the sector is well-positioned for global investors. Rapid growth in enterprise software, fintech, healthtech, and edtech offers high-value opportunities, making Sri Lanka an ideal hub for technology innovation and digital service exports.
        </p>
       
        
        <div className="information-technology-stat-cards">
          <div className="information-technology-stat-card">
            <div className="information-technology-stat-icon">💻</div>
            <div className="information-technology-stat-number">$5B+</div>
            <div className="information-technology-stat-label">Exports by 2030</div>
            <div className="stat-growth">↑ 20% YoY Growth</div>
          </div>
          <div className="information-technology-stat-card">
            <div className="information-technology-stat-icon">👥</div>
            <div className="information-technology-stat-number">1.75M</div>
            <div className="information-technology-stat-label">IT Professionals</div>
            <div className="stat-growth">Skilled Workforce</div>
          </div>
          <div className="information-technology-stat-card">
            <div className="information-technology-stat-icon">🏢</div>
            <div className="information-technology-stat-number">500+</div>
            <div className="information-technology-stat-label">IT Companies</div>
            <div className="stat-growth">Global & Local</div>
          </div>
          <div className="information-technology-stat-card">
            <div className="information-technology-stat-icon">🌍</div>
            <div className="information-technology-stat-number">$1B</div>
            <div className="information-technology-stat-label">Export contribution 2023</div>
            <div className="stat-growth">Global Delivery</div>
          </div>
        </div>
      </div>

      <div className="information-technology-growth">
        <h2>Sector Performance & Growth Trajectory</h2>
        <div className="growth-insight">
          <p>The IT sector has demonstrated exponential growth, with revenue increasing by an average of 20% annually, 
          driven by digital transformation demand and Sri Lanka's reputation for quality software development.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2020" style={{height: '50%'}}>
              <span className="bar-value">$1.0B</span>
              <span className="bar-label">2020</span>
            </div>
            <div className="chart-bar" data-year="2021" style={{height: '65%'}}>
              <span className="bar-value">$1.2B</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '80%'}}>
              <span className="bar-value">$1.5B</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '100%'}}>
              <span className="bar-value">$1.8B</span>
              <span className="bar-label">2023</span>
            </div>
          </div>
          <p className="chart-note">📈 Exponential growth in IT exports and digital services</p>
        </div>
      </div>

      <div className="information-technology-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities across high-growth IT and digital technology segments
        </p>
        
        <div className="information-technology-opportunity-cards">
          <div className="information-technology-opportunity-card">
            <div className="card-header">
              <div className="information-technology-card-icon">
                <i className="fas fa-code"></i>
              </div>
              <span className="opportunity-badge">Software</span>
            </div>
            <h3>Software Development</h3>
            <p className="opportunity-desc">Enterprise software and custom application development</p>
            <ul>
              <li>Enterprise Resource Planning (ERP) systems</li>
              <li>Customer Relationship Management (CRM)</li>
              <li>Custom business applications</li>
              <li>Mobile app development</li>
              <li>Legacy system modernization</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$500B+ global market</span>
            </div>
          </div>
          
          <div className="information-technology-opportunity-card">
            <div className="card-header">
              <div className="information-technology-card-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <span className="opportunity-badge">Cloud</span>
            </div>
            <h3>Cloud Services & SaaS</h3>
            <p className="opportunity-desc">Cloud computing and Software-as-a-Service solutions</p>
            <ul>
              <li>Cloud infrastructure services</li>
              <li>SaaS product development</li>
              <li>Cloud migration services</li>
              <li>Multi-cloud management</li>
              <li>Cloud security solutions</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Growing at 17% CAGR</span>
            </div>
          </div>
          
          <div className="information-technology-opportunity-card">
            <div className="card-header">
              <div className="information-technology-card-icon">
                <i className="fas fa-brain"></i>
              </div>
              <span className="opportunity-badge">AI/ML</span>
            </div>
            <h3>Artificial Intelligence & Machine Learning</h3>
            <p className="opportunity-desc">AI-powered solutions and intelligent systems</p>
            <ul>
              <li>Machine learning models</li>
              <li>Natural language processing</li>
              <li>Computer vision solutions</li>
              <li>Predictive analytics</li>
              <li>AI-powered automation</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$1.3T by 2030</span>
            </div>
          </div>
          
          <div className="information-technology-opportunity-card">
            <div className="card-header">
              <div className="information-technology-card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <span className="opportunity-badge">Cybersecurity</span>
            </div>
            <h3>Cybersecurity Services</h3>
            <p className="opportunity-desc">Digital security and threat protection solutions</p>
            <ul>
              <li>Security operations centers</li>
              <li>Vulnerability assessment</li>
              <li>Incident response services</li>
              <li>Security compliance</li>
              <li>Blockchain security</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$300B+ market</span>
            </div>
          </div>

          <div className="information-technology-opportunity-card">
            <div className="card-header">
              <div className="information-technology-card-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <span className="opportunity-badge">IoT</span>
            </div>
            <h3>Internet of Things (IoT)</h3>
            <p className="opportunity-desc">Connected devices and smart solutions</p>
            <ul>
              <li>IoT platform development</li>
              <li>Smart city solutions</li>
              <li>Industrial IoT</li>
              <li>IoT security</li>
              <li>Edge computing</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$1.1T by 2027</span>
            </div>
          </div>

          <div className="information-technology-opportunity-card">
            <div className="card-header">
              <div className="information-technology-card-icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <span className="opportunity-badge">Gaming</span>
            </div>
            <h3>Gaming & eSports</h3>
            <p className="opportunity-desc">Interactive entertainment and gaming solutions</p>
            <ul>
              <li>Mobile game development</li>
              <li>AR/VR gaming experiences</li>
              <li>eSports platform development</li>
              <li>Game testing services</li>
              <li>Gaming infrastructure</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$300B gaming market</span>
            </div>
          </div>
        </div>
      </div>

      <div className="information-technology-advantages">
        <h2>Competitive Advantages</h2>
        <p className="advantages-intro">Why global technology companies choose Sri Lanka for IT services</p>
        
        <div className="information-technology-advantages-grid">
          <div className="information-technology-advantage-item">
            <div className="advantage-number">01</div>
            <div className="information-technology-advantage-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Highly Skilled Talent Pool</h3>
            <p>Strong educational system producing 5,000+ IT graduates annually with expertise in 
            cutting-edge technologies. High English proficiency and strong analytical skills with 
            proven track record in complex software development and digital solutions.</p>
          </div>
          
          <div className="information-technology-advantage-item">
            <div className="advantage-number">02</div>
            <div className="information-technology-advantage-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3>Cost Competitiveness</h3>
            <p>Significant cost advantages with 40-50% lower development costs compared to Western 
            markets. Optimal balance of quality and affordability making Sri Lanka ideal for 
            software development, testing, and digital transformation projects.</p>
          </div>
          
          <div className="information-technology-advantage-item">
            <div className="advantage-number">03</div>
            <div className="information-technology-advantage-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Strategic Time Zone</h3>
            <p>Optimal time zone positioning enabling 24/7 development cycles and seamless 
            collaboration with global teams. Overlapping business hours with European, 
            Australian, and parts of American markets facilitating real-time communication.</p>
          </div>
          
          <div className="information-technology-advantage-item">
            <div className="advantage-number">04</div>
            <div className="information-technology-advantage-icon">
              <i className="fas fa-infinity"></i>
            </div>
            <h3>Robust Infrastructure</h3>
            <p>State-of-the-art technology infrastructure with high-speed internet connectivity, 
            reliable power supply, and modern technology parks. Comprehensive data protection 
            laws and growing ecosystem of data centers and cloud infrastructure.</p>
          </div>
          
          <div className="information-technology-advantage-item">
            <div className="advantage-number">05</div>
            <div className="information-technology-advantage-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Quality & Innovation</h3>
            <p>Proven track record of delivering high-quality software solutions with CMMI Level 5, 
            ISO 27001 certifications. Strong focus on innovation with growing startup ecosystem, 
            research institutions, and technology incubators fostering digital entrepreneurship.</p>
          </div>
          
          <div className="information-technology-advantage-item">
            <div className="advantage-number">06</div>
            <div className="information-technology-advantage-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3>Global Delivery Capability</h3>
            <p>Established global delivery model with experience serving Fortune 500 companies 
            and startups alike. Strong project management capabilities, agile methodologies, 
            and proven expertise in distributed team management and remote collaboration.</p>
          </div>
        </div>
      </div>

      <div className="information-technology-markets">
        <h2>Key Service Markets</h2>
        <p className="markets-intro">Sri Lankan IT companies serve clients across global markets and industries</p>
        <div className="markets-grid">
          <div className="market-item">
            <div className="market-flag">🇺🇸</div>
            <h4>United States</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '40%'}}></div>
            </div>
            <span className="market-share">40% of exports</span>
            <p>Enterprise software, fintech, and healthcare technology</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇪🇺</div>
            <h4>European Union</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '30%'}}></div>
            </div>
            <span className="market-share">30% of exports</span>
            <p>UK, Germany, Netherlands, Scandinavia - Enterprise solutions</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌏</div>
            <h4>Asia Pacific</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '20%'}}></div>
            </div>
            <span className="market-share">20% of exports</span>
            <p>Australia, Singapore, Japan - Digital transformation</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌍</div>
            <h4>Other Regions</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '10%'}}></div>
            </div>
            <span className="market-share">10% of exports</span>
            <p>Middle East, Africa, Latin America</p>
          </div>
        </div>
      </div>

      <div className="information-technology-capabilities">
        <h2>Advanced Technical Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">🔧</div>
            <h3>Full-Stack Development</h3>
            <p>Comprehensive expertise across technology stacks including Java, .NET, Python, 
            JavaScript, and mobile technologies. Agile development methodologies with DevOps 
            practices and continuous integration/delivery pipelines.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">☁️</div>
            <h3>Cloud & DevOps</h3>
            <p>Expertise in AWS, Azure, Google Cloud platforms with containerization, 
            microservices architecture, and infrastructure-as-code. Comprehensive DevOps 
            implementation with automated testing and deployment pipelines.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🤖</div>
            <h3>AI & Data Science</h3>
            <p>Advanced capabilities in machine learning, natural language processing, 
            computer vision, and predictive analytics. Big data processing with Hadoop, 
            Spark, and data visualization tools for actionable insights.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">📱</div>
            <h3>Mobile & Emerging Tech</h3>
            <p>Native and cross-platform mobile development, progressive web apps, 
            and emerging technologies including blockchain, AR/VR, and IoT solutions 
            with focus on user experience and performance optimization.</p>
          </div>
        </div>
      </div>

      <div className="information-technology-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for IT and technology investors</p>
        
        <div className="information-technology-incentives-list">
          <div className="information-technology-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 10+5 years for IT companies</li>
              <li>Duty-free import of computer hardware and software</li>
              <li>Investment tax allowances up to 100% of capital expenditure</li>
              <li>Double tax deduction for research and development</li>
              <li>VAT exemptions on IT exports and services</li>
              <li>Accelerated depreciation on IT equipment</li>
            </ul>
          </div>
          
          <div className="information-technology-incentive-item">
            <div className="incentive-icon">🏗️</div>
            <h3>Infrastructure Support</h3>
            <ul>
              <li>Access to technology parks and innovation hubs</li>
              <li>High-speed fiber optic connectivity</li>
              <li>Reliable power with backup systems</li>
              <li>Modern office spaces and co-working facilities</li>
              <li>Data center and cloud infrastructure</li>
              <li>Research and development centers</li>
            </ul>
          </div>
          
          <div className="information-technology-incentive-item">
            <div className="incentive-icon">📋</div>
            <h3>Business Environment</h3>
            <ul>
              <li>100% foreign ownership permitted in IT sector</li>
              <li>Streamlined company registration processes</li>
              <li>Free repatriation of profits, dividends, and capital</li>
              <li>Intellectual property protection framework</li>
              <li>Special visa facilities for technical staff</li>
              <li>One-stop investment facilitation</li>
            </ul>
          </div>
        </div>
      </div>

     <div className="information-technology-success">
  <h2>Global Technology Partnerships</h2>
  <p className="success-intro">Sri Lankan IT companies are trusted partners to world-leading technology firms</p>
  
  <div className="information-technology-company-logos">
    <div className="information-technology-company-logo">
      <img src={Info001} alt="Microsoft" />
      <span>Microsoft</span>
    </div>
    <div className="information-technology-company-logo">
      <img src={Info002} alt="Google" />
      <span>Google</span>
    </div>
    <div className="information-technology-company-logo">
      <img src={Info003} alt="Amazon" />
      <span>Amazon</span>
    </div>
    <div className="information-technology-company-logo">
      <img src={Info004} alt="IBM" />
      <span>IBM</span>
    </div>
    <div className="information-technology-company-logo">
      <img src={Info005} alt="Oracle" />
      <span>Oracle</span>
    </div>
    <div className="information-technology-company-logo">
      <img src={Info006} alt="SAP" />
      <span>SAP</span>
    </div>
    <div className="information-technology-company-logo">
      <img src={Info007} alt="Salesforce" />
      <span>Salesforce</span>
    </div>
    <div className="information-technology-company-logo">
      <img src={Info008} alt="Virtusa" />
      <span>Virtusa</span>
    </div>
  </div>
</div>

      <div className="information-technology-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for digital innovation and sector growth</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>$5B Export Target</h3>
            <p>Strategic vision to increase IT exports to $5 billion by 2025 through 
            value addition, product development, and expansion into high-growth 
            technology segments</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🚀</div>
            <h3>Digital Innovation Hub</h3>
            <p>Positioning Sri Lanka as a regional hub for digital innovation with 
            focus on AI, blockchain, and emerging technologies. Development of 
            specialized technology zones and innovation districts</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🎓</div>
            <h3>Talent Development</h3>
            <p>Major investment in technology education and skills development to 
            produce 20,000+ IT professionals annually. Focus on emerging technologies 
            and digital literacy across education system</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌐</div>
            <h3>Global Digital Services</h3>
            <p>Expansion into high-value digital services including cybersecurity, 
            data analytics, and cloud-native solutions. Strengthening position as 
            preferred partner for digital transformation</p>
          </div>
        </div>
      </div>

      <div className="information-technology-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's IT Sector?</h2>
          <p>Join leading global technology companies in Sri Lanka's thriving digital ecosystem</p>
         
      </div>
    </div>
    </div>
  );
};

export default InformationTechnology;