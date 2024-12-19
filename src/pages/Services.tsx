import { motion } from "framer-motion";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3
    }
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions including SEO, PPC, and social media management."
  },
  {
    title: "Content Creation",
    description: "Professional content creation for your website, social media, and marketing materials."
  },
  {
    title: "Website Development",
    description: "Custom website design and development tailored to your brand and business needs."
  },
  {
    title: "Brand Strategy",
    description: "Strategic brand development and positioning to help your business stand out."
  },
  {
    title: "Analytics & Reporting",
    description: "Data-driven insights and detailed reporting to optimize your marketing performance."
  },
  {
    title: "Social Media Advertising",
    description: "Strategic paid social campaigns across multiple platforms to reach and engage your target audience."
  }
];

export default function Services() {
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
      
      <motion.div 
        className="services-content"
        variants={itemVariants}
      >
        <div className="services-description">
          <p>We offer a comprehensive suite of digital marketing services to help your business grow.</p>
          <p>Choose from our range of services or contact us for a custom solution.</p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="service-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="action-buttons">
          <Link to="/pricing">
            <motion.button
              className="action-button pricing-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              className="action-button contact-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
} 