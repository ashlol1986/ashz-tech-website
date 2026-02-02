import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { IOSIcon, AndroidIcon, CrossPlatformIcon, CloudAPIIcon } from '../components/Icons';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

const AppPage = () => {
  const features: Feature[] = [
    {
      icon: <IOSIcon width={32} height={32} />,
      title: 'Native iOS Development',
      description: 'High-performance native iOS applications built with Swift and SwiftUI, optimized for the Apple ecosystem with seamless hardware integration.',
      highlights: [
        'Swift & SwiftUI',
        'Core Data & CloudKit',
        'ARKit & Core ML Integration',
        'App Store Optimization'
      ]
    },
    {
      icon: <AndroidIcon width={32} height={32} />,
      title: 'Native Android Development',
      description: 'Feature-rich Android applications using Kotlin and Jetpack Compose, designed for diverse device ecosystems and enterprise deployment.',
      highlights: [
        'Kotlin & Jetpack Compose',
        'Material Design 3',
        'Firebase Integration',
        'Enterprise MDM Support'
      ]
    },
    {
      icon: <CrossPlatformIcon width={32} height={32} />,
      title: 'Cross-Platform Solutions',
      description: 'Cost-effective cross-platform development using React Native and Flutter for simultaneous iOS and Android deployment.',
      highlights: [
        'React Native Development',
        'Flutter Applications',
        'Shared Codebase Strategy',
        'Native Module Integration'
      ]
    },
    {
      icon: <CloudAPIIcon width={32} height={32} />,
      title: 'Backend & API Services',
      description: 'Scalable backend infrastructure and API development to power mobile applications with real-time sync and offline capabilities.',
      highlights: [
        'RESTful & GraphQL APIs',
        'Real-time Synchronization',
        'Push Notification Systems',
        'Analytics & Monitoring'
      ]
    }
  ];

  return (
    <section className="section" id="app">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">Mobile</span>
          <h2 className="section-title">Mobile Application Development</h2>
          <p className="section-subtitle">
            Creating exceptional mobile experiences that users love. From concept to deployment, 
            we deliver native and cross-platform applications that drive engagement, enhance 
            productivity, and scale with your business growth.
          </p>
        </motion.div>

        <div className="card-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
              <ul className="highlight-list">
                {feature.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPage;
