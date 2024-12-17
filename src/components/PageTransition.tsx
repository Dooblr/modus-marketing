import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageTransition() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="page-transition-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ 
          duration: 0.2,
          ease: "easeInOut"
        }}
      />
    </AnimatePresence>
  );
} 