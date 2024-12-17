import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HomeButton from "../components/HomeButton";

const containerVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "tween",
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, x: '-100%' }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface ServiceDetail {
  title: string;
  description: string;
  details: string[];
}

const servicesData: ServiceDetail[] = [
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions tailored to your needs",
    details: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Pay-Per-Click Advertising",
      "Analytics and Reporting"
    ]
  },
  {
    title: "Brand Strategy",
    description: "Strategic brand development and positioning services",
    details: [
      "Brand Identity Development",
      "Market Research & Analysis",
      "Competitive Positioning",
      "Visual Brand Guidelines",
      "Brand Voice & Messaging"
    ]
  },
  {
    title: "Content Creation",
    description: "Professional content creation and management",
    details: [
      "Website Copy & Blog Posts",
      "Social Media Content",
      "Video Production",
      "Infographics & Visual Content",
      "Content Strategy Planning"
    ]
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="page-container services-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HomeButton />
      <h1>Our Services</h1>
      
      <motion.div className="services-grid" variants={itemVariants}>
        {servicesData.map((service, index) => (
          <motion.div 
            key={service.title}
            className={`service-card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div 
                  className="service-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul>
                    {service.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="services-banner"
        variants={itemVariants}
      >
        <h2>Transform Your Business Today</h2>
        <p>Let us help you reach your marketing goals with our expert solutions</p>
      </motion.div>
    </motion.div>
  );
} 