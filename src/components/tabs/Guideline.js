import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import qrcodeimage9 from "../../assets/GuideQR.png";
import qrcodeimage10 from "../../assets/Register IFC QR.png";

import {
  FileCheck,
  DollarSign,
  Building,
  Users,
  Scale,
  MapPin,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Clock,
  Briefcase
} from 'lucide-react';

const investmentThresholds = [
  {
    category: "Manufacturing",
    icon: Building,
    color: 'linear-gradient(135deg, #f7fafc 0%, #A6AEBF 100%)',
    items: [
      { title: "Export Manufacturing", amount: "$500,000", code: "1.1" },
      { title: "Advanced Technology (Local)", amount: "$5,000,000", code: "1.2" },
      { title: "Large Scale Manufacturing", amount: "$5,000,000", code: "1.3" }
    ]
  },
  {
    category: "Services",
    icon: Briefcase,
    color:'linear-gradient(135deg, #f7fafc 0%, #A6AEBF 100%)',
    items: [
      { title: "IT/IT Enabled Services", amount: "$150,000", code: "2.1" },
      { title: "BPO Industry", amount: "$150,000", code: "2.3" },
      { title: "Tourism & Leisure", amount: "$500,000", code: "2.4" },
      { title: "Utilities", amount: "$500,000", code: "2.5" },
      { title: "Regional HQ", amount: "$250,000", code: "2.11" }
    ]
  },
  {
    category: "Agriculture",
    icon: TrendingUp,
    color: 'linear-gradient(135deg, #f7fafc 0%, #A6AEBF 100%)',
    items: [
      { title: "Agriculture & Agro Processing (Export)", amount: "$150,000", code: "3.1" },
      { title: "Agriculture & Agro Processing (Local)", amount: "$150,000", code: "3.2" }
    ]
  },
  {
    category: "Infrastructure",
    icon: MapPin,
    color: 'linear-gradient(135deg, #f7fafc 0%, #A6AEBF 100%)',
    items: [
      { title: "Hospital Construction", amount: "$500,000", code: "4.1(a)" },
      { title: "Housing Projects", amount: "$3,000,000", code: "4.1" },
      { title: "Large Scale Infrastructure", amount: "$12,500,000", code: "4.2" }
    ]
  }
];

const approvalProcess = [
  {
    step: 1,
    title: "Application Submission",
    description: "Submit investment application at Investor Facilitation Center (IFC)",
    icon: FileCheck,
    details: ["Complete application forms", "Submit required documents", "Receive acknowledgment letter"]
  },
  {
    step: 2,
    title: "Project Screening",
    description: "Cross-functional committee reviews application",
    icon: Users,
    details: ["Technical evaluation", "Financial assessment", "Environmental clearance in principle"]
  },
  {
    step: 3,
    title: "Site & Land Approval",
    description: "Site inspection and land allocation if needed",
    icon: MapPin,
    details: ["Site suitability assessment", "Environmental impact review", "Land allocation approval"]
  },
  {
    step: 4,
    title: "Formal Approval & Agreement",
    description: "Receive approval letter and sign BOI agreement",
    icon: CheckCircle,
    details: ["Letter of approval issued", "Sign Section 17 agreement", "Company incorporation"]
  },
  {
    step: 5,
    title: "Implementation",
    description: "Begin project implementation within specified period",
    icon: Building,
    details: ["Building plan approval", "Import/export registration", "Utility connections"]
  },
  {
    step: 6,
    title: "Commence Operations",
    description: "Start commercial operations",
    icon: Zap,
    details: ["Certificate of Conformity", "Environmental Protection License", "Begin operations"]
  }
];

const boiFees = [
  {
    category: "Application Processing",
    items: [
      { service: "Investment Application Fee", fee: "$400" },
      { service: "Normal Section 17 Agreement", fee: "$2,500" },
      { service: "Strategic Development Project", fee: "$4,500" },
      { service: "Supplementary Agreement (Normal)", fee: "$700" },
      { service: "Supplementary Agreement (SDP)", fee: "$4,000" }
    ]
  },
  {
    category: "Annual Fees (Outside EPZs)",
    items: [
      { service: "During Implementation (< $3M)", fee: "$3,100" },
      { service: "During Implementation ($3M-$10M)", fee: "$8,000" },
      { service: "During Implementation (> $10M)", fee: "$10,700" },
      { service: "After Tax Holiday (Manufacturing)", fee: "$20,000" }
    ]
  }
];

