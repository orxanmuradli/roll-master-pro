import React from "react";
import "./MenuList.css";
import { click } from "@testing-library/user-event/dist/click";




const ProductList = ({ products }) => {
  function on(){
    console.log("salam");
  document.querySelector(".overlay_effect").style.display = "block";
  

  }

  function off(){
    document.querySelector(".overlay_effect").style.display = "none";
    
  
    }
  document.querySelector(".special-trigger-cards")?.addEventListener("click", ()  => {
    on ();

  })
  return (

     
    <div className="productCart ">

      {products.map((product) => (
        <div  key={product.id} className="special-trigger-cards">
          <div className="trigger-card">
            <div className="overlay_effect">

          
            </div>
            <img src={product.image} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.comp}</p>
              <span>{product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
