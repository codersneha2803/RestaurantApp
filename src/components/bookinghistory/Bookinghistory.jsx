import React from "react";
import styles from "./Bookinghistory.module.css";
import menuImage1 from "../../assets/menuImages/menu1.png";
import calenderIcon from "../../assets/TableBooking_Icon/calender_icon.png";
import peopleIcon from "../../assets/TableBooking_Icon/person_icon.png";
import tableIcon from "../../assets/TableBooking_Icon/tablebar.png";
const Bookinghistory = () => {
  return (
    <>
      <div className={styles.bookingContainer}>
        <div className={styles.bookinghistoryBlock}>
          <div className={styles.bookingImage}>
            <img src={menuImage1} alt="dish" />{" "}
          </div>
          <div className={styles.bookingDetails}>
            <div className={styles.bookingdishName}>
              <span className={styles.menuName}>Sea Grill of Merrick Park</span>
              <span className={styles.bookingstatusTime}>2 hrs ago</span>
            </div>
            <span className={styles.bookingstatus}>Cancelled</span>
            <div className={styles.bookingdatedetails}>
              <img src={calenderIcon} alt="calenderIcon" />
              <span>27th September 1999 | 12:15 PM</span>
            </div>
            <div className={styles.guestDeatils}>
              <div className={styles.guestDeatils1}>
                <img src={peopleIcon} alt="peopleIcon" />
                <span>2 Guests</span>
              </div>
              <div className={styles.guestDeatils1}>
                <img src={tableIcon} alt="peopleIcon" />
                <span className={styles.bookingstatusIn}>Indoor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Bookinghistory;
