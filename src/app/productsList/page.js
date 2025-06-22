// this is a server component for fetching products api

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
