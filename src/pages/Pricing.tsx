import { motion, AnimatePresence } from "framer-motion";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import FeatureItem from "../components/FeatureItem";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3
    }
  },
  exit: { opacity: 0 }
};

interface Plan {
  name: string;
  displayName: string;
  price: string;
  setupFee: string;
  description: string;
  features: string[];
}

const ALL_FEATURES = [
  'Customized Website',
  'Social Media Management',
  'Content Creation',
  'Increased Pages, Content, and Edits',
  'Ad Campaigns (PPC)',
  'Advanced Analytics',
  'Priority Support',
  'A/B Testing',
  'SEO',
  'Email Marketing',
  'Unlimited Pages, Content, and Edits',
  'Monthly Strategy Sessions',
];

const ESSENTIAL_FEATURES = [
  'Customized Website',
  'Social Media Management',
  'Content Creation'
];

const PROFESSIONAL_FEATURES = [
  ...ESSENTIAL_FEATURES,
  'Increased Pages, Content, and Edits',
  'Ad Campaigns (PPC)',
  'Advanced Analytics',
  'Priority Support',
  'A/B Testing',
  'SEO',
  'Email Marketing'
];

const ENTERPRISE_FEATURES = [
  ...PROFESSIONAL_FEATURES,
  'Unlimited Pages, Content, and Edits',
  'Monthly Strategy Sessions',
];

const PLANS: Plan[] = [
  { 
    name: 'Essential', 
    displayName: 'Essential',
    price: '$500/mo',
    setupFee: '$300 setup',
    description: 'Perfect for small businesses looking to establish their digital presence',
    features: ESSENTIAL_FEATURES
  },
  { 
    name: 'Professional', 
    displayName: 'Professional',
    price: '$1,000/mo',
    setupFee: '$500 setup',
    description: 'Ideal for growing businesses ready to scale their digital marketing',
    features: PROFESSIONAL_FEATURES
  },
  { 
    name: 'Enterprise', 
    displayName: 'Enterprise',
    price: '$2,000/mo',
    setupFee: '$1,000 setup',
    description: 'Comprehensive solution for established businesses seeking full-service digital marketing',
    features: ENTERPRISE_FEATURES
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]); // Default to Professional

  const isFeatureHighlighted = (feature: string) => selectedPlan.features.includes(feature);

  return (
    <motion.div 
      className="page-container pricing-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ width: '100vw', margin: 0, maxWidth: 'none', overflow: 'hidden' }}
    >
      <div className="pricing-content">
        <HomeButton />
        <h1>Pricing</h1>
        <h2>All plans guarantee a 10% increase in revenue in the first 3 months, or your money back.</h2>

        <div className="slider-container">
          <div className="price-display">
            <span className="plan-tier">{selectedPlan.displayName}</span>
            <span className="plan-description">{selectedPlan.description}</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlan.price}
                className="price-info"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="price-tag">{selectedPlan.price}</span>
                <span className="setup-fee">{selectedPlan.setupFee}</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="slider-labels">
            {PLANS.map((plan) => (
              <span
                key={plan.name}
                className={`slider-label ${selectedPlan.name === plan.name ? 'active' : ''}`}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan.displayName}
              </span>
            ))}
          </div>
        </div>

        <motion.div 
          className="features-grid"
          layout
          transition={{ layout: { duration: 0.3 } }}
        >
          <AnimatePresence mode="wait">
            {ALL_FEATURES.map((feature) => (
              <FeatureItem 
                key={feature} 
                feature={feature} 
                highlighted={isFeatureHighlighted(feature)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="cta-container">
          <Link to="/contact">
            <motion.button
              className="get-started-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started with {selectedPlan.displayName}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
