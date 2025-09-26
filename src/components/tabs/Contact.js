// src/components/tabs/Contact.js
import React, { useState } from "react";
import qrcodeimage2 from "../../assets/Contact Us.jpg";
import qrcodeimage3 from "../../assets/Gateway.jpg";
import qrcodeimage4 from "../../assets/Department Directory.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Building, 
  Users, 
  FileText, 
  Flag, 
  Factory, 
  Briefcase,
  MessageSquare,
  Clock,
  User
} from "lucide-react";

const contactSections = [
  {
    title: "General Inquiries",
    desc: "Main contact point for all investment-related inquiries and general information about BOI services.",
    icon: Phone,
    img: "https://i.pinimg.com/originals/d3/70/e5/d370e515ecba80b8cc994e849fd0c44d.gif",
    details: {
      address: "Level 24, West Tower, World Trade Centre, Colombo 01",
      hotline: "+94-77-1211213",
      telephone: "+94-11-2434403 / +94-11-2346131/3",
      fax: "+94-11-2448105",
      email: "info@boi.lk",
      website: "www.investsrilanka.com"
    }
  },
  {
    title: "Office of the Chairman",
    desc: "Direct access to the Chairman's office for high-level inquiries and strategic investment discussions.",
    icon: User,
    img: "https://i.pinimg.com/originals/d3/5a/2c/d35a2c4885ba237815fc5178d7e900d1.gif",
    details: {
      position: "Secretary to the Chairman",
       Chairman :"Mr. Arjuna Herath",
      telephone: "+94-11-2427001",
      fax: "+94-11-2447995",
      description: "For high-level strategic discussions and chairman-level communications."
    }
  },
  {
    title: "Office of the Director General",
    desc: "Administrative and operational inquiries related to BOI's executive management and policy implementation.",
    icon: Building,
    img: "https://i.pinimg.com/originals/86/fa/f3/86faf30598360ff6e1c5e747689286ca.gif",
    details: {
      position: "Secretary to the Director General",
      DirectorGeneral :"Mrs.Renuka Weerakone",
      telephone: "+94-11-2427102",
      fax: "+94-11-2448105",
      description: "For operational inquiries and administrative matters.",
      Biography: "She has over 30 years of experience associated with BOI.",
      Representations: "reported to be a life member of the Bar Association of Sri Lanka and of the Association of Corporate Lawyers Sri Lanka.",
    }
  },
  {
    title: "Right To Information (RTI)",
    desc: "Access to public information and transparency-related requests under Sri Lanka's Right to Information Act.",
    icon: FileText,
    img: "https://i.pinimg.com/originals/a3/6c/0e/a36c0e58e081afd3f5802ecd63e2fc6b.gif",
    details: {
      service: "RTI Information Officer", 
      Name :"Mrs D A S Amarakoon",
      email: "sajeewanid@boi.lk",
      Designation :"Director",
     name:"Mrs M I A Gunaratne", 
     designation :" Senior Deputy Director",
      Email:"irushag@boi.lk",
    }
  },
  {
    title: "Department Contacts",
    desc: "Specialized contact points for different BOI departments including Legal, Engineering, and Environmental divisions.",
    icon: Users,
    img: "https://i.pinimg.com/originals/a5/00/dd/a500dd5bf406af72b719bb447ae199ba.gif",
    details: {
      legal: "Legal Services Department - legal@boi.lk",
      engineering: "Engineering Division - engineering@boi.lk",
      environment: "Environmental Division - environment@boi.lk",
      hr: "Human Resources - hr@boi.lk",
      monitoring: "Monitoring Department - monitoring@boi.lk"
    }
  },
  {
    title: "Country Desk",
    desc: "Dedicated support for investors from specific countries and regions, providing tailored assistance and cultural liaison.",
    icon: Flag,
    img: "https://i.pinimg.com/originals/cb/e0/e5/cbe0e53deb84c694cf52d247997890be.gif",
    details: {
      asia: "Asian Countries Desk - asia@boi.lk",
      europe: "European Countries Desk - europe@boi.lk",
      americas: "Americas Desk - americas@boi.lk",
      middleeast: "Middle East & Africa Desk - mea@boi.lk",
      services: "Country-specific investment guidance and cultural liaison services"
    }
  },
  {
    title: "Sector Contacts",
    desc: "Specialized support for investments in key sectors including IT, manufacturing, tourism, and emerging industries.",
    icon: Briefcase,
    img: "https://i.pinimg.com/originals/82/b8/4d/82b84dbc0d2eff25af7b081bff1f3528.gif",
    details: {
      it: "Information Technology - it@boi.lk",
      manufacturing: "Manufacturing & Apparel - manufacturing@boi.lk",
      tourism: "Tourism & Leisure - tourism@boi.lk",
      logistics: "Logistics & Transportation - logistics@boi.lk",
      medical: "Medical & Pharmaceutical - medical@boi.lk",
      food: "Food Processing - food@boi.lk"
    }
  },
  {
    title: "Zones Contacts",
    desc: "Direct contact with Export Processing Zones and Industrial Parks for location-specific investment opportunities.",
    icon: Factory,
    img: "https://i.pinimg.com/originals/52/ab/3f/52ab3f57788aac2414e7c7802da7ecf7.gif",
    details: {
      katunayake: "Katunayake EPZ - katunayake@boi.lk",
      biyagama: "Biyagama EPZ - biyagama@boi.lk",
      koggala: "Koggala EPZ - koggala@boi.lk",
      polgahawela: "Polgahawela EPZ - polgahawela@boi.lk",
      mirigama: "Mirigama EPZ - mirigama@boi.lk",
      malwatta: "Malwatta EPZ - malwatta@boi.lk"
    }
  },
  {
    title: "Investor Services",
    desc: "Comprehensive support for existing investors including aftercare services, compliance assistance, and operational support.",
    icon: MessageSquare,
    img: "https://i.pinimg.com/originals/d1/e2/54/d1e25483fe75e83eb9ab17746c08b0a3.gif",
    details: {
      aftercare: "Investor Aftercare - aftercare@boi.lk",
      compliance: "Compliance Support - compliance@boi.lk",
      facilitation: "Investment Facilitation - facilitation@boi.lk",
      helpdesk: "24/7 Investor Helpdesk - +94-77-1211213",
      emergency: "Emergency Support Available"
    }
  },
  {
    title: "Office Hours & Support",
    desc: "Operating hours, emergency contacts, and additional support services for international investors.",
    icon: Clock,
    img: "https://i.pinimg.com/originals/7c/29/87/7c2987f664ceebc44c2e9e620f8a0645.gif",
    details: {
      hours: "Monday - Friday: 8:30 AM - 4:15 PM",
      timezone: "Sri Lanka Standard Time (GMT +5:30)",
      emergency: "Emergency Hotline: +94-77-1211213",
      weekend: "Weekend Support: Limited (Emergency Only)",
      holidays: "Public Holidays: Closed (Emergency Support Available)"
    }
  }
];

