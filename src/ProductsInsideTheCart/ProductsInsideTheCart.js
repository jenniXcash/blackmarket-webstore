import React from "react";
import "./ProductsInsideTheCart.css";
import { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

export default function ProductsInsideTheCart({ amount, title, price, image }) {
  const { itemInCart, setItemInCart } = useContext(ShoppingCartContext);

  return (
    <React.Fragment>
      {amount > 0 && (
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
