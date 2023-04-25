import React from "react";
import Banner from "../Components/Banner";
import "../Styles/Contact.css";
import ContactCards from "../Components/ContactCards";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <Banner name="Contact Us" />
      <div className="contact-card-head">
        <ContactCards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
