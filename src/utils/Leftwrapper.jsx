import React from "react";
import styles from "../pages/Home.module.css";

const Leftwrapper = ({ children }) => {
  return <div className={styles.leftBox}>{children}</div>;
};

export default Leftwrapper;
