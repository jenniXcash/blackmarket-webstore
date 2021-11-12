import React from "react";
import "./Products.css";
import { useContext } from "react";
import Product from "../Product/Product";
import RangeValueContext from "../contexts/RangeValueContext";

export default function Products(props) {
  const { rangeValue, setRangeValue } = useContext(RangeValueContext);

  let selectedItems = props.products.filter((e) => {
    return e.category === props.currentCategory || !props.currentCategory;
  });

  return (
    <section className="products">
      {selectedItems.map(
        ({ id, title, description, image, price, category }) => (
          <Product
            key={id}
            id={id}
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
