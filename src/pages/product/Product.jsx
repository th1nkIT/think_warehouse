import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Bar from "../../partials/Bar";
import productService from "../../../services/productService"; // import productService here

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    productService
      .getProductFilter(isFiltered, search)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // Name Bar Start
    const root = ReactDOM.createRoot(document.getElementById("bar"));
    root.render(
      <React.StrictMode>
        <Bar nameBar={"Product Page"} />
      </React.StrictMode>
    );
    // Name Bar End
  }, [isFiltered, search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setIsFiltered(true);
  };

  return (
    <>
      <section className="content">
        <h1>Master Data Product</h1>
        {/* Tampilkan produk */}
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.profile_picture_image_url} alt={product.name} />
            <p>Status: {product.status}</p>
            <p>Dibuat oleh: {product.created_by.name}</p>
          </div>
        ))}
        {/* Input pencarian */}
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Cari produk..."
        />
      </section>
    </>
  );
}
