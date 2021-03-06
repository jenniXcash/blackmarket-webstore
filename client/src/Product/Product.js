import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react/cjs/react.development";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

import "./Product.css";

export default function Product({ title, price, image, id: _id }) {
  const { itemInCart, setItemInCart } = useContext(ShoppingCartContext);

  const [product, setProduct] = useState(0);

  useEffect(() => {
    if (product === 0) {
      delete itemInCart[_id];
    }
  });

  function addItem() {
    setProduct(product + 1);
    const currentProduct = itemInCart[_id] || {
      amount: product,
      title,
      price,
      image,
    };

    currentProduct.amount = currentProduct.amount + 1;
    setItemInCart({ ...itemInCart, [_id]: currentProduct });
  }
  function subtractItem() {
    if (product > 0) {
      const currentProduct = itemInCart[_id] || {
        amount: product,
        title,
        price,
        image,
      };
      setProduct(product - 1);
      currentProduct.amount = currentProduct.amount - 1;
      setItemInCart({ ...itemInCart, [_id]: currentProduct });
      // if (currentProduct.amount === 0) {
      //   delete itemInCart[id];
      // }
    }
  }
  function clearItemFromCart() {
    setProduct(0);
  }
  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/SingleProductDescPage/${_id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
      </div>
      <div className="productCardButtons">
        <button onClick={addItem}>+</button>
        {product > 0 && <span>{product}</span>}
        {product > 0 && <button onClick={subtractItem}>-</button>}
        {product > 0 && <button onClick={clearItemFromCart}>Clear</button>}
      </div>
    </div>
  );
}
