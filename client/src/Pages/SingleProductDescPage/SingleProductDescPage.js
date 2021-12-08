import * as React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
export default function SingleProductDescPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [id]);
  console.log(product);

  return (
    <React.Fragment>{product && <div>{product.title}</div>}</React.Fragment>
  );
}
