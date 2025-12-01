import React from 'react';
import food001 from '../../../assets/sectors/FoodProcessing/food001.svg';
import food002 from '../../../assets/sectors/FoodProcessing/food002.png';
import food003 from '../../../assets/sectors/FoodProcessing/food003.svg';
import food004 from '../../../assets/sectors/FoodProcessing/food004.png';
import food005 from '../../../assets/sectors/FoodProcessing/food005.png';
import food006 from '../../../assets/sectors/FoodProcessing/food006.png';
import food007 from '../../../assets/sectors/FoodProcessing/food007.png';
import food008 from '../../../assets/sectors/FoodProcessing/food008.png';

const FoodProcessing = () => {
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
    <div className="food-processing-sector">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: '#38b000',
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
          e.target.style.background = '#2b8c00';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = '#38b000';
          e.target.style.transform = 'scale(1)';
        }}
        title="Scroll to top"
      >
        ↑
      </button>

      <div className="food-processing-header">
        <div className="food-processing-icon">
          <i className="fas fa-utensils"></i>
        </div>
        <h1>Food Processing</h1>
        <p className="food-processing-subtitle">Transforming Sri Lanka's Agricultural Bounty into Global Food Solutions</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      {/* Rest of your existing JSX remains exactly the same */}
      <div className="food-processing-overview">
        <h2>Industry Overview</h2>
        <p>
          From lush tropical farms to global dining tables, Sri Lanka’s food and agriculture sector is ripening with opportunity. Blending rich natural resources, organic heritage, and rising demand for value-added products, this is your gateway to invest in a fresh, future-ready industry at the heart of South Asia. Sri Lanka presents a competitive, eco-friendly, and high-potential landscape for agribusiness and food processing ventures.
        </p>
        <p>
          With over <strong>150+ registered food processing companies</strong> and state-of-the-art manufacturing facilities, 
          Sri Lanka has established itself as a reliable source of high-quality, safe, and innovative food products 
          that meet international standards and consumer preferences worldwide.
        </p>
        <p>
          The industry employs <strong>over 10,000 skilled professionals</strong> across the value chain, from farm to fork, 
          supported by robust research institutions, quality certification bodies, and modern logistics infrastructure.
        </p>
        
        <div className="food-processing-stat-cards">
          <div className="food-processing-stat-card">
            <div className="food-processing-stat-icon">💰</div>
            <div className="food-processing-stat-number">19%</div>
            <div className="food-processing-stat-label">Export Growth Performance in 2024 </div>
            <div className="stat-growth">↑ 12% YoY Growth</div>
          </div>
          <div className="food-processing-stat-card">
            <div className="food-processing-stat-icon">👥</div>
            <div className="food-processing-stat-number">10K+</div>
            <div className="food-processing-stat-label">Skilled Professionals</div>
            <div className="stat-growth">Trained Workforce</div>
          </div>
          <div className="food-processing-stat-card">
            <div className="food-processing-stat-icon">🏭</div>
            <div className="food-processing-stat-number">45%</div>
            <div className="food-processing-stat-label">Land Used for Agriculture</div>
            <div className="stat-growth">Certified Plants</div>
          </div>
          <div className="food-processing-stat-card">
            <div className="food-processing-stat-icon">🌍</div>
            <div className="food-processing-stat-number">150+</div>
            <div className="food-processing-stat-label">Global Markets</div>
            <div className="stat-growth">Worldwide Reach</div>
          </div>
        </div>
      </div>

      {/* All other sections remain exactly the same */}
      <div className="food-processing-growth">
        <h2>Export Performance & Growth Trajectory</h2>
        <div className="growth-insight">
          <p>The sector has demonstrated consistent growth, with exports increasing by an average of 12% annually, 
          driven by rising global demand for tropical and organic food products.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2021" style={{height: '80%'}}>
              <span className="bar-value">$301M</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '65%'}}>
              <span className="bar-value">$275M</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '70%'}}>
              <span className="bar-value">$293M</span>
              <span className="bar-label">2023</span>
            </div>
            <div className="chart-bar" data-year="2024" style={{height: '100%'}}>
              <span className="bar-value">$348M</span>
              <span className="bar-label">2024</span>
            </div>
          </div>
          <p className="chart-note">📈 Steady growth in food processing exports with premium positioning</p>
        </div>
      </div>

      <div className="food-processing-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities across high-growth food processing sub-sectors with proven global demand
        </p>
        
        <div className="food-processing-opportunity-cards">
          <div className="food-processing-opportunity-card">
            <div className="card-header">
              <div className="food-processing-card-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <span className="opportunity-badge">Organic</span>
            </div>
            <h3>Organic & Health Foods</h3>
            <p className="opportunity-desc">Premium organic and health-focused food products</p>
            <ul>
              <li>Organic spices and herbal products</li>
              <li>Superfoods and functional foods</li>
              <li>Gluten-free and allergen-free products</li>
              <li>Plant-based protein alternatives</li>
              <li>Ayurvedic and wellness foods</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Market: $200B globally</span>
            </div>
          </div>
          
          <div className="food-processing-opportunity-card">
            <div className="card-header">
              <div className="food-processing-card-icon">
                <i className="fas fa-wine-bottle"></i>
              </div>
              <span className="opportunity-badge">Beverages</span>
            </div>
            <h3>Beverage Processing</h3>
            <p className="opportunity-desc">Premium tropical beverages and value-added drinks</p>
            <ul>
              <li>Fruit juices and concentrates</li>
              <li>Ready-to-drink teas and coffees</li>
              <li>Coconut water and plant-based drinks</li>
              <li>Functional and energy beverages</li>
              <li>Alcoholic beverages and spirits</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Growing at 6% CAGR</span>
            </div>
          </div>
          
          <div className="food-processing-opportunity-card">
            <div className="card-header">
              <div className="food-processing-card-icon">
                <i className="fas fa-fish"></i>
              </div>
              <span className="opportunity-badge">Seafood</span>
            </div>
            <h3>Seafood Processing</h3>
            <p className="opportunity-desc">Premium seafood and aquaculture products</p>
            <ul>
              <li>Tuna processing and canning</li>
              <li>Shrimp and prawn processing</li>
              <li>Value-added seafood products</li>
              <li>Frozen and ready-to-cook seafood</li>
              <li>Aquaculture feed production</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$159B global market</span>
            </div>
          </div>
          
          <div className="food-processing-opportunity-card">
            <div className="card-header">
              <div className="food-processing-card-icon">
                <i className="fas fa-cheese"></i>
              </div>
              <span className="opportunity-badge">Dairy</span>
            </div>
            <h3>Dairy & Dairy Alternatives</h3>
            <p className="opportunity-desc">Modern dairy processing and plant-based alternatives</p>
            <ul>
              <li>Milk powder and dairy products</li>
              <li>Yogurt and fermented products</li>
              <li>Cheese and dairy specialties</li>
              <li>Plant-based milk alternatives</li>
              <li>Infant and clinical nutrition</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Dairy alternatives booming</span>
            </div>
          </div>

          <div className="food-processing-opportunity-card">
            <div className="card-header">
              <div className="food-processing-card-icon">
                <i className="fas fa-apple-alt"></i>
              </div>
              <span className="opportunity-badge">Fruits</span>
            </div>
            <h3>Fruit & Vegetable Processing</h3>
            <p className="opportunity-desc">Tropical fruit processing and value addition</p>
            <ul>
              <li>Pineapple processing and canning</li>
              <li>Mango pulp and products</li>
              <li>Banana chips and snacks</li>
              <li>Frozen fruits and vegetables</li>
              <li>Fruit concentrates and purees</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Tropical fruits in demand</span>
            </div>
          </div>

          <div className="food-processing-opportunity-card">
            <div className="card-header">
              <div className="food-processing-card-icon">
                <i className="fas fa-mortar-pestle"></i>
              </div>
              <span className="opportunity-badge">Spices</span>
            </div>
            <h3>Spice & Condiment Processing</h3>
            <p className="opportunity-desc">Premium spice processing and value addition</p>
            <ul>
              <li>Cinnamon processing and products</li>
              <li>Pepper and spice blends</li>
              <li>Curry powders and pastes</li>
              <li>Essential oils and extracts</li>
              <li>Organic and fair-trade spices</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Cinnamon: #1 global</span>
            </div>
          </div>
        </div>
      </div>

      <div className="food-processing-advantages">
        <h2>Competitive Advantages</h2>
        <p className="advantages-intro">Why global food companies choose Sri Lanka for food processing</p>
        
        <div className="food-processing-advantages-grid">
          <div className="food-processing-advantage-item">
            <div className="advantage-number">01</div>
            <div className="food-processing-advantage-icon">
              <i className="fas fa-tractor"></i>
            </div>
            <h3>Rich Agricultural Base</h3>
            <p>Diverse tropical climate supporting year-round cultivation of spices, fruits, vegetables, and 
            seafood. Strong backward integration with agricultural communities ensuring consistent quality 
            and supply chain reliability.</p>
          </div>
          
          <div className="food-processing-advantage-item">
            <div className="advantage-number">02</div>
            <div className="food-processing-advantage-icon">   
              <i className="fas fa-certificate"></i>
            </div>
            <h3>International Quality Standards</h3>
            <p>HACCP, ISO 22000, BRC, FDA, and EU-compliant facilities with comprehensive food safety 
            management systems. Stringent quality control and traceability systems meeting global food 
            safety requirements.</p>
          </div>
          
          <div className="food-processing-advantage-item">
            <div className="advantage-number">03</div>
            <div className="food-processing-advantage-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Organic & Sustainable Production</h3>
            <p>Growing organic certification and sustainable farming practices. Strong focus on 
            environmentally friendly processing methods and circular economy principles in food 
            production.</p>
          </div>
          
          <div className="food-processing-advantage-item">
            <div className="advantage-number">04</div>
            <div className="food-processing-advantage-icon">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h3>Strategic Logistics Advantage</h3>
            <p>Prime location on major shipping routes with efficient cold chain logistics. Modern port 
            facilities with dedicated food handling areas and established export corridors to key 
            markets.</p>
          </div>
          
          <div className="food-processing-advantage-item">
            <div className="advantage-number">05</div>
            <div className="food-processing-advantage-icon">
              <i className="fas fa-flask"></i>
            </div>
            <h3>Research & Innovation</h3>
            <p>Strong R&D ecosystem with partnerships between industry and research institutions. 
            Focus on product development, food technology innovation, and process optimization for 
            competitive advantage.</p>
          </div>
          
          <div className="food-processing-advantage-item">
            <div className="advantage-number">06</div>
            <div className="food-processing-advantage-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Premium Product Positioning</h3>
            <p>Recognition for high-quality specialty products like Ceylon Cinnamon, Ceylon Tea, 
            and tropical fruits. Strong brand equity for Sri Lankan food products in international 
            markets.</p>
          </div>
        </div>
      </div>

      <div className="food-processing-markets">
        <h2>Key Export Markets</h2>
        <p className="markets-intro">Sri Lankan processed foods reach consumers across 80+ countries worldwide</p>
        <div className="markets-grid">
          <div className="market-item">
            <div className="market-flag">🇪🇺</div>
            <h4>European Union</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '40%'}}></div>
            </div>
            <span className="market-share">40% of exports</span>
            <p>Germany, UK, France, Netherlands, Italy - Premium markets</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇺🇸</div>
            <h4>United States</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '25%'}}></div>
            </div>
            <span className="market-share">25% of exports</span>
            <p>Growing demand for organic and ethnic foods</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌏</div>
            <h4>Asia Pacific</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '20%'}}></div>
            </div>
            <span className="market-share">20% of exports</span>
            <p>Japan, Australia, Middle East, India</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌍</div>
            <h4>Other Regions</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '15%'}}></div>
            </div>
            <span className="market-share">15% of exports</span>
            <p>Canada, Africa, Latin America</p>
          </div>
        </div>
      </div>

      <div className="food-processing-capabilities">
        <h2>Advanced Processing Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">🏭</div>
            <h3>Thermal Processing</h3>
            <p>State-of-the-art retort processing, canning, and pasteurization facilities with automated 
            quality control systems and advanced sterilization technologies</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">❄️</div>
            <h3>Cold Chain & Freezing</h3>
            <p>Modern freezing technologies including IQF, blast freezing, and cryogenic freezing with 
            comprehensive cold chain logistics and temperature monitoring</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">⚗️</div>
            <h3>Extraction & Concentration</h3>
            <p>Advanced extraction technologies for essential oils, fruit concentrates, and bioactive 
            compounds with precision control and quality assurance</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🔬</div>
            <h3>Quality & Safety Testing</h3>
            <p>Comprehensive testing laboratories for microbiology, chemistry, sensory evaluation, 
            and nutritional analysis with international accreditation</p>
          </div>
        </div>
      </div>

      <div className="food-processing-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for food processing investors</p>
        
        <div className="food-processing-incentives-list">
          <div className="food-processing-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 10+5 years for agri-processing investments</li>
              <li>Duty-free import of processing machinery and equipment</li>
              <li>Investment tax allowances up to 100% of capital expenditure</li>
              <li>Concessional loans for agriculture and food processing</li>
              <li>VAT exemptions on exports and related services</li>
              <li>Special incentives for organic and value-added products</li>
            </ul>
          </div>
          
          <div className="food-processing-incentive-item">
            <div className="incentive-icon">🏗️</div>
            <h3>Infrastructure Support</h3>
            <ul>
              <li>Access to agricultural parks and food processing zones</li>
              <li>Modern cold storage and logistics facilities</li>
              <li>Reliable utilities with competitive pricing</li>
              <li>Quality certification and testing support</li>
              <li>Research and development partnerships</li>
              <li>Export facilitation services</li>
            </ul>
          </div>
          
          <div className="food-processing-incentive-item">
            <div className="incentive-icon">📋</div>
            <h3>Business Environment</h3>
            <ul>
              <li>100% foreign ownership permitted in food processing</li>
              <li>Streamlined approval processes for food businesses</li>
              <li>Free repatriation of profits, dividends, and capital</li>
              <li>Technical assistance and training programs</li>
              <li>Market access support and trade facilitation</li>
              <li>One-stop shop for investment approvals</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="food-processing-success">
        <h2>Global Food Partnerships</h2>
        <p className="success-intro">Sri Lankan food processors are trusted partners to the world's leading food brands</p>
        
        <div className="food-processing-company-logos">
          <div className="food-processing-company-logo">
            <img src={food001} alt="Nestlé" />
            <span>Nestlé</span>
          </div>
          <div className="food-processing-company-logo">
            <img src={food002} alt="Unilever" />
            <span>Unilever</span>
          </div>
          <div className="food-processing-company-logo">
            <img src={food003} alt="Mars" />
            <span>Mars</span>
          </div>
          <div className="food-processing-company-logo">
            <img src={food004} alt="Coca-Cola" />
            <span>Coca-Cola</span>
          </div>
          <div className="food-processing-company-logo">
            <img src={food005} alt="Kellogg's" />
            <span>Kellogg's</span>
          </div>
          <div className="food-processing-company-logo">
            <img src={food006} alt="General Mills" />
            <span>General Mills</span>
          </div>
          <div className="food-processing-company-logo">
            <img src={food007} alt="Tyson Foods" />
            <span>Tyson Foods</span>
          </div>
          <div className="food-processing-company-logo">
            <img src={food008} alt="Thai Union" />
            <span>Thai Union</span>
          </div>
        </div>
      </div>

      <div className="food-processing-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for sector growth and value addition</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>$2B Export Target</h3>
            <p>Strategic vision to increase food processing exports to $2 billion by 2026 through 
            value addition and market diversification</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌱</div>
            <h3>Sustainable Food Systems</h3>
            <p>Major focus on circular economy, waste reduction, and sustainable packaging 
            solutions for environmentally conscious consumers</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🔬</div>
            <h3>Innovation & Technology</h3>
            <p>Adoption of Industry 4.0 technologies, automation, and digital traceability 
            for enhanced efficiency and food safety</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌍</div>
            <h3>Global Market Expansion</h3>
            <p>Strategic entry into emerging markets and development of new product categories 
            for sustained growth and competitiveness</p>
          </div>
        </div>
      </div>

      <div className="food-processing-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's Food Processing Sector?</h2>
          <p>Join leading global food companies in Sri Lanka's thriving food processing ecosystem</p>
        </div>
      </div>
    </div>
  );
};

export default FoodProcessing;