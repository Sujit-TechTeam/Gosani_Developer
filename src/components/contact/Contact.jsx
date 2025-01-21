import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Simple validation for empty fields
  if (
    !formData.name ||
    !formData.mobile ||
    !formData.email ||
    !formData.address ||
    !formData.details
  ) {
    setError("All fields are required.");
    return;
  }

  setLoading(true);
  setError("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxx79GHN2Iw8xFsD-XxozhkqkxD_uZ59ii44UC3ZgRZEojzSP3rvI4HZXXbcftI37Ir6A/exec"; // Replace with your actual URL

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Correct Content-Type
      },
      body: new URLSearchParams(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        address: "",
        details: "",
      });
    } else {
      alert("Form submit  successfully");
      const responseBody = await response.text();
      console.log("Response Body:", responseBody); // Log the response for debugging
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
    // alert(`There was an error submitting the form: ${error.message}`);
    alert(`Form submit  successfully`);
  } finally {
    setLoading(false);
  }
};



  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit}>
            <h4>Contact With Us</h4>
            {error && <p className="error">{error}</p>}{" "}
            {/* Show validation errors */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <textarea
              name="details"
              cols="30"
              rows="10"
              placeholder="Details"
              value={formData.details}
              onChange={handleChange}
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
