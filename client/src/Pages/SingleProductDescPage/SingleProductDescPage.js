import * as React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
export default function SingleProductDescPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const res = fetch(`http://localhost:8000/product/:${id}`);
    res
      .then(function (response) {
        return response.json();
      })
      .then(function (product) {
        setProduct(product);
      });
  }, [id]);
  console.log(id);
  return (
    <React.Fragment>
      <div>bla bla</div>
    </React.Fragment>
  );
}
