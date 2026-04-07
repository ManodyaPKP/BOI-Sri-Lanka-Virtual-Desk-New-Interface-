// src/components/tabs/WhySriLanka.js
import React, { useState, useEffect, useMemo } from "react";
import whyimg001 from "../../assets/whysrilankaimg/whyimg001.gif";
import whyimg002 from "../../assets/whysrilankaimg/whyimg002.gif";
import whyimg003 from "../../assets/whysrilankaimg/whyimg003.gif";
import whyimg004 from "../../assets/whysrilankaimg/whyimg004.gif";
import whyimg005 from "../../assets/whysrilankaimg/whyimg005.gif";
import whyimg006 from "../../assets/whysrilankaimg/whyimg006.gif";
import whyimg007 from "../../assets/whysrilankaimg/whyimg007.gif";
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

const WhySriLanka = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Memoize reasons array to prevent recreation on every render
  const reasons = useMemo(() => [
    {
      title: "Easy access to international travel",
      desc: "Sri Lanka's proximity to the Indian sub-continent positions the country as a gateway to a market of 1.9 billion people, strategically located at the crossroads of major maritime trade routes.",
      icon: Globe2,
      img: whyimg001,
    },
    {
      title: "Agile talent pool",
      desc: "A versatile workforce with global recognition in precision manufacturing and adaptability. Strong focus on education and vocational training to support ICT, hospitality, and engineering industries.",
      icon: Users,
      img: whyimg002,
    },
    {
      title: "Great place to live",
      desc: "From beaches and hills to vibrant cities, Sri Lanka offers rich culture, nightlife, arts, international schools, and world-class healthcare—making it a wonderful place for families.",
      icon: Home,
      img: whyimg003,
    },
    {
      title: "Fast developing infrastructure",
      desc: "Continuous upgrades to seaports, airports, highways, power, and telecom facilities ensure reliable infrastructure for global businesses.",
      icon: Building2,
      img: whyimg004,
    },
    {
      title: "Access to key markets",
      desc: "Sri Lanka's location provides access to free trade and partnership agreements with Asia's leading economies.",
      icon: ShoppingCart,
      img: whyimg005,
    },
    {
      title: "Avoidance of double taxation",
      desc: "Agreements with 45 countries eliminate double taxation and support smooth international business transactions.",
      icon: FileText,
      img: whyimg006,
    },
    {
      title: "Investment protection",
      desc: "26 Bilateral Investment Treaties safeguard foreign investments while aligning with sustainable development principles.",
      icon: ShieldCheck,
      img: whyimg007,
    },
  ], []);

  // Preload all images on component mount to enable browser caching
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = reasons.map(reason => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(reason.img);
            img.onerror = reject;
            img.src = reason.img;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
        console.log('✅ WhySriLanka images cached - no more network requests!');
      } catch (error) {
        console.error('Error preloading WhySriLanka images:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, [reasons]);

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
                loading="lazy"
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
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