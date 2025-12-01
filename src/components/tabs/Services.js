// src/components/tabs/Services.js
import React, { useState } from "react";
import InvestorFacilitation01 from "../../assets/InvestorFacilitation01.gif";
import ProjectImplementation01 from "../../assets/ProjectImplementation01.gif";
import IncentiveAdministration01 from "../../assets/IncentiveAdministration01.gif";
import AftercareServices01 from "../../assets/AftercareServices01.gif";
import SectorSpecificGuidance01 from "../../assets/SectorSpecificGuidance01.gif";
import PolicyAdvocacy01 from "../../assets/PolicyAdvocacy01.gif";
import InnovationSupport01 from "../../assets/InnovationSupport01.gif";
import InvestmentProtection01 from "../../assets/InvestmentProtection01.gif";
import VisaImmigration from "../../assets/Visa&Immigration.gif";
import JobBank01 from "../../assets/JobBank01.gif";
import WebSubmissionPortal01 from "../../assets/WebSubmissionPortal01.gif";
import DeclarantPortal01 from "../../assets/DeclarantPortal01.gif";
import LandBankPortal01 from "../../assets/LandBankPortal01.gif";
import ExportDataPortal01 from "../../assets/ExportDataPortal01.gif";
import LocalSalesPortal01 from "../../assets/LocalSalesPortal01.gif";
import IDIssuingSystem01 from "../../assets/IDIssuingSystem01.gif";
import ImportExportPortal01 from "../../assets/ImportExportPortal01.gif";
import IndustrialLabourRelations01 from "../../assets/IndustrialLabourRelations01.gif";
import LegalServices01 from "../../assets/LegalServices01.gif";
import EngineeringApprovals01 from "../../assets/EngineeringApprovals01.gif";
import EnvironmentalClearances01 from "../../assets/EnvironmentalClearances01.gif";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, } from "lucide-react";
import { MapPin, } from "lucide-react";
import { Database,} from "lucide-react";
import { ShoppingCart,} from "lucide-react";
import { UserCog, } from "lucide-react";
import { Truck, } from "lucide-react";
import { Users, } from "lucide-react";
import { Scale, } from "lucide-react";
import { Leaf, } from "lucide-react";
import {
  Headphones,
  Wrench,
  DollarSign,
  FileCheck,
  BarChart3,
  Target,
  Lightbulb,
  Shield,
  Briefcase,
  Plane,
} from "lucide-react";

