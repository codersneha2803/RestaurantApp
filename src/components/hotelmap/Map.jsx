import React from "react";
import styles from "./Map.module.css";
import Box from "../../utils/Box";
import { Heading } from "../location/Location";

const Map = () => {
  return (
    <>
      <Box>
        <Heading heading="Here to Find" />
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.597208230947!2d-58.12066782519131!3d6.818745093179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dafefe18a318b57%3A0x3ea1ce49e1a631bf!2sThe%20Villagio%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sin!4v1719042818027!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Villagio Restaurant"
            className={styles.map}
          ></iframe>
        </div>
      </Box>
    </>
  );
};

export default Map;
