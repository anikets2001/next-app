/*---
For fetching data in client component

step1: create a folder
step2: create page.js 
step3: "use client"
step4: import useState and useEffect
step5: fetch data in a async method
step6: fetch data in useEffect with empty dependency array
step7: set that data inside a state
step8: render the list of data(product) on the ui

Example:
"use client";
import "./productsList.css";
import { useState, useEffect } from "react";
import React from "react";

const apiUrl = "https://dummyjson.com/products?limit=50";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(apiUrl);
    const json = await response.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-wrapper">
      <h1>Products List ({products.length})</h1>
      <div className="card-wrapper">
        {products.map((product) => (
          <div key={product?.id} className="product-card">
            <div className="card-heading-wrapper">
              <p>Title: {product?.title}</p>
              <p>Price: {product?.price}</p>
            </div>
            <div className="image-wrapper">
              <img src={product?.thumbnail} alt={product?.title} />
            </div>
            <div>
              <p>Description: {product?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


---*/


/*---
For fetching data inside a server component
step1: create a folder
step2: create page.js 
step3: "use client"
step4: create a async function to fetch data
step5: call that function inside server component with await
step6: render the data on ui

Example:
// this is a server component for fetching products api
import './products.css'

const apiUrl = "https://dummyjson.com/products?limit=50";

async function Products() {
  const response = await fetch(apiUrl);
  const json = await response.json();
  return json.products;
}

export default async function page() {
  const products = await Products();

  return (
    <div className="products-wrapper">
      <h1>Products List ({products.length})</h1>
      <div className="card-wrapper">
        {products.map((product) => (
          <div key={product?.id} className="product-card">
            <div className="card-heading-wrapper">
              <p>Title: {product?.title}</p>
              <p>Price: {product?.price}</p>
            </div>
            <div className="image-wrapper">
              <img src={product?.thumbnail} alt={product?.title} />
            </div>
            <div>
              <p>Description: {product?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

---*/