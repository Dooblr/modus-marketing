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

export default function ContentCreation() {
  return (
    <motion.div
      className="page-container service-detail-page"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "tween", ease: "easeInOut" }}
    >
      <HomeButton />
      <h1>Content Creation</h1>
      <div className="service-detail-content">
        <motion.section 
          className="service-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Professional Content Solutions</h2>
          <p>Create engaging, high-quality content that drives engagement and converts visitors into customers.</p>
        </motion.section>

        <motion.section 
          className="service-features"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="feature" variants={itemVariants}>
            <h3>Content Strategy</h3>
            <p>Develop comprehensive content strategies aligned with your business goals and target audience preferences.</p>
          </motion.div>
          <motion.div className="feature" variants={itemVariants}>
            <h3>Content Production</h3>
            <p>Create engaging written and visual content optimized for different platforms and marketing channels.</p>
          </motion.div>
          <motion.div className="feature" variants={itemVariants}>
            <h3>Content Management</h3>
            <p>Efficiently manage and distribute your content across multiple platforms while maintaining consistency.</p>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
} 