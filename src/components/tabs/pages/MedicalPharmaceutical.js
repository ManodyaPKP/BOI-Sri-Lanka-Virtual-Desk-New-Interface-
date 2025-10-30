import React from 'react';

const MedicalPharmaceutical = () => {
  return (
    <div className="medical-pharmaceutical-sector">
      <div className="medical-pharmaceutical-header">
        <div className="medical-pharmaceutical-icon">
          <i className="fas fa-heartbeat"></i>
        </div>
        <h1>Medical & Pharmaceutical</h1>
        <p className="medical-pharmaceutical-subtitle">Advancing Healthcare Innovation from Sri Lanka to the World</p>
        <div className="header-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      </div>

      <div className="medical-pharmaceutical-overview">
        <h2>Industry Overview</h2>
        <p>
          Sri Lanka's Medical and Pharmaceutical sector has emerged as a <strong>rapidly growing industry</strong> 
          with <strong>annual exports exceeding $500 million</strong>. The sector combines modern manufacturing 
          capabilities with traditional Ayurvedic knowledge, creating a unique value proposition for global markets.
        </p>
        <p>
          With <strong>over 100 pharmaceutical manufacturers</strong> and a robust healthcare ecosystem, 
          Sri Lanka has established itself as a reliable source of high-quality medical products, 
          ranging from generic medicines to sophisticated medical devices and traditional remedies.
        </p>
        <p>
          The industry employs <strong>over 25,000 healthcare professionals</strong> and technical staff, 
          supported by strong regulatory frameworks and international quality certifications that ensure 
          product safety and efficacy for both domestic and international markets.
        </p>
        
        <div className="medical-pharmaceutical-stat-cards">
          <div className="medical-pharmaceutical-stat-card">
            <div className="medical-pharmaceutical-stat-icon">💊</div>
            <div className="medical-pharmaceutical-stat-number">$500M+</div>
            <div className="medical-pharmaceutical-stat-label">Annual Exports</div>
            <div className="stat-growth">↑ 20% YoY Growth</div>
          </div>
          <div className="medical-pharmaceutical-stat-card">
            <div className="medical-pharmaceutical-stat-icon">👥</div>
            <div className="medical-pharmaceutical-stat-number">25K+</div>
            <div className="medical-pharmaceutical-stat-label">Healthcare Professionals</div>
            <div className="stat-growth">Skilled Workforce</div>
          </div>
          <div className="medical-pharmaceutical-stat-card">
            <div className="medical-pharmaceutical-stat-icon">🏭</div>
            <div className="medical-pharmaceutical-stat-number">100+</div>
            <div className="medical-pharmaceutical-stat-label">Manufacturers</div>
            <div className="stat-growth">Certified Facilities</div>
          </div>
          <div className="medical-pharmaceutical-stat-card">
            <div className="medical-pharmaceutical-stat-icon">🌍</div>
            <div className="medical-pharmaceutical-stat-number">60+</div>
            <div className="medical-pharmaceutical-stat-label">Countries Served</div>
            <div className="stat-growth">Global Reach</div>
          </div>
        </div>
      </div>

      <div className="medical-pharmaceutical-growth">
        <h2>Export Performance & Growth Trajectory</h2>
        <div className="growth-insight">
          <p>The sector has demonstrated remarkable growth, with exports increasing by an average of 20% annually, 
          driven by rising global demand for affordable healthcare solutions and Sri Lanka's reputation for quality.</p>
        </div>
        <div className="growth-chart-container">
          <div className="chart-wrapper">
            <div className="chart-bar" data-year="2020" style={{height: '45%'}}>
              <span className="bar-value">$290M</span>
              <span className="bar-label">2020</span>
            </div>
            <div className="chart-bar" data-year="2021" style={{height: '60%'}}>
              <span className="bar-value">$350M</span>
              <span className="bar-label">2021</span>
            </div>
            <div className="chart-bar" data-year="2022" style={{height: '80%'}}>
              <span className="bar-value">$420M</span>
              <span className="bar-label">2022</span>
            </div>
            <div className="chart-bar" data-year="2023" style={{height: '100%'}}>
              <span className="bar-value">$500M</span>
              <span className="bar-label">2023</span>
            </div>
          </div>
          <p className="chart-note">📈 Strong growth in pharmaceutical exports and medical technology</p>
        </div>
      </div>

      <div className="medical-pharmaceutical-investment">
        <h2>Strategic Investment Opportunities</h2>
        <p className="investment-intro">
          Explore diverse opportunities across high-growth medical and pharmaceutical segments
        </p>
        
        <div className="medical-pharmaceutical-opportunity-cards">
          <div className="medical-pharmaceutical-opportunity-card">
            <div className="card-header">
              <div className="medical-pharmaceutical-card-icon">
                <i className="fas fa-pills"></i>
              </div>
              <span className="opportunity-badge">Pharma</span>
            </div>
            <h3>Pharmaceutical Manufacturing</h3>
            <p className="opportunity-desc">Advanced pharmaceutical production and formulation</p>
            <ul>
              <li>Generic drug manufacturing</li>
              <li>Active Pharmaceutical Ingredients (APIs)</li>
              <li>Formulation development</li>
              <li>Contract manufacturing</li>
              <li>Oncology and specialty drugs</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$1.3T global market</span>
            </div>
          </div>
          
          <div className="medical-pharmaceutical-opportunity-card">
            <div className="card-header">
              <div className="medical-pharmaceutical-card-icon">
                <i className="fas fa-stethoscope"></i>
              </div>
              <span className="opportunity-badge">Devices</span>
            </div>
            <h3>Medical Devices & Equipment</h3>
            <p className="opportunity-desc">Innovative medical technology and devices</p>
            <ul>
              <li>Disposable medical devices</li>
              <li>Diagnostic equipment</li>
              <li>Surgical instruments</li>
              <li>Patient monitoring systems</li>
              <li>Medical consumables</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$500B+ market</span>
            </div>
          </div>
          
          <div className="medical-pharmaceutical-opportunity-card">
            <div className="card-header">
              <div className="medical-pharmaceutical-card-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <span className="opportunity-badge">Ayurveda</span>
            </div>
            <h3>Ayurvedic & Herbal Products</h3>
            <p className="opportunity-desc">Traditional medicine and natural remedies</p>
            <ul>
              <li>Ayurvedic formulations</li>
              <li>Herbal extracts and supplements</li>
              <li>Wellness products</li>
              <li>Natural cosmetics</li>
              <li>Traditional medicine R&D</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Growing wellness market</span>
            </div>
          </div>
          
          <div className="medical-pharmaceutical-opportunity-card">
            <div className="card-header">
              <div className="medical-pharmaceutical-card-icon">
                <i className="fas fa-dna"></i>
              </div>
              <span className="opportunity-badge">Biotech</span>
            </div>
            <h3>Biotechnology & Research</h3>
            <p className="opportunity-desc">Advanced biotech and research services</p>
            <ul>
              <li>Biosimilars development</li>
              <li>Vaccine research</li>
              <li>Clinical research services</li>
              <li>Biotech incubators</li>
              <li>Molecular diagnostics</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">High-value innovation</span>
            </div>
          </div>

          <div className="medical-pharmaceutical-opportunity-card">
            <div className="card-header">
              <div className="medical-pharmaceutical-card-icon">
                <i className="fas fa-capsules"></i>
              </div>
              <span className="opportunity-badge">Nutraceuticals</span>
            </div>
            <h3>Nutraceuticals & Supplements</h3>
            <p className="opportunity-desc">Health supplements and functional foods</p>
            <ul>
              <li>Dietary supplements</li>
              <li>Sports nutrition</li>
              <li>Vitamin formulations</li>
              <li>Health foods</li>
              <li>Specialty nutrition</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">$400B+ market</span>
            </div>
          </div>

          <div className="medical-pharmaceutical-opportunity-card">
            <div className="card-header">
              <div className="medical-pharmaceutical-card-icon">
                <i className="fas fa-hospital"></i>
              </div>
              <span className="opportunity-badge">Healthcare</span>
            </div>
            <h3>Healthcare Services</h3>
            <p className="opportunity-desc">Medical tourism and healthcare delivery</p>
            <ul>
              <li>Medical tourism facilities</li>
              <li>Specialty hospitals</li>
              <li>Diagnostic centers</li>
              <li>Telemedicine services</li>
              <li>Healthcare IT solutions</li>
            </ul>
            <div className="card-footer">
              <span className="market-potential">Medical tourism growth</span>
            </div>
          </div>
        </div>
      </div>

      <div className="medical-pharmaceutical-advantages">
        <h2>Competitive Advantages</h2>
        <p className="advantages-intro">Why global healthcare companies choose Sri Lanka for medical manufacturing</p>
        
        <div className="medical-pharmaceutical-advantages-grid">
          <div className="medical-pharmaceutical-advantage-item">
            <div className="advantage-number">01</div>
            <div className="medical-pharmaceutical-advantage-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Highly Skilled Workforce</h3>
            <p>Strong pool of pharmaceutical scientists, medical professionals, and technical staff. 
            Excellent educational institutions producing qualified pharmacists, chemists, and 
            biomedical engineers with international exposure and training.</p>
          </div>
          
          <div className="medical-pharmaceutical-advantage-item">
            <div className="advantage-number">02</div>
            <div className="medical-pharmaceutical-advantage-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>International Quality Standards</h3>
            <p>WHO-GMP, EU-GMP, and FDA-compliant manufacturing facilities. Stringent quality control 
            systems and regulatory compliance meeting global pharmaceutical standards. Strong 
            National Medicines Regulatory Authority ensuring product quality and safety.</p>
          </div>
          
          <div className="medical-pharmaceutical-advantage-item">
            <div className="advantage-number">03</div>
            <div className="medical-pharmaceutical-advantage-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3>Cost Competitiveness</h3>
            <p>Significant cost advantages in manufacturing with 30-40% lower production costs 
            compared to Western countries. Optimal balance of quality and affordability making 
            Sri Lanka ideal for pharmaceutical production.</p>
          </div>
          
          <div className="medical-pharmaceutical-advantage-item">
            <div className="advantage-number">04</div>
            <div className="medical-pharmaceutical-advantage-icon">
              <i className="fas fa-flask"></i>
            </div>
            <h3>Research & Development</h3>
            <p>Strong R&D ecosystem with partnerships between industry, universities, and research 
            institutions. Focus on pharmaceutical innovation, traditional medicine research, 
            and development of new formulations and delivery systems.</p>
          </div>
          
          <div className="medical-pharmaceutical-advantage-item">
            <div className="advantage-number">05</div>
            <div className="medical-pharmaceutical-advantage-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Rich Biodiversity</h3>
            <p>Access to diverse medicinal plants and natural resources for herbal and Ayurvedic 
            products. Strong traditional knowledge base in Ayurveda and natural medicine 
            supported by scientific validation and modern manufacturing techniques.</p>
          </div>
          
          <div className="medical-pharmaceutical-advantage-item">
            <div className="advantage-number">06</div>
            <div className="medical-pharmaceutical-advantage-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Strategic Partnerships</h3>
            <p>Proven track record of successful partnerships with international pharmaceutical 
            companies. Experience in contract manufacturing, technology transfer, and 
            collaborative research with global healthcare leaders.</p>
          </div>
        </div>
      </div>

      <div className="medical-pharmaceutical-markets">
        <h2>Key Export Markets</h2>
        <p className="markets-intro">Sri Lankan medical products reach patients and healthcare providers across 60+ countries</p>
        <div className="markets-grid">
          <div className="market-item">
            <div className="market-flag">🌏</div>
            <h4>Asia Pacific</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '40%'}}></div>
            </div>
            <span className="market-share">40% of exports</span>
            <p>India, Bangladesh, Myanmar, Maldives, Philippines</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🌍</div>
            <h4>Africa & Middle East</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '30%'}}></div>
            </div>
            <span className="market-share">30% of exports</span>
            <p>Kenya, Nigeria, UAE, Saudi Arabia, South Africa</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇪🇺</div>
            <h4>European Union</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '20%'}}></div>
            </div>
            <span className="market-share">20% of exports</span>
            <p>Germany, UK, France, Netherlands, Italy</p>
          </div>
          <div className="market-item">
            <div className="market-flag">🇺🇸</div>
            <h4>Americas</h4>
            <div className="market-bar">
              <div className="market-fill" style={{width: '10%'}}></div>
            </div>
            <span className="market-share">10% of exports</span>
            <p>USA, Canada, Caribbean, Latin America</p>
          </div>
        </div>
      </div>

      <div className="medical-pharmaceutical-capabilities">
        <h2>Advanced Manufacturing Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">🏭</div>
            <h3>GMP Manufacturing</h3>
            <p>State-of-the-art Good Manufacturing Practice facilities for pharmaceuticals, 
            including sterile production areas, controlled environments, and automated 
            production lines with comprehensive quality assurance systems.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">🔬</div>
            <h3>Quality Control Labs</h3>
            <p>Advanced analytical laboratories equipped with HPLC, GC-MS, spectrophotometers, 
            and other modern instrumentation for rigorous quality testing, stability studies, 
            and method validation.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">📦</div>
            <h3>Packaging & Labeling</h3>
            <p>Modern packaging facilities with blister packaging, bottling lines, and 
            specialized packaging for different market requirements including child-resistant 
            and tamper-evident packaging.</p>
          </div>
          <div className="capability-item">
            <div className="capability-icon">❄️</div>
            <h3>Cold Chain Management</h3>
            <p>Comprehensive cold chain infrastructure for temperature-sensitive products 
            including refrigerated storage, validated shipping containers, and temperature 
            monitoring systems for vaccine and biologic products.</p>
          </div>
        </div>
      </div>

      <div className="medical-pharmaceutical-incentives">
        <h2>Investment Incentives & Support</h2>
        <p className="incentives-intro">Comprehensive support package for medical and pharmaceutical investors</p>
        
        <div className="medical-pharmaceutical-incentives-list">
          <div className="medical-pharmaceutical-incentive-item">
            <div className="incentive-icon">💵</div>
            <h3>Fiscal Incentives</h3>
            <ul>
              <li>Tax holidays up to 12+3 years for pharmaceutical manufacturing</li>
              <li>Duty-free import of raw materials, machinery, and equipment</li>
              <li>Investment tax allowances up to 100% of capital expenditure</li>
              <li>Double tax deduction for research and development</li>
              <li>VAT exemptions on pharmaceutical exports</li>
              <li>Accelerated depreciation on medical equipment</li>
            </ul>
          </div>
          
          <div className="medical-pharmaceutical-incentive-item">
            <div className="incentive-icon">🏗️</div>
            <h3>Infrastructure Support</h3>
            <ul>
              <li>Access to pharmaceutical parks and specialized zones</li>
              <li>Reliable utilities with backup power systems</li>
              <li>Modern laboratory and testing facilities</li>
              <li>Cold chain logistics infrastructure</li>
              <li>Research and development centers</li>
              <li>Regulatory support and compliance assistance</li>
            </ul>
          </div>
          
          <div className="medical-pharmaceutical-incentive-item">
            <div className="incentive-icon">📋</div>
            <h3>Regulatory Environment</h3>
            <ul>
              <li>100% foreign ownership permitted in pharmaceutical sector</li>
              <li>Streamlined regulatory approvals and registrations</li>
              <li>Free repatriation of profits, dividends, and capital</li>
              <li>Intellectual property protection framework</li>
              <li>International regulatory compliance support</li>
              <li>Fast-track approval for innovative products</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="medical-pharmaceutical-success">
  <h2>Global Healthcare Partnerships</h2>
  <p className="success-intro">Sri Lankan pharmaceutical companies are trusted partners to global healthcare leaders</p>
  
  <div className="medical-pharmaceutical-company-logos">
    <div className="medical-pharmaceutical-company-logo">
      <img src="https://logotyp.us/file/gsk.svg" alt="GSK" />
      <span>GSK</span>
    </div>
    <div className="medical-pharmaceutical-company-logo">
      <img src="https://www.logo.wine/a/logo/Pfizer/Pfizer-Logo.wine.svg" alt="Pfizer" />
      <span>Pfizer</span>
    </div>
    <div className="medical-pharmaceutical-company-logo">
      <img src="https://www.logo.wine/a/logo/Novartis/Novartis-Logo.wine.svg" alt="Novartis" />
      <span>Novartis</span>
    </div>
    <div className="medical-pharmaceutical-company-logo">
      <img src="https://imgs.search.brave.com/SJV1oldRNMkJANV_sLFW3iuDeMq5KIz4vBjptWKVPoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MzQxMzQzOS9wdC9m/b3RvL2EtcGhvdG8t/dGFrZW4tb24tZmVi/cnVhcnktMi0yMDEx/LXNob3dzLXRoZS1s/b2dvLW9mLXN3aXNz/LXBoYXJtYWNldXRp/Y2FsLWdpYW50LXJv/Y2hlLWluLWJhc2Vs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz14dDI2REVaUlU5/dW9HNUZBTEE1c1I2/YVhpb0hzc0VUd2l3/Q3I2dWZweG1VPQ" alt="Roche" />
      <span>Roche</span>
    </div>
    <div className="medical-pharmaceutical-company-logo">
      <img src="https://logos-world.net/wp-content/uploads/2022/09/Merck-Co.-Logo-500x281.png" alt="Merck" />
      <span>Merck</span>
    </div>
    <div className="medical-pharmaceutical-company-logo">
      <img src="https://images.seeklogo.com/logo-png/1/1/astrazeneca-logo-png_seeklogo-12559.png" alt="AstraZeneca" />
      <span>AstraZeneca</span>
    </div>
    <div className="medical-pharmaceutical-company-logo">
      <img src="https://brandlogos.net/wp-content/uploads/2011/06/sanofi-aventis-logo-vector.png" alt="Sanofi" />
      <span>Sanofi</span>
    </div>
    <div className="medical-pharmaceutical-company-logo">
      <img src="https://imgs.search.brave.com/v_XPaubU0rk8YPA1lHYcJXzC9VNSgXrTAnwmYIOu35E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVj/YzI5ZmJmOWI3ZDE1/MDg1YWY2NzFkYS8x/NjczNTM5MTA4Nzk0/LTJSVjJEQTFMWUky/MlZVUkxQSUdKL0hJ/TSstK1N1bnJheStD/aXJjbGUrKEdyZWVu/KSszMDAweDE2NTAu/cG5n" alt="Himalaya" />
      <span>Himalaya</span>
    </div>
  </div>
