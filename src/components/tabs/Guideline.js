import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import qrcodeimage9 from "../../assets/GuideQr001.png";
import qrcodeimage10 from "../../assets/NewInvestor001.png";

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
  { "title": "IT/IT Enabled Services", "amount": "$150,000", "code": "2.1" },
  { "title": "IT/IT Enabled Services (Local Market)", "amount": "$150,000", "code": "2.2" },
  { "title": "BPO Industry", "amount": "$150,000", "code": "2.3" },
  { "title": "Tourism & Leisure", "amount": "$500,000", "code": "2.4" },
  { "title": "Utilities", "amount": "$500,000", "code": "2.5" },
  { "title": "Export-oriented services", "amount": "$500,000", "code": "2.6" },
  { "title": "Warehouse, logistic and Supply Chain Management and Cold Storage", "amount": "$500,000", "code": "2.7" },
  { "title": "Training Institutes", "amount": "$100,000", "code": "2.8" },
  { "title": "Research & Development", "amount": "$100,000", "code": "2.9" },
  { "title": "Large scale service projects as approved by the Board local market", "amount": "$5,000,000", "code": "2.10" },
  { "title": "Regional Operating Headquarters", "amount": "$250,000", "code": "2.11" },
  { "title": "Export Trading House", "amount": "$5,000,000", "code": "2.12" }
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
       { title: "Any other Small Scale Infrastructure Projects", amount: "$5,000,000", code: "4.1(b)" },
      { title: "Housing Projects", amount: "$3,000,000", code: "✱" },
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
  { "service": "Investment Application Processing Fee (Section 17)", "fee": "$400" },
  { "service": "Agreement Processing Fee - Normal Sec. 17 Projects", "fee": "$2,500" },
  { "service": "Agreement Processing Fee - Strategic Development Projects", "fee": "$4,500" },
  { "service": "Supplementary Agreements - Normal Sec. 17 Projects", "fee": "$700" },
  { "service": "Supplementary Agreements - Strategic Development Projects", "fee": "$4,000" },
  { "service": "Extension of Project Implementation Period - More than/for One Year (Per Month)", "fee": "$75" },
  { "service": "Extension of Project Implementation Period - Less than One Year (Per Month)", "fee": "$100" },
  { "service": "Investment Application Processing Fee (Section 16)", "fee": "$400" },
  { "service": "Processing Fee for Perusal of Articles of Association of Companies", "fee": "$200" },
  { "service": "Agreement Processing Fees (Section 16)", "fee": "$100" },
  { "service": "Agreement Processing Fee - Industrial (Non BOI Companies)", "fee": "$700" },
  { "service": "Agreement Processing Fee - Non Industrial (Non BOI Companies)", "fee": "$65" },
  { "service": "Planning Approvals - Original", "fee": "$200" },
  { "service": "Planning Approvals - Revision", "fee": "$100" }
]
  },
  {
    category: "Annual Fees (Outside EPZs)",
    items:
[
  { "service": "Normal Projects", "fee": "$3,450" },
  { "service": "Agriculture Projects", "fee": "$1,250" },
  { "service": "Coir based Industries and Handcraft Projects", "fee": "$1,550" },
  { "service": " During Project Implementation Period - Projects less than US$ 3 Mn.", "fee": "$4,750" },
  { "service": " During Project Implementation Period - Projects between US$ 3 Mn. and US$ 10 Mn.", "fee": "$8,800" },
  { "service": "During Project Implementation Period - Projects more than US$ 10 Mn.", "fee": "$11,800" },
  { "service": " During Project Implementation Period - Strategic Development Projects", "fee": "$22,000" },
  { "service": " After Implementation, during Tax Holidays & Concessionary Tax Period - Projects less than US$ 3 Mn.", "fee": "$3,100" },
  { "service": " After Implementation, during Tax Holidays & Concessionary Tax Period - Projects between US$ 3 Mn. and US$ 10 Mn.", "fee": "$7,400" },
  { "service": " After Implementation, during Tax Holidays & Concessionary Tax Period - Projects more than US$ 10 Mn.", "fee": "$10,400" },
  { "service": " After Implementation, during Tax Holidays & Concessionary Tax Period - Strategic Development Projects", "fee": "$14,800" },
  { "service": " After Tax holidays & Concessionary Tax Period", "fee": "$1,500" },
  { "service": " During Project Implementation Period, Tax Holiday & Concessionary Tax Period", "fee": "$22,000" },
  { "service": "Annual License Fee (Under Section 16)", "fee": "$550" }
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
                <p className="qr-code-label">𝘚𝘤𝘢𝘯 𝘵𝘰 𝘕𝘦𝘸 𝘐𝘯𝘷𝘦𝘴𝘵𝘰𝘳 𝘏𝘰𝘮𝘦</p>
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

        // QR Codes

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
              ✦ 𝙉𝙚𝙬 𝙄𝙣𝙫𝙚𝙨𝙩𝙤𝙧 
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => setActiveQR('download')}
            >
              ✦ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙂𝙪𝙞𝙙𝙚
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
        <h1 className="guidelines-title">✪ Investment Guidelines</h1>
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