import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { AIAgentIcon, KnowledgeBaseIcon, AIAppIcon, SoftwareDevIcon } from '../components/Icons';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

const SoftwarePage = () => {
  const features: Feature[] = [
    {
      icon: <AIAgentIcon width={32} height={32} />,
      title: 'AI Agent Development',
      description: 'Build intelligent conversational agents that understand context, learn from interactions, and automate complex business workflows.',
      highlights: ['Natural Language Processing', 'Multi-turn Dialogue Systems', 'Task Automation Agents', 'Custom LLM Integration']
    },
    {
      icon: <KnowledgeBaseIcon width={32} height={32} />,
      title: 'Knowledge Base Systems',
      description: 'Enterprise-grade knowledge management platforms with semantic search, intelligent retrieval, and RAG (Retrieval-Augmented Generation) capabilities.',
      highlights: ['Vector Database Integration', 'Semantic Search Engine', 'Document Processing Pipeline', 'Knowledge Graph Construction']
    },
    {
      icon: <AIAppIcon width={32} height={32} />,
      title: 'AI-Powered Applications',
      description: 'Full-stack application development enhanced with AI capabilities including intelligent recommendations, predictive analytics, and automated decision-making.',
      highlights: ['Machine Learning Integration', 'Predictive Analytics', 'Intelligent Automation', 'Real-time AI Processing']
    },
    {
      icon: <SoftwareDevIcon width={32} height={32} />,
      title: 'Custom Software Solutions',
      description: 'Traditional software development services with modern tech stacks, scalable architectures, and best practices for enterprise deployments.',
      highlights: ['Microservices Architecture', 'Cloud-Native Development', 'API Design & Integration', 'DevOps & CI/CD Pipelines']
    }
  ];

  return (
    <section className="section" id="software">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-tag">Core Business</span>
          <h2 className="section-title">Software Development & AI Solutions</h2>
          <p className="section-subtitle">
            Leveraging cutting-edge artificial intelligence technologies to build intelligent systems 
            that transform how businesses operate, communicate, and make decisions.
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

export default SoftwarePage;
