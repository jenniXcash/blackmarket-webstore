import "./Products.css";
import Product from "../Product/Product";

export default function Products(props) {
  return (
    <section className="products">
      {props.products.map(({ id, title, description, image, price }) => (
        <Product
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
          alt=""
          price={price}
        />
      ))}
    </section>
  );
}
