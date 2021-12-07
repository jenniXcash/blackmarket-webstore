import "./Home.css";
import Header from "../../Header/Header";
import Products from "../../Products/Products";
import { useState, useEffect } from "react";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";
import RangeValueContext from "../../contexts/RangeValueContext";
import MinMaxPrices from "../../contexts/MinMaxPrices";

function Home() {
  const [itemInCart, setItemInCart] = useState({});

  const [productList, setProductList] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const res = fetch("http://localhost:8000/product");
    res
      .then(function (response) {
        return response.json();
      })
      .then(function (product) {
        setProductList(product);
      });
  });

  const priceArr = productList.map((e) => e.price);
  const maxPrice = Math.max(...priceArr);
  const minPrice = Math.min(...priceArr);

  const [rangeValue, setRangeValue] = useState([0, 1000]);

  function changeCurrentCategory(e) {
    setCurrentCategory(e.target.value);
  }

  return (
    <span>
      <ShoppingCartContext.Provider value={{ itemInCart, setItemInCart }}>
        <MinMaxPrices.Provider value={{ minPrice, maxPrice }}>
          <RangeValueContext.Provider value={{ rangeValue, setRangeValue }}>
            <Header
              products={productList}
              changeCurrentCategory={changeCurrentCategory}
            />
            <Products
              products={productList}
              currentCategory={currentCategory}
            />
          </RangeValueContext.Provider>
        </MinMaxPrices.Provider>
      </ShoppingCartContext.Provider>
    </span>
  );
}

export default Home;
