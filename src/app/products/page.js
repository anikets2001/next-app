// this is a server component for fetching products api
import Price from "./Price";
import "./products.css";
import style from "./product.module.css";

export function generateMetadata(){
  return {
    title: 'Products List',
    description: 'server side products list '
  }
}

const apiUrl = "https://dummyjson.com/products?limit=50";

async function Products() {
  const response = await fetch(apiUrl);
  const json = await response.json();
  return json.products;
}

export default async function page() {
  const products = await Products();

  return (
    <div className={style.productsWrapper}>
      <h1>Products List ({products.length})</h1>
      <div className={style.cardWrapper}>
        {products.map((product) => (
          <div key={product?.id} className={style.productCard}>
            <div className={style.cardHeadingWrapper}>
              <p>Title: {product?.title}</p>

              {/* using client component inside a server component */}
              <Price title={"check price"} price={product?.price} />
            </div>
            <div className={style.imageWrapper}>
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