import React from 'react';

const TourismLeisure = () => {
  return (
    <div className="tourism-leisure-sector">
      <div className="tourism-leisure-header">
        <div className="tourism-leisure-icon">
          <i className="fas fa-umbrella-beach"></i>
        </div>
        <h1>Tourism & Leisure</h1>
        <p className="tourism-leisure-subtitle">Sri Lanka: Paradise Rediscovered - Where Ancient Wonders Meet Tropical Splendor</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      <div className="tourism-leisure-overview">
        <h2>Industry Overview</h2>
        <p>
          Sri Lanka's Tourism and Leisure sector has emerged as a <strong>key economic driver</strong>, 
          contributing <strong>over $4 billion annually</strong> to the national economy. With its stunning 
          natural beauty, rich cultural heritage, and warm hospitality, the island nation has firmly 
          established itself as a premier destination for global travelers.
        </p>
        <p>
          From pristine beaches and ancient cities to lush tea plantations and diverse wildlife, 
          Sri Lanka offers <strong>unparalleled diversity</strong> in tourism experiences. The sector 
          has demonstrated remarkable resilience and growth, welcoming <strong>over 2 million visitors annually</strong> 
          pre-pandemic with strong recovery momentum.
        </p>
        <p>
          The industry supports <strong>over 500,000 direct and indirect jobs</strong> across accommodation, 
          transportation, food services, and entertainment, making it a vital component of Sri Lanka's 
          economic landscape and social development.
        </p>
        
        <div className="tourism-leisure-stat-cards">
          <div className="tourism-leisure-stat-card">
            <div className="tourism-leisure-stat-icon">🏖️</div>
            <div className="tourism-leisure-stat-number">$4B+</div>
            <div className="tourism-leisure-stat-label">Annual Revenue</div>
            <div className="stat-growth">↑ 25% YoY Growth</div>
          </div>
          <div className="tourism-leisure-stat-card">
            <div className="tourism-leisure-stat-icon">👥</div>
            <div className="tourism-leisure-stat-number">500K+</div>
            <div className="tourism-leisure-stat-label">Jobs Supported</div>
            <div className="stat-growth">Direct & Indirect</div>
          </div>
          <div className="tourism-leisure-stat-card">
            <div className="tourism-leisure-stat-icon">🏨</div>
            <div className="tourism-leisure-stat-number">2K+</div>
            <div className="tourism-leisure-stat-label">Hotels & Resorts</div>
            <div className="stat-growth">Luxury to Budget</div>
          </div>
          <div className="tourism-leisure-stat-card">
            <div className="tourism-leisure-stat-icon">🌍</div>
            <div className="tourism-leisure-stat-number">100+</div>
            <div className="tourism-leisure-stat-label">Source Markets</div>
            <div className="stat-growth">Global Reach</div>
          </div>
        </div>
      </div>

      <div className="tourism-leisure-growth">
        <h2>Tourism Performance & Recovery</h2>
        <div className="growth-insight">
          <p>The sector has shown remarkable resilience with visitor numbers recovering strongly post-pandemic, 
          demonstrating 25% year-on-year growth and exceeding pre-pandemic performance targets.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2019" style={{height: '100%'}}>
              <span className="bar-value">2.3M</span>
              <span className="bar-label">2019</span>
            </div>
            <div className="chart-bar" data-year="2020" style={{height: '15%'}}>
              <span className="bar-value">0.5M</span>
              <span className="bar-label">2020</span>
            </div>
            <div className="chart-bar" data-year="2021" style={{height: '30%'}}>
              <span className="bar-value">0.8M</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '70%'}}>
              <span className="bar-value">1.8M</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '95%'}}>
              <span className="bar-value">2.1M</span>
              <span className="bar-label">2023</span>
            </div>
          </div>
          <p className="chart-note">📈 Strong recovery trajectory with 2024 projected to exceed pre-pandemic levels</p>
        </div>
      </div>

      <div className="tourism-leisure-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities across high-growth tourism and leisure segments
        </p>
        
        <div className="tourism-leisure-opportunity-cards">
          <div className="tourism-leisure-opportunity-card">
            <div className="card-header">
              <div className="tourism-leisure-card-icon">
                <i className="fas fa-hotel"></i>
              </div>
              <span className="opportunity-badge">Luxury</span>
            </div>
            <h3>Luxury Resorts & Hotels</h3>
            <p className="opportunity-desc">Premium accommodation and hospitality experiences</p>
            <ul>
              <li>5-star beach resorts and villas</li>
              <li>Boutique luxury hotels</li>
              <li>Eco-luxury retreats</li>
              <li>Wellness and spa resorts</li>
              <li>Private island developments</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">High-end tourism growth</span>
            </div>
          </div>
          
          <div className="tourism-leisure-opportunity-card">
            <div className="card-header">
              <div className="tourism-leisure-card-icon">
                <i className="fas fa-spa"></i>
              </div>
              <span className="opportunity-badge">Wellness</span>
            </div>
            <h3>Wellness & Medical Tourism</h3>
            <p className="opportunity-desc">Health, wellness, and medical tourism facilities</p>
            <ul>
              <li>Ayurveda wellness centers</li>
              <li>Medical tourism hospitals</li>
              <li>Yoga and meditation retreats</li>
              <li>Detox and wellness programs</li>
              <li>Rehabilitation centers</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$800B global market</span>
            </div>
          </div>
          
          <div className="tourism-leisure-opportunity-card">
            <div className="card-header">
              <div className="tourism-leisure-card-icon">
                <i className="fas fa-hiking"></i>
              </div>
              <span className="opportunity-badge">Adventure</span>
            </div>
            <h3>Adventure & Eco-Tourism</h3>
            <p className="opportunity-desc">Sustainable adventure and nature experiences</p>
            <ul>
              <li>Wildlife safari lodges</li>
              <li>Adventure sports facilities</li>
              <li>Eco-friendly accommodations</li>
              <li>Nature conservation tourism</li>
              <li>Marine tourism activities</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Sustainable travel boom</span>
            </div>
          </div>
          
          <div className="tourism-leisure-opportunity-card">
            <div className="card-header">
              <div className="tourism-leisure-card-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <span className="opportunity-badge">Gastronomy</span>
            </div>
            <h3>Culinary & Food Tourism</h3>
            <p className="opportunity-desc">Food experiences and culinary tourism</p>
            <ul>
              <li>Signature restaurants and cafes</li>
              <li>Cooking schools and workshops</li>
              <li>Food festivals and events</li>
              <li>Wine and spirit tourism</li>
              <li>Culinary tour operations</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Food tourism growth</span>
            </div>
          </div>

          <div className="tourism-leisure-opportunity-card">
            <div className="card-header">
              <div className="tourism-leisure-card-icon">
                <i className="fas fa-monument"></i>
              </div>
              <span className="opportunity-badge">Culture</span>
            </div>
            <h3>Cultural & Heritage Tourism</h3>
            <p className="opportunity-desc">Cultural experiences and heritage sites</p>
            <ul>
              <li>Heritage hotel conversions</li>
              <li>Cultural experience centers</li>
              <li>Archaeological site development</li>
              <li>Traditional arts and crafts</li>
              <li>Cultural festival management</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">8 UNESCO World Heritage sites</span>
            </div>
          </div>

          <div className="tourism-leisure-opportunity-card">
            <div className="card-header">
              <div className="tourism-leisure-card-icon">
                <i className="fas fa-ship"></i>
              </div>
              <span className="opportunity-badge">Marine</span>
            </div>
            <h3>Marine & Coastal Tourism</h3>
            <p className="opportunity-desc">Ocean-based tourism and coastal development</p>
            <ul>
              <li>Marina and yacht facilities</li>
              <li>Water sports centers</li>
              <li>Beach club developments</li>
              <li>Marine wildlife tourism</li>
              <li>Coastal infrastructure</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">1,340km coastline</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tourism-leisure-advantages">
        <h2>Competitive Advantages</h2>
        <p className="advantages-intro">Why Sri Lanka stands out as a premier tourism destination</p>
        
        <div className="tourism-leisure-advantages-grid">
          <div className="tourism-leisure-advantage-item">
            <div className="advantage-number">01</div>
            <div className="tourism-leisure-advantage-icon">
              <i className="fas fa-globe-asia"></i>
            </div>
            <h3>Incredible Diversity</h3>
            <p>Eight UNESCO World Heritage sites, 1,340km of coastline, 15 national parks, 
            ancient cities, tea plantations, and diverse ecosystems all within a compact island. 
            Unique selling proposition of "variety in proximity" unmatched in the region.</p>
          </div>
          
          <div className="tourism-leisure-advantage-item">
            <div className="advantage-number">02</div>
            <div className="tourism-leisure-advantage-icon">
              <i className="fas fa-sun"></i>
            </div>
            <h3>Year-Round Destination</h3>
            <p>Favorable tropical climate with dual monsoon pattern enabling year-round tourism. 
            Different regions offer optimal conditions throughout the year, allowing continuous 
            operations and reducing seasonal dependency common in other destinations.</p>
          </div>
          
          <div className="tourism-leisure-advantage-item">
            <div className="advantage-number">03</div>
            <div className="tourism-leisure-advantage-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Global Recognition</h3>
            <p>Consistent accolades including "Best Country for Travel" by Lonely Planet, 
            "Top Romantic Destination" by Booking.com, and features in prestigious publications 
            like National Geographic and Condé Nast Traveler.</p>
          </div>
          
          <div className="tourism-leisure-advantage-item">
            <div className="advantage-number">04</div>
            <div className="tourism-leisure-advantage-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Warm Hospitality</h3>
            <p>Renowned for genuine warmth and hospitality of local communities. Strong service 
            culture with English-speaking workforce and tradition of welcoming visitors, creating 
            memorable experiences that drive repeat visitation.</p>
          </div>
          
          <div className="tourism-leisure-advantage-item">
            <div className="advantage-number">05</div>
            <div className="tourism-leisure-advantage-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Sustainable Focus</h3>
            <p>Strong commitment to sustainable tourism with eco-certifications, community-based 
            tourism initiatives, and conservation programs. Growing demand from environmentally 
            conscious travelers aligns with natural advantages.</p>
          </div>
          
          <div className="tourism-leisure-advantage-item">
            <div className="advantage-number">06</div>
            <div className="tourism-leisure-advantage-icon">
              <i className="fas fa-plane"></i>
            </div>
            <h3>Strategic Connectivity</h3>
            <p>Growing air connectivity with direct flights from major global hubs. Strategic 
            location on major air routes with expanding airport infrastructure and visa reforms 
            facilitating easier access for international travelers.</p>
          </div>
        </div>
      </div>

      <div className="tourism-leisure-markets">
        <h2>Key Source Markets</h2>
        <p className="markets-intro">Visitors from across the globe choose Sri Lanka for unforgettable experiences</p>
        <div className="markets-grid">
          <div className="market-item">
            <div className="market-flag">🇮🇳</div>
            <h4>India</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '25%'}}></div>
            </div>
            <span className="market-share">25% of arrivals</span>
            <p>Largest source market with cultural proximity and growing middle class</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇬🇧</div>
            <h4>United Kingdom</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '15%'}}></div>
            </div>
            <span className="market-share">15% of arrivals</span>
            <p>Strong historical ties and premium tourism segment</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇩🇪</div>
            <h4>Germany</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '12%'}}></div>
            </div>
            <span className="market-share">12% of arrivals</span>
            <p>Quality tourism with longer stays and higher spending</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇨🇳</div>
            <h4>China</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '10%'}}></div>
            </div>
            <span className="market-share">10% of arrivals</span>
            <p>Rapidly growing market with huge potential</p>
          </div>
        </div>
      </div>

      <div className="tourism-leisure-capabilities">
        <h2>Tourism Infrastructure & Development</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">🏨</div>
            <h3>Accommodation Diversity</h3>
            <p>Comprehensive range from luxury international chains to boutique hotels and eco-lodges. 
            Strong presence of global brands including Marriott, Hilton, Shangri-La, and Aman Resorts 
            alongside unique local hospitality concepts.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🚗</div>
            <h3>Transport Networks</h3>
            <p>Modern expressway network connecting key destinations, expanding airport infrastructure, 
            and developing rail tourism. Efficient domestic connectivity enabling seamless multi-destination 
            itineraries across the island.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🎯</div>
            <h3>Tourism Zones</h3>
            <p>Strategic development of specialized tourism zones including beach resorts in the south and 
            east, cultural triangle in the central region, hill country for tea tourism, and emerging 
            destinations in the north and east.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">📱</div>
            <h3>Digital Transformation</h3>
            <p>Rapid adoption of digital platforms for tourism services, online bookings, and visitor 
            management. Growing ecosystem of travel tech startups and digital marketing capabilities 
            reaching global audiences.</p>
          </div>
        </div>
      </div>

      <div className="tourism-leisure-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for tourism and leisure investors</p>
        
        <div className="tourism-leisure-incentives-list">
          <div className="tourism-leisure-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 10+5 years for tourism projects</li>
              <li>Duty-free import of construction materials and equipment</li>
              <li>Investment tax allowances up to 100% of capital expenditure</li>
              <li>Concessional loans for tourism infrastructure</li>
              <li>VAT exemptions on tourism services</li>
              <li>Accelerated depreciation on tourism assets</li>
            </ul>
          </div>
          
          <div className="tourism-leisure-incentive-item">
            <div className="incentive-icon">🏗️</div>
            <h3>Infrastructure Support</h3>
            <ul>
              <li>Designated tourism development areas</li>
              <li>Land allocation for tourism projects</li>
              <li>Utilities and connectivity infrastructure</li>
              <li>Access road development</li>
              <li>Beach nourishment and coastal protection</li>
              <li>Public-private partnership opportunities</li>
            </ul>
          </div>
          
          <div className="tourism-leisure-incentive-item">
            <div className="incentive-icon">📋</div>
            <h3>Regulatory Environment</h3>
            <ul>
              <li>100% foreign ownership permitted in tourism sector</li>
              <li>Streamlined approval processes</li>
              <li>Free repatriation of profits and capital</li>
              <li>Long-term land leases available</li>
              <li>Simplified visa procedures for staff</li>
              <li>One-stop investment facilitation</li>
            </ul>
          </div>
        </div>
      </div>

     <div className="tourism-leisure-success">
  <h2>Global Hospitality Partnerships</h2>
  <p className="success-intro">Sri Lanka hosts world-renowned hospitality brands and unique local experiences</p>
  
  <div className="tourism-leisure-company-logos">
    <div className="tourism-leisure-company-logo">
      <img src="https://www.pngmart.com/files/23/Marriott-Logo-PNG-Picture.png" alt="Marriott" />
      <span>Marriott</span>
    </div>
    <div className="tourism-leisure-company-logo">
      <img src="https://logos-world.net/wp-content/uploads/2021/02/Hilton-Hotels-Resorts-Logo-1998-2010-700x394.png" alt="Hilton" />
      <span>Hilton</span>
    </div>
    <div className="tourism-leisure-company-logo">
      <img src="https://4193479.fs1.hubspotusercontent-na1.net/hubfs/4193479/aman-black-600.jpg" alt="Aman Resorts" />
      <span>Aman Resorts</span>
    </div>
    <div className="tourism-leisure-company-logo">
      <img src="https://logodix.com/logo/328096.png" alt="Shangri-La" />
      <span>Shangri-La</span>
    </div>
    <div className="tourism-leisure-company-logo">
      <img src="https://companylogos.org/wp-content/uploads/2024/08/Six-Senses-768x768.jpg" alt="Six Senses" />
      <span>Six Senses</span>
    </div>
    <div className="tourism-leisure-company-logo">
      <img src="https://wp.logos-download.com/wp-content/uploads/2019/11/Anantara_Hotels_Resorts__Spas_Logo-700x417.png" alt="Anantara" />
      <span>Anantara</span>
    </div>
    <div className="tourism-leisure-company-logo">
      <img src="https://lakpura.com/cdn/shop/collections/Jetwing_Hotels.jpg?v=1698304406&width=750" alt="Jetwing" />
      <span>Jetwing</span>
    </div>
    <div className="tourism-leisure-company-logo">
      <img src="https://lakpura.com/cdn/shop/collections/uga_escapes.jpg?v=1700218462&width=750" alt="Uga Escapes" />
      <span>Uga Escapes</span>
    </div>
  </div>
</div>

      <div className="tourism-leisure-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for sustainable tourism growth and development</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>5 Million Visitors</h3>
            <p>Strategic target to attract 5 million annual visitors by 2025 through market 
            diversification, enhanced connectivity, and year-round destination positioning</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌱</div>
            <h3>Sustainable Tourism Leader</h3>
            <p>Positioning Sri Lanka as a global leader in sustainable and responsible tourism 
            with carbon-neutral initiatives, community benefits, and environmental conservation</p>
          </div>
          <div className="future-item">
            <div className="future-icon">💎</div>
            <h3>Premium Experiences</h3>
            <p>Focus on high-value tourism segments including luxury, wellness, and experiential 
            travel to increase per visitor spending and reduce seasonality impacts</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🤝</div>
            <h3>Regional Hub</h3>
            <p>Developing as a regional tourism hub with multi-destination packages, cruise tourism, 
            and strategic partnerships with neighboring countries</p>
          </div>
        </div>
      </div>

      <div className="tourism-leisure-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's Tourism Sector?</h2>
          <p>Join leading global hospitality brands in Sri Lanka's thriving tourism ecosystem</p>
          
        </div>
      </div>
    </div>
  );
};

export default TourismLeisure;