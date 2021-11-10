import React from "react";
import "./ProductsInsideTheCart.css";

export default function ProductsInsideTheCart({ amount, title, price, image }) {
  return (
    <React.Fragment>
      {amount && (
        <section>
          <img
            className="shoppingCartImg"
            src={image}
            alt=""
            width="50"
            width="50"
          />
          <h5>{title}</h5>
          <h6>{price}$</h6>
          <h6>{amount}</h6>
          <div className="blackLIne"></div>
        </section>
      )}
    </React.Fragment>
  );
}
