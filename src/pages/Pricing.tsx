import { motion } from "framer-motion";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
  range: [number, number];
  features: string[];
}

const PLANS: Plan[] = [
  { 
    name: 'Starter', 
    displayName: 'Essentials',
    range: [0, 33],
    features: ['Basic Marketing Tools', 'Social Media Management', 'Content Creation']
  },
  { 
    name: 'Scale-Up', 
    displayName: 'Professional',
    range: [34, 66],
    features: ['Advanced Analytics', 'Email Campaigns', 'SEO Optimization']
  },
  { 
    name: 'Enterprise', 
    displayName: 'Enterprise',
    range: [67, 100],
    features: ['Full Service Suite', 'Custom Strategy', 'Priority Support']
  }
];

interface PricingFeature {
  name: string;
  baseValue: number;
  maxValue: number;
  unit: string;
  included: boolean;
}

const features: PricingFeature[] = [
  { name: "Social Media Posts", baseValue: 4, maxValue: 16, unit: "posts", included: true },
  { name: "Content Creation", baseValue: 2, maxValue: 8, unit: "hours", included: true },
  { name: "SEO Optimization", baseValue: 1, maxValue: 5, unit: "keywords", included: true },
  { name: "Email Marketing", baseValue: 1, maxValue: 4, unit: "campaigns", included: true },
  { name: "Analytics Reports", baseValue: 1, maxValue: 4, unit: "reports", included: true },
  { name: "Strategy Sessions", baseValue: 1, maxValue: 4, unit: "sessions", included: true },
  { name: "Ad Campaigns", baseValue: 0, maxValue: 3, unit: "campaigns", included: false },
  { name: "Custom Graphics", baseValue: 2, maxValue: 8, unit: "designs", included: true },
  { name: "Market Research", baseValue: 0, maxValue: 2, unit: "reports", included: false },
  { name: "Competitor Analysis", baseValue: 0, maxValue: 2, unit: "reports", included: false }
];

export default function Pricing() {
  const [sliderValue, setSliderValue] = useState(50);
  const [currentPlan, setCurrentPlan] = useState<Plan>(PLANS[1]); // Start with Professional
  const [scaledFeatures, setScaledFeatures] = useState<PricingFeature[]>(features);

  const getCurrentPlan = (value: number): Plan => {
    return PLANS.find(plan => value >= plan.range[0] && value <= plan.range[1]) || PLANS[1];
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    const newPlan = getCurrentPlan(value);
    setCurrentPlan(newPlan);
  };

  useEffect(() => {
    const scaled = features.map(feature => {
      const valueRange = feature.maxValue - feature.baseValue;
      const scaledValue = feature.included
        ? Math.round(feature.baseValue + (valueRange * sliderValue / 100))
        : sliderValue >= 75 ? Math.max(1, Math.round(feature.baseValue + (valueRange * (sliderValue - 75) / 25))) : 0;

      return {
        ...feature,
        baseValue: scaledValue,
        included: feature.included || sliderValue >= 75
      };
    });
    setScaledFeatures(scaled);
  }, [sliderValue]);

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
          <p>Select your plan to see included services</p>
          <p>Scale your marketing strategy as your business grows</p>
        </div>

        <div className="slider-container">
          <div className="price-display">
            <span className="plan-tier">{currentPlan.displayName}</span>
            <div className="plan-features">
              {currentPlan.features.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>
          </div>
          <div className="slider-wrapper">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderValue} 
              onChange={(e) => handleSliderChange(parseInt(e.target.value))}
              className="custom-slider"
            />
            <div 
              className="slider-fill"
              style={{ width: `${sliderValue}%` }}
            />
          </div>
          <div className="slider-labels">
            <span className={currentPlan.name === 'Starter' ? 'active' : ''}>Essentials</span>
            <span className={currentPlan.name === 'Scale-Up' ? 'active' : ''}>Professional</span>
            <span className={currentPlan.name === 'Enterprise' ? 'active' : ''}>Enterprise</span>
          </div>
        </div>

        <motion.div className="features-grid">
          {scaledFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className={`feature-card ${!feature.included ? 'disabled' : ''}`}
              variants={itemVariants}
            >
              <div className="feature-number">{(index + 1).toString().padStart(2, '0')}</div>
              <div className="feature-content">
                <div className="feature-header">
                  <h3>{feature.name}</h3>
                </div>
                <div className="feature-value">
                  {feature.included ? (
                    <span className="included">
                      {feature.baseValue} {feature.unit}
                    </span>
                  ) : (
                    <span className="not-included">Higher tier</span>
                  )}
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
              Get Started with {currentPlan.displayName}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 