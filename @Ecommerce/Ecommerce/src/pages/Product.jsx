import React from "react";
import "./Product.css";

const products = [
  { id: 1, name: "Wireless Headphone", price: 2999, oldPrice: 3999, image: "/images/p1.jpg" },
  { id: 2, name: "Smart Watch", price: 4999, oldPrice: 6999, image: "/images/p2.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 1999, oldPrice: 2999, image: "/images/p3.jpg" },
  { id: 4, name: "Gaming Mouse", price: 1499, oldPrice: 2499, image: "/images/p4.jpg" },
  { id: 5, name: "Laptop Stand", price: 999, oldPrice: 1599, image: "/images/p5.jpg" },
  { id: 6, name: "CCTV Camera", price: 3500, oldPrice: 4500, image: "/images/p6.jpg" },
  { id: 7, name: "TWS Earbuds", price: 2499, oldPrice: 3499, image: "/images/p7.jpg" },
  { id: 8, name: "Robot Cleaner", price: 5999, oldPrice: 7999, image: "/images/p8.jpg" },
  {id: 9, name: "Portable Charger", price: 599, oldPrice: 799, image: "/images/p9.jpg"},
  {id: 10, name: "RGB Keyboard", price: 3999, oldPrice: 4999, image: "/images/p10.jpg"}

];

function Product() {
  return (
    <div className="page">

      {/* HEADER */}
      <header className="header">
        <div className="logo">Let Buy</div>

        <div className="search">
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="nav">
          <span>Home</span>
          <span>About</span>
          <span>Product</span>
          <span>Contact</span>
        </div>
      </header>

      {/* TITLE */}
      <h2 className="page-title">Trending Products</h2>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>

            <div className="badge">SALE</div>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <div className="rating">⭐⭐⭐⭐☆</div>

            <div className="price-section">
              <span className="price">₹{item.price}</span>
              <span className="old-price">₹{item.oldPrice}</span>
            </div>

            <button className="btn">Add to Cart</button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Product;