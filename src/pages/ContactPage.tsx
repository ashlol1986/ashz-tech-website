import { motion } from 'framer-motion';
import '../styles/contact.css';

const ContactPage = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-subtitle">
            Ready to transform your ideas into reality? Reach out to discuss your project 
            requirements and discover how Ashz Tech can help accelerate your digital journey.
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>For business inquiries and project discussions</p>
                <a href="mailto:info@ashz.tech" className="contact-link">
                  info@ashz.tech
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Response Time</h3>
                <p>We typically respond within</p>
                <span className="highlight-text">24-48 Business Hours</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Global Reach</h3>
                <p>Serving clients worldwide with</p>
                <span className="highlight-text">Remote-First Operations</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="cta-box"
          >
            <div className="cta-content">
              <h3>Ready to Start Your Project?</h3>
              <p>
                Share your vision with us. Whether you need AI-powered solutions, 
                3D visualization, intelligent hardware, or mobile applications, 
                our team is ready to bring your ideas to life.
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Free Consultation</span>
                </div>
                <div className="cta-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Expert Team</span>
                </div>
                <div className="cta-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Flexible Engagement</span>
                </div>
              </div>
              <a href="mailto:info@ashz.tech" className="btn-primary">
                Send Us an Email
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="footer"
        >
          <div className="footer-brand">
            <span className="footer-logo">Ashz Tech</span>
            <span className="footer-tagline">Innovation Through Technology</span>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Ashz Tech Limited. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
