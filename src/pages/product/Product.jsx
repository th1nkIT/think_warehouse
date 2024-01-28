import { useEffect, useState } from "react";
import Bar from "../../partials/Bar";
import productService from "../../../services/productService";
import "../../assets/css/partials/Product.css";
import AddButton from "../../partials/Button";
import Filter from "../../partials/Filter";
import SearchBarButton from "../../partials/Searchbar";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getProductFilter(
          isFiltered,
          search
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, [isFiltered, search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setIsFiltered(true);
  };

  const handleAddProduct = () => {
    // Tambahkan logika yang diinginkan ketika tombol ditekan
    console.log("Button ditekan");
  };

  return (
    <>
      <section className="content">
        {/* Name Bar */}
        <h1>Product</h1>
        <div id="bar">
          <Bar nameBar={"Home > Product"} />
        </div>
        <div className="product-box">
          <AddButton text="+ Add Products" onClick={handleAddProduct} />
          <Filter text="Filter" />
          {/* Input pencarian */}
          <SearchBarButton
            value={search}
            onChange={handleSearch}
            placeholder="Cari produk..."
          />
          {/* Tampilkan produk */}
          {products.map((product, index) => (
            <div key={index}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <img src={product.profile_picture_image_url} alt={product.name} />
              <div
                className={
                  product.status === "active"
                    ? "status-active"
                    : "status-inactive"
                }
              >
                <div className="status-name">{product.status}</div>
              </div>
              <p>Dibuat oleh: {product.created_by.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
