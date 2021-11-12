import "./App.css";
import Header from "./Header/Header";
import Products from "./Products/Products";
import { useState, useEffect } from "react";
import ShoppingCartContext from "./contexts/ShoppingCartContext";
import RangeValueContext from "./contexts/RangeValueContext";

function App() {
  const [itemInCart, setItemInCart] = useState({});

  const [productList, setProductList] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("");

  const [rangeValue, setRangeValue] = useState([]);

  useEffect(() => {
    const res = fetch("https://fakestoreapi.com/products");
    res
      .then(function (response) {
        return response.json();
      })
      .then(function (product) {
        setProductList(product);
      });
  });
  function changeCurrentCategory(e) {
    setCurrentCategory(e.target.value);
  }

  return (
    <span>
      <ShoppingCartContext.Provider value={{ itemInCart, setItemInCart }}>
        <RangeValueContext.Provider value={(rangeValue, setRangeValue)}>
          <Header
            products={productList}
            changeCurrentCategory={changeCurrentCategory}
          />
          <Products products={productList} currentCategory={currentCategory} />
        </RangeValueContext.Provider>
      </ShoppingCartContext.Provider>
    </span>
  );
}

export default App;
