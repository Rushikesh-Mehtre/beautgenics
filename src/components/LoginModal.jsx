import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
const LoginModal = (props) => {
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
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    Toastify({
      text: "username-admin and password-admin",
      duration: 5000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "center",
      backgroundColor: "#3b3768",
      stopOnFocus: true,
    }).showToast();
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    if (!username || !password) {
      Toastify({
        text: "Please enter username and password",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: " #ff3333",
        stopOnFocus: true,
      }).showToast();
      return;
    } else if (username !== "admin" || password !== "admin") {
      Toastify({
        text: "Oops ! incorrect username or password.",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: "#ff3333",
        stopOnFocus: true,
      }).showToast();
      setUsername("");
      setPassword("");
      return;
    } else {
      sessionStorage.setItem("username", "admin");
      sessionStorage.setItem("password", "admin");
      props.onclick(true);
    }
  };
  const forgotPasswordHandler = () => {
    Toastify({
      text: "username-admin and password-admin",
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "center",
      backgroundColor: "#3b3768",
      stopOnFocus: true,
    }).showToast();
  };
  return (
    <div>
      <button
        onClick={openModal}
        style={{
          padding: "5px 35px",
          background: "#3b3768",
          border: "none",
          cursor: "pointer",
          color: "white",
          fontSize: "17px",
        }}
      >
        Login
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <form
          action=""
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <p style={{ fontSize: "20px", textAlign: "center" }}>
            Login to continue
          </p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              borde: "1px solid black",
              height: "25px",
              paddingLeft: "5px",
              outline: "none",
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              borde: "1px solid black",
              height: "25px",
              paddingLeft: "5px",
              outline: "none",
            }}
          />
          <input
            type="submit"
            value="Continue"
            style={{
              height: "25px",
              cursor: "pointer",
              background: "#3b3768",
              border: "none",
              color: "white",
            }}
            onClick={loginHandler}
          />
          <span
            style={{
              fontSize: "12px",
              alignSelf: "flex-end",
              cursor: "pointer",
              width: "fit-content",
            }}
            onClick={forgotPasswordHandler}
          >
            Forgot password ?{" "}
          </span>
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;
