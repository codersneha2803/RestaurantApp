import React from "react";
import styles from "./MenuCard.module.css";

const MenuCard = (props) => {
  return (
    <>
      <div className={styles.menuCard}>
        <div className="cardImg">
          <img src={props.image} alt="cardImage" />
        </div>
        <div className={styles.cardDescription}>
          <h3>{props.title}</h3>
          <p>{props.address}</p>
          <h4>
            {props.startTime} AM - {props.endTime} PM
          </h4>
        </div>
        <div className={styles.cardBtn}>
          {props.orderTime.map((item, index) => {
            return (
              <button key={index} className={styles.Bt1}>
                {item}
              </button>
            );
          })}
          {/* <button className={styles.Bt1}>9:30</button>
          <button className={styles.Bt2}>9:30</button>
          <button className={styles.Bt3}>9:30</button> */}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
