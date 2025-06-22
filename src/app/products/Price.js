"use client";

import { useState } from "react";

const Price = ({ price }) => {
  const [showPrice, setShowPrice] = useState(false);

  const handlePriceToggle = () => {
    setShowPrice((prev) => !prev);
  };
  return (
    <div className="price-btn-wrapper">
      <button onClick={handlePriceToggle}>Show price</button>
      {showPrice && <p>Price: ${price}</p>}
    </div>
  );
};

export default Price;
