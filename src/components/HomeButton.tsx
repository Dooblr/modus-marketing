import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <motion.div 
      className="home-button"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Return Home
        </motion.button>
      </Link>
    </motion.div>
  );
} 