import React, { useEffect } from 'react';
import modReactRed from "./assets/modRedCirc.png";
import ristalk from "./assets/Title1talk.svg";
import porttalk from "./assets/protsicletalk.png";
import amit from "./assets/amit.png";

function EventDetailsPage() {
  useEffect(() => {
    // Load Inter font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    const sections = document.querySelectorAll('.talk-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      // Cleanup font link if needed
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header Image Section */}
      <div className="w-full relative overflow-hidden">
        <img 
          src={modReactRed} 
          alt="Event Header" 
          className="w-full h-auto object-contain scale-[1.05] animate-pulseSlow"
        />
      </div>

      {/* Container */}
      <div className="max-w-5xl mx-auto px-5">
        {/* Talk Section Template */}
        {[{
          title: "Talk 1: Web Development Essentials",
          speaker: "Rishabh Pandey",
          department: "Computer Science Department",
          description: `Join Rishabh Pandey for an insightful discussion on modern web development practices.
            This session will cover essential front-end technologies, responsive design principles,
            and performance optimization techniques that every developer should know. Whether you're
            a beginner or looking to refine your skills, this talk will provide valuable insights
            into creating robust web applications.`,
          image: ristalk,
        }, {
          title: "Talk 2: Data Structures & Algorithms",
          speaker: "Utsavraj Singh",
          department: "Computer Science Department",
          description: `Utsavraj Singh presents a comprehensive overview of efficient data structures and algorithms.
            This talk will explore optimization strategies, complexity analysis, and real-world
            applications of algorithmic thinking. Perfect for students and professionals looking to
            enhance their problem-solving capabilities and technical interview preparation. Bring
            your questions for an engaging Q&A session.`,
          image: porttalk,
        }, {
          title: "Talk 3: Machine Learning Fundamentals",
          speaker: "Amit Maurya",
          department: "AI & Machine Learning Department",
          description: `Dive into the world of artificial intelligence with Amit Maurya as he explores
            the foundations of machine learning. This session will cover supervised and unsupervised
            learning techniques, neural networks, and practical implementation strategies.
            Learn how to apply these concepts to solve real-world problems and gain insights
            into the future directions of AI research and applications.`,
          image: amit,
        }].map((talk, index) => (
          <section
            key={index}
            className="talk-section mb-14 border border-gray-700 shadow-[0_5px_15px_rgba(0,0,0,0.5)] opacity-0 translate-y-5 transition-all duration-700"
          >
            {/* Banner */}
            <div className="bg-yellow-200 border-b-2 border-yellow-300">
              <img src={talk.image} alt={`${talk.speaker} Talk`} className="w-full h-auto object-contain block" />
            </div>

            {/* Content */}
            <div className="bg-black p-6 border-t border-gray-700">
              <h2 className="text-2xl text-yellow-200 font-semibold tracking-wide mb-1" style={{ fontWeight: '600' }}>{talk.title}</h2>
              <h3 className="text-xl font-semibold mb-1" style={{ fontWeight: '600' }}>{talk.speaker}</h3>
              <p className="text-gray-400 text-lg mb-4" style={{ fontWeight: '400' }}>{talk.department}</p>
              <p className="text-gray-300 text-base leading-relaxed mt-3 whitespace-pre-line" style={{ fontWeight: '400', letterSpacing: '0.01em' }}>
                {talk.description}
              </p>
            </div>
          </section>
        ))}
      </div>

    
      

      {/* Styles for animations and Inter font */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulseSlow {
            0% { transform: scale(1.05); }
            100% { transform: scale(1.1); }
          }
          .animate-pulseSlow {
            animation: pulseSlow 5s infinite alternate;
          }
          .fade-in-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          
          /* Inter font optimizations */
          body {
            font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `
      }} />
    </div>
  );
}

export default EventDetailsPage;