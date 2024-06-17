import React from "react";
import styles from "./Banner.module.css";
import leftHandImage from "../../assets/Left_Hand_Holding_Smartphone.png";
import appleIcon from "../../assets/apple.png";
import playstoreIcon from "../../assets/playstore.png";

const Banner = () => {
  return (
    <>
      <div className={styles.bannerBox}>
        <div>
          <img
            className={styles.leftHandImg}
            src={leftHandImage}
            alt="leftHandImg"
          />
        </div>
        <div className={styles.appLink}>
          <h2>
            <span>DOWNLOAD</span> THE APP
          </h2>
          <div className={styles.appLinkBtn}>
            <button>
              <img src={playstoreIcon} alt="Icon" />
              <span>Get it on Android</span>
            </button>
            <button>
              <img src={appleIcon} alt="Icon" />
              <span>Get it on IOS</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
