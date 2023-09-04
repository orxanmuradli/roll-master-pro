import React from "react";
import "./menu.styles.css";

const ProductSlider = ({ products }) => {
  return (
    <div className="productsContainer">
      {/* Render products based on the 'products' prop */}
      {products.map((product, index) => (
        <div className="productData" key={index}>
          <div className="productsHeader">
            <h2>{product.generalTitle}</h2>
          </div>
          <div className="product">
            <div className="productImg">
              <img src={product.image} alt="product" />
            </div>
            <h3 className="productTitle">{product.title}</h3>
            <div className="productComp">{product.comp}</div>
            <div className="productPrice">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
