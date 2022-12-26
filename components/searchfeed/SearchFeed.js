import { Button } from "@mui/material";
import React from "react";
import { City } from "../../constants/city";

function SearchFeed() {
  const [city, setCity] = React.useState("");
  const [dest, setDest] = React.useState("");
  const [date, setDate] = React.useState(new Date());
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
  return (
    <div>
      <form style={{ width: "49.12rem" }}>
        <select
          placeholder="Country"
          value={city}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px 10px", marginTop: "2rem" }}
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
          style={{ width: "100%", padding: "10px 10px", marginTop: "2rem" }}
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
          style={{ width: "100%", padding: "10px 10px", marginTop: "2rem" }}
        />
        <input
          type="time"
          id="start"
          name="trip-start"
          value={date}
          onChange={handleDate}
          style={{ width: "100%", padding: "10px 10px", marginTop: "2rem" }}
        />
        <Button
          style={{
            padding: "10px 10px",
            marginTop: "2rem",
            marginLeft: "87%",
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
