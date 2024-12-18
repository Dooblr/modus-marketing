import { motion } from "framer-motion";
import HomeButton from "../../components/HomeButton";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function DigitalMarketing() {
  return (
    <motion.div
      className="page-container service-detail-page"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "tween", ease: "easeInOut" }}
    >
      <HomeButton />
      <h1>Digital Marketing</h1>
      <div className="service-detail-content">
        <motion.section 
          className="service-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Analytics & Reporting</h2>
          <p>Transform your marketing strategy with comprehensive analytics and detailed reporting that drives data-informed decisions.</p>
        </motion.section>

        <motion.section 
          className="service-features"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="feature" variants={itemVariants}>
            <h3>Performance Tracking</h3>
            <p>Monitor key metrics and KPIs in real-time to measure campaign success and ROI across all marketing channels.</p>
          </motion.div>
          <motion.div className="feature" variants={itemVariants}>
            <h3>Custom Reports</h3>
            <p>Receive detailed, customized reports tailored to your business objectives and marketing goals.</p>
          </motion.div>
          <motion.div className="feature" variants={itemVariants}>
            <h3>Data Analysis</h3>
            <p>Get actionable insights from your marketing data to optimize campaigns and improve future performance.</p>
          </motion.div>
        </motion.section>

        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/contact">
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05, background: '#64FFDA', color: '#2C3539' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
} 