import { motion } from "framer-motion";

interface FeatureItemProps {
  feature: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export default function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <motion.div 
      className="feature-card"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      <div className="feature-content">
        <div className="feature-header">
          <h3>{feature}</h3>
        </div>
      </div>
    </motion.div>
  );
} 