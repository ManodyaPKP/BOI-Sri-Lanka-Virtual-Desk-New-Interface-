// src/components/tabs/Services.js
import React, { useState } from "react";
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
    desc: "Dedicated support for investors throughout the investment process, from initial inquiry to project implementation and beyond.",
    icon: Headphones,
    img: "https://i.pinimg.com/originals/22/09/5d/22095d8fd02905f537e78a507c7536e0.gif",
    details: "Our one-stop shop provides guidance on regulatory requirements, approvals, and permits needed for your investment."
  },
  {
    title: "Project Implementation",
    desc: "Assistance with project setup, construction, and operationalization to ensure smooth establishment of your business.",
    icon: Wrench,
    img: "https://i.pinimg.com/originals/92/16/d3/9216d3b4baf45f25c2b3e073c4f054d4.gif",
    details: "We help navigate land acquisition, utility connections, and construction approvals to accelerate your project timeline."
  },
  {
    title: "Incentive Administration",
    desc: "Guidance on availing investment incentives, tax benefits, and custom duty exemptions available for eligible projects.",
    icon: DollarSign,
    img: "https://i.pinimg.com/originals/9d/32/8f/9d328f660e7eafce403b4684f0ba2f03.gif",
    details: "We assist in securing tax holidays, duty-free imports, and other fiscal incentives based on your investment sector and scale."
  },
  {
    title: "Aftercare Services",
    desc: "Ongoing support for existing investors to address operational challenges and facilitate business expansion.",
    icon: FileCheck,
    img: "https://i.pinimg.com/originals/10/69/d4/1069d40cafdd793a3a7401fc9d87df1d.gif",
    details: "Regular check-ins and problem-solving support to ensure your investment continues to thrive in Sri Lanka."
  },
  {
    title: "Sector-Specific Guidance",
    desc: "Expert advice on investment opportunities across key sectors including technology, manufacturing, tourism and infrastructure.",
    icon: BarChart3,
    img: "https://i.pinimg.com/originals/3a/0c/d1/3a0cd1a1cdcde65aaf50b323daabaede.gif",
    details: "Detailed market intelligence and sector reports to help you make informed investment decisions."
  },
  {
    title: "Policy Advocacy",
    desc: "Representing investor interests in policy discussions to improve Sri Lanka's investment climate and regulatory framework.",
    icon: Target,
    img: "https://i.pinimg.com/originals/67/28/bb/6728bb1c361d067c40b84916495fc704.gif",
    details: "We serve as a bridge between investors and government entities to address regulatory challenges."
  },
  {
    title: "Innovation Support",
    desc: "Encouraging and facilitating investments in innovation, research and development, and technology transfer.",
    icon: Lightbulb,
    img: "https://i.pinimg.com/originals/ad/3a/a1/ad3aa168b76a1846c56edad68c218242.gif",
    details: "Special support programs for startups and technology companies looking to establish R&D centers in Sri Lanka."
  },
  {
    title: "Investment Protection",
    desc: "Ensuring your investments are protected under Sri Lanka's legal framework and international agreements.",
    icon: Shield,
    img: "https://cdn.dribbble.com/userupload/42061804/file/original-77b94dbfeb24aed74e5f436e6318d5dc.gif",
    details: "Information and support regarding Sri Lanka's 26 Bilateral Investment Treaties and dispute resolution mechanisms."
  },
  {
    title: "Job Bank",
    desc: "Connecting talent with opportunities that shape Sri Lanka's future.",
    icon: Briefcase,
    img: "https://i.pinimg.com/originals/9f/70/fb/9f70fb0653e45d8586f22eb37a07cb3b.gif",
    details: "Discover career opportunities across Sri Lanka's dynamic investment landscape. The BOI Job Bank connects job seekers with leading enterprises in sectors like apparel, IT, logistics, and manufacturing. Whether you're starting your career or seeking growth, explore roles that match your skills and aspirations."
  },
  {
  title: "Visa & Immigration Services",
  desc: "Streamlined visa processing and immigration support for investors, professionals, and their families.",
  icon: Plane, 
  img: "https://i.pinimg.com/originals/15/8f/7b/158f7b292473c35812ad97f6b317a668.gif",
  details: "The BOI provides comprehensive visa and immigration assistance through our online portal. We facilitate resident visas for investors, employment visas for expatriate staff, and dependent visas for family members. Our services include application processing, document verification, and coordination with the Department of Immigration and Emigration. Investors can apply for visa extensions, multiple-entry visas, and access expedited processing for eligible projects. We also provide guidance on visa requirements, document preparation, and compliance with Sri Lanka's immigration regulations."
},
{
  title: "Web Submission Portal",
  desc: "Online platform for streamlined application submission and document management for investors.",
  icon: UploadCloud, 
  img: "https://cdn.dribbble.com/userupload/42403102/file/original-a5437192bf907bcfe183774a2e38ce97.gif",
  details: "Our secure web submission portal provides investors with 24/7 access to submit applications, upload required documents, and track submission status in real-time. The platform supports all BOI services including investment proposals, visa applications, incentive claims, and aftercare requests. Features include automated application checklists, document validation, electronic payment processing, and direct communication channels with BOI officers. The system ensures data security with encrypted transmissions and secure storage of all investor information."
},
{
  title: "Declarant Portal",
  desc: "Online system for compliance reporting, monitoring, and regulatory submissions for BOI enterprises.",
  icon: BarChart3, 
  img: "https://i.pinimg.com/originals/13/55/72/13557250286a09555422e27174971453.gif",
  details: "The Declarant Portal provides BOI-registered companies with a dedicated platform for submitting mandatory compliance reports, monitoring applications, and fulfilling regulatory requirements. Enterprises can submit performance reports, export-import data, employment statistics, and other compliance documents through a secure online system. The portal features automated validation, submission tracking, and direct communication channels with BOI monitoring officers. It also provides access to historical submissions, downloadable acknowledgments, and compliance status updates."
},
{
  title: "Land Bank Portal",
  desc: "Digital platform for accessing available investment properties and land resources in Sri Lanka.",
  icon: MapPin, 
  img: "https://i.pinimg.com/originals/18/91/e5/1891e54ef2f3eb9179622c98c68f26bc.gif",
  details: "The BOI Land Bank portal provides investors with comprehensive access to available industrial lands, parks, and special economic zones across Sri Lanka. The platform features interactive maps, detailed property information, availability status, and specifications for each location. Investors can filter properties by region, size, infrastructure availability, and sector suitability. The system facilitates virtual site tours, document access, and direct inquiries to BOI land management officers. Registered users can shortlist properties, track application status, and complete lease agreements digitally."
},
{
  title: "Export Data Portal",
  desc: "Digital platform for export documentation, compliance reporting, and performance tracking for BOI enterprises.",
  icon: Database, 
  img: "https://i.pinimg.com/originals/e6/f7/ee/e6f7ee084740b3221d00d0902618cd09.gif",
  details: "The BOI Export Data Portal provides registered exporters with a comprehensive system for submitting export documentation, tracking shipment status, and complying with regulatory requirements. The platform facilitates electronic submission of export declarations, shipping documents, and customs documentation. Exporters can generate performance reports, access historical export data, and monitor compliance with export obligations. The system integrates with Sri Lanka Customs and other relevant agencies to streamline export processes and reduce paperwork for BOI-registered companies."
},
{
  title: "Local Sales Portal",
  desc: "Digital platform for managing domestic market sales approvals and compliance for BOI enterprises.",
  icon: ShoppingCart, 
  img: "https://i.pinimg.com/originals/df/1f/72/df1f72a8b434e4a4b3a42d5b4f2adf2f.gif",
  details: "The BOI Local Sales Portal enables registered enterprises to apply for, manage, and report on domestic market sales activities. The system streamlines the approval process for selling products in the local market, ensuring compliance with BOI regulations and customs requirements. Companies can submit local sales applications, track approval status, report sales transactions, and maintain records of domestic market activities. The portal integrates with customs and tax systems to facilitate proper duty payments and compliance monitoring for goods sold in the Sri Lankan market."
},
{
  title: "ID Issuing System",
  desc: "Digital platform for identity management and access control for BOI stakeholders.",
  icon: UserCog, 
  img: "https://i.pinimg.com/originals/5a/48/9f/5a489f6a5e82467e47d57d0959f91488.gif",
  details: "The BOI ID Issuing System provides secure digital identity management for all stakeholders including investors, employees, consultants, and government partners. The platform facilitates the application, issuance, and management of identification credentials that grant access to BOI facilities, services, and digital platforms. The system features multi-level authentication, biometric integration, and secure credential management with expiration tracking and renewal reminders. It ensures controlled access to BOI premises and digital resources while maintaining comprehensive audit trails of all access activities."
},
{
  title: "Import Export Portal",
  desc: "Integrated digital platform for customs declaration and international trade documentation processing.",
  icon: Truck, 
  img: "https://i.pinimg.com/originals/0b/6a/36/0b6a3646a6e8afbb366903bfa10301b8.gif",
  details: "The BOI Import Export Portal provides a comprehensive digital platform for managing all customs declarations, import-export documentation, and international trade compliance requirements. This system integrates with Sri Lanka Customs and other regulatory bodies to streamline trade processes for BOI-registered enterprises. The platform enables electronic submission of customs declarations, processing of import-export permits, duty payment calculations, and real-time tracking of shipment status. It reduces processing times, minimizes paperwork, and ensures compliance with international trade regulations."
},
{
  title: "Industrial Labour Relations",
  desc: "Comprehensive advisory and facilitation services for maintaining harmonious employer-employee relationships in BOI enterprises.",
  icon: Users, 
  img: "https://i.pinimg.com/originals/8d/da/fd/8ddafdd5048b02ed02410bdc58c63a62.gif",
  details: "The BOI Industrial Relations Department provides comprehensive advisory services and guidance to both employers and employees on all aspects of industrial relations. We promote labor-management cooperation and industrial harmony through distribution of the Labor Standards & Employment Relations Manual, clarification of IR matters, and organization of workshops. Our services include monitoring compliance with labor standards, facilitating social dialogue through Employees' Councils, mediating trade union activities, and ensuring adherence to ILO Core Labor Standards. We also help maintain a productive workforce through job placement services, dispute resolution, and promoting fair employment practices in accordance with Sri Lankan labor laws and international standards."
},
{
  title: "Legal Services",
  desc: "Comprehensive legal advisory and documentation services for investors and BOI enterprises.",
  icon: Scale, 
  img: "https://i.pinimg.com/originals/0e/e8/30/0ee83043fa17432d636e62339bf14c06.gif",
  details: "The BOI Legal Services division provides expert legal guidance to investors on all aspects of establishing and operating enterprises in Sri Lanka. Our services include advising on company incorporation, documentation requirements, land matters, labor laws, and other applicable regulations affecting BOI enterprises. We prepare and execute investment agreements under Section 17 of the BOI Act, provide legal counsel on investment agreements and approvals, and review joint venture agreements and other relevant contracts. Our legal experts ensure compliance with Sri Lankan laws while facilitating smooth investment processes for foreign direct investments."
},
{
  title: "Engineering Approvals",
  desc: "Streamlined technical review and approval process for construction and infrastructure projects in BOI enterprises.",
  icon: Wrench, 
  img: "https://i.pinimg.com/originals/40/d3/96/40d39621f6d6b02236bc0b1418e3e7a6.gif",
  details: "The BOI Engineering Division provides comprehensive technical review and approval services for all construction, infrastructure, and facility development projects in BOI-registered enterprises. Our services include evaluation of architectural plans, structural designs, electrical systems, mechanical installations, and environmental compliance. We ensure that all projects meet Sri Lankan building codes, safety standards, and environmental regulations while facilitating efficient approval processes to accelerate project implementation and operationalization."
},
{
  title: "Environmental Clearances",
  desc: "Comprehensive environmental compliance and clearance services for sustainable investment projects.",
  icon: Leaf, // Import from lucide-react: import { Leaf } from "lucide-react";
  img: "https://i.pinimg.com/originals/e5/7c/e1/e57ce195528ef472074b16552d0440e8.gif",
  details: "The BOI Environmental Division facilitates the environmental clearance process for all investment projects, ensuring compliance with Sri Lanka's environmental regulations and sustainable development goals. Our services include guidance on environmental impact assessments (EIA), initial environmental examinations (IEE), and obtaining necessary clearances from the Central Environmental Authority (CEA). We help investors navigate the regulatory framework, implement environmentally sustainable practices, and maintain ongoing compliance throughout the project lifecycle."
}
];

const Services = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter(i => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  return (
    <section className="services-section">
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