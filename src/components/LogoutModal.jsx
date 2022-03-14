import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";

const LogoutModal = () => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "300px",
    },
  };
  useEffect(() => {}, []);
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const logoutHandler = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    navigate("/");
  };
  return (
    <div>
      <Link
        to="#"
        onClick={openModal}
        // style={{
        //   padding: "5px 20px",
        //   background: "#3b3768",
        //   border: "none",
        //   cursor: "pointer",
        //   color: "white",
        // }}
      >
        Logout
      </Link>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            zIndex: "1000",
          }}
        >
          <p style={{ fontSize: "20px", textAlign: "center" }}>
            Are you sure you want to logout ?
          </p>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}
          >
            <button
              onClick={closeModal}
              style={{
                padding: "5px 20px",
                background: "tomato",
                border: "none",
                cursor: "pointer",
                color: "white",
              }}
            >
              Cancel
            </button>
            <button
              onClick={logoutHandler}
              style={{
                padding: "5px 20px",
                background: "#3b3768",
                border: "none",
                cursor: "pointer",
                color: "white",
              }}
            >
              Logout
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default LogoutModal;
