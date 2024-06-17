import React from "react";
import MenuCard from "../components/menucards/MenuCard";
import menuCardData from "../data/menuCardData.js";
import styles from "./Home.module.css";
import Offer from "../components/offer/Offer.jsx";
import Location from "../components/location/Location.jsx";
import OffcialWebsite from "../components/officialwebsites/OfficialWebsite.jsx";
import Banner from "../components/appdownloadbanner/Banner.jsx";
import Footer from "../components/footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.leftBoxHeading}>
            <h3>Our Restaurants</h3>
            <hr />
          </div>
          <div className={styles.leftBoxMenuCard}>
            {menuCardData.map((item, index) => {
              // console.log(item.title);
              return (
                <MenuCard
                  key={index}
                  title={item.title}
                  image={item.image}
                  address={item.address}
                  startTime={item.startTime}
                  endTime={item.endTime}
                  orderTime={item.orderTime}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.offerBox}>
            <Offer
              offer="Automatically save 2% on your bill if you reserve your tble with "
              offerPlace="DINE WITH FLORIDA"
            />
          </div>
          <div className={styles.locationBox}>
            <Location />
          </div>
          <div>
            <OffcialWebsite />
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
