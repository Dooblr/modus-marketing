import { motion } from "framer-motion";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

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

const pricingPlans = [
  {
    id: 1,
    name: "Digital Presence",
    price: "$500",
    description: "Perfect for businesses starting their digital journey",
    features: [
      "Basic Website Setup",
      "Social Media Profile Creation",
      "Google Business Profile",
      "Basic SEO Setup",
      "Contact Form Integration"
    ]
  },
  {
    id: 2,
    name: "Brand Growth",
    price: "$1,500",
    description: "Ideal for businesses ready to establish their brand",
    features: [
      "Everything in Digital Presence",
      "Custom Logo Design",
      "Brand Style Guide",
      "Marketing Materials Design",
      "Social Media Templates",
      "Email Marketing Setup"
    ]
  },
  {
    id: 3,
    name: "Market Leader",
    price: "$3,000",
    description: "Complete solution for market dominance",
    features: [
      "Everything in Brand Growth",
      "Active Social Media Management",
      "Content Marketing Strategy",
      "Monthly Performance Reports",
      "PPC Campaign Management",
      "Competitor Analysis",
      "Advanced SEO Optimization"
    ]
  }
];

export default function Pricing() {
  return (
    <motion.div 
      className="page-container pricing-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HomeButton />
      <h1>Pricing Plans</h1>
      <motion.div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <motion.div 
            key={plan.id} 
            className="pricing-card"
            variants={itemVariants}
          >
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <p className="description">{plan.description}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <Link to="/contact">
              <motion.button
                className="get-started-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 