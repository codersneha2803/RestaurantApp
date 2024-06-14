import React from "react";
import styles from "./Offer.module.css";

const Offer = (props) => {
  return (
    <>
      <div className={styles.offerBox}>
        {props.offer} <span>{props.offerPlace}</span>
      </div>
    </>
  );
};

export default Offer;