</div>

      <div className="medical-pharmaceutical-future">
        <h2>Future Outlook & Strategic Vision</h2>
        <p className="future-intro">Ambitious roadmap for healthcare innovation and sector growth</p>
        <div className="future-grid">
          <div className="future-item">
            <div className="future-icon">🎯</div>
            <h3>$1B Export Target</h3>
            <p>Strategic vision to double pharmaceutical exports to $1 billion by 2027 through 
            value addition, new product development, and market expansion</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🔬</div>
            <h3>Innovation Hub</h3>
            <p>Development of Sri Lanka as an innovation hub for pharmaceuticals, biotechnology, 
            and medical research with focus on novel drug delivery systems and biologics</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🌱</div>
            <h3>Sustainable Healthcare</h3>
            <p>Focus on sustainable pharmaceutical manufacturing, green chemistry, and 
            environmentally friendly production processes for reduced ecological impact</p>
          </div>
          <div className="future-item">
            <div className="future-icon">🤝</div>
            <h3>Global Integration</h3>
            <p>Strengthening position in global pharmaceutical value chains and expanding 
            into regulated markets with high-value specialty products and biosimilars</p>
          </div>
        </div>
      </div>

      <div className="medical-pharmaceutical-cta">
        <div className="cta-content">
          <h2>Ready to Invest in Sri Lanka's Medical Sector?</h2>
          <p>Join leading global healthcare companies in Sri Lanka's thriving medical and pharmaceutical ecosystem</p>
          
        </div>
      </div>
    </div>
  );
};

export default MedicalPharmaceutical;