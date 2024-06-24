import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Newcollections from "../Components/NewCollection/Newcollections";
import Newsletter from "../Components/NewsLetter/Newsletter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      {/* <Offer/> not complete */}
      <Newcollections />
      <Newsletter/>
    </div>
  );
};

export default Shop;
