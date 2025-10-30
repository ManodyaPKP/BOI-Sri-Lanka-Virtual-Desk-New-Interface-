import React, { useState } from 'react';
import InformationTechnology from './pages/InformationTechnology';
import TextileApparel from './pages/TextileApparel';
import AutoComponents from './pages/AutoComponents';
import ElectricalElectronics from './pages/ElectricalElectronics';
import FoodProcessing from './pages/FoodProcessing';
import Logistics from './pages/Logistics';
import MedicalPharmaceutical from './pages/MedicalPharmaceutical';
import TourismLeisure from './pages/TourismLeisure';
import RubberProducts from './pages/RubberBasedProducts';
import InfrastructureUtilitiesMining from './pages/MiningInfrastructureDevelopment'; 

const Sectors = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectorClick = (sector) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedSector(sector);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedSector(null);
      setIsTransitioning(false);
    }, 300);
  };

  // Sector detail views
  const renderSectorDetail = (Component) => (
    <div id="SSectors-Sectors-container" className={isTransitioning ? 'page-transition-exit' : 'page-transition-enter'}>
      <div id="SSectors-Sectors-content">
        <button id="SSectors-Sectors-backButton" className="back-button-modern" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <Component />
      </div>
    </div>
  );

  if (selectedSector === 'informationtechnology') {
    return renderSectorDetail(InformationTechnology);
  }

  if (selectedSector === 'textileapparel') {
    return renderSectorDetail(TextileApparel);
  }

  if (selectedSector === 'autocomponents') {
    return renderSectorDetail(AutoComponents);
  }

  if (selectedSector === 'electricalelectronics') {
    return renderSectorDetail(ElectricalElectronics);
  }

  if (selectedSector === 'foodprocessing') {
    return renderSectorDetail(FoodProcessing);
  }

  if (selectedSector === 'logistics') {
    return renderSectorDetail(Logistics);
  }

  if (selectedSector === 'medicalpharmaceutical') {
    return renderSectorDetail(MedicalPharmaceutical);
  }

  if (selectedSector === 'tourismleisure') {
    return renderSectorDetail(TourismLeisure);
  }

  if (selectedSector === 'rubberproducts') {
    return renderSectorDetail(RubberProducts);
  }

 if (selectedSector === 'infrastructureutilitiesmining') {
    return renderSectorDetail(InfrastructureUtilitiesMining);
  }

  // Default view - show all sectors
  return (
    <div id="SSectors-Sectors-container" className={isTransitioning ? 'page-transition-exit' : 'page-transition-enter'}>
      <div id="SSectors-Sectors-content">
        <div id="SSectors-Sectors-header">
          <h2 id="SSectors-Sectors-title">Investment Sectors</h2>
          <p id="SSectors-Sectors-subtitle">
            Sri Lanka offers diverse investment opportunities across multiple sectors. 
            Click on any sector to learn more:
          </p>
        </div>
        
        <div id="SSectors-Sectors-grid">
          <div id="SSectors-Sectors-textile" className="sector-card-modern" onClick={() => handleSectorClick('textileapparel')}>
            <div id="SSectors-Sectors-textileIcon" className="sector-icon-modern">
              <i className="fas fa-tshirt"></i>
            </div>
            <h3 id="SSectors-Sectors-textileTitle">Apparel</h3>
            <p id="SSectors-Sectors-textileDesc" className="sector-description-modern">
              Textile and garment manufacturing opportunities
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          <div id="SSectors-Sectors-auto" className="sector-card-modern" onClick={() => handleSectorClick('autocomponents')}>
            <div id="SSectors-Sectors-autoIcon" className="sector-icon-modern">
              <i className="fas fa-cog"></i>
            </div>
            <h3 id="SSectors-Sectors-autoTitle">Auto Components</h3>
            <p id="SSectors-Sectors-autoDesc" className="sector-description-modern">
              Automotive parts and components manufacturing
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          <div id="SSectors-Sectors-electronics" className="sector-card-modern" onClick={() => handleSectorClick('electricalelectronics')}>
            <div id="SSectors-Sectors-electronicsIcon" className="sector-icon-modern">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 id="SSectors-Sectors-electronicsTitle">Electrical & Electronics</h3>
            <p id="SSectors-Sectors-electronicsDesc" className="sector-description-modern">
              Electronic components and electrical equipment
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          <div id="SSectors-Sectors-food" className="sector-card-modern" onClick={() => handleSectorClick('foodprocessing')}>
            <div id="SSectors-Sectors-foodIcon" className="sector-icon-modern">
              <i className="fas fa-utensils"></i>
            </div>
            <h3 id="SSectors-Sectors-foodTitle">Food Processing</h3>
            <p id="SSectors-Sectors-foodDesc" className="sector-description-modern">
              Food manufacturing and processing industries
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          <div id="SSectors-Sectors-it" className="sector-card-modern" onClick={() => handleSectorClick('informationtechnology')}>
            <div id="SSectors-Sectors-itIcon" className="sector-icon-modern">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 id="SSectors-Sectors-itTitle">Information Technology</h3>
            <p id="SSectors-Sectors-itDesc" className="sector-description-modern">
              IT services, software development, and digital solutions
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          <div id="SSectors-Sectors-logistics" className="sector-card-modern" onClick={() => handleSectorClick('logistics')}>
            <div id="SSectors-Sectors-logisticsIcon" className="sector-icon-modern">
              <i className="fas fa-truck-loading"></i>
            </div>
            <h3 id="SSectors-Sectors-logisticsTitle">Logistics</h3>
            <p id="SSectors-Sectors-logisticsDesc" className="sector-description-modern">
              Supply chain, transportation, and warehousing
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          <div id="SSectors-Sectors-medical" className="sector-card-modern" onClick={() => handleSectorClick('medicalpharmaceutical')}>
            <div id="SSectors-Sectors-medicalIcon" className="sector-icon-modern">
              <i className="fas fa-syringe"></i>
            </div>
            <h3 id="SSectors-Sectors-medicalTitle">Medical & Pharmaceutical</h3>
            <p id="SSectors-Sectors-medicalDesc" className="sector-description-modern">
              Healthcare products and pharmaceutical manufacturing
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          <div id="SSectors-Sectors-tourism" className="sector-card-modern" onClick={() => handleSectorClick('tourismleisure')}>
            <div id="SSectors-Sectors-tourismIcon" className="sector-icon-modern">
              <i className="fas fa-concierge-bell"></i>
            </div>
            <h3 id="SSectors-Sectors-tourismTitle">Tourism & Leisure</h3>
            <p id="SSectors-Sectors-tourismDesc" className="sector-description-modern">
              Hospitality, tourism, and recreational services
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          {/* New Sector: Rubber & Rubber-Based Products */}
          <div id="SSectors-Sectors-rubber" className="sector-card-modern" onClick={() => handleSectorClick('rubberproducts')}>
            <div id="SSectors-Sectors-rubberIcon" className="sector-icon-modern">
              <i className="fas fa-industry"></i>
            </div>
            <h3 id="SSectors-Sectors-rubberTitle">Rubber & Rubber-Based Products</h3>
            <p id="SSectors-Sectors-rubberDesc" className="sector-description-modern">
              Rubber manufacturing and rubber-based product development
            </p>
            <div className="sector-hover-effect"></div>
          </div>

          {/* New Sector: Infrastructure, Utilities & Mineral & Mining */}
          <div id="SSectors-Sectors-infrastructure" className="sector-card-modern" onClick={() => handleSectorClick('infrastructureutilitiesmining')}>
            <div id="SSectors-Sectors-infrastructureIcon" className="sector-icon-modern">
              <i className="fas fa-hard-hat"></i>
            </div>
            <h3 id="SSectors-Sectors-infrastructureTitle">Infrastructure, Utilities & Mineral & Mining</h3>
            <p id="SSectors-Sectors-infrastructureDesc" className="sector-description-modern">
              Infrastructure development, utilities, and mining operations
            </p>
            <div className="sector-hover-effect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;