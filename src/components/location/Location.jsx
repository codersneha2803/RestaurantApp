import React from "react";
import styles from "./Location.module.css";
import locationImg from "../../assets/Vector.png";
import locationData from "../../data/locationData";
import Box from "../../utils/Box";
export function LocationAddress(props) {
  return (
    <>
      <div className={styles.locationAddress}>
        <div>
          <img src={locationImg} alt="locationImg" />
        </div>
        <div>
          <p>{props.locationDetails}</p>
        </div>
      </div>
    </>
  );
}

//named export components

export function Heading(props) {
  return (
    <>
      <div className={styles.locationBoxHeading}>
        <h3>{props.heading}</h3>
        <hr />
      </div>
    </>
  );
}

const Location = (props) => {
  return (
    <>
      <Box>
        <Heading heading="All Locations" />
        {locationData.map((item, index) => (
          <LocationAddress key={index} locationDetails={item} />
        ))}
      </Box>
    </>
  );
};

export default Location;
