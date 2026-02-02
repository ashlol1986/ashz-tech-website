import { useState, useEffect } from 'react';
import '../styles/navigation.css';

interface NavigationProps {
  sections: { id: string; label: string }[];
}

const Navigation = ({ sections }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.full-page-container');
      if (!container) return;
      
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop - windowHeight / 2 && 
              scrollPosition < offsetTop + windowHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    const container = document.querySelector('.full-page-container');
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="top-nav">
        <div className="nav-brand">
          <span className="brand-text">Ashz Tech</span>
        </div>
        <div className="nav-links">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>
      
      <div className="nav-indicator">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            aria-label={section.label}
            title={section.label}
          />
        ))}
      </div>
    </>
  );
};

export default Navigation;
