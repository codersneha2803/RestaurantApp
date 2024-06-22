import React from "react";
import styles from "./Myprofile.module.css";
import Container from "../../utils/Container";
import Leftwrapper from "../../utils/Leftwrapper";
import { Heading } from "../Home";
import profileImg from "./../../assets/profileImage.png";
import Bookinghistory from "../../components/bookinghistory/Bookinghistory";

const Myprofile = () => {
  return (
    <>
      <Container>
        <Leftwrapper>
          <Heading heading="My Profile " />
          <form className={styles.profileContainer} id="profileForm">
            <div className={styles.profileImgContainer}>
              <img src={profileImg} alt="profileImg" />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email"></input>
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="fullName">Full Nmae</label>
              <input type="text" id="fullName" name="fullName"></input>
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="mobileNo">Contact No</label>
              <input type="tel" id="mobileNo" name="mobileNo"></input>
            </div>
            <div className={styles.formgroup}>
              <button
                type="button"
                id="otpvalidation"
                className={styles.otpButton}
              >
                Get One Time Password
              </button>
            </div>
            <div className={styles.otpContainer}>
              <div className={styles.otpBox}>1</div>
              <div className={styles.otpBox}>1</div>
              <div className={styles.otpBox}>1</div>
              <div className={styles.otpBox}>1</div>
            </div>
            <div className={styles.formBtnContainer}>
              <button
                type="button"
                id="goBackBtn"
                className={styles.goBackButton}
              >
                Go Back
              </button>
              <button
                type="button"
                id="saveChangesBtn"
                className={styles.saveChangesBtn}
              >
                Save Changes
              </button>
            </div>
          </form>
        </Leftwrapper>
        <div className={styles.bookinghistoryWrapper}>
          <Heading heading="History and Recent Bookings"></Heading>
          <Bookinghistory />
        </div>
      </Container>
    </>
  );
};

export default Myprofile;
