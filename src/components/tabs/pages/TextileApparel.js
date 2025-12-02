import React from 'react';
import T001 from '../../../assets/sectors/TextileApparelimg/T001.png';
import T002 from '../../../assets/sectors/TextileApparelimg/T002.png';
import T003 from '../../../assets/sectors/TextileApparelimg/T003.png';
import T004 from '../../../assets/sectors/TextileApparelimg/T004.png';
import T005 from '../../../assets/sectors/TextileApparelimg/T005.png';
import T006 from '../../../assets/sectors/TextileApparelimg/T006.png';
import T007 from '../../../assets/sectors/TextileApparelimg/T007.png';
import T008 from '../../../assets/sectors/TextileApparelimg/T008.png';
import T009 from '../../../assets/sectors/TextileApparelimg/T009.png';
import T0010 from '../../../assets/sectors/TextileApparelimg/T0010.png';
import T0011 from '../../../assets/sectors/TextileApparelimg/T0011.png';
import T0012 from '../../../assets/sectors/TextileApparelimg/T0012.png';

const TextileApparel = () => {
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
    <div className="textile-apparel-sector">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
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
          e.target.style.background = '#8C00FF';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)';
          e.target.style.transform = 'scale(1)';
        }}
        title="Scroll to top"
      >
        ↑
      </button>

      <div className="textile-apparel-header">
        <div className="textile-apparel-icon">
          <i className="fas fa-tshirt"></i>
        </div>
        <h1>Textile & Apparel Industry</h1>
        <p className="textile-apparel-subtitle">Crafting World-Class Fashion with Sri Lankan Excellence</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      <div className="textile-apparel-overview">
        <h2>Industry Overview</h2>
        <p>
         Sri Lanka’s apparel industry is a cornerstone of the national economy, <strong>contributing over 42% </strong>of total export earnings and <strong>employing more than 300,000 people, predominantly women</strong>. Renowned for ethical manufacturing and <strong>high-quality production</strong>, the sector serves major global brands across <strong> Europe, the U.S., and Asia. Strategic location </strong>, preferential trade agreements, and a skilled workforce make Sri Lanka an attractive destination for foreign direct investment. Growing focus on <strong>sustainability, innovation, and value-added products</strong> further strengthens the sector’s competitive edge, offering investors significant opportunities in manufacturing, design, and export-oriented ventures.
        </p>
        <p>
          Renowned for its <strong>ethical manufacturing practices, innovation, and design capabilities</strong>, 
          Sri Lanka has earned the reputation as the "Garmenting without Guilt" destination, offering 
          European-quality apparel with competitive pricing and rapid turnaround times.
        </p>
        
        <div className="textile-apparel-stat-cards">
          <div className="textile-apparel-stat-card">
            <div className="textile-apparel-stat-icon">💰</div>
            <div className="textile-apparel-stat-number">$5B+</div>
            <div className="textile-apparel-stat-label">Annual Export Revenue</div>
            <div className="stat-growth">↑ 12% YoY Growth</div>
          </div>
          <div className="textile-apparel-stat-card">
            <div className="textile-apparel-stat-icon">👥</div>
            <div className="textile-apparel-stat-number">300,000+</div>
            <div className="textile-apparel-stat-label">Skilled Workforce</div>
            <div className="stat-growth">Largest Employment Sector</div>
          </div>
          <div className="textile-apparel-stat-card">
            <div className="textile-apparel-stat-icon">🏭</div>
            <div className="textile-apparel-stat-number">1,000+</div>
            <div className="textile-apparel-stat-label">Manufacturing Facilities</div>
            <div className="stat-growth">ISO Certified Factories</div>
          </div>
          <div className="textile-apparel-stat-card">
            <div className="textile-apparel-stat-icon">🌍</div>
            <div className="textile-apparel-stat-number">50+</div>
            <div className="textile-apparel-stat-label">Global Markets Served</div>
            <div className="stat-growth">Premium Brands Worldwide</div>
          </div>
        </div>
      </div>

      <div className="textile-apparel-growth">
        <h2>Export Performance & Growth Trajectory</h2>
        <div className="growth-insight">
          <p>The sector has demonstrated remarkable resilience and consistent growth, achieving record exports 
          despite global challenges. Sri Lanka has positioned itself as a preferred sourcing destination for 
          high-value, ethically produced apparel.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2021" style={{height: '90%'}}>
              <span className="bar-value">$5.41M</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '100%'}}>
              <span className="bar-value">$5.93M</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '70%'}}>
              <span className="bar-value">$4.86M</span>
              <span className="bar-label">2023</span>
            </div>
            <div className="chart-bar" data-year="2024" style={{height: '80%'}}>
              <span className="bar-value">$5.05M</span>
              <span className="bar-label">2024</span>
            </div>
          </div>
          <p className="chart-note">📈 Consistent growth in textile and apparel exports despite global challenges</p>
        </div>
      </div>

      <div className="textile-apparel-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities across high-growth apparel and textile sub-sectors with proven global demand
        </p>
        
        <div className="textile-apparel-opportunity-cards">
          <div className="textile-apparel-opportunity-card">
            <div className="card-header">
              <div className="textile-apparel-card-icon">
                <i className="fas fa-female"></i>
              </div>
              <span className="opportunity-badge">High Value</span>
            </div>
            <h3>Women's Wear</h3>
            <p className="opportunity-desc">Premium women's fashion and intimate apparel</p>
            <ul>
              <li>Bridal and evening wear collections</li>
              <li>Designer dresses and formal wear</li>
              <li>Intimate apparel and lingerie</li>
              <li>Sportswear and activewear</li>
              <li>Maternity and plus-size clothing</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Luxury Segment Focus</span>
            </div>
          </div>
          
          <div className="textile-apparel-opportunity-card">
            <div className="card-header">
              <div className="textile-apparel-card-icon">
                <i className="fas fa-male"></i>
              </div>
              <span className="opportunity-badge">Premium</span>
            </div>
            <h3>Men's Wear</h3>
            <p className="opportunity-desc">High-quality menswear and formal attire</p>
            <ul>
              <li>Business formal and suits</li>
              <li>Casual and smart casual wear</li>
              <li>Denim and trousers</li>
              <li>Shirts and polo shirts</li>
              <li>Outerwear and jackets</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Rapid Growth</span>
            </div>
          </div>
          
          <div className="textile-apparel-opportunity-card">
            <div className="card-header">
              <div className="textile-apparel-card-icon">
                <i className="fas fa-child"></i>
              </div>
              <span className="opportunity-badge">Specialized</span>
            </div>
            <h3>Children's Wear</h3>
            <p className="opportunity-desc">Safe, comfortable children's clothing</p>
            <ul>
              <li>Infant and toddler clothing</li>
              <li>School uniforms and wear</li>
              <li>Playwear and casual clothing</li>
              <li>Organic and sustainable options</li>
              <li>Character licensed apparel</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Safety Focused</span>
            </div>
          </div>
          
          <div className="textile-apparel-opportunity-card">
            <div className="card-header">
              <div className="textile-apparel-card-icon">
                <i className="fas fa-socks"></i>
              </div>
              <span className="opportunity-badge">High Volume</span>
            </div>
            <h3>Knitwear & Hosiery</h3>
            <p className="opportunity-desc">Advanced knitwear and hosiery products</p>
            <ul>
              <li>Fine gauge knitwear</li>
              <li>Hosiery and socks</li>
              <li>Intimate knitwear</li>
              <li>Technical knit fabrics</li>
              <li>Seamless technology products</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Technical Innovation</span>
            </div>
          </div>

          <div className="textile-apparel-opportunity-card">
            <div className="card-header">
              <div className="textile-apparel-card-icon">
                <i className="fas fa-palette"></i>
              </div>
              <span className="opportunity-badge">Eco-Friendly</span>
            </div>
            <h3>Sustainable Fashion</h3>
            <p className="opportunity-desc">Eco-friendly and sustainable apparel</p>
            <ul>
              <li>Organic cotton clothing</li>
              <li>Recycled material products</li>
              <li>Natural dye applications</li>
              <li>Zero-waste manufacturing</li>
              <li>Circular fashion initiatives</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Green Revolution</span>
            </div>
          </div>

          <div className="textile-apparel-opportunity-card">
            <div className="card-header">
              <div className="textile-apparel-card-icon">
                <i className="fas fa-industry"></i>
              </div>
              <span className="opportunity-badge">Backward Integration</span>
            </div>
            <h3>Textile Manufacturing</h3>
            <p className="opportunity-desc">Fabric and textile production</p>
            <ul>
              <li>Fabric weaving and knitting</li>
              <li>Dyeing and printing</li>
              <li>Technical textiles</li>
              <li>Fabric finishing</li>
              <li>Textile innovation centers</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Supply Chain Integration</span>
            </div>
          </div>
        </div>
      </div>

      <div className="textile-apparel-advantages">
        <h2>Competitive Advantages</h2>
        <p className="advantages-intro">
          Why global fashion leaders choose Sri Lanka as their manufacturing partner
        </p>
        
        <div className="textile-apparel-advantages-grid">
          <div className="textile-apparel-advantage-item">
            <div className="advantage-number">01</div>
            <div className="textile-apparel-advantage-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Ethical Manufacturing</h3>
            <p>Pioneers of "Garmenting without Guilt" with world-class labor standards, fair wages, and 
            excellent working conditions. Compliance with international ethical trading initiatives and 
            comprehensive worker welfare programs.</p>
          </div>
          
          <div className="textile-apparel-advantage-item">
            <div className="advantage-number">02</div>
            <div className="textile-apparel-advantage-icon">
              <i className="fas fa-gem"></i>
            </div>
            <h3>Quality & Craftsmanship</h3>
            <p>Exceptional quality standards with meticulous attention to detail. Skilled workforce capable 
            of handling complex designs, intricate embellishments, and premium fabrications meeting 
            international quality benchmarks.</p>
          </div>
          
          <div className="textile-apparel-advantage-item">
            <div className="advantage-number">03</div>
            <div className="textile-apparel-advantage-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Speed to Market</h3>
            <p>Rapid turnaround times with efficient supply chain management. Capability to deliver from 
            concept to store in as little as 3-4 weeks for fast fashion, supported by agile manufacturing 
            processes and logistical excellence.</p>
          </div>
          
          <div className="textile-apparel-advantage-item">
            <div className="advantage-number">04</div>
            <div className="textile-apparel-advantage-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Sustainable Practices</h3>
            <p>Leadership in sustainable manufacturing with green factories, water recycling systems, 
            and eco-friendly processes. Multiple LEED-certified facilities and commitment to 
            environmental stewardship.</p>
          </div>
          
          <div className="textile-apparel-advantage-item">
            <div className="advantage-number">05</div>
            <div className="textile-apparel-advantage-icon">
              <i className="fas fa-tshirt"></i>
            </div>
            <h3>Design & Development</h3>
            <p>Strong design capabilities with in-house design teams, sample development, and trend 
            forecasting. Collaborative approach with brands for product development and innovation 
            in materials and techniques.</p>
          </div>
          
          <div className="textile-apparel-advantage-item">
            <div className="advantage-number">06</div>
            <div className="textile-apparel-advantage-icon">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h3>Logistical Excellence</h3>
            <p>Strategic location with excellent connectivity to major markets. Efficient port facilities, 
            established shipping routes, and expertise in handling time-sensitive fashion deliveries 
            with reliable lead times.</p>
          </div>
        </div>
      </div>

      <div className="textile-apparel-markets">
        <h2>Key Export Markets</h2>
        <p className="markets-intro">Sri Lankan apparel reaches consumers across 50+ countries through world's leading brands</p>
        <div className="markets-grid">
          <div className="market-item">
            <div className="market-flag">🇺🇸</div>
            <h4>United States</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '45%'}}></div>
            </div>
            <span className="market-share">45% of exports</span>
            <p>Largest export market for apparel including Victoria's Secret, Calvin Klein</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇪🇺</div>
            <h4>European Union</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '35%'}}></div>
            </div>
            <span className="market-share">35% of exports</span>
            <p>UK, Germany, France, Italy, Spain - Marks & Spencer, NEXT</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌏</div>
            <h4>Other Markets</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '15%'}}></div>
            </div>
            <span className="market-share">15% of exports</span>
            <p>Canada, Australia, Japan, and emerging markets</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🆕</div>
            <h4>New Markets</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '5%'}}></div>
            </div>
            <span className="market-share">5% of exports</span>
            <p>China, Middle East, Latin America - Rapidly growing</p>
          </div>
        </div>
      </div>

      <div className="textile-apparel-capabilities">
        <h2>Advanced Manufacturing Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">✂️</div>
            <h3>Cutting & Pattern Making</h3>
            <p>Computerized cutting systems, automated pattern making, and precision cutting technologies 
            ensuring optimal fabric utilization and accuracy in garment construction.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🧵</div>
            <h3>Sewing & Assembly</h3>
            <p>Advanced sewing operations with modular manufacturing systems, unit production systems, 
            and specialized machinery for different product categories and complexity levels.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🎨</div>
            <h3>Printing & Embellishment</h3>
            <p>Digital printing, screen printing, embroidery, laser cutting, and specialty embellishments 
            including sequins, beads, and appliqué work for high-fashion garments.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">✅</div>
            <h3>Quality Control & Testing</h3>
            <p>Comprehensive quality assurance laboratories with testing for color fastness, shrinkage, 
            fabric strength, and compliance with international safety and quality standards.</p>
          </div>
        </div>
      </div>

      <div className="textile-apparel-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for textile and apparel manufacturers</p>
        
        <div className="textile-apparel-incentives-list">
          <div className="textile-apparel-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 10+5 years for export-oriented apparel ventures</li>
              <li>Duty-free import of raw materials, fabrics, and machinery</li>
              <li>Investment tax allowances up to 100% of capital expenditure</li>
              <li>Double tax deduction for research and design activities</li>
              <li>VAT exemptions on exports and related services</li>
              <li>Concessional import duties on specialized textile machinery</li>
            </ul>
          </div>
          
          <div className="textile-apparel-incentive-item">
            <div className="incentive-icon">🏗️</div>
            <h3>Infrastructure Support</h3>
            <ul>
              <li>Access to apparel parks and specialized industrial zones</li>
              <li>Reliable 24/7 power supply with backup systems</li>
              <li>Modern factory buildings with expansion capabilities</li>
              <li>Efficient logistics and supply chain infrastructure</li>
              <li>Technical training centers and skill development programs</li>
              <li>Dedicated export processing zones with streamlined customs</li>
            </ul>
          </div>
          
          <div className="textile-apparel-incentive-item">
            <div className="incentive-icon">📋</div>
            <h3>Business Environment</h3>
            <ul>
              <li>100% foreign ownership permitted in apparel sector</li>
              <li>Streamlined approval processes through Board of Investment</li>
              <li>Free repatriation of profits, dividends, and capital</li>
              <li>Special visa facilities for expatriate technical staff</li>
              <li>Strong intellectual property protection framework</li>
              <li>One-stop facilitation for business setup and operations</li>
            </ul>
          </div>
        </div>
      </div>

     <div className="textile-apparel-success">
  <h2>Global Fashion Partnerships</h2>
  <p className="success-intro">Sri Lankan apparel manufacturers are trusted partners to the world's leading fashion brands and retailers</p>
  
  <div className="textile-apparel-company-logos">
    <div className="textile-apparel-company-logo">
      <img src={T001} alt="Victoria's Secret" />
      <span>Victoria's Secret</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T002} alt="Calvin Klein" />
      <span>Calvin Klein</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T003} alt="Marks & Spencer" />
      <span>Marks & Spencer</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T004} alt="Tommy Hilfiger" />
      <span>Tommy Hilfiger</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T005} alt="PVH Corp" />
      <span>PVH Corp</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T006} alt="NEXT" />
      <span>NEXT</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T007} alt="Ralph Lauren" />
      <span>Ralph Lauren</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T008} alt="Intimissimi" />
      <span>Intimissimi</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T009} alt="L Brand" />
      <span>L Brand</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T0010} alt="Burberry" />
      <span>Burberry</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T0011} alt="Michael Kors" />
      <span>Michael Kors</span>
    </div>
    <div className="textile-apparel-company-logo">
      <img src={T0012} alt="Under Armour" />
      <span>Under Armour</span>
    </div>
  </div>
</div>
      <div className="textile-apparel-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for sector growth and technological advancement</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>$8B Export Target</h3>
            <p>Strategic vision to achieve $8 billion in apparel exports by 2026 through value addition, 
            market diversification, and supply chain integration</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌱</div>
            <h3>Sustainability Leadership</h3>
            <p>Pioneering green manufacturing with carbon-neutral factories, circular economy initiatives, 
            and sustainable material innovations</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🤖</div>
            <h3>Industry 4.0 Integration</h3>
            <p>Adoption of smart manufacturing technologies, automation, IoT, and AI for enhanced 
            productivity and customization capabilities</p>
          </div>
          <div className="future-item">
            <div className="future-icon">💡</div>
            <h3>Innovation & Design Hub</h3>
            <p>Developing Sri Lanka as a regional innovation center for fashion design, textile 
            technology, and product development</p>
          </div>
        </div>
      </div>

      <div className="textile-apparel-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's Apparel Sector?</h2>
          <p>Join leading global fashion brands in Sri Lanka's world-class manufacturing ecosystem</p>
          
        </div>
      </div>
    </div>
  );
};

export default TextileApparel;