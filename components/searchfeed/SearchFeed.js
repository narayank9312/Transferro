import { Button } from "@mui/material";
import React from "react";
import { City } from "../../constants/city";

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
      <form style={{ width: "100%", background: "#212121" }}>
        <select
          placeholder="Country"
          value={city}
          onChange={handleChange}
          style={{
            padding: "10px 10px",
            marginTop: "2rem",
            width: "95%",
            marginLeft: "10px",
          }}
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
          style={{
            padding: "10px 10px",
            marginTop: "2rem",
            width: "95%",
            marginLeft: "10px",
          }}
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
          style={{
            padding: "10px 10px",
            marginTop: "2rem",
            width: "95%",
            marginLeft: "10px",
          }}
        />
        <input
          type="time"
          id="start"
          name="trip-start"
          value={date}
          onChange={handletime}
          style={{
            padding: "10px 10px",
            marginTop: "2rem",
            width: "95%",
            marginLeft: "10px",
          }}
        />
        <Button
          style={{
            padding: "10px 10px",
            marginTop: "1rem",
            marginLeft: "83%",
            marginBottom: "1rem",
          }}
          variant="contained"
        >
          Contained
        </Button>
      </form>
    </div>
  );
}

export default SearchFeed;
