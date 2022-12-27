import { Button } from "@mui/material";
import { width } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { availableVehicle } from "../../constants/avaibality";
import styles from "../../styles/AvailableVehicle.module.css";

function AvailableVehicle() {
  return (
    <div className={styles.parent}>
      {availableVehicle.map((data, index) => (
        <div key={index} className={styles.container}>
          <div style={{ width: "30%" }}>
            <Image src={data.src} alt="Vercel Logo" width={100} height={100} />
          </div>
          <div style={{ width: "10%" }}>
            <div className={styles.vertical_line}></div>
          </div>
          <div
            style={{ width: "60%", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{ fontSize: "16px", fontWeight: "500", color: "#004A7F" }}
            >
              {data.vehicleName}
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "500",
                color: "#004A7F",
                marginBottom: "2px",
              }}
            >
              {data.class}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "2px",
              }}
            >
              <div style={{ flex: "50%" }}>Passenger:: {data.passenger}</div>
              <div style={{ flex: "20%" }}>Luggage :: {data.Luggage}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "2px",
              }}
            >
              <div style={{ color: "#e40000", flex: "50%" }}>
                Fare:: {data.Fare}
              </div>
              <div style={{ flex: "5%", cursour: "pointer" }}>
                <Button variant="contained">
                  <Link href={"/addUser"}>Select</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AvailableVehicle;
