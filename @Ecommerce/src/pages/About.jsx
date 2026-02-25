import React from "react";

function About() {
  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
          margin:0;
          padding:0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body{
          background:#ffffff;
        }

        .about-page{
          width:100%;
          color:#111;
        }

        /* HERO */

        .about-hero{
          min-height:60vh;
          background:
            linear-gradient(
              rgba(19,25,33,0.85),
              rgba(19,25,33,0.85)
            ),
            url("https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80")
            center/cover no-repeat;

          display:flex;
          align-items:center;
          justify-content:center;
          padding:70px 20px;
          text-align:center;
          color:white;
        }

        .hero-content{
          max-width:900px;
        }

        .hero-content h1{
          font-size:44px;
          margin-bottom:16px;
          font-weight:700;
          letter-spacing:0.5px;
        }

        .hero-content p{
          font-size:17px;
          line-height:1.7;
          color:#f1f1f1;
        }

        /* COMMON SECTION */

        .about-section{
          padding:90px 10%;
          display:flex;
          align-items:center;
          gap:60px;
        }

        .about-section.reverse{
          flex-direction:row-reverse;
        }

        .about-image{
          flex:1;
          height:320px;
          border-radius:14px;
          background-size:cover;
          background-position:center;
          box-shadow:0 10px 25px rgba(0,0,0,0.15);
        }

        .img-vision{
          background-image:url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80");
        }

        .img-mission{
          background-image:url("https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80");
        }

        .about-text{
          flex:1;
        }

        .about-text h2{
          font-size:32px;
          margin-bottom:14px;
          color:#111;
        }

        .about-text p{
          font-size:15.5px;
          line-height:1.8;
          color:#555;
        }

        /* VALUES */

        .values{
          padding:90px 10%;
          background:#f8f9fa;
          text-align:center;
        }

        .values h2{
          font-size:32px;
          margin-bottom:40px;
          color:#111;
        }

        .value-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:28px;
        }

        .value-card{
          background:white;
          padding:28px;
          border-radius:14px;
          text-align:left;
          box-shadow:0 8px 24px rgba(0,0,0,0.08);
        }

        .value-card h4{
          margin-bottom:10px;
          font-size:18px;
          color:#111;
        }

        .value-card p{
          font-size:14.5px;
          color:#555;
          line-height:1.7;
        }

        /* CTA */

        .about-cta{
          background:#131921;
          color:white;
          padding:80px 20px;
          text-align:center;
        }

        .about-cta h2{
          font-size:34px;
          margin-bottom:14px;
        }

        .about-cta p{
          color:#dcdcdc;
          margin-bottom:26px;
          font-size:15.5px;
        }

        .about-cta button{
          padding:12px 32px;
          background:#ff9900;
          border:none;
          border-radius:24px;
          font-weight:600;
          cursor:pointer;
          font-size:15px;
        }

        .about-cta button:hover{
          background:#f08c00;
        }

        /* RESPONSIVE */

        @media(max-width:900px){

          .about-section,
          .about-section.reverse{
            flex-direction:column;
            padding:60px 8%;
          }

          .hero-content h1{
            font-size:32px;
          }

          .about-text h2{
            font-size:26px;
          }

        }
      `}</style>

      <div className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About Our E-Commerce Platform</h1>
            <p>
              We are building a modern, customer-first online shopping platform
              inspired by global e-commerce leaders. Our focus is to make product
              discovery, ordering, payments and delivery simple, secure and
              reliable for every customer.
            </p>
          </div>
        </section>

        {/* VISION */}
        <section className="about-section">
          <div className="about-image img-vision"></div>
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>
              Our vision is to create a trusted digital marketplace where
              customers can confidently shop for quality products and sellers
              can grow their businesses using powerful digital tools and
              technology-driven insights.
            </p>
          </div>
        </section>

        {/* MISSION */}
        <section className="about-section reverse">
          <div className="about-image img-mission"></div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver a seamless and scalable e-commerce
              experience by combining secure online payments, real-time
              inventory management, intelligent search and reliable order
              processing systems.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="values">
          <h2>What Drives Our Platform</h2>

          <div className="value-grid">

            <div className="value-card">
              <h4>Customer Obsession</h4>
              <p>
                Every feature is designed by deeply understanding customer
                needs and continuously improving the shopping journey.
              </p>
            </div>

            <div className="value-card">
              <h4>Operational Excellence</h4>
              <p>
                We build highly available systems that ensure fast browsing,
                reliable checkout and smooth order fulfillment.
              </p>
            </div>

            <div className="value-card">
              <h4>Trust and Security</h4>
              <p>
                User privacy, secure payments and data protection are core to
                our platform architecture and operations.
              </p>
            </div>

            <div className="value-card">
              <h4>Seller Empowerment</h4>
              <p>
                We provide sellers with analytics, inventory tools and order
                automation to help them scale their businesses efficiently.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2>Begin Your Shopping Experience</h2>
          <p>
            Discover quality products, trusted sellers and a faster way to shop
            online with our secure and user-friendly marketplace.
          </p>
          <button>Explore Marketplace</button>
        </section>

      </div>
    </>
  );
}

export default About;
