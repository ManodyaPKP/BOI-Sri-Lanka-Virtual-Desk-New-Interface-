// src/components/tabs/WhySriLanka.js
import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  Home,
  Building2,
  ShoppingCart,
  FileText,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Easy access to international travel",
    desc: "Sri Lanka's proximity to the Indian sub-continent positions the country as a gateway to a market of 1.9 billion people, strategically located at the crossroads of major maritime trade routes.",
    icon: Globe2,
    img: "https://i.pinimg.com/originals/7c/64/75/7c64754724c03d17faca37c5d102f760.gif",
  },
  {
    title: "Agile talent pool",
    desc: "A versatile workforce with global recognition in precision manufacturing and adaptability. Strong focus on education and vocational training to support ICT, hospitality, and engineering industries.",
    icon: Users,
    img: "https://i.pinimg.com/originals/b2/76/90/b276903193d6ab4e79cbbf16c2df16a5.gif",
  },
  {
    title: "Great place to live",
    desc: "From beaches and hills to vibrant cities, Sri Lanka offers rich culture, nightlife, arts, international schools, and world-class healthcare—making it a wonderful place for families.",
    icon: Home,
    img: "https://i.pinimg.com/originals/d6/74/e7/d674e764a10d6b4f8cdd011f030c886f.gif",
  },
  {
    title: "Fast developing infrastructure",
    desc: "Continuous upgrades to seaports, airports, highways, power, and telecom facilities ensure reliable infrastructure for global businesses.",
    icon: Building2,
    img: "https://i.pinimg.com/originals/b4/71/16/b47116650a980de94fadc8812e3144d8.gif",
  },
  {
    title: "Access to key markets",
    desc: "Sri Lanka's location provides access to free trade and partnership agreements with Asia's leading economies.",
    icon: ShoppingCart,
    img: "https://i.pinimg.com/originals/00/56/76/005676b619ce505d6ef74e21e1092204.gif",
  },
  {
    title: "Avoidance of double taxation",
    desc: "Agreements with 45 countries eliminate double taxation and support smooth international business transactions.",
    icon: FileText,
    img: "https://i.pinimg.com/originals/e5/bb/6d/e5bb6d39779212d4f560d35bc3fc6db0.gif",
  },
  {
    title: "Investment protection",
    desc: "26 Bilateral Investment Treaties safeguard foreign investments while aligning with sustainable development principles.",
    icon: ShieldCheck,
    img: "https://i.pinimg.com/originals/99/e2/4e/99e24e251bd535b7717a0f99b3e84138.gif",
  },
];

const WhySriLanka = () => {
  return (
    <section className="why-sri-lanka-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        Why Sri Lanka?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="section-subtitle"
      >
        Sri Lanka offers unique advantages for investors across multiple sectors,
        combining strategic location, skilled talent, strong legal frameworks,
        and an exceptional lifestyle.
      </motion.p>

      <div className="reasons-grid">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="reason-card"
          >
            <div className="card-image-container">
              <motion.img
                src={item.img}
                alt={item.title}
                className="card-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="card-icon-container">
                <item.icon className="card-icon" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhySriLanka;