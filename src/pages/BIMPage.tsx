import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { BIMIcon, UnrealEngineIcon, Web3DIcon, SimulationIcon } from '../components/Icons';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

const BIMPage = () => {
  const features: Feature[] = [
    {
      icon: <BIMIcon width={32} height={32} />,
      title: 'BIM Solutions',
      description: 'Comprehensive Building Information Modeling services that revolutionize construction project management, from conceptual design to facility management.',
      highlights: [
        'Revit/ArchiCAD Development',
        'BIM Coordination & Clash Detection',
        '4D/5D BIM Scheduling & Cost',
        'Digital Twin Implementation'
      ]
    },
    {
      icon: <UnrealEngineIcon width={32} height={32} />,
      title: 'Unreal Engine Development',
      description: 'Leveraging the power of Unreal Engine 5 for photorealistic visualizations, interactive experiences, and real-time rendering applications.',
      highlights: [
        'Architectural Visualization',
        'Virtual Reality Experiences',
        'Real-time Ray Tracing',
        'Interactive Configurators'
      ]
    },
    {
      icon: <Web3DIcon width={32} height={32} />,
      title: '3D Web Applications',
      description: 'Browser-based 3D visualization solutions using WebGL, Three.js, and modern web technologies for accessible cross-platform experiences.',
      highlights: [
        'WebGL/Three.js Development',
        'Product Configurators',
        '3D Model Viewers',
        'Interactive Presentations'
      ]
    },
    {
      icon: <SimulationIcon width={32} height={32} />,
      title: 'Industrial Simulation',
      description: 'High-fidelity simulation systems for manufacturing, logistics, and industrial processes with real-time data integration and analytics.',
      highlights: [
        'Factory Digital Twins',
        'Process Simulation',
        'Training Simulators',
        'Performance Analytics'
      ]
    }
  ];

  return (
    <section className="section" id="bim">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">Visualization</span>
          <h2 className="section-title">BIM & 3D Visualization Solutions</h2>
          <p className="section-subtitle">
            Transforming complex data into immersive visual experiences. From architectural 
            visualization to industrial digital twins, we bring your projects to life with 
            cutting-edge 3D technologies and Unreal Engine expertise.
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

export default BIMPage;
