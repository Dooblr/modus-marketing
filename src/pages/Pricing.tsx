import { motion } from "framer-motion";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";
import { useState } from "react";

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

interface Plan {
  name: string;
  displayName: string;
  features: string[];
}

const PLANS: Plan[] = [
  { 
    name: 'Starter', 
    displayName: 'Essentials',
    features: [
      'Basic Marketing Tools',
      'Social Media Management',
      'Content Creation',
      'Monthly Analytics Report',
      'Email Support'
    ]
  },
  { 
    name: 'Scale-Up', 
    displayName: 'Professional',
    features: [
      'Advanced Analytics',
      'Email Campaigns',
      'SEO Optimization',
      'Content Strategy',
      'Social Media Strategy',
      'Priority Support',
      'Weekly Reports'
    ]
  },
  { 
    name: 'Enterprise', 
    displayName: 'Enterprise',
    features: [
      'Full Service Suite',
      'Custom Strategy',
      'Priority Support',
      'White Label Solutions',
      'Dedicated Account Team',
      'Custom Development',
      'Market Research',
      'Competitor Analysis',
      'Monthly Strategy Sessions'
    ]
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]); // Start with Professional

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

        <motion.div className="features-grid">
          {selectedPlan.features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={itemVariants}
            >
              <div className="feature-content">
                <div className="feature-header">
                  <h3>{feature}</h3>
                </div>
                <div className="feature-value">
                  <span className="included">
                    Included
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
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