import React from "react";
import "../Styles/footer.css";
import logo from "../assets/Netflix_2015_logo.svg";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer-head">
      <div>
        <h3>Company</h3>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
          <li onClick={() => navigate("/movies")}>Movies</li>
        </ul>
      </div>
      <div>
        <h3>Top Categories</h3>
        <ul>
          <li>Action</li>
          <li>Romantic</li>
          <li>Drama</li>
          <li>Historical</li>
        </ul>
      </div>
      <div>
        <h3>My Account</h3>
        <ul>
          <li>Dashboard</li>
          <li>My Favorites</li>
          <li>Profile</li>
          <li>Change Password</li>
        </ul>
      </div>

      <div className="address-head-footer">
        <img src={logo} />
        <div className="address-para">
          <p>Lorem 196 Andrew Road,Suite 200,</p>
          <p>New York, NY 10007,</p>
          <p> Tell: +255 754 661 42</p>
          <p>Email: vigneshkalithas@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
