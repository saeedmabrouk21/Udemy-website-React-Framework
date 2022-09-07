import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../../CSSmodules/Home/Courses.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
function Courses(obj) {
  const [trackName, setTrackName] = useState(null);
  useEffect(() => {
    console.log("saeed");
    fetch(`http://localhost:3001/home/?trackName=${obj.jsonTrack}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(trackName);
        setTrackName(json);
        console.log(trackName);
      });
  }, []);
  if (trackName) {
    return (
      <>
        <h2 className={styles.marginrl}>{trackName.header}</h2>
        <p className={styles.marginrl}>{trackName.description}</p>
        <div className={styles.suggestions}>
          {trackName.courses.map((jj) => {
            return <Card json={jj} key={jj.id}></Card>;
          })}
        </div>
      </>
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
}

export default Courses;
