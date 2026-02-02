import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EmbeddedIcon, IoTIcon, IndustrialIcon, SmartDeviceIcon } from '../components/Icons';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

const HardwarePage = () => {
  const features: Feature[] = [
    {
      icon: <EmbeddedIcon width={32} height={32} />,
      title: 'Embedded Systems',
      description: 'Custom embedded hardware and firmware development for IoT devices, industrial controllers, and specialized computing platforms.',
      highlights: [
        'ARM/RISC-V Development',
        'Real-time Operating Systems',
        'Low-power Design',
        'Secure Boot & OTA Updates'
      ]
    },
    {
      icon: <IoTIcon width={32} height={32} />,
      title: 'IoT Infrastructure',
      description: 'End-to-end IoT solutions including sensor networks, edge computing gateways, and cloud connectivity for smart environments.',
      highlights: [
        'Sensor Integration',
        'Edge Computing Solutions',
        'MQTT/CoAP Protocols',
        'Cloud Platform Integration'
      ]
    },
    {
      icon: <IndustrialIcon width={32} height={32} />,
      title: 'Industrial Automation',
      description: 'Smart manufacturing solutions with PLC integration, SCADA systems, and Industry 4.0 implementations for operational excellence.',
      highlights: [
        'PLC/HMI Programming',
        'SCADA System Development',
        'OPC UA Integration',
        'Predictive Maintenance'
      ]
    },
    {
      icon: <SmartDeviceIcon width={32} height={32} />,
      title: 'Smart Device Development',
      description: 'Consumer and enterprise smart device development from concept to mass production, including wearables and connected devices.',
      highlights: [
        'PCB Design & Prototyping',
        'Hardware-Software Integration',
        'CE/FCC Certification Support',
        'Manufacturing Partnership'
      ]
    }
  ];

  return (
    <section className="section" id="hardware">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">Hardware</span>
          <h2 className="section-title">Intelligent Hardware Systems</h2>
          <p className="section-subtitle">
            Building the physical foundation of digital transformation. From embedded systems 
            to IoT infrastructure, we design and develop intelligent hardware solutions that 
            bridge the gap between physical and digital worlds.
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

export default HardwarePage;
