import React from "react";
import styles from "./NavigationBar.module.css";
import profileImg from "./../../assets/profileImage.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  let navlist = [
    { name: "Home", route: "/" },
    { name: "Table Book", route: "/tablebooking" },
    { name: "Profile", route: "/profile" },
  ];
  return (
    <>
      <div className={styles.navContainer}>
        <h3>
          Welcome to <span className={styles.companyName}>TableBooky</span>
        </h3>
        <nav>
          <ul className={styles.navigation}>
            {navlist.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.route} className={styles.navLink}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

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
