import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { City } from "../../constants/city";
import styles from "../../styles/Searchfeed.module.css";

function SearchFeed() {
  const [city, setCity] = React.useState("");
  const [dest, setDest] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  const handleDest = (event) => {
    console.log(event.target.value);
    setDest(event.target.value);
  };

  const handleDate = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };
  const handletime = (event) => {
    console.log(event.target.value);
    setTime(event.target.value);
  };
  return (
    <div>
      <form className={styles.parent}>
        <div className={styles.details_typography}>Journey Details</div>
        <select
          placeholder="Country"
          value={city}
          onChange={handleChange}
          className={styles.box_styles}
        >
          <option>From</option>
          {City.map((e, key) => {
            return <option key={key}>{e.city}</option>;
          })}
        </select>
        <select
          placeholder="Country"
          value={dest}
          onChange={handleDest}
          className={styles.box_styles}
        >
          <option>To</option>
          {City.map((e, key) => {
            return <option key={key}>{e.city}</option>;
          })}
        </select>
        <input
          type="date"
          id="start"
          name="trip-start"
          value={date}
          onChange={handleDate}
          className={styles.box_styles}
        />
        <input
          type="time"
          id="start"
          name="trip-start"
          value={date}
          onChange={handletime}
          className={styles.box_styles}
        />
        <Button className={styles.button_styles} variant="contained">
          <Link href={"/vehiclelist"}>Search</Link>
        </Button>
      </form>
    </div>
  );
}

export default SearchFeed;
