import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NodeBackground from "../components/NodeBackground";

export default function Home() {
  return (
    <motion.div 
      className="splash-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NodeBackground speed={1.0} nodes={20}/>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Modus Marketing
      </motion.h1>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="subheading"
      >
        10x results for half the cost
      </motion.h2>
      <motion.div 
        className="button-container"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/services"><button>Services</button></Link>
        <Link to="/portfolio"><button>Portfolio</button></Link>
        <Link to="/pricing"><button>Pricing</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </motion.div>
    </motion.div>
  );
} 