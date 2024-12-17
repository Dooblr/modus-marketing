import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ type: "tween", ease: "easeInOut" }}
    >
      <h1>Our Services</h1>
      <div className="services-content">
        <p>Discover how we can help grow your business</p>
        {/* Add more content here */}
      </div>
    </motion.div>
  );
} 