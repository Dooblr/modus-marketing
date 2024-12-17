import { motion } from "framer-motion";
import HomeButton from "../components/HomeButton";

const companies = [
  { id: 1, name: "Tech Corp", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Innovation Labs", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Digital Solutions", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Future Systems", image: "https://via.placeholder.com/300" },
  { id: 5, name: "Smart Ventures", image: "https://via.placeholder.com/300" },
  { id: 6, name: "Cloud Nine", image: "https://via.placeholder.com/300" },
];

const containerVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "tween",
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, x: '-100%' }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Portfolio() {
  return (
    <motion.div 
      className="page-container portfolio-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HomeButton />
      <h1>Our Portfolio</h1>
      <motion.div className="portfolio-grid">
        {companies.map((company) => (
          <motion.div 
            key={company.id} 
            className="portfolio-item"
            variants={itemVariants}
          >
            <img src={company.image} alt={company.name} />
            <h3>{company.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 