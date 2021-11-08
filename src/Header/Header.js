import react from "react";
import "./Header.css";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Header(props) {
  const [cartState, setCart] = useState(false);

  function toggleCart() {
    setCart(!cartState);
    console.log(cartState);
  }

  const products = [...props.products];
  const categories = products
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    <react.Fragment>
      {cartState && <ShoppingCart toggleCart={setCart} cartState={cartState} />}
      <nav className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>

            <select
              onChange={(e) => {
                props.changeCurrentCategory(e);
              }}
            >
              <option key={"all"} value={""}>
                All
              </option>
              {categories.map((category, index) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>
        </div>
        <img
          className="shoppingCartIcon"
          src="./shoppingCart.svg"
          alt="shopping cart"
          style={{ cursor: "pointer" }}
          onClick={toggleCart}
        />
      </nav>
    </react.Fragment>
  );
}
