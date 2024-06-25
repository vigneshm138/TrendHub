import React from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const idCategory = productId.split(",");
  console.log(idCategory);
  return (
    <div>
      <ProductDisplay productId={idCategory[0]} productcate={idCategory[1]} />{" "}
    </div>
  );
};

export default Product;
