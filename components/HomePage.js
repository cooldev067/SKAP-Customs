import React from "react";
import ProductCard from "./ProductCard";

const HomePage = () => {
  return (
    <main>
      <div>
        
      </div>
      <div className="flex p-10 gap-8 flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default HomePage;