const keyIncentives = [
  {
    title: "Tax Holidays",
    icon: DollarSign,
    description: "Corporate income tax exemptions for eligible projects",
    benefits: ["Up to 25 years for Strategic Development Projects", "Sector-specific durations", "Performance-based extensions"]
  },
  {
    title: "Duty-Free Imports",
    icon: Globe,
    description: "Import machinery, equipment and raw materials duty-free",
    benefits: ["Capital goods exemption", "Raw material concessions", "Simplified customs procedures"]
  },
  {
    title: "Investment Protection",
    icon: Shield,
    description: "Legal protection under BOI Act and international treaties",
    benefits: ["26 Bilateral Investment Treaties", "45 Double Taxation Avoidance Agreements", "Constitutional guarantees"]
  },
  {
    title: "Market Access",
    icon: TrendingUp,
    description: "Preferential access to major markets",
    benefits: ["EU GSP+ duty-free access", "India-Sri Lanka FTA", "Pakistan-Sri Lanka FTA", "UK DCTS scheme"]
  }
];

const Guidelines = () => {
  const [expandedThreshold, setExpandedThreshold] = useState(null);
  const [activeStep, setActiveStep] = useState(null);
  const [expandedIncentive, setExpandedIncentive] = useState(null);
  const [activeQR, setActiveQR] = useState(null);

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

  const renderQRCode = (type) => {
    switch(type) {
      case 'contact':
        return (
          <motion.div
            className="qr-code-section"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="qr-code-items-container">
              <div className="qr-code-item">
                <div className="qr-code-wrapper">
                  <div className="qr-code-placeholder">
                      <img src={qrcodeimage10} 
                     style={{
              width: '140px',
              height: '140px',
              marginBottom: '0px',
              animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
              borderRadius: '5%',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '3px solid #667eea'

            }} alt="Register IFC QR" className="w-24 h-24 mx-auto" />
                  </div>
                </div>
                <p className="qr-code-label">Scan to Contact IFC</p>
              </div>
            </div>
            <button 
              className="cta-button back-button"
              onClick={() => setActiveQR(null)}
            >
              Back to Options
            </button>
          </motion.div>
        );
      case 'download':
        return (
          <motion.div
            className="qr-code-section"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="qr-code-items-container">
              <div className="qr-code-item">
                <div className="qr-code-wrapper">
                  <div className="qr-code-placeholder">
                      <img src={qrcodeimage9} 
                     style={{
              width: '140px',
              height: '140px',
              marginBottom: '0px',
              animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
              borderRadius: '5%',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '3px solid #667eea'

            }} alt="Guide QR" className="w-24 h-24 mx-auto" />
                  </div>
                </div>
                <p className="qr-code-label">Scan to Download Guide</p>
              </div>
            </div>
            <button 
              className="cta-button back-button"
              onClick={() => setActiveQR(null)}
            >
              Back to Options
            </button>
          </motion.div>
        );
      default:
        return (
          <>
            <button 
              className="cta-button primary"
              onClick={() => setActiveQR('contact')}
            >
              Contact IFC
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => setActiveQR('download')}
            >
              Download Guide
            </button>
          </>
        );
    }
  };

  return (
    <div className="guidelines-container">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: '#e74c3c',
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
          e.target.style.background = '#c0392b';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = '#e74c3c';
          e.target.style.transform = 'scale(1)';
        }}
        title="Scroll to top"
      >
        ↑
      </button>

      {/* Hero Section */}
      <motion.div
        className="guidelines-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="guidelines-title">Investment Guidelines</h1>
        <p className="guidelines-subtitle">
          Comprehensive guide to investing in Sri Lanka through the Board of Investment. 
          Navigate the investment process with clarity and confidence.
        </p>
      </motion.div>

      {/* Investment Thresholds Section */}
      <section className="guidelines-section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <DollarSign className="heading-icon-dollar" />
          Investment Thresholds
        </motion.h2>
        <p className="section-description">
          Minimum investment requirements by sector and activity type
        </p>

        <div className="threshold-grid">
          {investmentThresholds.map((category, idx) => (
            <motion.div
              key={idx}
              className="threshold-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setExpandedThreshold(expandedThreshold === idx ? null : idx)}
            >
              <div className="threshold-header" style={{ background: category.color }}>
                <category.icon className="threshold-icon" />
                <h3>{category.category}</h3>
              </div>
              <AnimatePresence>
                {expandedThreshold === idx && (
                  <motion.div
                    className="threshold-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="threshold-item">
                        <div className="threshold-item-header">
                          <span className="threshold-code">{item.code}</span>
                          <span className="threshold-title">{item.title}</span>   
                        </div>
                        <div className="threshold-amount">{item.amount}</div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <button className="threshold-toggle">
                {expandedThreshold === idx ? "Show Less" : "View Details"}
              </button> 
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approval Process Timeline */}
      <section className="guidelines-section approval-section">
        <motion.h2
          className="section-heading-approval"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <CheckCircle className="heading-icon" />
          BOI Approval Process
        </motion.h2>
        <p className="section-description-approval">
          Step-by-step guide through the investment approval journey
        </p>

        <div className="process-timeline">
          {approvalProcess.map((process, idx) => (
            <motion.div
              key={idx}
              className={`process-step ${activeStep === idx ? 'active' : ''}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="step-number">{process.step}</div>
              <div className="step-icon-wrapper">
                <process.icon className="step-icon" />
              </div>
              <div className="step-content">
                <h3 className="step-title">{process.title}</h3>
                <p className="step-description">{process.description}</p>
                <AnimatePresence>
                  {activeStep === idx && (
                    <motion.ul
                      className="step-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {process.details.map((detail, detailIdx) => (
                        <li key={detailIdx}>{detail}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOI Fees Section */}
      <section className="guidelines-section fees-section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Scale className="heading-icon-fees" />
          BOI Fees & Charges
        </motion.h2>
        <p className="section-description">
          Transparent fee structure for investment processing and operations
        </p>

        <div className="fees-grid">
          {boiFees.map((feeCategory, idx) => (
            <motion.div
              key={idx}
              className="fee-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="fee-category-title">{feeCategory.category}</h3>
              <div className="fee-items">
                {feeCategory.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="fee-item">
                    <span className="fee-service">{item.service}</span>
                    <span className="fee-amount">{item.fee}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="fee-note">
          <AlertCircle size={20} />
          <p>All charges are liable to Value Added Tax (VAT). Fees can be paid in rupee equivalent at prevailing exchange rates.</p>
        </div>
      </section>

      {/* Key Incentives Section */}
      <section className="guidelines-section incentives-section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <TrendingUp className="heading-icon-key1" />
          Investment Incentives
        </motion.h2>
        <p className="section-description">
          Comprehensive incentive package to support your investment success
        </p>

        <div className="incentives-grid">
          {keyIncentives.map((incentive, idx) => (
            <motion.div
              key={idx}
              className="incentive-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setExpandedIncentive(expandedIncentive === idx ? null : idx)}
            >
              <div className="incentive-icon-wrapper">
                <incentive.icon className="incentive-icon" />
              </div>
              <h3 className="incentive-title">{incentive.title}</h3>
              <p className="incentive-description">{incentive.description}</p>
              <AnimatePresence>
                {expandedIncentive === idx && (
                  <motion.ul
                    className="incentive-benefits"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {incentive.benefits.map((benefit, benefitIdx) => (
                      <li key={benefitIdx}>
                        <CheckCircle size={16} />
                        {benefit}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              <button className="incentive-toggle">
                {expandedIncentive === idx ? "Show Less" : "Learn More"}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        className="guidelines-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Clock className="cta-icon" />
        <h3>Ready to Begin Your Investment Journey?</h3>
        <p>Contact the BOI Investor Facilitation Center to start your application process today</p>
        <div className="cta-buttons">
          {renderQRCode(activeQR)}
        </div>
      </motion.div>
    </div>
  );
};

export default Guidelines;