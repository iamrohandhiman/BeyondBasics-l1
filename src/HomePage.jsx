import React, { useEffect, useState, useRef } from "react";
import BBlogoNav from "./assets/BBlogoNav.png";
import ShastraLogoNav from "./assets/shastraLogoNav.png";
import shastrabeyondbasics_cover from "./assets/shastrabeyondbasics_cover.png";
import BiweeklyTalkLogo from "./assets/BiweeklyTalkLogo.png";
import applysvg from "./assets/apply.svg";
import svg1 from "./assets/SVG1.svg";
import abstractSvg from "./assets/abstractcircles.svg";
import catchUpsvg from "./assets/CatchUp.svg";
import EventDetailsBut from "./assets/EventDetailsBut.svg";
import Lego from "./assets/lego.svg";
import { useNavigate } from "react-router-dom"; 

function HomePage() {
  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef(null);
  const animatedElementsRef = useRef([]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Fix for horizontal overflow */
      html, body {
        overflow-x: hidden;
        width: 100%;
        margin: 0;
        padding: 0;
      }

      /* Ensure all content stays within bounds */
      * {
        box-sizing: border-box;
        max-width: 100%;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes floatAnimation {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes pulseAnimation {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes bobbing {
        0% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-8px) rotate(-2deg); }
        50% { transform: translateY(0) rotate(0deg); }
        75% { transform: translateY(8px) rotate(2deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
      
      .lego-animation {
        animation: bobbing 6s ease-in-out infinite;
        transform-origin: center;
      }

      .fade-in-up {
        opacity: 0;
        transform: translateY(20px);
      }

      .slide-in-left {
        opacity: 0;
        transform: translateX(-30px);
      }

      .slide-in-right {
        opacity: 0;
        transform: translateX(30px);
      }
      
      .float {
        animation: floatAnimation 6s ease-in-out infinite;
      }
      
      .pulse {
        animation: pulseAnimation 3s ease-in-out infinite;
      }

      .animated {
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
      }

      .scroll-visible {
        opacity: 1;
        transform: translateY(0) translateX(0);
        transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      img {
        user-select: none;
        -webkit-user-drag: none;
      }

      .clickable {
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      
      .clickable:hover {
        transform: scale(1.02);
      }
      
      .clickable:active {
        transform: scale(0.98);
      }

      .not-clickable {
        cursor: default;
        pointer-events: none;
      }

      .sticky-nav {
        position: sticky;
        top: 0;
        z-index: 50;
        transition: box-shadow 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      
      .sticky-nav.scrolled {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      .parallax-item {
        will-change: transform;
      }

      @media (min-width: 1024px) {
        .parallax-bg {
          background-attachment: fixed;
          will-change: transform;
        }
        
        .lg-flex-row {
          display: flex;
          flex-direction: row;
        }
        
        .lg-w-1/2 {
          width: 50%;
        }
        
        .lg-text-lg {
          font-size: 1.125rem;
        }
        
        .lg-text-4xl {
          font-size: 2.25rem;
        }
      }
      
      @media (max-width: 640px) {
        .sm-p-2 {
          padding: 0.5rem;
        }
      }
      
      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .dark-mode-text {
          color: #ffffff;
        }
      }
      
      /* Prefers reduced motion */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
      
      /* Lego figure hover effect */
      .lego-container {
        position: relative;
      }
      
      .lego-container::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: radial-gradient(circle at center, rgba(255, 0, 78, 0.3) 0%, rgba(255, 0, 78, 0) 70%);
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.5s ease, transform 0.5s ease;
        z-index: -1;
        border-radius: 50%;
      }
      
      .lego-container:hover::before {
        opacity: 1;
        transform: scale(1.2);
      }
    `;
    document.head.appendChild(style);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            if (entry.target.classList.contains("fade-in-up")) {
              entry.target.style.animationName = "fadeInUp";
            } else if (entry.target.classList.contains("slide-in-left")) {
              entry.target.style.animationName = "slideInLeft";
            } else if (entry.target.classList.contains("slide-in-right")) {
              entry.target.style.animationName = "slideInRight";
            }
            entry.target.classList.add("animated");
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    animatedElementsRef.current = document.querySelectorAll(".fade-in-up, .slide-in-left, .slide-in-right");
    animatedElementsRef.current.forEach((el) => observerRef.current.observe(el));

    const navElement = document.querySelector('.sticky-nav');
    const navScrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === navElement && scrollY > 20) {
          navElement.classList.add('scrolled');
        } else {
          navElement.classList.remove('scrolled');
        }
      },
      { threshold: [0], rootMargin: "-20px 0px 0px 0px" }
    );

    if (navElement) navScrollObserver.observe(navElement);

    return () => {
      document.head.removeChild(style);
      if (observerRef.current) {
        animatedElementsRef.current.forEach((el) => observerRef.current.unobserve(el));
      }
      if (navElement) navScrollObserver.unobserve(navElement);
    };
  }, [scrollY]);

  const handleButtonClick = (event, action) => {
    console.log(`Button clicked: ${action}`);
    if (action === 'eventDetails') {
      navigate('/event-details');
    } else if (action === 'apply') {
      navigate('/apply');
    } else if (action === 'home') {
      navigate('/');
    } else if (action === 'shastra') {
      // For external links, use window.open instead of navigate
      window.open('https://shastra.org', '_blank');
    }
  };

  return (
    <div className="overflow-x-hidden w-full">
      {/* Sticky Nav */}
      <div
        style={{ backgroundColor: "#FF004E" }}
        className={`bg-red-600 w-full flex justify-between items-center sticky-nav ${scrollY > 20 ? 'scrolled' : ''}`}
      >
        <img 
          src={BBlogoNav} 
          alt="Beyond Basics Logo" 
          className="pl-2 clickable" 
          onClick={(e) => handleButtonClick(e, 'home')}
        />
        <img 
          src={ShastraLogoNav} 
          alt="Shastra Logo" 
          className="mb-2 pr-2 clickable" 
          onClick={(e) => handleButtonClick(e, 'shastra')}
        />
      </div>

      {/* Image separation with parallax effect */}
      <div
        className="w-full h-[10px] bg-no-repeat bg-center parallax-bg"
        style={{
          backgroundImage: `url(${shastrabeyondbasics_cover})`,
          backgroundSize: "150%",
          backgroundPositionY: `${Math.min(scrollY * 0.2, 50)}px`,
        }}
      ></div>

      {/* Yellow box */}
      <div style={{ backgroundColor: "#FFFA77" }} className="w-full pb-6">
        {/* Peer to peer */}
        <div className="text-white flex justify-start items-center text-[16px]">
          <div className={`bg-black w-[32%] max-w-[150px] mt-[18px] ml-[5%] flex justify-center items-center font-inter font-semibold fade-in-up ${isLoaded ? 'scroll-visible' : ''}`}>
            PEER TO PEER
          </div>
        </div>

        <img 
          src={svg1} 
          alt="SVG Graphic" 
          className={`ml-[5%] mt-4 w-[225px] slide-in-left not-clickable ${isLoaded ? 'scroll-visible' : ''}`}
        />
      </div>

      {/* First black box */}
      <div className="w-full bg-black flex flex-col justify-start items-start text-[16px]">
        <div className="text-[11px] w-full mt-3.5 ml-[5%] text-white font-inter font-semibold fade-in-up lg-text-lg">
          Background
        </div>
        <div className="text-[36px] leading-[1.2] w-full ml-[5%] text-white font-inter font-semibold slide-in-left lg-text-4xl">
          for Advanced Programmers and Enthusiasts .
        </div>
      </div>

      {/* Second Black box */}
      <div className="w-full bg-black flex flex-col justify-start items-start text-[16px]">
        <div className="text-[11px] w-full mt-3.5 ml-[5%] text-white font-inter font-semibold pt-5 fade-in-up">
          Apply now to be a speaker
          
          {/* Outer div for button image and abstract image */}
          <div className="flex justify-start items-center w-full pt-2">
            {/* Button with pulse effect on hover */}
            <img 
              src={applysvg} 
              className="pr-3 clickable slide-in-left hover:pulse" 
              alt="Apply Button"
              onClick={(e) => handleButtonClick(e, 'apply')}
            />
            
            {/* Abstract circle with enhanced rotation on scroll */}
            <img 
              src={abstractSvg} 
              alt="Abstract Design" 
              className="not-clickable parallax-item"
              style={{ 
                transform: `rotate(${scrollY * 0.05}deg) scale(${1 + scrollY * 0.0005})`,
                transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }} 
            />
          </div>

          {/* Text */}
          <div className="text-[36px] leading-[1.2] w-full text-white font-inter font-semibold pt-3 pb-20 slide-in-left">
            Is the niche new? <br />
            the most competent <br />
            developers make <br />
            the cut
          </div>
        </div>
      </div>

      {/* Outer lower pink box - responsive layout for large screens */}
      <div
        style={{ backgroundColor: "#FF004E" }}
        className="w-full flex flex-col lg:flex-row justify-between items-start sm-p-2"
      >
        {/* Left box */}
        <div className="flex flex-col justify-start pt-3 ml-[5%] lg-w-1/2 fade-in-up">
          <img src={catchUpsvg} alt="Catch Up" className="not-clickable" />

          {/* Button with enhanced hover effect */}
          <img 
            src={EventDetailsBut} 
            alt="Event Details Button" 
            className="w-[150px] clickable slide-in-left hover:pulse"
            onClick={(e) => handleButtonClick(e, 'eventDetails')}
          />

          {/* Dates */}
          <div className="text-[20px] w-full mt-14 text-white font-inter font-semibold fade-in-up dark-mode-text">
            <div className="mb-4">7th April<br /></div> 
            <span className="leading-2 pt-3.5">
              2'O clock <br />
              Seminar Hall 1
            </span>
          </div>
        </div>

        {/* Right box aligned to bottom with enhanced lego figure */}
        <div className="flex flex-col justify-end items-end pr-[5%] h-full self-end lg-w-1/2 slide-in-right lego-container">
          {/* Enhanced Lego figure with both parallax and bobbing animation */}
          <img 
            src={Lego} 
            className="h-[200px] not-clickable lego-animation parallax-item" 
            alt="Lego Illustration" 
            style={{ 
              filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))`,
              transform: `translateY(${Math.min(scrollY * -0.1, 0)}px)`,
              transition: 'filter 0.5s ease'
            }}
          />
          
          {/* Add subtle light effect around the Lego figure */}
          <div 
            className="absolute bottom-0 right-0 w-48 h-48 rounded-full" 
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
              transform: `translateY(${Math.min(scrollY * -0.05, 0)}px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
              pointerEvents: 'none',
              zIndex: -1
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;