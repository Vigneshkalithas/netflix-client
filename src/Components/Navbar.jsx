import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/Netflix_2015_logo.svg";
import { TbUser } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { RiCloseCircleLine } from "react-icons/ri";
import { Config } from "../Config/Config";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Navbar() {
  const navigate = useNavigate();
  const [visible, SetVisible] = useState(false);
  const [rol, SetRol] = useState();
  useEffect(() => {
    const ROLE = localStorage.getItem("role");
    SetRol(ROLE);

    if (ROLE == "admin") {
      SetVisible(true);
    }
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const focusInput = () => {
  //   document.querySelector(".sidebar-container").classList.toggle("hidden");
  // };

  const Logout = async () => {
    try {
      // const token = localStorage.getItem("token");
      // const result = await axios.post(`${Config.api}/user/logout`, {
      // token,
      // });
      localStorage.clear();
      // toast.success(result.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {" "}
      <div className="navbar-head">
        <div className="logo-head">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
        </div>
        <div className="nav-lists">
          <ul>
            <li onClick={() => navigate("/movies")}>Movies</li>
            <li onClick={() => navigate("/about")}>About us</li>
            <li onClick={() => navigate("/contact")}>Contact us</li>
            {visible ? (
              <li onClick={() => navigate("/analytics")}>Analytics</li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="signin-head" onClick={openModal}>
          {/* <button>SIGN IN</button> */}
          <TbUser />
        </div>
        {/* <div className="bar-head" onClick={focusInput}> */}
        <div className="bar-head">
          <FaBars className="bar" />
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-head">
            <h2>Hello</h2>
            <h2>{rol}</h2>
          </div>
          <div className="close-btn-modal" onClick={closeModal}>
            <span>
              <RiCloseCircleLine />
            </span>
          </div>

          <div className="logout-btn-modal">
            <button onClick={Logout}>LOGOUT</button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Navbar;
