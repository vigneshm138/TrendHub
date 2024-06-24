import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Newcollections from "../Components/NewCollection/Newcollections";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      {/* <Offer/> not complete */}
      <Newcollections />
    </div>
  );
};

export default Shop;
