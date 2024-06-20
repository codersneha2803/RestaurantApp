import React from "react";
import styles from "../pages/Home.module.css";

const Rightwrapper = ({ children }) => {
  return <div className={styles.rightBox}>{children}</div>;
};

export default Rightwrapper;
