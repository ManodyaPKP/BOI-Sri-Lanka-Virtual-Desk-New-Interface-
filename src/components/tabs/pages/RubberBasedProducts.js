import React from 'react';
import Rub001 from '../../../assets/sectors/RubberBasedProducts/Rub001.png';
import Rub002 from '../../../assets/sectors/RubberBasedProducts/Rub002.png';
import Rub003 from '../../../assets/sectors/RubberBasedProducts/Rub003.png';
import Rub004 from '../../../assets/sectors/RubberBasedProducts/Rub004.png';
import Rub005 from '../../../assets/sectors/RubberBasedProducts/Rub005.png';
import Rub006 from '../../../assets/sectors/RubberBasedProducts/Rub006.png';
import Rub007 from '../../../assets/sectors/RubberBasedProducts/Rub007.png';
import Rub008 from '../../../assets/sectors/RubberBasedProducts/Rub008.png';


const RubberBasedProducts = () => {
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
    <div className="rubber-based-products-sector">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
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
          e.target.style.background = '#00FF9C';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
          e.target.style.transform = 'scale(1)';
        }}
        title="Scroll to top"
      >
        ↑
      </button>

      <div className="rubber-based-products-header">
        <div className="rubber-based-products-icon">
          <i className="fas fa-tree"></i>
        </div>
        <h1>Rubber & Rubber-Based Products</h1>
        <p className="rubber-based-products-subtitle">Sri Lanka: Global Leader in Sustainable Rubber Manufacturing</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      <div className="rubber-based-products-overview">
        <h2>Industry Overview</h2>
        <p>
          Sri Lanka's Rubber industry stands as a <strong>cornerstone of the national economy</strong>, 
          contributing <strong>over $1 billion annually</strong> to export earnings. With a rich heritage 
          in rubber cultivation spanning over a century, the country has evolved into a 
          <strong> global manufacturing hub</strong> for high-value rubber products.
        </p>
        <p>
          The sector has demonstrated <strong>consistent growth and resilience</strong>, with rubber-based 
          product exports increasing by an average of 12% annually. Sri Lanka's rubber industry 
          is recognized for producing <strong>world-class quality products</strong> while maintaining 
          sustainable and environmentally responsible practices.
        </p>
        <p>
          The industry supports <strong>over 300,000 livelihoods</strong> across the value chain, from 
          rubber cultivation to finished product manufacturing, supported by advanced 
          research institutions and a skilled workforce in rubber technology.
        </p>
        
        <div className="rubber-based-products-stat-cards">
          <div className="rubber-based-products-stat-card">
            <div className="rubber-based-products-stat-icon">🌿</div>
            <div className="rubber-based-products-stat-number">130K+</div>
            <div className="rubber-based-products-stat-label">Hectares Planted</div>
            <div className="stat-growth">Sustainable Cultivation</div>
          </div>
          <div className="rubber-based-products-stat-card">
            <div className="rubber-based-products-stat-icon">🏭</div>
            <div className="rubber-based-products-stat-number">300+</div>
            <div className="rubber-based-products-stat-label">Manufacturing Units</div>
            <div className="stat-growth">Advanced Facilities</div>
          </div>
          <div className="rubber-based-products-stat-card">
            <div className="rubber-based-products-stat-icon">💰</div>
            <div className="rubber-based-products-stat-number">$1B+</div>
            <div className="rubber-based-products-stat-label">Annual Exports</div>
            <div className="stat-growth">↑ 12% YoY Growth</div>
          </div>
          <div className="rubber-based-products-stat-card">
            <div className="rubber-based-products-stat-icon">👥</div>
            <div className="rubber-based-products-stat-number">300K+</div>
            <div className="rubber-based-products-stat-label">Livelihoods Supported</div>
            <div className="stat-growth">Across Value Chain</div>
          </div>
        </div>
      </div>

      <div className="rubber-based-products-growth">
        <h2>Sector Performance & Growth Trajectory</h2>
        <div className="growth-insight">
          <p>The rubber sector has shown robust growth, with export revenue increasing steadily, 
          driven by global demand for high-quality rubber products and Sri Lanka's reputation 
          for sustainable manufacturing practices.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2021" style={{height: '100%'}}>
              <span className="bar-value">$1092M</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '95%'}}>
              <span className="bar-value">$1018M</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '80%'}}>
              <span className="bar-value">$930M</span>
              <span className="bar-label">2023</span>
            </div>
            <div className="chart-bar" data-year="2024" style={{height: '90%'}}>
              <span className="bar-value">$1001M</span>
              <span className="bar-label">2024</span>
            </div>
          </div>
          <p className="chart-note">📈 Steady growth in rubber product exports and value addition</p>
        </div>
      </div>

      <div className="rubber-based-products-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities across high-growth rubber product segments
        </p>
        
        <div className="rubber-based-products-opportunity-cards">
          <div className="rubber-based-products-opportunity-card">
            <div className="card-header">
              <div className="rubber-based-products-card-icon">
                <i className="fas fa-industry"></i>
              </div>
              <span className="opportunity-badge">Tires</span>
            </div>
            <h3>Automotive Tires</h3>
            <p className="opportunity-desc">Premium radial tires and specialty automotive rubber products</p>
            <ul>
              <li>Passenger car radial tires</li>
              <li>Commercial vehicle tires</li>
              <li>Off-road and specialty tires</li>
              <li>Tire retreading services</li>
              <li>Advanced tire manufacturing</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$200B+ global market</span>
            </div>
          </div>
          
          <div className="rubber-based-products-opportunity-card">
            <div className="card-header">
              <div className="rubber-based-products-card-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <span className="opportunity-badge">Industrial</span>
            </div>
            <h3>Industrial Rubber Products</h3>
            <p className="opportunity-desc">Specialized rubber components for industrial applications</p>
            <ul>
              <li>Conveyor belts and transmission belts</li>
              <li>Industrial hoses and seals</li>
              <li>Rubber linings for mining</li>
              <li>Vibration control products</li>
              <li>Custom molded rubber parts</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Growing at 8% CAGR</span>
            </div>
          </div>
          
          <div className="rubber-based-products-opportunity-card">
            <div className="card-header">
              <div className="rubber-based-products-card-icon">
                <i className="fas fa-stethoscope"></i>
              </div>
              <span className="opportunity-badge">Medical</span>
            </div>
            <h3>Medical & Healthcare Products</h3>
            <p className="opportunity-desc">Healthcare-grade rubber and latex products</p>
            <ul>
              <li>Surgical and examination gloves</li>
              <li>Medical tubing and devices</li>
              <li>Healthcare latex products</li>
              <li>Pharmaceutical stoppers</li>
              <li>Medical-grade seals</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$50B+ healthcare market</span>
            </div>
          </div>
          
          <div className="rubber-based-products-opportunity-card">
            <div className="card-header">
              <div className="rubber-based-products-card-icon">
                <i className="fas fa-shoe-prints"></i>
              </div>
              <span className="opportunity-badge">Footwear</span>
            </div>
            <h3>Rubber Footwear & Components</h3>
            <p className="opportunity-desc">Quality footwear and rubber sole manufacturing</p>
            <ul>
              <li>Safety and industrial footwear</li>
              <li>Sports and casual footwear</li>
              <li>Rubber soles and components</li>
              <li>Specialty rubber footwear</li>
              <li>Eco-friendly footwear</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$80B footwear market</span>
            </div>
          </div>

          <div className="rubber-based-products-opportunity-card">
            <div className="card-header">
              <div className="rubber-based-products-card-icon">
                <i className="fas fa-recycle"></i>
              </div>
              <span className="opportunity-badge">Sustainable</span>
            </div>
            <h3>Sustainable Rubber Products</h3>
            <p className="opportunity-desc">Eco-friendly and recycled rubber solutions</p>
            <ul>
              <li>Recycled rubber products</li>
              <li>Bio-degradable rubber</li>
              <li>Eco-friendly manufacturing</li>
              <li>Sustainable rubber cultivation</li>
              <li>Green rubber technologies</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Growing green market</span>
            </div>
          </div>

          <div className="rubber-based-products-opportunity-card">
            <div className="card-header">
              <div className="rubber-based-products-card-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <span className="opportunity-badge">Technical</span>
            </div>
            <h3>Technical Rubber Products</h3>
            <p className="opportunity-desc">High-performance specialized rubber applications</p>
            <ul>
              <li>Aerospace rubber components</li>
              <li>Marine and offshore products</li>
              <li>Automotive rubber parts</li>
              <li>Construction rubber products</li>
              <li>Specialty compound development</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">High-value niche market</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rubber-based-products-advantages">
        <h2>Competitive Advantages</h2>
        <p className="advantages-intro">Why global manufacturers choose Sri Lanka for rubber products</p>
        
        <div className="rubber-based-products-advantages-grid">
          <div className="rubber-based-products-advantage-item">
            <div className="advantage-number">01</div>
            <div className="rubber-based-products-advantage-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Sustainable Rubber Cultivation</h3>
            <p>Over 130,000 hectares of rubber plantations with sustainable farming practices. 
            Ideal climatic conditions for high-quality latex production with established 
            replanting programs and environmental conservation initiatives.</p>
          </div>
          
          <div className="rubber-based-products-advantage-item">
            <div className="advantage-number">02</div>
            <div className="rubber-based-products-advantage-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Skilled Workforce & Expertise</h3>
            <p>Highly skilled workforce with decades of experience in rubber technology. 
            Strong educational institutions producing rubber technologists and engineers 
            with expertise in advanced manufacturing processes and quality control.</p>
          </div>
          
          <div className="rubber-based-products-advantage-item">
            <div className="advantage-number">03</div>
            <div className="rubber-based-products-advantage-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Quality & Certification Standards</h3>
            <p>World-class quality standards with ISO, CE, and other international certifications. 
            Proven track record of supplying premium rubber products to global markets with 
            stringent quality assurance and testing protocols.</p>
          </div>
          
          <div className="rubber-based-products-advantage-item">
            <div className="advantage-number">04</div>
            <div className="rubber-based-products-advantage-icon">
              <i className="fas fa-industry"></i>
            </div>
            <h3>Advanced Manufacturing Capabilities</h3>
            <p>State-of-the-art manufacturing facilities with modern machinery and technology. 
            Comprehensive value chain integration from raw material processing to finished 
            product manufacturing with continuous innovation and process improvement.</p>
          </div>
          
          <div className="rubber-based-products-advantage-item">
            <div className="advantage-number">05</div>
            <div className="rubber-based-products-advantage-icon">
              <i className="fas fa-ship"></i>
            </div>
            <h3>Strategic Location & Logistics</h3>
            <p>Strategic location on major shipping routes with efficient logistics infrastructure. 
            Easy access to key global markets in Asia, Europe, and North America with 
            established export channels and trade relationships.</p>
          </div>
          
          <div className="rubber-based-products-advantage-item">
            <div className="advantage-number">06</div>
            <div className="rubber-based-products-advantage-icon">
              <i className="fas fa-flask"></i>
            </div>
            <h3>Research & Innovation</h3>
            <p>Strong R&D ecosystem with dedicated rubber research institutions. Continuous 
            innovation in rubber compounding, product development, and manufacturing 
            processes with collaboration between industry and academia.</p>
          </div>
        </div>
      </div>

      <div className="rubber-based-products-markets">
        <h2>Key Export Markets</h2>
        <p className="markets-intro">Sri Lankan rubber products reach consumers across global markets</p>
        <div className="markets-grid">
          <div className="market-item">
            <div className="market-flag">🇺🇸</div>
            <h4>United States</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '35%'}}></div>
            </div>
            <span className="market-share">35% of exports</span>
            <p>Automotive tires, industrial rubber products, healthcare items</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇪🇺</div>
            <h4>European Union</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '30%'}}></div>
            </div>
            <span className="market-share">30% of exports</span>
            <p>UK, Germany, France - Quality rubber products and components</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌏</div>
            <h4>Asia Pacific</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '20%'}}></div>
            </div>
            <span className="market-share">20% of exports</span>
            <p>Japan, Australia, India - Specialized rubber goods</p>
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

      <div className="rubber-based-products-capabilities">
        <h2>Manufacturing Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">🏭</div>
            <h3>Advanced Processing</h3>
            <p>Comprehensive rubber processing capabilities including mastication, mixing, 
            calendering, and extrusion. State-of-the-art compounding facilities with 
            precision control systems and automated production lines.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🔧</div>
            <h3>Molding & Forming</h3>
            <p>Expertise in compression molding, injection molding, and transfer molding 
            techniques. Capability to produce complex rubber components with tight 
            tolerances and consistent quality for diverse applications.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🧪</div>
            <h3>Compounding & Formulation</h3>
            <p>Advanced rubber compounding expertise with custom formulations for specific 
            applications. Development of specialized compounds for extreme temperatures, 
            chemical resistance, and unique performance requirements.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">📊</div>
            <h3>Quality Assurance</h3>
            <p>Comprehensive testing and quality control laboratories with advanced 
            equipment. Stringent quality standards meeting international specifications 
            with traceability and certification for all products.</p>
          </div>
        </div>
      </div>

      <div className="rubber-based-products-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for rubber industry investors</p>
        
        <div className="rubber-based-products-incentives-list">
          <div className="rubber-based-products-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 10+3 years for rubber manufacturing</li>
              <li>Duty-free import of rubber processing machinery</li>
              <li>Investment tax allowances for expansion projects</li>
              <li>Accelerated depreciation on manufacturing equipment</li>
              <li>Export duty exemptions on rubber products</li>
              <li>R&D tax credits for innovation</li>
            </ul>
          </div>
          
          <div className="rubber-based-products-incentive-item">
            <div className="incentive-icon">🏗️</div>
            <h3>Infrastructure Support</h3>
            <ul>
              <li>Access to industrial zones and export processing zones</li>
              <li>Reliable utilities and energy supply</li>
              <li>Modern factory buildings and industrial land</li>
              <li>Efficient transportation and logistics networks</li>
              <li>Rubber research and testing facilities</li>
              <li>Technical training centers</li>
            </ul>
          </div>
          
          <div className="rubber-based-products-incentive-item">
            <div className="incentive-icon">📋</div>
            <h3>Business Environment</h3>
            <ul>
              <li>100% foreign ownership permitted in rubber sector</li>
              <li>Streamlined approval processes for manufacturing</li>
              <li>Free repatriation of profits and capital</li>
              <li>Intellectual property protection</li>
              <li>Special visa facilities for technical experts</li>
              <li>Investment protection agreements</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rubber-based-products-success">
  <h2>Global Industry Partnerships</h2>
  <p className="success-intro">Sri Lankan rubber companies are trusted suppliers to world-leading brands</p>
  
  <div className="rubber-based-products-company-logos">
    <div className="rubber-based-products-company-logo">
      <img src={Rub001} alt="MRF" />
      <span>MRF</span>
    </div>
    <div className="rubber-based-products-company-logo">
      <img src={Rub002} alt="CEAT" />
      <span>CEAT</span>
    </div>
    <div className="rubber-based-products-company-logo">
      <img src={Rub003} alt="Michelin" />
      <span>Michelin</span>
    </div>
    <div className="rubber-based-products-company-logo">
      <img src={Rub004} alt="Bridgestone" />
      <span>Bridgestone</span>
    </div>
    <div className="rubber-based-products-company-logo">
      <img src={Rub005} alt="Goodyear" />
      <span>Goodyear</span>
    </div>
    <div className="rubber-based-products-company-logo">
      <img src={Rub006} alt="Dunlop" />
      <span>Dunlop</span>
    </div>
    <div className="rubber-based-products-company-logo">
      <img src={Rub007} alt="Lalan" />
      <span>Lalan Rubber</span>
    </div>
    <div className="rubber-based-products-company-logo">
      <img src={Rub008} alt="Dipped" />
      <span>Dipped Products</span>
    </div>
  </div>
</div>

      <div className="rubber-based-products-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for sustainable growth and innovation</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>$2B Export Target</h3>
            <p>Strategic vision to double rubber product exports to $2 billion by 2028 through 
            value addition, product diversification, and market expansion into high-growth 
            segments and emerging markets</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌱</div>
            <h3>Sustainable Manufacturing Hub</h3>
            <p>Positioning Sri Lanka as a global hub for sustainable rubber manufacturing with 
            focus on eco-friendly processes, circular economy principles, and green 
            technologies in rubber production</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🔬</div>
            <h3>Innovation & R&D</h3>
            <p>Major investment in rubber research and development to create advanced 
            materials and products. Focus on nanotechnology, smart rubber applications, 
            and sustainable material development</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌍</div>
            <h3>Global Market Leadership</h3>
            <p>Expansion into high-value specialty rubber products and technical applications. 
            Strengthening position as preferred supplier for premium rubber products 
            in automotive, healthcare, and industrial sectors</p>
          </div>
        </div>
      </div>

      <div className="rubber-based-products-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's Rubber Sector?</h2>
          <p>Join leading global manufacturers in Sri Lanka's thriving rubber industry ecosystem</p>
        </div>
      </div>
    </div>
  );
};

export default RubberBasedProducts;