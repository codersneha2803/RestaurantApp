import React from "react";
import MenuCard from "../components/menucards/MenuCard";
import menuCardData from "../data/menuCardData.js";
import styles from "./Home.module.css";
import Offer from "../components/offer/Offer.jsx";
import Location from "../components/location/Location.jsx";
import OffcialWebsite from "../components/officialwebsites/OfficialWebsite.jsx";
import Leftwrapper from "../utils/Leftwrapper.jsx";
import Rightwrapper from "../utils/Rightwrapper.jsx";
import Container from "../utils/Container.jsx";

//Named export function
export function Heading(props) {
  return (
    <>
      <div className={styles.leftBoxHeading}>
        <h3>{props.heading}</h3>
        <hr />
      </div>
    </>
  );
}

const Home = () => {
  return (
    <>
      <Container>
        <Leftwrapper>
          <Heading heading="Our Restaurant" />
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
        </Leftwrapper>
        <Rightwrapper>
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
        </Rightwrapper>
      </Container>
    </>
  );
};

export default Home;
