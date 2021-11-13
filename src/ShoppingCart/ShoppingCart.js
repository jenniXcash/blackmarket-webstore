import React, { useEffect } from "react";
import "./ShoppingCart.css";
import { useState, useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import ProductsInsideTheCart from "../ProductsInsideTheCart/ProductsInsideTheCart";

export default function ShoppingCart({ toggleCart, cartState }) {
  const [total, setTotal] = useState(0);

  const { itemInCart, setItemInCart } = useContext(ShoppingCartContext);

  const getTotal = () => {
    return Object.entries(itemInCart).reduce((acc, item) => {
      const amount = item[1].amount;
      return acc + amount;
    }, 0);
  };

  useEffect(() => {
    setTotal(getTotal());
  }, [itemInCart]);

  function closeCart() {
    toggleCart(!cartState);
  }
  let totalCost = 0;
  for (let key in itemInCart) {
    totalCost += itemInCart[key].price * itemInCart[key].amount;
  }

  const clearCart = () => {
    setItemInCart({});
    console.log(itemInCart);
  };

  return (
    <React.Fragment>
      <div className="shoppingCartDiv">
        <div
          className="clossingX"
          onClick={closeCart}
          style={{ cursor: "pointer" }}
        >
          X
        </div>
        <h1>
          {" "}
          Your total cost: <u>{totalCost.toFixed(2)}$</u>
        </h1>
        <div>Number of items: {total}</div>
        {itemInCart && (
          <button className="resetCart" onClick={clearCart}>
            Empty cart
          </button>
        )}
        <div className="itemsInTheCart">
          {Object.keys(itemInCart).map((key) => (
            <ProductsInsideTheCart
              key={key}
              title={itemInCart[key].title}
              image={itemInCart[key].image}
              price={itemInCart[key].price}
              amount={itemInCart[key].amount}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
