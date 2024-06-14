import React from "react";
import styles from "./Location.module.css";

const location = (props) => {
  return (
    <>
      <div className={styles.locationBox}>
        <h3>
          {}
          {props.locationDetails}
        </h3>
      </div>
    </>
  );
};

export default location;
