import React from "react";
import styles from "./Footer.module.css";
import fbImage from "../../assets/socialmedia_Icons/facebook.png";
import instagramImage from "../../assets/socialmedia_Icons/instagram.png";
import twitterImage from "../../assets/socialmedia_Icons/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footerBox1}>
        <div className={styles.footerContent}>
          <h3>
            REGISTER FOR
            <span> FREE</span>
          </h3>
          <p>
            Register with us and win amazing discount point on
            <span> table booking</span>
          </p>
          <Link to="/">Register</Link>
        </div>
      </div>
      <div className={styles.footerBox2}>
        <div className={styles.footermenu}>
          <h3>
            Table<span className={styles.spanText}>Booky</span>
          </h3>
          <div className={styles.footernavList}>
            <ul>
              <li>Service</li>
              <li>AboutUS</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Signout</li>
            </ul>
          </div>
          <div className={styles.socialIcons}>
            <Link to="/">
              <img src={fbImage} alt="facebookImg" />
            </Link>
            <Link to="/">
              <img src={instagramImage} alt="facebookImg" />
            </Link>
            <Link to="/">
              <img src={twitterImage} alt="facebookImg" />
            </Link>
          </div>
          <span>tablebooky.com | All right reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
