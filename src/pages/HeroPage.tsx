import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/hero.css';

const HeroPage = () => {
  return (
    <section className="section hero-section" id="home">
      <ParticleBackground />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-badge"
        >
          Technology Innovation
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title"
        >
          <span className="company-name">Ashz Tech</span>
          <span className="company-suffix">Limited</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-description"
        >
          Empowering enterprises with cutting-edge solutions in AI, BIM, 3D visualization, 
          intelligent hardware, and mobile applications.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-stats"
        >
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Core Domains</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">AI</span>
            <span className="stat-label">Powered Solutions</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">End-to-End</span>
            <span className="stat-label">Development</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hero-cta"
        >
          <a href="#software" className="btn-primary">
            Explore Our Services
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="scroll-indicator"
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
      
      <div className="hero-gradient-orb orb-1"></div>
      <div className="hero-gradient-orb orb-2"></div>
      <div className="hero-gradient-orb orb-3"></div>
    </section>
  );
};

export default HeroPage;
