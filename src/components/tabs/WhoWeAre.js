import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="tab-content">
      <h2>Who We Are</h2>
      <p>Established in 1978, under the name Greater Colombo Economic Commission, the Board of Investment of Sri Lanka is one of the foremost investment promotion agencies in South Asia. As the apex agency for foreign direct investment in Sri Lanka, there are over 1,600 enterprises under the purview of BOI in the span of its 40 years in operation. In carrying out its primary function of investment promotion, the BOI aims at sector based investor targeting, while specializing in aftercare, navigating and regulating investor operations to reach its true and highest potential throughout the lifespan of the enterprise.</p>
      
      {/* Statistics Section */}
      <div className="statistics-container">
        <div className="statistic-card">
          <div className="statistic-number">1,600+</div>
          <div className="statistic-label">Companies in Operation under BOI</div>
        </div>
        <div className="statistic-card">
          <div className="statistic-number">64%</div>
          <div className="statistic-label">National Exports</div>
        </div>
        <div className="statistic-card">
          <div className="statistic-number">83%</div>
          <div className="statistic-label">National Industrial Exports</div>
        </div>
        <div className="statistic-card">
          <div className="statistic-number">96%</div>
          <div className="statistic-label">National Garment & Textile Exports</div>
        </div>
        <div className="statistic-card">
          <div className="statistic-number">485,000</div>
          <div className="statistic-label">Direct cumulative employment</div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="vision-mission-section">
        <div className="vision-mission-card">
          <div className="card-header"><i className="fas fa-eye"></i> Vision</div>
          <div className="card-body">
            <p>"To make Sri Lanka the most preferred destination for sustainable investment in Asia"</p>
          </div>
        </div>
        
        <div className="vision-mission-card">
          <div className="card-header"><i className="fas fa-bullseye"></i> Mission</div>
          <div className="card-body">
            <p>"BOI will work in a positive and speedy manner to fulfill Sri Lanka's potential to attract and retain quality investment that leads to an enhanced export base, and brings more and better jobs, enhanced knowledge and skills through new technologies and innovations."</p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="leadership-section">
        <h3>Leadership</h3>
        
        <div className="leader-card">
          <div className="leader-image">
            <img src="https://investsrilanka.com/wp-content/uploads/2024/10/Picture-2.png" alt="Mr. Arjuna Herath" />
          </div>
          <div className="leader-info">
            <h4>Mr. Arjuna Herath</h4>
            <p className="leader-position">CHAIRMAN</p>
            <p className="leader-organization">BOARD OF INVESTMENT OF SRI LANKA</p>
            <div className="leader-bio">
              <p>Mr. Arjuna Herath is a corporate leader with an extensive career spanning over three decades, marked by notable contributions to both the public and private sectors. Currently, he serves as the Chairman of the Board of Investment of Sri Lanka and on the Board of the Colombo Stock Exchange.</p>
              <p>Having recently retired as Senior Partner and Head of Consulting at Ernst & Young (Sri Lanka and Maldives), he has a wealth of experience advising clients across a wide range of industries on matters including capital markets, corporate restructuring, governance, technology, and performance improvement. During his tenure at E&Y he was recognized as one of the 20 leading figures in Sri Lankan business in 2014 by Lanka Monthly Digest in its "Captains of Commerce & Industry" edition; he continues to be an influential figure in the corporate landscape.</p>
              <p>The inaugural Chairman of the Data Protection Authority of Sri Lanka, Mr. Herath is a Fellow Member of the Institute of Chartered Accountants of Sri Lanka (ICASL) and The Chartered Institute of Management Accountants (CIMA) and served in numerous esteemed roles in internationally accredited organizations.</p>
              <p>Mr. Herath was the founding Chief Executive Officer of Nepal Sri Lanka Merchant Bank Ltd in Nepal where he was responsible for building the bank's operations from the ground up. Furthermore in the capacity of Head Corporate Finance at the Merchant Bank of Sri Lanka & Finance PLC., he oversaw corporate advisory services, capital markets, and investment management.</p>
              <p>His corporate career is complemented by a strong academic background with both a Bachelor of Science Degree and a Master of Arts in Financial Economics from the University of Colombo, as well as an MBA from the University of Strathclyde.</p>
            </div>
          </div>
        </div>

        <div className="leader-card">
          <div className="leader-image">
            <img src="https://investsrilanka.com/wp-content/uploads/2023/08/DG_Image-1.jpg" alt="Mrs. Renuka M. Weerakone" />
          </div>
          <div className="leader-info">
            <h4>MRS. RENUKA M. WEERAKONE</h4>
            <p className="leader-position">Director General</p>
            <p className="leader-organization">Board of Investment of Sri Lanka</p>
            <div className="leader-bio">
              <p>Mrs. Renuka Weerakone is an Attorney-at-Law by profession counting over 31 years of experience and commenced her working career as an instructing attorney with a leading Law firm in Colombo. She is also a licensed Notary Public and Commissioner for Oaths. In addition, she holds a Master's Degree in Business Administration from the Postgraduate Institute of Management, University of Sri Jayawardenepura.</p>
              <p>She currently serves as the Director General (Actg) at the BOI previously holding the post of Executive Director heading Project Monitoring. In her career at the BOI spanning over 27 years, she has gained a wealth of experience and broad knowledge to facilitate activities of foreign direct investment projects with her work in several key departments including Promotions and Investments and held the post of Board Secretary over five years concurrent to her other duties.</p>
              <p>She has represented the BOI at local and International Forums including the Second Round negotiations of the proposed Sri Lanka – China FTA held in Beijing, the Joint Council under US-Sri Lanka Trade & Investment Framework Agreement in Washington, and outward investment promotion missions to China, the UK, USA, Japan, and Russia among other countries. She has also been an active member of Steering Committees, Policy Committees, Inter-Agency Committees tasked with resolving issues faced by investors to fast-track implementation of investment projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;