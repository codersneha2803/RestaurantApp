import React from "react";
import styles from "./NavigationBar.module.css";
import profileImg from "./../../assets/profilepicture.png";

const NavigationBar = () => {
  let navlist = ["Home", "ContactUs", "SignOut"];
  return (
    <>
      <div className={styles.navContainer}>
        <h3>
          Welcome to <span className={styles.companyName}>TableBooky</span>
        </h3>
        <ul className={styles.navigation}>
          {navlist.map((item, index) => {
            return (
              <li key={index}>
                <a className={styles.navLink}>{item}</a>
              </li>
            );
          })}
          {/* <li>
            <a className={styles.navLink}>Home</a>
          </li>
          <li>
            <a>ContactUs</a>
          </li>
          <li>
            <a>SignOut</a>
          </li> */}
        </ul>

        <div className={styles.profile}>
          <h4>Sneha</h4>
          <img
            className={styles.profileImg}
            src={profileImg}
            alt="profilepicture"
          />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
