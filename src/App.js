import "./App.css";
import Header from "./Header/Header";
import Products from "./Products/Products";
import { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ShoppingCartContext from "./contexts/ShoppingCartContext";

function App() {
  const [itemInCart, setItemInCart] = useState({});

  const [productList, setProductList] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("");

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
        <Header
          products={productList}
          changeCurrentCategory={changeCurrentCategory}
        />

        <Products products={productList} currentCategory={currentCategory} />
      </ShoppingCartContext.Provider>
    </span>
  );
}

export default App;
