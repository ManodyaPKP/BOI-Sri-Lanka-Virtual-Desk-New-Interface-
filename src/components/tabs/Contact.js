// src/components/tabs/Contact.js
import React, { useState } from "react";
import qrcodeimage2 from "../../assets/ContactQR.png";
import qrcodeimage3 from "../../assets/Gateway.png";
import qrcodeimage8 from "../../assets/formQR.png";
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
  User,
  ChevronDown,
  Mail,
  MapPin,
  Globe,
  ExternalLink
} from "lucide-react";

const contactSections = [
  {
    id: "general-inquiries",
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
    id: "office-chairman",
    title: "Office of the Chairman",
    desc: "Direct access to the Chairman's office for high-level inquiries and strategic investment discussions.",
    icon: User,
    img: "https://i.pinimg.com/originals/d3/5a/2c/d35a2c4885ba237815fc5178d7e900d1.gif",
    details: {
      position: "Secretary to the Chairman",
      Chairman: "Mr. Arjuna Herath",
      telephone: "+94-11-2427001",
      fax: "+94-11-2447995",
      description: "For high-level strategic discussions and chairman-level communications."
    }
  },
  {
    id: "office-director-general",
    title: "Office of the Director General",
    desc: "Administrative and operational inquiries related to BOI's executive management and policy implementation.",
    icon: Building,
    img: "https://i.pinimg.com/originals/86/fa/f3/86faf30598360ff6e1c5e747689286ca.gif",
    details: {
      position: "Secretary to the Director General",
      DirectorGeneral: "Mrs.Renuka Weerakone",
      telephone: "+94-11-2427102", 
      fax: "+94-11-2448105",
      description: "For operational inquiries and administrative matters.",
      Biography: "She has over 30 years of experience associated with BOI.",
      Representations: "reported to be a life member of the Bar Association of Sri Lanka and of the Association of Corporate Lawyers Sri Lanka.",
    }
  },
  {
    id: "right-to-information",
    title: "Right To Information (RTI)",
    desc: "Access to public information and transparency-related requests under Sri Lanka's Right to Information Act.",
    icon: FileText,
    img: "https://i.pinimg.com/originals/a3/6c/0e/a36c0e58e081afd3f5802ecd63e2fc6b.gif",
    details: {
      service: "RTI Information Officer", 
      Name: "Mrs D A S Amarakoon",
      email: "sajeewanid@boi.lk",
      Designation: "Director",
      name: "Mrs M I A Gunaratne", 
      designation: "Senior Deputy Director",
      Email: "irushag@boi.lk",
    }
  },
  {
    id: "department-contacts",
    title: "Department Contacts",
    desc: "Specialized contact points for different BOI departments including Legal, Engineering, and Environmental divisions.",
    icon: Users,
    img: "https://i.pinimg.com/originals/a5/00/dd/a500dd5bf406af72b719bb447ae199ba.gif",
    details: {
      InvestmentPromotionDepartment: "Tel: +9411 - 2427070 / +9411 -2427055",     
      InvestmentAppraisalDepartment: "Tel: +9411-2339826 / +9411 - 2427074",
      ResearchPolicyAdvocacyDepartment: "Tel: +9411-2427378",
      InvestorServiceDepartment: "Tel: +9411 - 2427433",
      ProjectMonitoringDepartment: "Tel: +9411 -2427244",
      ProjectImplementationDepartment: "Tel: +9411- 2427340 / +9411-2432226",
      LegalDepartment: "Tel: +9411- 2427013",
      EnvironmentManagementDepartment: "Tel: +9411-2427264",
      EngineeringApprovalsSpecialProjectsDepartment: "Tel: +9411 -2427106 / +9411 - 2427118",
      FinanceDepartment: "Tel: +9411-2427204",
      MediaPublicityDepartment: "Tel: +9411-2427044",
      HumanResourceDepartment: "Tel: +9411-2427186",
      AdministrationDepartment: "Tel: +9411-2427336",
      InformationTechnologyDepartment: "Tel: +9411-2427294",
      InternalAuditsDepartment: "Tel: +9411-2427326"
    }
  },
  {
    id: "zones-contacts",
    title: "Zones Contacts",
    desc: "Direct contact with Export Processing Zones and Industrial Parks for location-specific investment opportunities.",
    icon: Factory,
    img: "https://i.pinimg.com/originals/52/ab/3f/52ab3f57788aac2414e7c7802da7ecf7.gif",
    details: {  
      KatunayakeEPZ: "Mr. A S K T Ranjan Sibera, Director, Tel: +94 11 2208100, Mobile: +94 773703044, Email: ranjans@boi.lk",
      KoggalaEPZ: "Mr H K M N P Ranatunga, Director, Mobile: +94 718565047, Email: ranatungap@boi.lk",
      BiyagamaEPZ: "Director, Tel: +94 11-2465212",
      SeethawakaEPZ: "Ms. Champa Wijeshinghe, SDD, Mobile: +94 741541773, Email: champaw@boi.lk",
      NorthWesternRegionalOffice: "Director, Tel: +94 37-2277040",
      KandyIndustrialParkCRO: "Mr. T M P Tennakoon, Senior Deputy Director, Tel: +94 81-2420019, Mobile: +94 71-8058479, Email: prasannat@boi.lk",
      WathupitiwelaEPZ: "Mr H G B P U Silva, Senior Deputy Director, Mobile: +94 773422933, Email: prasads@boi.lk",
      HoranaEPZ: "Mr. D K Walpita, Senior Deputy Director, Mobile: +94 760387820, Email: darshanak@boi.lk",
      MalwattaEPZ: "Mrs R P S Pushpakumari, Senior Deputy Director, Mobile: +94 716031039, Email: samanthip@boi.lk",
      MirigamaEPZ: "Mr. A S Subasinghe, Senior Deputy Director, Tel: +94 33 - 2274657, Mobile: +94 741541785, Email: subasinghes@boi.lk",
      MawathagamaEPZ: "Mrs D P C Nilmini, Senior Deputy Director, Mobile: +94 718058488, Email: chandrikan@boi.lk",
      JaffnaRegionalOffice: "Mr. A R Jeyamanon, Senior Deputy Director, Tel: +94 21-2221336, Mobile: +94 777776606, Email: jeyamanonr@boi.lk",
      MirijjavilaEPZ: "Mr. S S M Abeysekara, Senior Deputy Director, Tel: +94 47 2258800, Mobile: +94 764803197, Email: senakaa@boi.lk",
      PolgahawelaEPZ: "Mr. A S Prasanna Kumara, Senior Deputy Director, Tel: +94 37-2241526, Mobile: +94 777986584, Email: prasannak@boi.lk",
      TrincomaleeZoneOffice: "Mr. S Sathkunalinkam, Deputy Director, Tel: +94 26-2233003, Mobile: +94 777955819, Email: satkunam@boi.lk",
      BingiriyaZoneOffice: "Mr A P P D Adikari, Officer-in-charge, Tel: +94 32 2241376, Email: dhananjayaa@boi.lk",
      TextileManufacturingZoneEravurPattu: "Mr. R Suhanthan, Officer-in-charge, Mobile: +94 773694111 / +94 782792713, Email: suhanthanr@boi.lk",
      PharmaceuticalManufacturingZoneHambantota: "Mr S S M Abeysekara, Senior Deputy Director, Mobile: +9476-4803197, Email: senakaa@boi.lk"
    }
  },
  {
    id: "country-desk",
    title: "Country Desk",
    desc: "Dedicated support for investors from specific countries and regions, providing tailored assistance and cultural liaison.",
    icon: Flag,
    img: "https://i.pinimg.com/originals/cb/e0/e5/cbe0e53deb84c694cf52d247997890be.gif",
    details: {
      "China/HongKong/MiddleEast/Australia/NZ": "(Mr.) M.H. Casseer Deputy Director Tel: +94 11 2427122 Email: manojc@boi.lk",
      "India/Thailand/Bangladesh/Nepal/Indonesia/Israel/Denmark/Norway/Sweden": "(Mr.) Sudath J. Jayasekara Deputy Director Tel: +94 112339976 Ext: +94 112427108 Email: sudathj@boi.lk",
      "EU/UK/Malaysia/Belgium/Netherlands/Luxembourg": "(Ms.) Madushani Seneviratne Assistant Director Tel: +94 112427065 Email: madushanis@boi.lk",
      "Singapore/Russia/Pakistan/Canada/USA": "(Mr.) John Doe Assistant Director Tel: +94 112427027 Email: johndoe@boi.lk",
      "Japan/France": "(Ms.) Arunya De Silva Assistant Director Tel: +94 112427414 Email: arunyas@boi.lk",
      "Korea/Italy": "(Ms.) Pankaja Samarajeewa Assistant Director Tel: +94 112427417 Email: pankajas@boi.lk",
      "Germany": "(Ms.) Sugandhi Gunaratne Assistant Director Tel: +94 11 2427415 Email: sugandhikag@boi.lk"
    }
  },
  {
    id: "sector-contacts",
    title: "Sector Contacts",
    desc: "Specialized support for investments in key sectors including IT, manufacturing, tourism, and emerging industries.",
    icon: Briefcase,
    img: "https://i.pinimg.com/originals/82/b8/4d/82b84dbc0d2eff25af7b081bff1f3528.gif",
    details: {
      Manufacturing: "Ms Thamari Batuwantudawa, Senior Deputy Director- Investment Appraisal, Tel: +94 11-2543040 /+94 112427077, Email: thamarib@boi.lk | Mr Viran Fernando, Senior Deputy Director- Investment Appraisal, Tel: +94 112427079, Email: viranf@boi.lk",
      Tourism: "Mr D M N Dissanayake, Director - Investment Appraisal, Tel: +94 11-2380185/ +94 112427088, Email: dissanayakemn@boi.lk",
      Agriculture: "Mrs. Thamari Batuwantudawa, Senior Deputy Director - Investment Appraisal, Tel: +94 11-2543040/+94 112427342, Email: thamarib@boi.lk",
      KnowledgeServices: "Mrs. Thamari Batuwantudawa, Senior Deputy Director - Investment Appraisal, Tel: +94 11-2543040/ +94 112427342, Email: thamarib@boi.lk",
      Infrastructure: "Mr M G R Dharmasiri, Executive Director - Investment Appraisal, Tel: +94 11-2330116 /+94 1127460, Email: ranjithd@boi.lk",
      Utilities: "Ms Chamila Kumari, Senior Deputy Director - Investment Appraisal, Tel: +94 11-2427041 / +94 112427077, Email: chamilak@boi.lk",
      Apparel: "Mr M G R Dharmasiri, Executive Director - Investment Appraisal, Tel: +94 11-2330116 /+94 1127460, Email: ranjithd@boi.lk"
    }
  },
  {
    id: "investor-services",
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
    id: "office-hours-support",
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
  const [expandedCard, setExpandedCard] = useState(null);

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
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  // Simple animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5
      }
    }),
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3
      }
    })
  };

  const renderContactDetails = (details) => {
    return Object.entries(details).map(([key, value], idx) => (
      <motion.div 
        key={key} 
        id="contact-detail-item"
        custom={idx}
        variants={detailItemVariants}
        initial="hidden"
        animate="visible"
      >
        <div id="detail-header">
          <span id="detail-icon">
            {key.includes('email') ? <Mail size={14} /> : 
             key.includes('tel') || key.includes('phone') || key.includes('hotline') ? <Phone size={14} /> :
             key.includes('address') ? <MapPin size={14} /> :
             key.includes('website') ? <Globe size={14} /> : <FileText size={14} />}
          </span>
          <span id="contact-detail-label">
            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
          </span>
        </div>
        <span id="contact-detail-value">
          {value}
          {key.includes('email') || key.includes('website') ? (
            <ExternalLink size={12} />
          ) : null}
        </span>
      </motion.div>
    ));
  };

  return (
    <section id="contact-section">
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
        id="section-title"
      >
        Contact Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        id="section-subtitle"
      >
        Connect with the right department or specialist for your investment needs. 
        Our comprehensive contact directory ensures you reach the most appropriate 
        support team for efficient assistance.
      </motion.p>

      <div id="contact-grid">
        {contactSections.map((section, index) => (
          <motion.div
            key={section.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            id="contact-card"
            className={expandedCard === index ? "expanded" : ""}
          >
            <div id="card-image-container">
              <motion.img
                src={section.img}
                alt={section.title}
                id="card-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                id="card-icon-container"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <section.icon id="card-icon" />
              </motion.div>
            </div>

            <div id="card-content">
              <h3 id="card-title">{section.title}</h3>
              
              <p id="card-description">{section.desc}</p>
              
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    id="card-details"
                  >
                    {renderContactDetails(section.details)}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button 
                id={`card-button-${section.id}`}
                className={expandedCard === index ? "expanded" : ""}
                onClick={() => toggleCard(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ rotate: expandedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.span>
                {expandedCard === index ? 'Show Less' : 'View Contacts'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        id="contact-footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div id="contact-footer-content">
          <h3>Need Immediate Assistance?</h3>
          <p>Scan any of the QR codes below for quick access</p>
          <div id="emergency-contacts">
            {[qrcodeimage2, qrcodeimage3, qrcodeimage8].map((qr, index) => (
              <motion.div
                key={index}
                id="qr-contact"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.3 + index * 0.1,
                  duration: 0.5
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <img 
                  src={qr}
                  alt={`QR Code ${index + 1}`}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '5%',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>   
  );
};

export default Contact;