const services = [
  {
    title: "Investor Facilitation",
    desc: "End-to-end investor support — from first inquiry to successful project launch and beyond.",
    icon: Headphones,
    img: InvestorFacilitation01,
    details: "Our one-stop shop provides guidance on regulatory requirements, approvals, and permits needed for your investment."
  },
  {
    title: "Project Implementation",
    desc: "Seamless support from setup to operations for a smooth business start.",
    icon: Wrench,
    img: ProjectImplementation01,
    details: "We help navigate land acquisition, utility connections, and construction approvals to accelerate your project timeline."
  },
  {
    title: "Incentive Administration",
    desc: "Expert guidance on investment incentives, tax breaks, and duty exemptions for your project.",
    icon: DollarSign,
    img: IncentiveAdministration01,
    details: "We assist in securing tax holidays, duty-free imports, and other fiscal incentives based on your investment sector and scale."
  },
  {
    title: "Aftercare Services",
    desc: "Ongoing support for existing investors to address operational challenges and facilitate business expansion.",
    icon: FileCheck,
    img: AftercareServices01,
    details: "Regular check-ins and problem-solving support to ensure your investment continues to thrive in Sri Lanka."
  },
  {
    title: "Sector-Specific Guidance",
    desc: "Expert guidance on investment opportunities in tech, manufacturing, tourism, and infrastructure.",
    icon: BarChart3,
    img: SectorSpecificGuidance01,
    details: "Detailed market intelligence and sector reports to help you make informed investment decisions."
  },
  {
    title: "Policy Advocacy",
    desc: "Advocating for investors to shape a better business climate in Sri Lanka.",
    icon: Target,
    img: PolicyAdvocacy01,
    details: "We serve as a bridge between investors and government entities to address regulatory challenges."
  },
  {
    title: "Innovation Support",
    desc: "Encouraging and facilitating investments in innovation, research and development, and technology transfer.",
    icon: Lightbulb,
    img: InnovationSupport01,
    details: "Special support programs for startups and technology companies looking to establish R&D centers in Sri Lanka."
  },
  {
    title: "Investment Protection",
    desc: "Ensuring your investments are protected under Sri Lanka's legal framework and international agreements.",
    icon: Shield,
    img: InvestmentProtection01,
    details: "Information and support regarding Sri Lanka's 26 Bilateral Investment Treaties and dispute resolution mechanisms."
  },
  {
    title: "Job Bank",
    desc: "Connecting talent with opportunities that shape Sri Lanka's future.",
    icon: Briefcase,
    img: JobBank01,
    details: "Discover career opportunities across Sri Lanka's dynamic investment landscape. The BOI Job Bank connects job seekers with leading enterprises in sectors like apparel, IT, logistics, and manufacturing. Whether you're starting your career or seeking growth, explore roles that match your skills and aspirations."
  },
  {
  title: "Visa & Immigration",
  desc: "Streamlined visa processing and immigration support for investors, professionals, and their families.",
  icon: Plane, 
  img: VisaImmigration,
  details: "The BOI provides comprehensive visa and immigration assistance through our online portal. We facilitate resident visas for investors, employment visas for expatriate staff, and dependent visas for family members. Our services include application processing, document verification, and coordination with the Department of Immigration and Emigration. Investors can apply for visa extensions, multiple-entry visas, and access expedited processing for eligible projects. We also provide guidance on visa requirements, document preparation, and compliance with Sri Lanka's immigration regulations."
},
{
  title: "Web Submission Portal",
  desc: "Online platform for streamlined application submission and document management for investors.",
  icon: UploadCloud, 
  img: WebSubmissionPortal01,
  details: "Our secure web submission portal provides investors with 24/7 access to submit applications, upload required documents, and track submission status in real-time. The platform supports all BOI services including investment proposals, visa applications, incentive claims, and aftercare requests. Features include automated application checklists, document validation, electronic payment processing, and direct communication channels with BOI officers. The system ensures data security with encrypted transmissions and secure storage of all investor information."
},
{
  title: "Declarant Portal",
  desc: "Online system for compliance reporting, monitoring, and regulatory submissions for BOI enterprises.",
  icon: BarChart3, 
  img: DeclarantPortal01,
  details: "The Declarant Portal provides BOI-registered companies with a dedicated platform for submitting mandatory compliance reports, monitoring applications, and fulfilling regulatory requirements. Enterprises can submit performance reports, export-import data, employment statistics, and other compliance documents through a secure online system. The portal features automated validation, submission tracking, and direct communication channels with BOI monitoring officers. It also provides access to historical submissions, downloadable acknowledgments, and compliance status updates."
},
{
  title: "Land Bank Portal",
  desc: "Digital platform for accessing available investment properties and land resources in Sri Lanka.",
  icon: MapPin, 
  img: LandBankPortal01,
  details: "The BOI Land Bank portal provides investors with comprehensive access to available industrial lands, parks, and special economic zones across Sri Lanka. The platform features interactive maps, detailed property information, availability status, and specifications for each location. Investors can filter properties by region, size, infrastructure availability, and sector suitability. The system facilitates virtual site tours, document access, and direct inquiries to BOI land management officers. Registered users can shortlist properties, track application status, and complete lease agreements digitally."
},
{
  title: "Export Data Portal",
  desc: "A digital platform for export docs, compliance, and performance tracking.",
  icon: Database, 
  img: ExportDataPortal01,
  details: "The BOI Export Data Portal provides registered exporters with a comprehensive system for submitting export documentation, tracking shipment status, and complying with regulatory requirements. The platform facilitates electronic submission of export declarations, shipping documents, and customs documentation. Exporters can generate performance reports, access historical export data, and monitor compliance with export obligations. The system integrates with Sri Lanka Customs and other relevant agencies to streamline export processes and reduce paperwork for BOI-registered companies."
},
{
  title: "Local Sales Portal",
  desc: "Digital platform for managing domestic market sales approvals and compliance for BOI enterprises.",
  icon: ShoppingCart, 
  img: LocalSalesPortal01,
  details: "The BOI Local Sales Portal enables registered enterprises to apply for, manage, and report on domestic market sales activities. The system streamlines the approval process for selling products in the local market, ensuring compliance with BOI regulations and customs requirements. Companies can submit local sales applications, track approval status, report sales transactions, and maintain records of domestic market activities. The portal integrates with customs and tax systems to facilitate proper duty payments and compliance monitoring for goods sold in the Sri Lankan market."
},
{
  title: "ID Issuing System",
  desc: "Digital platform for identity management and access control for BOI stakeholders.",
  icon: UserCog, 
  img: IDIssuingSystem01,
  details: "The BOI ID Issuing System provides secure digital identity management for all stakeholders including investors, employees, consultants, and government partners. The platform facilitates the application, issuance, and management of identification credentials that grant access to BOI facilities, services, and digital platforms. The system features multi-level authentication, biometric integration, and secure credential management with expiration tracking and renewal reminders. It ensures controlled access to BOI premises and digital resources while maintaining comprehensive audit trails of all access activities."
},
{
  title: "Import Export Portal",
  desc: "Integrated digital platform for customs declaration and international trade documentation processing.",
  icon: Truck, 
  img: ImportExportPortal01,
  details: "The BOI Import Export Portal provides a comprehensive digital platform for managing all customs declarations, import-export documentation, and international trade compliance requirements. This system integrates with Sri Lanka Customs and other regulatory bodies to streamline trade processes for BOI-registered enterprises. The platform enables electronic submission of customs declarations, processing of import-export permits, duty payment calculations, and real-time tracking of shipment status. It reduces processing times, minimizes paperwork, and ensures compliance with international trade regulations."
},
{
  title: "Industrial Labour Relations",
  desc: "Advisory support to foster strong employer–employee relations in BOI enterprises.",
  icon: Users, 
  img: IndustrialLabourRelations01,
  details: "The BOI Industrial Relations Department provides comprehensive advisory services and guidance to both employers and employees on all aspects of industrial relations. We promote labor-management cooperation and industrial harmony through distribution of the Labor Standards & Employment Relations Manual, clarification of IR matters, and organization of workshops. Our services include monitoring compliance with labor standards, facilitating social dialogue through Employees' Councils, mediating trade union activities, and ensuring adherence to ILO Core Labor Standards. We also help maintain a productive workforce through job placement services, dispute resolution, and promoting fair employment practices in accordance with Sri Lankan labor laws and international standards."
},
{
  title: "Legal Services",
  desc: "Comprehensive legal advisory and documentation services for investors and BOI enterprises.",
  icon: Scale, 
  img: LegalServices01,
  details: "The BOI Legal Services division provides expert legal guidance to investors on all aspects of establishing and operating enterprises in Sri Lanka. Our services include advising on company incorporation, documentation requirements, land matters, labor laws, and other applicable regulations affecting BOI enterprises. We prepare and execute investment agreements under Section 17 of the BOI Act, provide legal counsel on investment agreements and approvals, and review joint venture agreements and other relevant contracts. Our legal experts ensure compliance with Sri Lankan laws while facilitating smooth investment processes for foreign direct investments."
},
{
  title: "Engineering Approvals",
  desc: "Streamlined technical review and approval process for construction and infrastructure projects in BOI enterprises.",
  icon: Wrench, 
  img: EngineeringApprovals01,
  details: "The BOI Engineering Division provides comprehensive technical review and approval services for all construction, infrastructure, and facility development projects in BOI-registered enterprises. Our services include evaluation of architectural plans, structural designs, electrical systems, mechanical installations, and environmental compliance. We ensure that all projects meet Sri Lankan building codes, safety standards, and environmental regulations while facilitating efficient approval processes to accelerate project implementation and operationalization."
},
{
  title: "Environmental Clearances",
  desc: "Comprehensive environmental compliance and clearance services for sustainable investment projects.",
  icon: Leaf, 
  img: EnvironmentalClearances01,
  details: "The BOI Environmental Division facilitates the environmental clearance process for all investment projects, ensuring compliance with Sri Lanka's environmental regulations and sustainable development goals. Our services include guidance on environmental impact assessments (EIA), initial environmental examinations (IEE), and obtaining necessary clearances from the Central Environmental Authority (CEA). We help investors navigate the regulatory framework, implement environmentally sustainable practices, and maintain ongoing compliance throughout the project lifecycle."
}
];

const Services = () => {
  const [expandedCards, setExpandedCards] = useState([]);

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

  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter(i => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  return (
    <section className="services-section">
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

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        Our Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="section-subtitle"
      >
        The BOI provides a comprehensive range of services to investors, from initial inquiry 
        to project implementation and beyond, ensuring a seamless investment experience in Sri Lanka.
      </motion.p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="service-card"
            style={{ height: expandedCards.includes(index) ? "auto" : "500px" }}
          >
            <div className="card-image-container">
              <motion.img
                src={service.img}
                alt={service.title}
                className="card-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="card-icon-container">
                <service.icon className="card-icon" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.desc}</p>
              
              <AnimatePresence>
                {expandedCards.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="card-details"
                  >
                    <p>{service.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button 
                className={`card-button ${expandedCards.includes(index) ? 'expanded' : ''}`}
                onClick={() => toggleCard(index)}
              >
                {expandedCards.includes(index) ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;