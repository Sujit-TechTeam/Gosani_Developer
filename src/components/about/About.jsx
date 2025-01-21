import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Welcome to Gosain Developers, a trusted name in the real estate
              industry with over 15 years of expertise. Founded on the
              principles of integrity, excellence, and customer satisfaction, we
              have built a legacy of delivering premium real estate solutions
              tailored to the needs of our clients.
              <br></br>
              <h3>Our Services:</h3>
              <b>Home Rentals:</b> Find your perfect home with our curated
              selection of rental properties that fit every budget and
              lifestyle.<br></br>
              <b>Apartments</b>: We offer modern, well-designed apartments that
              ensure comfort and convenience for your family.<br></br>
              <b> Land Buying and Selling</b>: Whether you’re looking to invest
              in land or sell your property, our experienced team ensures smooth
              and profitable transactions.
              <br></br>
              <br></br>
              At the helm of our operations is Mr. Sujit Dash, our esteemed
              Managing Director, whose vision and leadership have been
              instrumental in shaping Gosain Developers into a reliable and
              customer-focused enterprise.
            </p>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About
