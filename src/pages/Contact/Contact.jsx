import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [userForm, setUserForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userForm);
    if (!userForm.name || !userForm.mobile || !userForm.message) {
      Toastify({
        text: "Please fill all the details",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        background: "red",
        stopOnFocus: true,
      }).showToast();
      return;
    } else {
      Toastify({
        text: "We received your message. Thank you.",
        duration: 5000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        background: "red",
        stopOnFocus: true,
      }).showToast();
      setUserForm({ name: "", mobile: "", message: "" });
    }
  };
  return (
    <div className={styles.contact}>
      <form>
        <p className={styles.head}>Contact us</p>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={userForm.name}
          onChange={(e) => {
            setUserForm({ ...userForm, name: e.target.value });
          }}
        />
        <label htmlFor="">Mobile Number</label>
        <input
          type="text"
          maxLength="10"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          name=""
          id=""
          placeholder="Enter your mobile number"
          value={userForm.mobile}
          onChange={(e) => {
            setUserForm({ ...userForm, mobile: e.target.value });
          }}
        />
        <label htmlFor="">Your message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your message"
          value={userForm.message}
          onChange={(e) => {
            setUserForm({ ...userForm, message: e.target.value });
          }}
        ></textarea>
        <input type="submit" value="Submit" onClick={formSubmitHandler} />
      </form>
    </div>
  );
};

export default Contact;
