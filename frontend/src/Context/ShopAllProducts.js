import React, { createContext } from "react";
import { clothForEvyOne } from "../Components/Assets/productsForEveryOne";
export const shopContext = createContext();

const ShopAllProducts = (props) => {
  const contextValue = { clothForEvyOne };
  return (
    <div>
      <shopContext.Provider value={contextValue}>
        {props.children}
      </shopContext.Provider>
    </div>
  );
};

export default ShopAllProducts;
