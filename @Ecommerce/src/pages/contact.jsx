import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    orderId: "",
    email: "",
    phone: "",
    issueType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted successfully!");
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        
        {/* Left Side - Ecommerce Support Info */}
        <div style={styles.leftSection}>
          <h2>Customer Support</h2>
          <p style={styles.desc}>
            Need help with your order or product? Our eCommerce support team is here for you.
          </p>

          <div style={styles.infoBox}>
            <h4>📦 Order & Delivery Support</h4>
            <p>Track orders, delivery updates, and shipping queries.</p>
          </div>

          <div style={styles.infoBox}>
            <h4>🔁 Returns & Refunds</h4>
            <p>Easy returns within 7 days of delivery.</p>
          </div>

          <div style={styles.infoBox}>
            <h4>💳 Payment Issues</h4>
            <p>Help with UPI, Card payments, EMI & Wallet transactions.</p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p><strong>Email:</strong> support@shopeasy.com</p>
            <p><strong>Helpline:</strong> +91 98765 43210</p>
            <p><strong>Working Hours:</strong> 9 AM – 9 PM (Mon–Sun)</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div style={styles.rightSection}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>

            <div style={styles.row}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <input
              type="text"
              name="orderId"
              placeholder="Order ID (Optional)"
              value={formData.orderId}
              onChange={handleChange}
              style={styles.fullInput}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.fullInput}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={styles.fullInput}
            />

            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              required
              style={styles.fullInput}
            >
              <option value="">Select Issue Type</option>
              <option value="order">Order Related</option>
              <option value="return">Return / Refund</option>
              <option value="payment">Payment Issue</option>
              <option value="product">Product Inquiry</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your issue..."
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              Submit Request
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "Arial",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1100px",
    width: "100%",
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  leftSection: {
    flex: "1",
    padding: "40px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
  },
  rightSection: {
    flex: "1",
    padding: "40px",
    backgroundColor: "#111827",
    color: "white",
  },
  row: {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #374151",
    backgroundColor: "#1f2937",
    color: "white",
  },
  fullInput: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #374151",
    backgroundColor: "#1f2937",
    color: "white",
    marginBottom: "15px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #374151",
    backgroundColor: "#1f2937",
    color: "white",
    marginBottom: "20px",
    height: "100px",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  infoBox: {
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "15px",
  },
  desc: {
    marginBottom: "20px",
  },
};
export default Contact;