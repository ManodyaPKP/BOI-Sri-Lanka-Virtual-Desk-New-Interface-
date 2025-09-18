import React from 'react';

const Guideline = () => {
  return (
    <div className="tab-content">
      <h2>Investment Guideline</h2>
      <p>Our investment guidelines provide comprehensive information for potential investors:</p>
      
      <div className="investment-process">
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Identify Your Investment Sector</h3>
              <p>Choose from our key target sectors including Pharmaceuticals, High Value Added Apparel, Electronics & Electricals, ICT, Rubber-Based Industry, Agriculture and Food Processing, Hospitality and Tourism, and Infrastructure & Construction.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Review Incentives and Policies</h3>
              <p>Explore Sri Lanka's investor-friendly policies including tax exemptions, land leasing options, and special provisions under Strategic Development Projects Act. Review our bilateral investment treaties with 26 countries and double taxation avoidance agreements with 45 countries.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Prepare Your Business Proposal</h3>
              <p>Develop a comprehensive business plan detailing your investment amount, employment generation, export potential, and technology transfer. Ensure you meet the minimum investment thresholds for your chosen sector.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Submit Application to BOI</h3>
              <p>Submit your investment application at our Investor Facilitation Center (IFC) located at the 27th floor, West Tower of the World Trade Centre. Our team will guide you through the submission process.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Obtain Necessary Approvals</h3>
              <p>Our Project Screening Committee will review your application. You may need approvals from various line agencies depending on your sector. BOI will facilitate this process through our Investor Facilitation Coordination Committee.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>Implement Your Project</h3>
              <p>Once approved, you can begin project implementation. BOI provides ongoing support including visa facilitation for expatriates, import/export documentation, and aftercare services throughout your investment journey.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="investment-highlights">
        <h3>Why Invest in Sri Lanka?</h3>
        <div className="highlight-grid">
          <div className="highlight-item">
            <i className="fas fa-globe-asia"></i>
            <h4>Strategic Location</h4>
            <p>At the crossroads of major shipping routes with access to a market of 1.9 billion people</p>
          </div>
          
          <div className="highlight-item">
            <i className="fas fa-graduation-cap"></i>
            <h4>Educated Workforce</h4>
            <p>93% literacy rate, 30,000 graduates annually, and 100,000 vocationally trained students per year</p>
          </div>
          
          <div className="highlight-item">
            <i className="fas fa-road"></i>
            <h4>Developing Infrastructure</h4>
            <p>World-class ports, airports, highways, and telecommunications infrastructure</p>
          </div>
          
          <div className="highlight-item">
            <i className="fas fa-home"></i>
            <h4>Quality of Life</h4>
            <p>Excellent healthcare, international schools, and UNESCO World Heritage sites</p>
          </div>
          
          <div className="highlight-item">
            <i className="fas fa-handshake"></i>
            <h4>Market Access</h4>
            <p>FTAs with India, Pakistan, Singapore; EU GSP+; UK DCTS; and regional trade agreements</p>
          </div>
          
          <div className="highlight-item">
            <i className="fas fa-chart-line"></i>
            <h4>Competitive Costs</h4>
            <p>Lower wage rates compared to regional peers across all employment categories</p>
          </div>
        </div>
      </div>

      <div className="sector-overview">
        <h3>Key Investment Sectors</h3>
        <div className="sector-cards">
          <div className="sector-card">
            <h4>Pharmaceuticals</h4>
            <p>Annual imports over $500M, dedicated pharma zone in Hambantota, opportunities in APIs, vaccines, generics, and biosimilars</p>
            <div className="investment-threshold">Minimum: $150,000</div>
          </div>
          
          <div className="sector-card">
            <h4>High Value Added Apparel</h4>
            <p>World's first LEED certified Platinum rated production facility, ethical "Garments without Guilt" certification</p>
            <div className="investment-threshold">Minimum: $500,000</div>
          </div>
          
          <div className="sector-card">
            <h4>Electronics & Electricals</h4>
            <p>Center of excellence for electronics design, emerging technologies like IoT, robotics, and biomedical engineering</p>
            <div className="investment-threshold">Minimum: $500,000</div>
          </div>
          
          <div className="sector-card">
            <h4>ICT</h4>
            <p>Fastest growing ICT hub in South Asia, $1B exports currently, targeting $3B by 2025, 30% lower labor costs</p>
            <div className="investment-threshold">Minimum: $150,000</div>
          </div>
        </div>
      </div>

      <div className="incentives-section">
        <h3>Investment Incentives</h3>
        <div className="incentives-list">
          <div className="incentive-item">
            <h4>Tax Benefits</h4>
            <ul>
              <li>Tax holidays up to 25 years for Strategic Development Projects</li>
              <li>0% tax for Agro Farming & Export of Services</li>
              <li>Enhanced investment allowance for fixed capital investment</li>
            </ul>
          </div>
          
          <div className="incentive-item">
            <h4>Customs Duty Exemptions</h4>
            <ul>
              <li>Exemption from Customs Ordinance for approved projects</li>
              <li>Duty-free import of capital goods and raw materials</li>
              <li>Exemption from Ports and Airports Development Levy</li>
            </ul>
          </div>
          
          <div className="incentive-item">
            <h4>Land Leasing</h4>
            <ul>
              <li>No land lease tax for foreign investors</li>
              <li>Lease periods up to 99 years</li>
              <li>25% deduction on land value for approved Development Projects</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="investment-thresholds">
        <h3>Investment Thresholds</h3>
        <div className="threshold-table">
          <div className="threshold-header">
            <div className="threshold-sector">Sector</div>
            <div className="threshold-amount">Minimum Investment (USD)</div>
          </div>
          
          <div className="threshold-row">
            <div className="threshold-sector">Manufacture of non-traditional goods for export</div>
            <div className="threshold-amount">500,000</div>
          </div>
          
          <div className="threshold-row">
            <div className="threshold-sector">Manufacturing using advanced technology (Local Market)</div>
            <div className="threshold-amount">5,000,000</div>
          </div>
          
          <div className="threshold-row">
            <div className="threshold-sector">Information Technology & IT enabled services</div>
            <div className="threshold-amount">150,000</div>
          </div>
          
          <div className="threshold-row">
            <div className="threshold-sector">Tourism & Leisure</div>
            <div className="threshold-amount">500,000</div>
          </div>
          
          <div className="threshold-row">
            <div className="threshold-sector">Agriculture and Agro Processing</div>
            <div className="threshold-amount">150,000</div>
          </div>
        </div>
      </div>

      <div className="approval-process">
        <h3>BOI Approval Process</h3>
        <div className="process-flow">
          <div className="process-step-box">
            <div className="step-icon">1</div>
            <h4>Application Submission</h4>
            <p>Submit application at Investor Facilitation Center</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step-box">
            <div className="step-icon">2</div>
            <h4>Project Screening</h4>
            <p>Committee review and environmental clearance</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step-box">
            <div className="step-icon">3</div>
            <h4>Company Incorporation</h4>
            <p>Register with Department of Registrar of Companies</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step-box">
            <div className="step-icon">4</div>
            <h4>Agreement Signing</h4>
            <p>Formal approval and agreement execution</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step-box">
            <div className="step-icon">5</div>
            <h4>Implementation</h4>
            <p>Begin project implementation with BOI support</p>
          </div>
        </div>
      </div>

      <div className="contact-assistance">
        <h3>Need Assistance?</h3>
        <p>Our Investor Facilitation Center is ready to help you navigate the investment process:</p>
        <div className="contact-info">
          <p><i className="fas fa-map-marker-alt"></i> Level 27, West Tower, World Trade Center, Colombo 01</p>
          <p><i className="fas fa-phone"></i> +94 11 2434403-5</p>
          <p><i className="fas fa-envelope"></i> info@boi.lk</p>
          <p><i className="fas fa-globe"></i> www.investsrilanka.com</p>
        </div>
      </div>
    </div>
  );
};

export default Guideline;