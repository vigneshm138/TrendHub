import React from "react";
import "./ProductDisplay.css";
import img from "../Assets/PBImg1.jpg";
import { clothForEvyOne } from "../Assets/productsForEveryOne";
import { NavLink } from "react-router-dom";

const ProductDisplay = ({ productId, productcate }) => {
  const singleProduct = clothForEvyOne.find(
    (item) => item.id === Number(productId)
  );
  return (
    <div className="product-display">
      <p>
        {<NavLink to={"/"}>shop</NavLink>}/
        <NavLink to={`/${productcate}`}>{productcate}</NavLink>/
        {singleProduct.proName}
      </p>
      <div className="productDisplay-Images">
        <div>
          <div className="productDisplay-mainImg">
            <img src={singleProduct.img} />
          </div>
          <div className="productDisplay-subImgs">
            <div className="productDisplay-subImg">
              <img src={singleProduct.img} />
            </div>
            <div className="productDisplay-subImg">
              <img src={singleProduct.img} />
            </div>
            <div className="productDisplay-subImg">
              <img src={singleProduct.img} />
            </div>
            <div className="productDisplay-subImg">
              <img src={singleProduct.img} />
            </div>
          </div>
        </div>
        <div className="productDisplay-details">
          <div className="productDisplay-details1">
            <h3>
              {singleProduct.proName}
            </h3>
            <div className="productDisDet-price">{singleProduct.proPrice}</div>
            <div className="productDisDet-rating">
              <span>4</span>⭐
            </div>
            <span className="productDisDet-deliveryFee">Delivery ₹74</span>
          </div>
          <div className="productDisDet-cartBtn">
            <button>add cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
