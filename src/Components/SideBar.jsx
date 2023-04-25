import React from "react";
// import "../styles/sidebar.css";
import "../Styles/Navbar.css";
import { IoClose } from "react-icons/io5";

function Sidebar() {
  const closesidebar = () => {
    document.querySelector(".sidebar-container").classList.toggle("hidden");
  };
  const scroll = (id) => {
    closesidebar();
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className="sidebar-container hidden">
        <div className="close-btn" onClick={closesidebar}>
          <IoClose />
        </div>
        <div className="sidebarList">
          <ul>
            <li onClick={() => scroll("#about")}>About</li>
            <li onClick={() => scroll("#portfolio")}>Portfolio</li>
            <li onClick={() => scroll("#contact")}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
