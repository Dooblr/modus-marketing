import { motion } from "framer-motion";

interface FeatureItemProps {
  feature: string;
  highlighted?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export default function FeatureItem({ feature, highlighted = false }: FeatureItemProps) {
  return (
    <motion.div 
      className={`feature-card ${highlighted ? 'highlighted' : ''}`}
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