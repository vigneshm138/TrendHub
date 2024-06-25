import React, { useContext } from "react";
import { shopContext } from "../Context/ShopAllProducts";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";
import { NavLink } from "react-router-dom";

const ShopCategory = ({ category }) => {
  const { clothForEvyOne } = useContext(shopContext);
  return (
    <div>
      <div className="shopCategory-items">
        {clothForEvyOne.map((item, i) => {
          if (item.category === category) {
            return (
              <NavLink to={`/product/${item.id+","+category}`}>
                <Item
                  img={item.img}
                  proName={item.proName.slice(0, 20) + "..."}
                  proPrice={item.proPrice}
                  oldPrice={item.oldPrice}
                />
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
