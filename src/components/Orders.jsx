import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Orders.module.scss";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
const Orders = () => {
  const viewAllHandler = () => {
    Toastify({
      text: "To be updated soon.",
      duration: 5000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "center",
      background: "red",
      stopOnFocus: true,
    }).showToast();
  };
  return (
    <div className={styles.orders}>
      <div className={styles.header}>
        <p className={styles.head}>Last 10 orders delivered.</p>
        <Link to="#" onClick={viewAllHandler}>
          View All
        </Link>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Date</th>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Rating</th>
              <th>Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐</td>
              <td>COD</td>
            </tr>
            <tr>
              <td>2</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>UPI</td>
            </tr>
            <tr>
              <td>3</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>Internet Banking</td>
            </tr>
            <tr>
              <td>4</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>UPI</td>
            </tr>
            <tr>
              <td>5</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>COD</td>
            </tr>
            <tr>
              <td>6</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>COD</td>
            </tr>
            <tr>
              <td>7</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>Internet Banking</td>
            </tr>
            <tr>
              <td>8</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>COD</td>
            </tr>
            <tr>
              <td>9</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>UPI</td>
            </tr>
            <tr>
              <td>10</td>
              <td>12-2-2022</td>
              <td>ORD000123</td>
              <td>Rushikesh Mehtre</td>
              <td>⭐ ⭐ ⭐ ⭐ </td>
              <td>Internet Banking</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
