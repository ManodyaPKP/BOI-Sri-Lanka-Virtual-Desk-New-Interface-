import React, { useState } from 'react';
import InformationTechnology from './pages/InformationTechnology';
import TextileApparel from './pages/TextileApparel';
import AutoComponents from './pages/AutoComponents';
import ElectricalElectronics from './pages/ElectricalElectronics';
import FoodProcessing from './pages/FoodProcessing';
import Logistics from './pages/Logistics';
import MedicalPharmaceutical from './pages/MedicalPharmaceutical';
import TourismLeisure from './pages/TourismLeisure';

const Sectors = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  const handleSectorClick = (sector) => {
    setSelectedSector(sector);
  };

  const handleBackClick = () => {
    setSelectedSector(null);
  };

  // Sector detail views
  if (selectedSector === 'informationtechnology') {
    return (
      <div className="tab-content">
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <InformationTechnology />
      </div>
    );
  }

  if (selectedSector === 'textileapparel') {
    return (
      <div className="tab-content">
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <TextileApparel />
      </div>
    );
  }

  if (selectedSector === 'autocomponents') {
    return (
      <div className="tab-content">
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <AutoComponents />
      </div>
    );
  }

  if (selectedSector === 'electricalelectronics') {
    return (
      <div className="tab-content">
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <ElectricalElectronics />
      </div>
    );
  }

  if (selectedSector === 'foodprocessing') {
    return (
      <div className="tab-content">
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <FoodProcessing />
      </div>
    );
  }

  if (selectedSector === 'logistics') {
    return (
      <div className="tab-content">
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <Logistics />
      </div>
    );
  }

  if (selectedSector === 'medicalpharmaceutical') {
    return (
      <div className="tab-content">
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <MedicalPharmaceutical />
      </div>
    );
  }

  if (selectedSector === 'tourismleisure') {
    return (
      <div className="tab-content">
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to All Sectors
        </button>
        <TourismLeisure />
      </div>
    );
  }

  // Default view - show all sectors
  return (
    <div className="tab-content">
      <h2>Investment Sectors</h2>
      <p>Sri Lanka offers diverse investment opportunities across multiple sectors. Click on any sector to learn more:</p>
      
      <div className="investment-categories">
        <div className="investment-category" onClick={() => handleSectorClick('textileapparel')}>
          <i className="fas fa-tshirt"></i>
          <h3>Apparel</h3>
          <p className="sector-description">Textile and garment manufacturing opportunities</p>
        </div>

        <div className="investment-category" onClick={() => handleSectorClick('autocomponents')}>
          <i className="fas fa-cog"></i>
          <h3>Auto Components</h3>
          <p className="sector-description">Automotive parts and components manufacturing</p>
        </div>

        <div className="investment-category" onClick={() => handleSectorClick('electricalelectronics')}>
          <i className="fas fa-bolt"></i>
          <h3>Electrical & Electronics</h3>
          <p className="sector-description">Electronic components and electrical equipment</p>
        </div>

        <div className="investment-category" onClick={() => handleSectorClick('foodprocessing')}>
          <i className="fas fa-utensils"></i>
          <h3>Food Processing</h3>
          <p className="sector-description">Food manufacturing and processing industries</p>
        </div>

        <div className="investment-category" onClick={() => handleSectorClick('informationtechnology')}>
          <i className="fas fa-laptop-code"></i>
          <h3>Information Technology</h3>
          <p className="sector-description">IT services, software development, and digital solutions</p>
        </div>

        <div className="investment-category" onClick={() => handleSectorClick('logistics')}>
          <i className="fas fa-truck-loading"></i>
          <h3>Logistics</h3>
          <p className="sector-description">Supply chain, transportation, and warehousing</p>
        </div>

        <div className="investment-category" onClick={() => handleSectorClick('medicalpharmaceutical')}>
          <i className="fas fa-syringe"></i>
          <h3>Medical & Pharmaceutical</h3>
          <p className="sector-description">Healthcare products and pharmaceutical manufacturing</p>
        </div>

        <div className="investment-category" onClick={() => handleSectorClick('tourismleisure')}>
          <i className="fas fa-concierge-bell"></i>
          <h3>Tourism & Leisure</h3>
          <p className="sector-description">Hospitality, tourism, and recreational services</p>
        </div>
      </div>
    </div>
  );
};

export default Sectors;