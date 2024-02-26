import "./Pricing.css";
import React from "react";
import PricingCard from "./PricingCard";
const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <PricingCard
          title="Basic"
          price="100 $"
          days="5 Day"
          pages="3 Page"
          text="featured"
          responsive="Responsive"
          Purchase="Purchase Now"
        />
        <PricingCard
          title="Premium"
          price="150 $"
          days="3 Day"
          pages="6 Page"
          text="featured"
          responsive="Responsive"
          Purchase="Purchase Now"
        />
        <PricingCard
          title="Basic"
          price="100 $"
          days="2 Day"
          pages="10 Page"
          text="featured"
          responsive="Responsive"
          Purchase="Purchase Now"
        />
      </div>
    </div>
  );
};

export default Pricing;
