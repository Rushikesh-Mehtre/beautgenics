import React from "react";
import styles from "../styles/Cards.module.scss";
import { RiArrowUpSLine } from "react-icons/ri";

const Cards = () => {
  const cardsData = [
    {
      id: "1",
      title: "New Customers",
      number: "55",
      percent: "25%",
      growth: "up",
    },
    {
      id: "2",
      title: "Total Sales",
      number: "85K",
      percent: "35%",
      growth: "up",
    },
    {
      id: "3",
      title: "Total Revenue",
      number: "125K",
      percent: "15%",
      growth: "up",
    },
    {
      id: "4",
      title: "New referrals",
      number: "12",
      percent: "15%",
      growth: "up",
    },
  ];
  return (
    <div className={styles.cards}>
      {cardsData.map((item) => {
        return (
          <div className={styles.card} key={item.id}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.numbers}>
              {" "}
              <span className={styles.absolute}>{item.number}</span>{" "}
              <span className={styles.percent}>
                {" "}
                <RiArrowUpSLine className={styles.icon} />
                {item.percent}
              </span>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
