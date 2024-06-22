import React from "react";
import Container from "../../utils/Container";
import Leftwrapper from "../../utils/Leftwrapper";
import Rightwrapper from "../../utils/Rightwrapper";
import styles from "./TableBooking.module.css";
import { Heading } from "../Home";
import hotelmenuImage from "../../assets/menuImages/menu3.png";
import detailIcon from "../../assets/TableBooking_Icon/menu-hamburger.png";
import clockIcon from "../../assets/TableBooking_Icon/clock_icon.png";
import showmenuIcon from "../../assets/TableBooking_Icon/showmenu.png";
import mappinIcon from "../../assets/mappin_icon.png";
import ScheduleControl from "../../components/scheduleControls/scheduleControl";
import Button from "../../utils/Button/Button";
import Offer from "../../components/offer/Offer";
import OffcialWebsite from "../../components/officialwebsites/OfficialWebsite";
import Map from "../../components/hotelmap/Map";

const TableBooking = () => {
  const slotButton = [
    "10:00",
    "10:45",
    "11:30",
    "11:45",
    "12:00",
    "1:30",
    "2:30",
    "2:45",
  ];
  return (
    <>
      <Container>
        <Leftwrapper>
          <Heading heading="Go Back" />
          <div className={styles.bookingImgContainer}>
            <img src={hotelmenuImage} alt="hotelmenuImg" />
          </div>
          <Heading heading="Villagio Restaurant & Bar" />
          <div className={styles.hotelData}>
            <div className={styles.infoBox}>
              <div className={styles.address}>
                <img src={mappinIcon} alt="mappinIcon" />
                <span>
                  360 San Lorenzo Avenue, Suite 1430 Coral Gables, FL 33146-1865
                </span>
              </div>
              <div className={styles.hours}>
                <img src={clockIcon} alt="clockIcon" />
                <span>10:30 AM - 11:30 PM</span>
              </div>
              <div className={styles.menu}>
                <img src={showmenuIcon} alt="showmenuIcon" />
                <a href="#">Show Menu</a>
              </div>
            </div>
            <div className={styles.hotelDesciption}>
              <div className={styles.description}>
                <img src={detailIcon} alt="detailIcon" />
                <span>
                  Villagio restaurant and bar has one mission: to provide guests
                  with a fine and fresh seafood experience. Featuring seasonal
                  and sustainable seafood that is flown in fresh daily, our
                  chef-driven menu proves that no matter when you’re dining,
                  seafood can be truly exceptional. to provide guests with a
                  fine and fresh seafood experience. Featuring seasonal and to
                  provide guests with a fine and fresh <span>Read More...</span>
                </span>
              </div>
            </div>
          </div>
          <ScheduleControl />
          <div className={styles.timeslotContainer}>
            <h3>Available Time Slots</h3>
            <div className={styles.slotBtnContainer}>
              {slotButton.map((item, index) => (
                <Button key={index} slot={item} />
              ))}
            </div>
          </div>
        </Leftwrapper>
        <Rightwrapper>
          <div className={styles.offerBox}>
            <Offer
              offer="Automatically save 2% on your bill if you reserve your tble with "
              offerPlace="DINE WITH FLORIDA"
            />
          </div>
          <div>
            <Map></Map>
          </div>
          <div>
            <OffcialWebsite />
          </div>
        </Rightwrapper>
      </Container>
    </>
  );
};

export default TableBooking;
