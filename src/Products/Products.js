import "./Products.css";
import Product from "../Product/Product";

export default function Products(props) {
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
