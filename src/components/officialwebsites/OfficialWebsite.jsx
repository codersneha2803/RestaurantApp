import React from "react";
import Box from "../../utils/Box";
import { Heading } from "../location/Location";
import styles from "./OfficialWebsite.module.css";
import hotelDetails from "../../data/hotelDetails";
import linkImg from "../../assets/link.png";
import { Link } from "react-router-dom";

const OffcialWebsite = () => {
  return (
    <>
      <Box>
        <Heading heading="Official Websites" />
        {hotelDetails.map((item, index) => {
          return (
            <div key={index} className={styles.hotelDetails}>
              <div>
                <img src={item.image} alt="hotelImg" />
              </div>
              <div className={styles.hotelNameWrapper}>
                <div>
                  <span>{item.hotelName}</span>
                </div>
                <div className={styles.siteDetails}>
                  <img src={linkImg} alt="linkImage" />
                  <Link to="/">Go to site </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default OffcialWebsite;
