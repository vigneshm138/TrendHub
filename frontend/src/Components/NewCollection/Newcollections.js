import React from "react";
import "./Newcollections.css";
import { newCollectionPros } from "../Assets/newCollectionPro";
import Item from "../Item/Item";

const Newcollections = () => {
  return (
    <div className="newCollections">
      <h3>New collection In women</h3>

      <div className="newCollections-items">
        {newCollectionPros.map((item) => (
          <Item
            img={item.img}
            proName={item.proName.slice(0,20)+"..."}
            proPrice={item.proPrice}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Newcollections;
