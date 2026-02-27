import React from "react";
import "./Home.css";

const Home = () => {

  const products = [
    {
      id: 1,
      name: "MacBook Pro M3",
      price: "₹1,45,000",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 2,
      name: "Premium Wireless Headphones",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 3,
      name: "Smart Watch Series X",
      price: "₹5,499",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    },
  ];

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Let Buy</h1>
          <h2>India’s Smartest Electronics Destination</h2>
          <p>
            Discover next-generation gadgets, premium electronics, and
            unbeatable deals — all in one place.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Explore Products</button>
            <button className="secondary-btn">View Deals</button>
          </div>
        </div>
      </section>

      {/* BRAND INTRO SECTION */}
      <section className="brand-section">
        <h2>Why Choose Let Buy?</h2>
        <p>
          At Let Buy, we combine technology, trust, and top quality to deliver
          the best electronic shopping experience. We focus on premium
          products, fast delivery, and customer satisfaction.
        </p>

        <div className="brand-highlights">
          <div className="highlight-card">
            <h3>🚀 Fast Shipping</h3>
            <p>Delivered to your doorstep quickly and safely.</p>
          </div>
          <div className="highlight-card">
            <h3>🔒 Secure Checkout</h3>
            <p>Protected payment gateway & data security.</p>
          </div>
          <div className="highlight-card">
            <h3>⭐ Top Rated Products</h3>
            <p>Handpicked electronics with best reviews.</p>
          </div>
          <div className="highlight-card">
            <h3>💰 Best Price Guarantee</h3>
            <p>Premium quality at unbeatable prices.</p>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="product-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO SECTION */}
      <section className="promo">
        <h2>🔥 Exclusive Weekend Sale</h2>
        <p>Up to 50% OFF on selected electronics</p>
        <button className="primary-btn">Shop Now</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Let Buy | Designed for Smart Shopping</p>
      </footer>

    </div>
  );
};

export default Home;