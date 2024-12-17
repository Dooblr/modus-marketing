import { motion } from "framer-motion";
import HomeButton from "../../components/HomeButton";

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

export default function BrandStrategy() {
  return (
    <motion.div
      className="page-container service-detail-page"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "tween", ease: "easeInOut" }}
    >
      <HomeButton />
      <h1>Brand Strategy</h1>
      <div className="service-detail-content">
        <motion.section 
          className="service-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Strategic Brand Development</h2>
          <p>Build a strong, memorable brand identity that resonates with your target audience and sets you apart from competitors.</p>
        </motion.section>

        <motion.section 
          className="service-features"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="feature" variants={itemVariants}>
            <h3>Brand Identity</h3>
            <p>Develop a unique and compelling brand identity that reflects your company's values and connects with your audience.</p>
          </motion.div>
          <motion.div className="feature" variants={itemVariants}>
            <h3>Market Research</h3>
            <p>Conduct thorough market research to understand your target audience, competitors, and industry trends.</p>
          </motion.div>
          <motion.div className="feature" variants={itemVariants}>
            <h3>Brand Guidelines</h3>
            <p>Create comprehensive brand guidelines to ensure consistency across all marketing channels and touchpoints.</p>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
} 