// this is a server component for fetching products api
import Price from "./Price";
import "./products.css";

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

              {/* using client component inside a server component */}
              <Price title={"check price"} price={product?.price} />
              
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
