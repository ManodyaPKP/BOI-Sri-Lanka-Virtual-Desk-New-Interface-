// TextileApparel.js

import React from 'react';

const TextileApparel = () => {
  return (
    <div className="sector-detail">
      <div className="sector-header">
        <div className="sector-icon">
          <i className="fas fa-tshirt"></i>
        </div>
        <h1>Textile & Apparel</h1>
        <p className="sector-subtitle">Sri Lanka's Flagship Export Sector Evolving with Innovation & Ethics</p>
      </div>

      <div className="sector-overview">
        <h2>Overview</h2>
        <p>
          The Sri Lankan apparel industry is one of the region's highest in apparel exports per capita.  
          It comprises about **15% of Sri Lanka's workforce**, and has gained recognition for complex manufacturing 
          under high international labor standards and ethical production, often called "Garment Without Guilt."
        </p>
        <p>
          Over the past three decades, the sector has shifted from a low-wage, cost-competitive model to delivering 
          more complex, value-added solutions for leading global brands.
        </p>

        <h3>Priority Areas for Investment</h3>
        <ul>
          <li>Intimate wear</li>
          <li>Casual wear</li>
          <li>Active wear</li>
          <li>Wearable tech (smart textiles, digital coloration, flexible electronics, adaptive compression)</li>
          <li>Wearable deployment systems</li>
          <li>Mobile integration in apparel</li>
        </ul>
      </div>

      <div className="investment-opportunities">
        <h2>Investment Opportunities</h2>
        <div className="opportunity-cards">

          <div className="opportunity-card">
            <div className="card-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Intimate & Lingerie Wear</h3>
            <ul>
              <li>High quality fabrics and speciality undergarments</li>
              <li>Seamless / glue-bonded engineering for comfort</li>
              <li>Design & R&D for global fashion brands</li>
            </ul>
          </div>

          <div className="opportunity-card">
            <div className="card-icon">
              <i className="fas fa-running"></i>
            </div>
            <h3>Active Wear & Sports Apparel</h3>
            <ul>
              <li>Moisture-wicking and technical fabric innovations</li>
              <li>Performance wear for global markets</li>
              <li>Sustainable and lightweight manufacturing</li>
            </ul>
          </div>

          <div className="opportunity-card">
            <div className="card-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>Wearable Tech & Smart Textiles</h3>
            <ul>
              <li>Flexible electronics embedded in fabric</li>
              <li>Adaptive fabrics: color, compression, sensors</li>
              <li>Integration with mobile and IoT platforms</li>
            </ul>
          </div>

          <div className="opportunity-card">
            <div className="card-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Design & Innovation</h3>
            <ul>
              <li>Digital coloration & finishing</li>
              <li>Creative design for global fashion trends</li>
              <li>Collaboration in R&D with universities & tech institutes</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="strengths-section">
        <h2>What Makes Sri Lanka a Top Choice</h2>
        <div className="advantages-grid">
          <div className="advantage-item">
            <div className="advantage-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Skilled Workforce</h3>
            <p>Established experience in apparel manufacturing, with an ethical, quality-driven culture.</p>
          </div>
          <div className="advantage-item">
            <div className="advantage-icon">
              <i className="fas fa-hand-peace"></i>
            </div>
            <h3>Ethical & Sustainable Production</h3>
            <p>High international labor standards, ethical practices, "Garment Without Guilt".</p>
          </div>
          <div className="advantage-item">
            <div className="advantage-icon">
              <i className="fas fa-flask"></i>
            </div>
            <h3>Innovation & R&D</h3>
            <p>Smart textiles, wearable technologies, digital finishings, and strong linkages with universities and research institutions.</p>
          </div>
          <div className="advantage-item">
            <div className="advantage-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3>Global Brand Partnerships</h3>
            <p>Suppliers working for top international brands, exporting globally.</p>
          </div>
        </div>
      </div>
        </div>
  );
};

export default TextileApparel;