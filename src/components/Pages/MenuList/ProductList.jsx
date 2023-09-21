import React from "react";
import "./MenuList.css";
import { useState } from "react";
import "./ProductList.css";

const ProductList = ({ products }) => {
  function on() {
    console.log("salam");
    document.querySelector(".overlay_effect").style.display = "block";
  }

  function off() {
    document.querySelector(".overlay_effect").style.display = "none";
  }
  document
    .querySelector(".special-trigger-cards")
    ?.addEventListener("click", () => {
      on();
    });
  const [status, setStatus] = useState(false);
  const [indexs, setIndexs] = useState(null);
  function handleClick(e) {
    console.log(e);
    console.log("click");
    setIndexs(e);
    setStatus(() => !status);
    document.body.style.overflowY = status ? "auto" : "hidden";
  }
  return (
    <div className="productCart ">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="special-trigger-cards"
          onClick={() => handleClick(index)}
        >
          <div className="trigger-card">
            <div className="overlay_effect"></div>
            <img src={product.image} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.comp}</p>
              <span>{product.price}</span>
            </div>
          </div>
          <div
            className={`${
              index === indexs
                ? status
                  ? "activeMenu"
                  : "noneMenu"
                : "noneMenu"
            } menuOpen`}
          >
            {index === indexs && status && <div className="overlay"></div>}
            <div className="menuItem">
              <div className="Filadelifia_item">
                <img src={product.image} alt="" />

                <div className="item_content">
                  <span className="Filadelifia-menu">
                    <div className="item_product"> {product.title}</div>

                    <h2>54 ƏDƏD</h2>

                    <p>Tərkibi:</p>
                    <p>Filadelfia layt - 8 əd</p>
                    <p> Kaliforniya Krab - 8 əd</p>
                    <p>Akado - 8 əd</p>
                    <p>Amerika hot - 10 əd</p>
                    <p>Salmon hot - 10 əd</p>
                    <p> Salmon Maki Baked - 10 əd</p>
                    <br />

                    <div className="next_product">
                      <div> Daxildir</div>
                      <div>
                        {" "}
                        1 soya sous-50 ml, 1 zəncəfil-30 gr, 1 wasabi-30 gr
                      </div>
                    </div>
                  </span>
                  <div className="item_money">
                    <p>32 AZN</p>
                  </div>
                  <div className="menulist_Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.187 27.9548C26.6752 28.443 27.4667 28.443 27.9547 27.9548C28.4428 27.4667 28.4428 26.6753 27.9547 26.1872L21.7677 20L27.9547 13.8128C28.4428 13.3247 28.4428 12.5332 27.9547 12.0451C27.4665 11.5569 26.6752 11.5569 26.187 12.0451L19.9998 18.2322L13.8126 12.045C13.3245 11.5568 12.533 11.5568 12.0448 12.045C11.5567 12.5331 11.5567 13.3246 12.0448 13.8127L18.232 20L12.0448 26.1872C11.5567 26.6753 11.5567 27.4668 12.0448 27.955C12.533 28.4432 13.3244 28.4432 13.8126 27.955L19.9998 21.7677L26.187 27.9548Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
