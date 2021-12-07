import react from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import "./Header.css";
import logo from "./shoppingCart.svg";
import { useState, useContext } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import RangeValueContext from "../contexts/RangeValueContext";

export default function Header(props) {
  //Using the state and toggleCart to control wether the shopping cart is open or closed
  const [cartState, setCart] = useState(false);

  const { valueRange, setValueRange } = useContext(RangeValueContext);

  function toggleCart() {
    setCart(!cartState);
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
        <RangeSlider products={props.products} />
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
          src={logo}
          alt="shopping cart"
          style={{ cursor: "pointer" }}
          onClick={toggleCart}
          height="50px"
          width="50px"
        />
      </nav>
    </react.Fragment>
  );
}
