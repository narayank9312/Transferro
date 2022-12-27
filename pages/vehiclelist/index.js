import React from "react";
import AvailableVehicle from "../../components/availablevehicles/AvailableVehicle";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import styles from "../../styles/Home.module.css";

function Vehicle() {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <AvailableVehicle />
      </div>
      <Footer />
    </div>
  );
}

export default Vehicle;