const Contact = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter(i => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  const renderContactDetails = (details) => {
    return Object.entries(details).map(([key, value]) => (
      <div key={key} className="contact-detail-item">
        <span className="contact-detail-label">
          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
        </span>
        <span className="contact-detail-value">{value}</span>
      </div>
    ));
  };

  return (
    <section className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        Contact Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="section-subtitle"
      >
        Connect with the right department or specialist for your investment needs. 
        Our comprehensive contact directory ensures you reach the most appropriate 
        support team for efficient assistance.
      </motion.p>

      <div className="contact-grid">
        {contactSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="contact-card"
            style={{ height: expandedCards.includes(index) ? "auto" : "500px" }}
          >
            <div className="card-image-container">
              <motion.img
                src={section.img}
                alt={section.title}
                className="card-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="card-icon-container">
                <section.icon className="card-icon" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{section.title}</h3>
              <p className="card-description">{section.desc}</p>
              
              <AnimatePresence>
                {expandedCards.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="card-details contact-details"
                  >
                    {renderContactDetails(section.details)}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button 
                className={`card-button ${expandedCards.includes(index) ? 'expanded' : ''}`}
                onClick={() => toggleCard(index)}
              >
                {expandedCards.includes(index) ? 'Show Less' : 'View Contacts'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
  className="contact-footer"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="contact-footer-content">
    <h3>Need Immediate Assistance?</h3>
    <p>Scan any of the QR codes below for quick access</p>
    <div className="emergency-contacts grid grid-cols-3 gap-4">
      <div className="qr-contact">
        <img src={qrcodeimage2} 
            style={{
              width: '150px',
              height: '150px',
              gap: '10px',
              marginBottom: '25px',
              animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
              borderRadius: '5%',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '3px solid var(--secondary)'
            }} alt="Contact Us QR" className="w-24 h-24 mx-auto" />
      </div>
      <div className="qr-contact">
        <img src={qrcodeimage3} 
            style={{
              width: '150px',
              height: '150px',
              marginBottom: '25px',
              animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
              borderRadius: '5%',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '3px solid var(--secondary)'
            }} alt="Gateway QR   " className="w-24 h-24 mx-auto" />
      </div>
      <div className="qr-contact">
        <img src={qrcodeimage4}
            style={{
              width: '150px',
              height: '150px',
              marginBottom: '25px',
              animation: 'fadeIn 1s ease-in-out, pulse 2s ease-in-out infinite',
              borderRadius: '5%',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '3px solid var(--secondary)'
            }} alt="Department QR" className="w-24 h-24 mx-auto" />
      </div>
    </div>
  </div>
</motion.div>
    </section>   
  );
};

export default Contact;