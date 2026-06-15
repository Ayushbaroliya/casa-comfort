import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToCategories = () => {
    document.getElementById("categories-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="premium-hero-section">
      <div className="premium-hero-bg"></div>
      <div className="premium-hero-stitch top"></div>
      <div className="premium-hero-stitch bottom"></div>

      <div className="premium-hero-content">
        <div className="brand-group">
          <div className="brand-top-row">
            <div className="mandala-and-casa">
              <div className="mandala-icon">
                <img src="/mandala.webp" alt="Mandala Crest" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="brand-casa">CASA</div>
            </div>
            
            <div className="furniture-icon-group">
              {/* SVG Asset: Furniture Group */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="100%" height="100%">
                <g fill="none" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  
                  {/* 1. WALL ART (Top Left) */}
                  <rect x="50" y="20" width="45" height="60" strokeWidth="3"/>
                  <rect x="57" y="27" width="31" height="46" strokeWidth="1.5"/>
                  {/* Abstract art shapes inside frame */}
                  <path d="M 62,65 C 62,50 72,45 72,55 C 72,65 82,60 82,40" strokeWidth="2"/>
                  <circle cx="78" cy="35" r="4" fill="#C5A059"/>

                  {/* 2. FLOATING WALL SHELF & BOOKS (Top Middle) */}
                  <line x1="120" y1="65" x2="190" y2="65" strokeWidth="3"/>
                  <path d="M 180,65 L 180,55 L 190,65 Z" fill="#C5A059"/> {/* Shelf bracket */}
                  {/* Books */}
                  <rect x="130" y="40" width="10" height="25" fill="none"/>
                  <rect x="142" y="35" width="8" height="30" fill="none"/>
                  <path d="M 155,65 L 165,45 L 173,49 L 163,65 Z"/> {/* Tilted book */}

                  {/* 3. MID-CENTURY MODULAR SOFA (Center-Bottom) */}
                  {/* Grid Backrest */}
                  <rect x="30" y="100" width="220" height="50" rx="4" strokeWidth="3"/>
                  <line x1="85" y1="100" x2="85" y2="150"/>
                  <line x1="140" y1="100" x2="140" y2="150"/>
                  <line x1="195" y1="100" x2="195" y2="150"/>
                  
                  {/* Thick Base Seating Cushion */}
                  <rect x="22" y="150" width="236" height="25" rx="5" strokeWidth="3.5" fill="#C5A059" fillOpacity="0.05"/>
                  
                  {/* Left Armrest Track */}
                  <path d="M 30,120 L 15,120 L 15,175 L 25,175" strokeWidth="3"/>
                  {/* Right Armrest Track */}
                  <path d="M 250,120 L 265,120 L 265,175 L 255,175" strokeWidth="3"/>
                  
                  {/* Angled Structural Tapered Legs */}
                  <line x1="50" y1="175" x2="42" y2="200" strokeWidth="4"/>
                  <line x1="230" y1="175" x2="238" y2="200" strokeWidth="4"/>
                  <line x1="140" y1="175" x2="140" y2="200" strokeWidth="3"/>

                  {/* 4. NORTHERN MINIMALIST FLOOR LAMP (Right Side) */}
                  {/* Base */}
                  <path d="M 290,200 L 330,200" strokeWidth="4"/>
                  {/* Vertical and Arched Pole */}
                  <path d="M 310,200 L 310,50 C 310,25 275,25 275,40" strokeWidth="3"/>
                  {/* Hanging Lamp Shade */}
                  <path d="M 260,55 C 260,42 290,42 290,55 Z" fill="#C5A059"/>
                  <circle cx="275" cy="58" r="3" fill="#C5A059"/>
                  
                </g>
              </svg>
            </div>
          </div>
          <div className="brand-bottom-row">
            <div className="brand-comforts">COMFORTS</div>
          </div>
        </div>

        <div className="premium-tagline">
          ~ the furniture hub ~
        </div>

        <div className="premium-divider-wrapper">
          <div className="premium-divider-line"></div>
          {/* SVG Asset: Diamond Flourish */}
          <div className="premium-divider-flourish">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="1" width="10" height="10" transform="rotate(45 8 1)" stroke="#C89C4E" strokeWidth="1.5"/>
              <rect x="8" y="5" width="4" height="4" transform="rotate(45 8 5)" fill="#C89C4E"/>
            </svg>
          </div>
          <div className="premium-divider-line"></div>
        </div>

        <h2 className="premium-subheading">
          CURATED COLLECTIONS FOR ELEGANT LIVING.
        </h2>

        <p className="premium-description">
          Discover your perfect piece, where comfort meets style.
        </p>

        <button className="premium-cta-button" onClick={scrollToCategories}>
          EXPLORE THE COLLECTION
        </button>
      </div>
    </section>
  );
};

export default Hero;
