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
  features: string[];
}

// All possible features across all plans
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
  'Dedicated White Glove Service'
];

// Base features included in the Essential plan
const ESSENTIAL_FEATURES = [
  'Customized Website',
  'Social Media Management',
  'Content Creation'
];

// Professional plan includes all Essential features plus its own
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

// Enterprise plan includes all Professional features plus its own
const ENTERPRISE_FEATURES = [
  ...PROFESSIONAL_FEATURES,
  'Unlimited Pages, Content, and Edits',
  'Monthly Strategy Sessions',
  'Dedicated White Glove Service'
];

const PLANS: Plan[] = [
  { 
    name: 'Essential', 
    displayName: 'Essential',
    features: ESSENTIAL_FEATURES
  },
  { 
    name: 'Professional', 
    displayName: 'Professional',
    features: PROFESSIONAL_FEATURES
  },
  { 
    name: 'Enterprise', 
    displayName: 'Enterprise',
    features: ENTERPRISE_FEATURES
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]); // Start with Professional

  const isFeatureHighlighted = (feature: string) => {
    // if (feature === 'Increased Pages, Content, and Edits' && selectedPlan.name === 'Enterprise') {
    //   return true; // Don't highlight "Increased" when "Unlimited" is selected
    // }
    return selectedPlan.features.includes(feature);
  };

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
        <h1>Custom Marketing Solutions</h1>
        <div className="pricing-description">
          <p>Choose the plan that fits your business needs</p>
          <p>Scale your marketing strategy as your business grows</p>
        </div>

        <div className="slider-container">
          <div className="price-display">
            <span className="plan-tier">{selectedPlan.displayName}</span>
          </div>
          <div className="slider-labels">
            {PLANS.map((plan) => (
              <span
                key={plan.name}
                className={selectedPlan.name === plan.name ? 'active' : ''}
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
          transition={{
            layout: { duration: 0.3 }
          }}
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