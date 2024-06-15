import React from "react";
import styles from "../components/location/Location.module.css";

const Box = ({ children }) => {
  return <div className={styles.locationBox}>{children}</div>;
};

export default Box;
