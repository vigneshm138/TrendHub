import React from "react";
import "./Popular.css";
import { pMenItem } from "../Assets/popularSec";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h3>Popular In men</h3>

      <div className="popular-items">
        {pMenItem.map((item) => (
          <Item
            img={item.img}
            proName={item.proName}
            proPrice={item.proPrice}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
