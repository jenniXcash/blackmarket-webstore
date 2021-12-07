import React from "react";
import "./Products.css";
import { useContext } from "react";
import Product from "../Product/Product";
import RangeValueContext from "../contexts/RangeValueContext";
import MinMaxPrices from "../contexts/MinMaxPrices";

export default function Products(props) {
  const { rangeValue, setRangeValue } = useContext(RangeValueContext);
  const { minPrice, maxPrice } = useContext(MinMaxPrices);
  let selectedItems = props.products.filter((e) => {
    return (
      (e.category === props.currentCategory || !props.currentCategory) &&
      e.price >= rangeValue[0] &&
      e.price <= rangeValue[1]
    );
  });
  return (
    <section className="products">
      {selectedItems.map(
        ({ _id, title, description, image, price, category }) => (
          <Product
            key={_id}
            id={_id}
            title={title}
            description={description}
            image={image}
            alt=""
            price={price}
            products={props.products}
            category={category}
          />
        )
      )}
    </section>
  );
}
