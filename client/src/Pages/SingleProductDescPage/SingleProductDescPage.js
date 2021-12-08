import * as React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
export default function SingleProductDescPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((data) => data.json())
      .then((data) => setProduct(data));
  }, [id]);

  console.log(id);
  console.log(product);

  return (
    <React.Fragment>
      <div>{product.title}</div>
    </React.Fragment>
  );
}
